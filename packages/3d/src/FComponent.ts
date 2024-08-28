import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FComponent as FComponentCore } from '@fibbojs/core'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'

export interface FComponentOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
}

/**
 * @description The base class for all 3D objects in Fibbo.
 * @category Core
 */
export abstract class FComponent extends FComponentCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true

  /**
   * The scene which the component is in.
   */
  scene: FScene

  /**
   * Mesh
   */
  mesh?: THREE.Mesh | THREE.Group

  // Transform
  /**
   * The position of the component.
   */
  position: THREE.Vector3
  /**
   * The scale of the component.
   */
  scale: THREE.Vector3
  /**
   * The rotation of the component.
   */
  rotation: THREE.Vector3

  // Physics & collision
  /**
   * RigidBody
   */
  rigidBody?: FRigidBody
  /**
   * Collider
   */
  collider?: FCollider
  /**
   * Sensor (a collider that doesn't collide with other colliders, but still triggers events)
   */
  sensor?: FCollider

  /**
   * @param scene The 3D scene where the component will be added.
   * @param options The options for the component.
   * @param options.position The position of the component.
   * @param options.position.x The position on the x-axis.
   * @param options.position.y The position on the y-axis.
   * @param options.position.z The position on the z-axis.
   * @param options.scale The scale of the component.
   * @param options.scale.x The scale on the x-axis.
   * @param options.scale.y The scale on the y-axis.
   * @param options.scale.z The scale on the z-axis.
   * @param options.rotation The rotation of the component.
   * @param options.rotation.x The rotation in radians on the x-axis.
   * @param options.rotation.y The rotation in radians on the y-axis.
   * @param options.rotation.z The rotation in radians on the z-axis.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   * @param options.rotationDegree.x The rotation in degrees on the x-axis.
   * @param options.rotationDegree.y The rotation in degrees on the y-axis.
   * @param options.rotationDegree.z The rotation in degrees on the z-axis.
   */
  constructor(scene: FScene, options?: FComponentOptions) {
    super()
    this.scene = scene

    // Define default values
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 1, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (!options.rotation && !options.rotationDegree))
      throw new Error('FibboError: FComponent requires position, scale and rotation options')

    // Set the transform values
    this.position = new THREE.Vector3(options.position.x, options.position.y, options.position.z)
    this.scale = new THREE.Vector3(options.scale.x, options.scale.y, options.scale.z)
    this.rotation = options.rotationDegree
      ? new THREE.Vector3(
        THREE.MathUtils.degToRad(options.rotationDegree.x),
        THREE.MathUtils.degToRad(options.rotationDegree.y),
        THREE.MathUtils.degToRad(options.rotationDegree.z),
      )
      : options.rotation ? new THREE.Vector3(options.rotation.x, options.rotation.y, options.rotation.z) : new THREE.Vector3(0, 0, 0)
  }

  onFrame(_delta: number): void {
    // If the rigid body and mesh exist, update the mesh position and rotation according to the rigid body
    if (this.rigidBody && this.mesh) {
      // Get the new transforms from the rigid body
      const newMeshPosition = this.rigidBody.rigidBody.translation()
      const newMeshRotation = this.rigidBody.rigidBody.rotation()
      // Apply the new transforms to the mesh
      this.mesh.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.mesh.setRotationFromQuaternion(new THREE.Quaternion(newMeshRotation.x, newMeshRotation.y, newMeshRotation.z, newMeshRotation.w))
      // Update position and rotation properties of the component according to the rigid body
      this.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.rotation.set(newMeshRotation.x, newMeshRotation.y, newMeshRotation.z)
      // If a sensor exists, update its position and rotation according to the rigid body
      if (this.sensor) {
        // Apply offset to the sensor
        newMeshPosition.x += this.sensor.colliderPositionOffset.x
        newMeshPosition.y += this.sensor.colliderPositionOffset.y
        newMeshPosition.z += this.sensor.colliderPositionOffset.z
        this.sensor.collider.setTranslation(newMeshPosition)
        this.sensor.collider.setRotation(new THREE.Quaternion(newMeshRotation.x, newMeshRotation.y, newMeshRotation.z, newMeshRotation.w))
      }
    }
    // If the collider and mesh exist, update the mesh position and rotation according to the collider
    else if (this.collider && this.mesh) {
      // Translation
      const newMeshPosition = this.collider.collider.translation()
      // Remove offset
      newMeshPosition.x -= this.collider.colliderPositionOffset.x
      newMeshPosition.y -= this.collider.colliderPositionOffset.y
      newMeshPosition.z -= this.collider.colliderPositionOffset.z

      // Rotation
      const newMeshRotation = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(
          this.collider.collider.rotation().x,
          this.collider.collider.rotation().y,
          this.collider.collider.rotation().z,
          this.collider.collider.rotation().w,
        ),
      )
      // Remove offset
      newMeshRotation.x -= this.collider.colliderRotationOffset.x
      newMeshRotation.y -= this.collider.colliderRotationOffset.y
      newMeshRotation.z -= this.collider.colliderRotationOffset.z

      // Apply the new transforms to the mesh
      this.mesh.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.mesh.setRotationFromEuler(newMeshRotation)
      // Update position and rotation properties of the component
      this.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.rotation.set(newMeshRotation.x, newMeshRotation.y, newMeshRotation.z)
    }
    // If the rigid body and collider doesn't exist, update the mesh position and rotation according to the default values
    else if (this.mesh) {
      this.mesh.position.set(this.position.x, this.position.y, this.position.z)
      this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z)
    }
    // If the mesh still doesn't exist, do nothing
  }

  /**
   * @description Set the position of the component.
   * @param options The options for the position.
   * @param options.x The position on the x-axis.
   * @param options.y The position on the y-axis.
   * @param options.z The position on the z-axis.
   * @example
   * ```ts
   * component.setPosition({ x: 0, y: 1, z: 0 })
   * ```
   */
  setPosition(options: { x: number, y: number, z: number }): void {
    this.position.set(options.x, options.y, options.z)
    // If a mesh exists, update its position
    if (this.mesh)
      this.mesh.position.set(options.x, options.y, options.z)
    // If a collider exists, update its translation
    if (this.collider)
      this.collider.collider.setTranslation({ x: options.x, y: options.y, z: options.z })
    // If a rigid body exists, update its translation
    if (this.rigidBody)
      this.rigidBody.rigidBody.setTranslation({ x: options.x, y: options.y, z: options.z }, true)
  }

  /**
   * @description Set the scale of the component.
   * @param options The options for the scale.
   * @param options.x The scale on the x-axis.
   * @param options.y The scale on the y-axis.
   * @param options.z The scale on the z-axis.
   * @example
   * ```ts
   * component.setScale({ x: 1, y: 1, z: 1 })
   * ```
   */
  setScale(options: { x: number, y: number, z: number }): void {
    this.scale.set(options.x, options.y, options.z)
    // If a mesh exists
    if (this.mesh) {
      // If the mesh is a classic polyhedron
      if (this.mesh instanceof THREE.Mesh && (this.mesh.geometry instanceof THREE.BoxGeometry || this.mesh.geometry instanceof THREE.SphereGeometry)) {
        this.mesh.scale.set(options.x, options.y, options.z)
      }
      // We don't know the type of the mesh, probably a custom mesh
      else {
        // I don't really know why the scale should be devided by 2 for custom meshes, but it works
        this.mesh.scale.set(options.x / 2, options.y / 2, options.z / 2)
      }
    }
    // If a collider exists
    if (this.collider) {
      // If the collider is a cuboid, update its half extents
      if (this.collider.collider.shape.type === RAPIER.ShapeType.Cuboid) {
        this.collider.collider.setHalfExtents(new RAPIER.Vector3(options.x / 2, options.y / 2, options.z / 2))
      }
      // If the collider is a ball, update its radius
      else if (this.collider.collider.shape.type === RAPIER.ShapeType.Ball) {
        this.collider.collider.setRadius(
          // Get the maximum value of x, y and z
          Math.max(options.x, options.y, options.z) / 2,
        )
      }
    }
  }

  /**
   * @description Set the rotation of the component from radians.
   * @param options The options for the rotation.
   * @param options.x The rotation on the x-axis.
   * @param options.y The rotation on the y-axis.
   * @param options.z The rotation on the z-axis.
   * @example
   * ```ts
   * component.setRotation({ x: 0, y: 0, z: 0 })
   * ```
   */
  setRotation(options: { x: number, y: number, z: number }): void {
    this.rotation.set(options.x, options.y, options.z)
    // If a mesh exists, update its rotation
    if (this.mesh)
      this.mesh.rotation.set(options.x, options.y, options.z)
    // If a collider exists, update its rotation
    if (this.collider)
      this.collider.collider.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(options.x, options.y, options.z)))
    // If a rigid body exists, update its rotation
    if (this.rigidBody)
      this.rigidBody.rigidBody.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(options.x, options.y, options.z)), true)
  }

  /**
   * @description Set the rotation of the component from degrees.
   * @param options The options for the rotation.
   * @param options.x The rotation in degrees on the x-axis.
   * @param options.y The rotation in degrees on the y-axis.
   * @param options.z The rotation in degrees on the z-axis.
   * @example
   * ```ts
   * component.setRotationDegree({ x: 0, y: 90, z: 0 })
   * ```
   */
  setRotationDegree(options: { x: number, y: number, z: number }): void {
    // Convert degrees to radians
    const radRotation = {
      x: THREE.MathUtils.degToRad(options.x),
      y: THREE.MathUtils.degToRad(options.y),
      z: THREE.MathUtils.degToRad(options.z),
    }

    this.setRotation(radRotation)
  }

  /**
   * @description Init a rigid body for the component.
   * @param options The options for the rigid body.
   * @param options.position The position of the rigid body. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the rigid body. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the rigid body. If not defined, it will default to FShapes.CUBE.
   * @param options.rigidBodyType The type of the rigid body. If not defined, it will default to RAPIER.RigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the rigid body will not be able to move.
   * @param options.lockRotations If true, the rigid body will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the rigid body will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the rigid body will be able to move on the y-axis.
   * @param options.enabledTranslations.enableZ If true, the rigid body will be able to move on the z-axis.
   * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
   * @param options.enabledRotations.enableX If true, the rigid body will be able to rotate on the x-axis.
   * @param options.enabledRotations.enableY If true, the rigid body will be able to rotate on the y-axis.
   * @param options.enabledRotations.enableZ If true, the rigid body will be able to rotate on the z-axis.
   * @example
   * ```ts
   * component.initRigidBody({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  initRigidBody(options?: FRigidBodyOptions): void {
    // Initialize the rigid body
    this.rigidBody = new FRigidBody(this, options)

    // Set the collider
    this.collider = this.rigidBody?.collider
  }

  /**
   * @description Only init a collider for the component, without a rigid body.
   * This is useful for static objects.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to 0.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBE.
   * @param options.rigidBody The rigid body to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initCollider({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  initCollider(options?: FColliderOptions): void {
    // Initialize the collider
    this.collider = new FCollider(this, options)
  }

  /**
   * @description Init a sensor for the component.
   * This is useful for triggerings events when the component collides with other components.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBE.
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initSensor({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  initSensor(options?: FColliderOptions): void {
    // Initialize the collider
    this.sensor = new FCollider(this, {
      sensor: true,
      ...options,
    })
  }

  onCollisionWith(classOrObject: any, callback: () => void): void {
    super.onCollisionWith(classOrObject, callback)
    // Activate collision events if they are not already activated
    if (this.sensor && this.sensor.collider.activeEvents() === RAPIER.ActiveEvents.NONE) {
      // Set the active events
      this.sensor.collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
    }
  }

  /**
   * Setters & getters for transform properties
   */
  get x(): number {
    return this.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.position.y, z: this.position.z })
  }

  get y(): number {
    return this.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.position.x, y, z: this.position.z })
  }

  get z(): number {
    return this.position.z
  }

  set z(z: number) {
    this.setPosition({ x: this.position.x, y: this.position.y, z })
  }

  get rotationX(): number {
    return this.rotation.x
  }

  set rotationX(x: number) {
    this.setRotation({ x, y: this.rotation.y, z: this.rotation.z })
  }

  get rotationY(): number {
    return this.rotation.y
  }

  set rotationY(y: number) {
    this.setRotation({ x: this.rotation.x, y, z: this.rotation.z })
  }

  get rotationZ(): number {
    return this.rotation.z
  }

  set rotationZ(z: number) {
    this.setRotation({ x: this.rotation.x, y: this.rotation.y, z })
  }

  get rotationDegreeX(): number {
    return THREE.MathUtils.radToDeg(this.rotation.x)
  }

  set rotationDegreeX(x: number) {
    this.setRotationDegree({ x, y: this.rotationDegreeY, z: this.rotationDegreeZ })
  }

  get rotationDegreeY(): number {
    return THREE.MathUtils.radToDeg(this.rotation.y)
  }

  set rotationDegreeY(y: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y, z: this.rotationDegreeZ })
  }

  get rotationDegreeZ(): number {
    return THREE.MathUtils.radToDeg(this.rotation.z)
  }

  set rotationDegreeZ(z: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y: this.rotationDegreeY, z })
  }

  get scaleX(): number {
    return this.scale.x
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.scale.y, z: this.scale.z })
  }

  get scaleY(): number {
    return this.scale.y
  }

  set scaleY(y: number) {
    this.setScale({ x: this.scale.x, y, z: this.scale.z })
  }

  get scaleZ(): number {
    return this.scale.z
  }

  set scaleZ(z: number) {
    this.setScale({ x: this.scale.x, y: this.scale.y, z })
  }
}
