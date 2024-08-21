import * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import * as RAPIER from '@dimforge/rapier3d'
import { FComponent } from '@fibbojs/core'
import type { FScene3d } from './FScene3d'
import { F3dShapes } from './types/F3dShapes'

export interface FComponent3dOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
}

/**
 * @description The base class for all 3D objects in FibboJS.
 * @category Core
 */
export abstract class FComponent3d extends FComponent {
  /**
   * The scene which the component is in.
   */
  scene: FScene3d

  /**
   * Mesh
   */
  mesh?: THREE.Mesh

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
   * RAPIER RigidBody
   */
  rigidBody?: RigidBody
  /**
   * RAPIER Collider
   */
  collider?: Collider

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
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super()
    this.scene = scene

    // Define default values
    const DEFAULT_OPTIONS = {
      position: new THREE.Vector3(0, 1, 0),
      scale: new THREE.Vector3(1, 1, 1),
      rotation: new THREE.Vector3(0, 0, 0),
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (!options.rotation && !options.rotationDegree))
      throw new Error('FComponent3d requires position, scale and rotation options')

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
      const newRigidBodyPosition = this.rigidBody.translation()
      const newRigidBodyRotation = this.rigidBody.rotation()
      this.mesh.position.set(newRigidBodyPosition.x, newRigidBodyPosition.y, newRigidBodyPosition.z)
      this.mesh.setRotationFromQuaternion(new THREE.Quaternion(newRigidBodyRotation.x, newRigidBodyRotation.y, newRigidBodyRotation.z, newRigidBodyRotation.w))
      // Update position and rotation properties of the component according to the rigid body
      this.position.set(newRigidBodyPosition.x, newRigidBodyPosition.y, newRigidBodyPosition.z)
      this.rotation.set(newRigidBodyRotation.x, newRigidBodyRotation.y, newRigidBodyRotation.z)
    }
    // If the collider and mesh exist, update the mesh position and rotation according to the collider
    else if (this.collider && this.mesh) {
      const newColliderPosition = this.collider.translation()
      const newColliderRotation = this.collider.rotation()
      this.mesh.position.set(newColliderPosition.x, newColliderPosition.y, newColliderPosition.z)
      this.mesh.setRotationFromQuaternion(new THREE.Quaternion(newColliderRotation.x, newColliderRotation.y, newColliderRotation.z, newColliderRotation.w))
      // Update position and rotation properties of the component according to the collider
      this.position.set(newColliderPosition.x, newColliderPosition.y, newColliderPosition.z)
      this.rotation.set(newColliderRotation.x, newColliderRotation.y, newColliderRotation.z)
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
   * @param x The position on the x-axis.
   * @param y The position on the y-axis.
   * @param z The position on the z-axis.
   * @example
   * ```ts
   * component.setPosition(0, 1, 0)
   * ```
   */
  setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z)
    // If a mesh exists, update its position
    if (this.mesh)
      this.mesh.position.set(x, y, z)
    // If a collider exists, update its translation
    if (this.collider)
      this.collider.setTranslation({ x, y, z })
    // If a rigid body exists, update its translation
    if (this.rigidBody)
      this.rigidBody.setTranslation({ x, y, z }, true)
  }

  /**
   * @description Set the scale of the component.
   * @param x The scale on the x-axis.
   * @param y The scale on the y-axis.
   * @param z The scale on the z-axis.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale.set(x, y, z)
    // If a mesh exists
    if (this.mesh) {
      // If the mesh is a classic polyhedron
      if (this.mesh.geometry instanceof THREE.BoxGeometry || this.mesh.geometry instanceof THREE.SphereGeometry) {
        this.mesh.scale.set(x, y, z)
      }
      // We don't know the type of the mesh, probably a custom mesh
      else {
        // I don't really know why the scale should be devided by 2 for custom meshes, but it works
        this.mesh.scale.set(x / 2, y / 2, z / 2)
      }
    }
    // If a collider exists
    if (this.collider) {
      // If the collider is a cuboid, update its half extents
      if (this.collider.shape.type === RAPIER.ShapeType.Cuboid) {
        this.collider.setHalfExtents(new RAPIER.Vector3(x / 2, y / 2, z / 2))
      }
      // If the collider is a ball, update its radius
      else if (this.collider.shape.type === RAPIER.ShapeType.Ball) {
        this.collider.setRadius(
          // Get the maximum value of x, y and z
          Math.max(x, y, z) / 2,
        )
      }
    }
  }

  /**
   * @description Set the rotation of the component from radians.
   * @param x The rotation in radians on the x-axis.
   * @param y The rotation in radians on the y-axis.
   * @param z The rotation in radians on the z-axis.
   * @example
   * ```ts
   * component.setRotation(0, Math.PI / 2, 0)
   * ```
   */
  setRotation(x: number, y: number, z: number): void {
    this.rotation.set(x, y, z)
    // If a mesh exists, update its rotation
    if (this.mesh)
      this.mesh.rotation.set(x, y, z)
    // If a collider exists, update its rotation
    if (this.collider)
      this.collider.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z)))
    // If a rigid body exists, update its rotation
    if (this.rigidBody)
      this.rigidBody.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z)), true)
  }

  /**
   * @description Set the rotation of the component from degrees.
   * @param x The rotation in degrees on the x-axis.
   * @param y The rotation in degrees on the y-axis.
   * @param z The rotation in degrees on the z-axis.
   * @example
   * ```ts
   * component.setRotationDegree(0, 90, 0)
   * ```
   */
  setRotationDegree(
    x: number,
    y: number,
    z: number,
  ): void {
    // Convert degrees to radians
    const radRotation = {
      x: THREE.MathUtils.degToRad(x),
      y: THREE.MathUtils.degToRad(y),
      z: THREE.MathUtils.degToRad(z),
    }

    this.setRotation(radRotation.x, radRotation.y, radRotation.z)
  }

  /**
   * @description Init a rigid body for the component.
   * @param options The options for the rigid body.
   * @param options.position The position of the rigid body. If not defined, it will use the default position of the FComponent3d.
   * @param options.scale The scale of the rigid body. If not defined, it will use the default scale of the FComponent3d.
   * @param options.rotation The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent3d.
   * @param options.shape The shape of the rigid body. If not defined, it will default to F3dShapes.CUBE.
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
   *  position: new THREE.Vector3(0, 1, 0),
   *  scale: new THREE.Vector3(1, 1, 1),
   *  rotation: new THREE.Vector3(0, 0, 0),
   *  shape: F3dShapes.CUBE
   * })
   * ```
   */
  initRigidBody(options?: {
    position?: THREE.Vector3
    scale?: THREE.Vector3
    rotation?: THREE.Vector3
    shape?: F3dShapes
    rigidBodyType?: RAPIER.RigidBodyType
    lockTranslations?: boolean
    lockRotations?: boolean
    enabledTranslations?: {
      enableX: boolean
      enableY: boolean
      enableZ: boolean
    }
    enabledRotations?: {
      enableX: boolean
      enableY: boolean
      enableZ: boolean
    }
  }): void {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: new THREE.Vector3(this.position.x, this.position.y, this.position.z),
      scale: new THREE.Vector3(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2),
      rotation: new THREE.Vector3(this.rotation.x, this.rotation.y, this.rotation.z),
      shape: F3dShapes.CUBE,
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
      enabledRotations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape)
      throw new Error('initRigidBody requires position, scale, rotation, shape and rigidBodyType options')

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    // Create a rigid body description according to the type
    const rigidBodyDesc = new RAPIER.RigidBodyDesc(options.rigidBodyType as RAPIER.RigidBodyType)
    // Set translation and rotation for the rigid body
    rigidBodyDesc.setTranslation(options.position.x, options.position.y, options.position.z)
    rigidBodyDesc.setRotation(
      // Create quaternion from Euler angles
      new THREE.Quaternion().setFromEuler(new THREE.Euler(options.rotation.x, options.rotation.y, options.rotation.z)),
    )

    this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

    // Lock the translation if needed
    if (options.lockTranslations)
      this.rigidBody.lockTranslations(true, true)
    // Lock the rotation if needed
    if (options.lockRotations)
      this.rigidBody.lockRotations(true, true)
    // Enable only specific translations if needed
    if (options.enabledTranslations) {
      this.rigidBody.setEnabledTranslations(
        options.enabledTranslations.enableX,
        options.enabledTranslations.enableY,
        options.enabledTranslations.enableZ,
        true,
      )
    }
    // Enable only specific rotations if needed
    if (options.enabledRotations) {
      this.rigidBody.setEnabledRotations(
        options.enabledRotations.enableX,
        options.enabledRotations.enableY,
        options.enabledRotations.enableZ,
        true,
      )
    }

    // Create a collider description attached to the rigid body, according to the shape given
    let colliderDesc
    switch (options.shape) {
      case F3dShapes.CUBE:
        colliderDesc = RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y, options.scale.z)
        break
      case F3dShapes.SPHERE:
        colliderDesc = RAPIER.ColliderDesc.ball(options.scale.x)
        break
      case F3dShapes.CAPSULE:
        colliderDesc = RAPIER.ColliderDesc.capsule(options.scale.x, options.scale.y)
        break
      case F3dShapes.MESH:
        colliderDesc = RAPIER.ColliderDesc.trimesh(
          this.mesh?.geometry.attributes.position.array as Float32Array,
          this.mesh?.geometry.index?.array as Uint32Array,
        )
        break
      default:
        throw new Error(`Shape not supported : ${options.shape}`)
    }
    // Create the collider
    this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
  }

  /**
   * @description Only init a collider for the component, without a rigid body.
   * This is useful for static objects.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent3d.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent3d.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.
   * @param options.shape The shape of the collider. If not defined, it will default to F3dShapes.CUBE.
   * @example
   * ```ts
   * component.initCollider({
   *  position: new THREE.Vector3(0, 1, 0),
   *  scale: new THREE.Vector3(1, 1, 1),
   *  rotation: new THREE.Vector3(0, 0, 0),
   *  shape: F3dShapes.CUBE
   * })
   * ```
   */
  initCollider(options?: {
    position?: THREE.Vector3
    scale?: THREE.Vector3
    rotation?: THREE.Vector3
    shape: F3dShapes
  }): void {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: new THREE.Vector3(this.position.x, this.position.y, this.position.z),
      scale: new THREE.Vector3(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2),
      rotation: new THREE.Vector3(this.rotation.x, this.rotation.y, this.rotation.z),
      shape: F3dShapes.CUBE,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape)
      throw new Error('initCollider requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    // Create a collider description
    const colliderDesc = options.shape === F3dShapes.CUBE
      ? RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y, options.scale.z)
      : RAPIER.ColliderDesc.ball(options.scale.x)
    colliderDesc.setTranslation(options.position.x, options.position.y, options.position.z)
    colliderDesc.setRotation(
      // Create quaternion from Euler angles
      new THREE.Quaternion().setFromEuler(new THREE.Euler(options.rotation.x, options.rotation.y, options.rotation.z)),
    )
    // Create the collider
    this.collider = this.scene.world.createCollider(colliderDesc)
  }

  onCollisionWith(classOrObject: any, callback: () => void): void {
    super.onCollisionWith(classOrObject, callback)
    // Activate collision events if they are not already activated
    if (this.collider && this.collider.activeEvents() === RAPIER.ActiveEvents.NONE) {
      // Set the active events
      this.collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
    }
  }

  /**
   * Setters & getters for transform properties
   */
  get x(): number {
    return this.position.x
  }

  set x(x: number) {
    this.setPosition(x, this.position.y, this.position.z)
  }

  get y(): number {
    return this.position.y
  }

  set y(y: number) {
    this.setPosition(this.position.x, y, this.position.z)
  }

  get z(): number {
    return this.position.z
  }

  set z(z: number) {
    this.setPosition(this.position.x, this.position.y, z)
  }

  get rotationX(): number {
    return this.rotation.x
  }

  set rotationX(x: number) {
    this.setRotation(x, this.rotation.y, this.rotation.z)
  }

  get rotationY(): number {
    return this.rotation.y
  }

  set rotationY(y: number) {
    this.setRotation(this.rotation.x, y, this.rotation.z)
  }

  get rotationZ(): number {
    return this.rotation.z
  }

  set rotationZ(z: number) {
    this.setRotation(this.rotation.x, this.rotation.y, z)
  }

  get rotationDegreeX(): number {
    return THREE.MathUtils.radToDeg(this.rotation.x)
  }

  set rotationDegreeX(x: number) {
    this.setRotationDegree(x, this.rotationDegreeY, this.rotationDegreeZ)
  }

  get rotationDegreeY(): number {
    return THREE.MathUtils.radToDeg(this.rotation.y)
  }

  set rotationDegreeY(y: number) {
    this.setRotationDegree(this.rotationDegreeX, y, this.rotationDegreeZ)
  }

  get rotationDegreeZ(): number {
    return THREE.MathUtils.radToDeg(this.rotation.z)
  }

  set rotationDegreeZ(z: number) {
    this.setRotationDegree(this.rotationDegreeX, this.rotationDegreeY, z)
  }

  get scaleX(): number {
    return this.scale.x
  }

  set scaleX(x: number) {
    this.setScale(x, this.scale.y, this.scale.z)
  }

  get scaleY(): number {
    return this.scale.y
  }

  set scaleY(y: number) {
    this.setScale(this.scale.x, y, this.scale.z)
  }

  get scaleZ(): number {
    return this.scale.z
  }

  set scaleZ(z: number) {
    this.setScale(this.scale.x, this.scale.y, z)
  }
}
