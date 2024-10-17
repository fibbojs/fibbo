import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { OnCollisionWithData } from '@fibbojs/core'
import { FComponent as FComponentCore } from '@fibbojs/core'
import type { FController } from '../controllers/FController'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'

export interface FComponentOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
}

/**
 * The base class for all 3D objects in Fibbo.
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

  // The controller attached to the component.
  // Redefined here to be able to use the updated FController type.
  declare controller?: FController

  /**
   * Mesh
   */
  __MESH__?: THREE.Mesh | THREE.Group

  /**
   * Transforms
   */
  transform: FTransform

  // Physics & collision
  /**
   * RigidBody
   */
  declare rigidBody: FRigidBody
  /**
   * Collider
   */
  declare collider: FCollider
  /**
   * Sensor (a collider that doesn't collide with other colliders, but still triggers events)
   */
  declare sensor: FRigidBody

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
    super(scene)
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

    // Create the transform
    this.transform = new FTransform({
      position: options.position,
      scale: options.scale,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })
  }

  frame(_delta: number): void {
    super.frame(_delta)
    // If the rigidBody and mesh exist, update the mesh position and rotation according to the rigidBody
    if (this.rigidBody && this.collider && this.__MESH__) {
      // Translation
      const newMeshPosition = this.rigidBody.__RIGIDBODY__.translation()
      // Remove offset
      newMeshPosition.x -= this.collider.__COLLIDER_POSITION_OFFSET__.x
      newMeshPosition.y -= this.collider.__COLLIDER_POSITION_OFFSET__.y
      newMeshPosition.z -= this.collider.__COLLIDER_POSITION_OFFSET__.z

      // Rotation
      const newMeshRotation = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(
          this.rigidBody.__RIGIDBODY__.rotation().x,
          this.rigidBody.__RIGIDBODY__.rotation().y,
          this.rigidBody.__RIGIDBODY__.rotation().z,
          this.rigidBody.__RIGIDBODY__.rotation().w,
        ),
      )
      // Remove offset
      newMeshRotation.x -= this.collider.__COLLIDER_ROTATION_OFFSET__.x
      newMeshRotation.y -= this.collider.__COLLIDER_ROTATION_OFFSET__.y
      newMeshRotation.z -= this.collider.__COLLIDER_ROTATION_OFFSET__.z

      // Apply the new transforms to the mesh
      this.__MESH__.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.__MESH__.setRotationFromEuler(newMeshRotation)

      // Update position and rotation properties of the component according to the rigidBody
      this.transform.position = newMeshPosition
      this.transform.rotation = newMeshRotation
      // If a sensor exists, update its position and rotation according to the rigidBody
      if (this.sensor) {
        // Apply offset to the sensor
        newMeshPosition.x += this.sensor.collider.__COLLIDER_POSITION_OFFSET__.x
        newMeshPosition.y += this.sensor.collider.__COLLIDER_POSITION_OFFSET__.y
        newMeshPosition.z += this.sensor.collider.__COLLIDER_POSITION_OFFSET__.z
        this.sensor.__RIGIDBODY__.setTranslation(newMeshPosition, true)
        this.sensor.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(newMeshRotation), true)
      }
    }
    // If the collider and mesh exist, update the mesh position and rotation according to the collider
    else if (this.collider && this.__MESH__) {
      // Translation
      const newMeshPosition = this.collider.__COLLIDER__.translation()
      // Remove offset
      newMeshPosition.x -= this.collider.__COLLIDER_POSITION_OFFSET__.x
      newMeshPosition.y -= this.collider.__COLLIDER_POSITION_OFFSET__.y
      newMeshPosition.z -= this.collider.__COLLIDER_POSITION_OFFSET__.z

      // Rotation
      const newMeshRotation = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(
          this.collider.__COLLIDER__.rotation().x,
          this.collider.__COLLIDER__.rotation().y,
          this.collider.__COLLIDER__.rotation().z,
          this.collider.__COLLIDER__.rotation().w,
        ),
      )
      // Remove offset
      newMeshRotation.x -= this.collider.__COLLIDER_ROTATION_OFFSET__.x
      newMeshRotation.y -= this.collider.__COLLIDER_ROTATION_OFFSET__.y
      newMeshRotation.z -= this.collider.__COLLIDER_ROTATION_OFFSET__.z

      // Apply the new transforms to the mesh
      this.__MESH__.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.__MESH__.setRotationFromEuler(newMeshRotation)
      // Update position and rotation properties of the component
      this.transform.position = newMeshPosition
      this.transform.rotation = newMeshRotation
    }
    // If the rigidBody and collider doesn't exist, update the mesh position and rotation according to the default values
    else if (this.__MESH__) {
      this.__MESH__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
      this.__MESH__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
      // If a sensor exists, update its position and rotation according to the default values
      if (this.sensor) {
        this.sensor.__RIGIDBODY__.setTranslation({ x: this.transform.position.x, y: this.transform.position.y, z: this.transform.position.z }, true)
        this.sensor.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)), true)
      }
    }
    // If the mesh still doesn't exist, do nothing
  }

  /**
   * Set the position of the component.
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
    this.transform.position = options
    // If a mesh exists, update its position
    if (this.__MESH__)
      this.__MESH__.position.set(options.x, options.y, options.z)
    // If a rigidBody exists, update its position
    if (this.rigidBody)
      this.rigidBody.updatePosition()
    // Else if a collider exists, update its position
    else if (this.collider)
      this.collider.updatePosition()
    // If a sensor exists, update its position
    if (this.sensor)
      this.sensor.updatePosition()
  }

  /**
   * Set the rotation of the component from radians.
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
    this.transform.rotation = options
    // If a mesh exists, update its rotation
    if (this.__MESH__)
      this.__MESH__.rotation.set(options.x, options.y, options.z)
    // If a rigidBody exists, update its rotation
    if (this.rigidBody)
      this.rigidBody.updateRotation()
    // Else if a collider exists, update its rotation
    else if (this.collider)
      this.collider.updateRotation()
    // If a sensor exists, update its rotation
    if (this.sensor)
      this.sensor.updateRotation()
  }

  /**
   * Set the rotation of the component from degrees.
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
   * Set the scale of the component.
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
    this.transform.scale = options
    // If a mesh exists
    if (this.__MESH__) {
      // If the mesh is a classic polyhedron
      if (this.__MESH__ instanceof THREE.Mesh && (this.__MESH__.geometry instanceof THREE.BoxGeometry || this.__MESH__.geometry instanceof THREE.SphereGeometry)) {
        this.__MESH__.scale.set(options.x, options.y, options.z)
      }
      // We don't know the type of the mesh, probably a custom mesh
      else {
        // I don't really know why the scale should be devided by 2 for custom meshes, but it works
        this.__MESH__.scale.set(options.x / 2, options.y / 2, options.z / 2)
      }
    }
    // If a rigidBody exists, update its scale
    if (this.rigidBody)
      this.rigidBody.updateScale()
    // Else if a collider exists, update its scale
    else if (this.collider)
      this.collider.updateScale()
    // If a sensor exists, update its scale
    if (this.sensor)
      this.sensor.updateScale()
  }

  /**
   * Init a rigidBody for the component.
   * @param options The options for the rigidBody.
   * @param options.position The position of the rigidBody. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the rigidBody. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the rigidBody. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the rigidBody. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBodyType The type of the rigidBody. If not defined, it will default to RAPIER.RigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the rigidBody will not be able to move.
   * @param options.lockRotations If true, the rigidBody will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the rigidBody will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the rigidBody will be able to move on the y-axis.
   * @param options.enabledTranslations.enableZ If true, the rigidBody will be able to move on the z-axis.
   * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
   * @param options.enabledRotations.enableX If true, the rigidBody will be able to rotate on the x-axis.
   * @param options.enabledRotations.enableY If true, the rigidBody will be able to rotate on the y-axis.
   * @param options.enabledRotations.enableZ If true, the rigidBody will be able to rotate on the z-axis.
   * @example
   * ```ts
   * component.initRigidBody({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  initRigidBody(options?: FRigidBodyOptions): void {
    // Initialize the rigidBody
    this.rigidBody = new FRigidBody(this, options)

    // Set the collider
    this.collider = this.rigidBody?.collider
  }

  /**
   * Only init a collider for the component, without a rigidBody.
   * This is useful for static objects.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to 0.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBody The rigidBody to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initCollider({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  initCollider(options?: FColliderOptions): void {
    // Initialize the collider
    this.collider = new FCollider(this, options)
  }

  /**
   * Init a sensor for the component.
   * This is useful for triggerings events when the component collides with other components.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBOID.
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initSensor({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  initSensor(options?: FColliderOptions): void {
    // Initialize the sensor
    this.sensor = new FRigidBody(this, {
      sensor: true,
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      ...options,
    })
  }

  onCollisionWith(classOrObject: any, callback: (data: OnCollisionWithData) => void): () => void {
    // Activate collision events if they are not already activated
    if (this.sensor && this.sensor.collider.__COLLIDER__.activeEvents() === RAPIER.ActiveEvents.NONE) {
      // Set the active events
      this.sensor.collider.__COLLIDER__.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
    }
    // Call the core onCollisionWith method
    return super.onCollisionWith(classOrObject, callback)
  }

  // Setters & getters

  get position(): { x: number, y: number, z: number } {
    return this.transform.position
  }

  set position(position: { x: number, y: number, z: number }) {
    this.setPosition(position)
  }

  get x(): number {
    return this.transform.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.transform.position.y, z: this.transform.position.z })
  }

  get y(): number {
    return this.transform.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.transform.position.x, y, z: this.transform.position.z })
  }

  get z(): number {
    return this.transform.position.z
  }

  set z(z: number) {
    this.setPosition({ x: this.transform.position.x, y: this.transform.position.y, z })
  }

  get rotation(): { x: number, y: number, z: number } {
    return this.transform.rotation
  }

  set rotation(rotation: { x: number, y: number, z: number }) {
    this.setRotation(rotation)
  }

  get rotationX(): number {
    return this.transform.rotation.x
  }

  set rotationX(x: number) {
    this.setRotation({ x, y: this.transform.rotation.y, z: this.transform.rotation.z })
  }

  get rotationY(): number {
    return this.transform.rotation.y
  }

  set rotationY(y: number) {
    this.setRotation({ x: this.transform.rotation.x, y, z: this.transform.rotation.z })
  }

  get rotationZ(): number {
    return this.transform.rotation.z
  }

  set rotationZ(z: number) {
    this.setRotation({ x: this.transform.rotation.x, y: this.transform.rotation.y, z })
  }

  get rotationDegree(): { x: number, y: number, z: number } {
    return {
      x: this.rotationDegreeX,
      y: this.rotationDegreeY,
      z: this.rotationDegreeZ,
    }
  }

  set rotationDegree(rotationDegree: { x: number, y: number, z: number }) {
    this.setRotationDegree(rotationDegree)
  }

  get rotationDegreeX(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.x)
  }

  set rotationDegreeX(x: number) {
    this.setRotationDegree({ x, y: this.rotationDegreeY, z: this.rotationDegreeZ })
  }

  get rotationDegreeY(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.y)
  }

  set rotationDegreeY(y: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y, z: this.rotationDegreeZ })
  }

  get rotationDegreeZ(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.z)
  }

  set rotationDegreeZ(z: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y: this.rotationDegreeY, z })
  }

  get scale(): { x: number, y: number, z: number } {
    return this.transform.scale
  }

  set scale(scale: { x: number, y: number, z: number }) {
    this.setScale(scale)
  }

  get scaleX(): number {
    return this.transform.scale.x
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.transform.scale.y, z: this.transform.scale.z })
  }

  get scaleY(): number {
    return this.transform.scale.y
  }

  set scaleY(y: number) {
    this.setScale({ x: this.transform.scale.x, y, z: this.transform.scale.z })
  }

  get scaleZ(): number {
    return this.transform.scale.z
  }

  set scaleZ(z: number) {
    this.setScale({ x: this.transform.scale.x, y: this.transform.scale.y, z })
  }
}
