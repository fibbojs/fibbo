import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import type { FRigidBody } from './FRigidBody'

export interface FColliderOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
  shape?: FShapes
  rigidBody?: FRigidBody
  sensor?: boolean
}

/**
 * A 3d collider that can be attached to a component.
 * @category Core
 */
export class FCollider {
  /**
   * RAPIER Collider
   */
  __COLLIDER__: RAPIER.Collider
  /**
   * Position Offset for the collider.
   * This is used to adjust the collider position relative to the component.
   */
  __COLLIDER_POSITION_OFFSET__: { x: number, y: number, z: number }
  /**
   * Rotation Offset for the collider.
   * This is used to adjust the collider position relative to the component.
   */
  __COLLIDER_ROTATION_OFFSET__: { x: number, y: number, z: number }
  /**
   * Scale Offset for the collider.
   * This is used to adjust the collider scale relative to the component.
   */
  __COLLIDER_SCALE_OFFSET__: { x: number, y: number, z: number }
  /**
   * The component the collider is attached to.
   */
  component: FComponent
  /**
   * The shape of the collider.
   */
  shape: FShapes

  /**
   * Creates a collider for a given component.
   * @param component The component which the collider will be attached to.
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
   * const collider = new FCollider(component, {
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(component: FComponent, options?: FColliderOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
      shape: FShapes.CUBOID,
      rigidBody: undefined,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: initCollider requires transforms options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a collider')

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation = {
        x: THREE.MathUtils.degToRad(options.rotationDegree.x),
        y: THREE.MathUtils.degToRad(options.rotationDegree.y),
        z: THREE.MathUtils.degToRad(options.rotationDegree.z),
      }
    }

    // Store the options
    this.__COLLIDER_POSITION_OFFSET__ = { x: options.position.x, y: options.position.y, z: options.position.z }
    this.__COLLIDER_ROTATION_OFFSET__ = { x: options.rotation.x, y: options.rotation.y, z: options.rotation.z }
    this.__COLLIDER_SCALE_OFFSET__ = { x: options.scale.x, y: options.scale.y, z: options.scale.z }
    this.component = component
    this.shape = options.shape

    // Devide the scale by 2 for the collider (RAPIER uses half-extents)
    // Also interpete the scale as relative to the component's scale
    options.scale = {
      x: component.transform.scale.x / 2 * options.scale.x,
      y: component.transform.scale.y / 2 * options.scale.y,
      z: component.transform.scale.z / 2 * options.scale.z,
    }

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case FShapes.CUBOID:
        colliderDesc = RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y, options.scale.z)
        break
      case FShapes.SPHERE:
        colliderDesc = RAPIER.ColliderDesc.ball(options.scale.x)
        break
      case FShapes.CAPSULE:
        colliderDesc = RAPIER.ColliderDesc.capsule(options.scale.y / 2, options.scale.x / 2)
        break
      case FShapes.MESH:
      // If component.__MESH__ isn't defined, throw an error
      {
        if (!component.__MESH__)
          throw new Error('FibboError: Mesh collider can only be created from a THREE.Mesh')
        // Flag to check if a THREE.Mesh was found
        let found = false
        // Traverse the mesh tree until we find a THREE.Mesh
        component.__MESH__.traverse((child) => {
          if (!found && child instanceof THREE.Mesh) {
            colliderDesc = RAPIER.ColliderDesc.trimesh(
              child.geometry.attributes.position.array as Float32Array,
              child.geometry.index?.array as Uint32Array,
            )
            found = true
          }
        })
        // If no THREE.Mesh was found, throw an error
        if (!found)
          throw new Error('FibboError: Mesh collider can only be created if a THREE.Mesh is found in the component')
        break
      }
      default:
        throw new Error(`FibboError: shape not supported : ${options.shape}`)
    }
    // Verify the collider description was created
    if (!colliderDesc)
      throw new Error('FibboError: Collider description could not be created')

    // If no rigidbody given, the collider is free : set translation and rotation for the collider
    if (options.rigidBody === undefined) {
      // Interprete the given position as relative to the component's position
      const finalPosition = new THREE.Vector3(
        component.transform.position.x + options.position.x,
        component.transform.position.y + options.position.y,
        component.transform.position.z + options.position.z,
      )
      colliderDesc.setTranslation(finalPosition.x, finalPosition.y, finalPosition.z)

      // Interprete the given rotation as relative to the component's rotation
      const finalRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          component.transform.rotation.x + options.rotation.x,
          component.transform.rotation.y + options.rotation.y,
          component.transform.rotation.z + options.rotation.z,
        ),
      )
      colliderDesc.setRotation(finalRotation)
    }
    // Set the sensor flag
    if (options.sensor) {
      colliderDesc.setSensor(true)
      colliderDesc.setActiveCollisionTypes(RAPIER.ActiveCollisionTypes.ALL)
    }

    // Create the collider
    this.__COLLIDER__ = component.scene.world.createCollider(colliderDesc, options.rigidBody?.__RIGIDBODY__)
  }

  /**
   * Set the position of the collider.
   * @param position The new position of the collider.
   * @param position.x The new x position of the collider.
   * @param position.y The new y position of the collider.
   * @param position.z The new z position of the collider.
   */
  setPosition(position: { x: number, y: number, z: number }) {
    this.__COLLIDER__.setTranslation(position)
  }

  /**
   * Set the rotation of the collider.
   * @param rotation The new rotation of the collider.
   * @param rotation.x The new x rotation of the collider.
   * @param rotation.y The new y rotation of the collider.
   * @param rotation.z The new z rotation of the collider.
   */
  setRotation(rotation: { x: number, y: number, z: number }) {
    this.__COLLIDER__.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z)))
  }

  /**
   * Set the rotation of the collider in degrees.
   * @param rotation The new rotation of the collider in degrees.
   * @param rotation.x The new x rotation of the collider in degrees.
   * @param rotation.y The new y rotation of the collider in degrees.
   * @param rotation.z The new z rotation of the collider in degrees.
   */
  setRotationDegree(rotation: { x: number, y: number, z: number }) {
    this.setRotation({
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    })
  }

  /**
   * Set the scale of the collider.
   * @param scale The new scale of the collider.
   * @param scale.x The new x scale of the collider.
   * @param scale.y The new y scale of the collider.
   * @param scale.z The new z scale of the collider.
   */
  setScale(scale: { x: number, y: number, z: number }) {
    // If the collider is a cuboid, update its half extents
    if (this.__COLLIDER__.shape instanceof RAPIER.Cuboid) {
      this.__COLLIDER__.setShape(new RAPIER.Cuboid(scale.x / 2, scale.y / 2, scale.z / 2))
    }
    // If the collider is a ball, update its radius
    else if (this.__COLLIDER__.shape instanceof RAPIER.Ball) {
      this.__COLLIDER__.setShape(new RAPIER.Ball(Math.max(scale.x, scale.y, scale.z) / 2))
    }
  }

  /**
   * Update the position of the collider according to its component's position.
   * This takes into account the position offset.
   */
  updatePosition() {
    this.setPosition({
      x: this.component.transform.position.x + this.__COLLIDER_POSITION_OFFSET__.x,
      y: this.component.transform.position.y + this.__COLLIDER_POSITION_OFFSET__.y,
      z: this.component.transform.position.z + this.__COLLIDER_POSITION_OFFSET__.z,
    })
  }

  /**
   * Update the rotation of the collider according to its component's rotation.
   * This takes into account the rotation offset.
   */
  updateRotation() {
    this.setRotation({
      x: this.component.transform.rotation.x + this.__COLLIDER_ROTATION_OFFSET__.x,
      y: this.component.transform.rotation.y + this.__COLLIDER_ROTATION_OFFSET__.y,
      z: this.component.transform.rotation.z + this.__COLLIDER_ROTATION_OFFSET__.z,
    })
  }

  /**
   * Update the scale of the collider according to its component's scale.
   * This takes into account the scale offset.
   */
  updateScale() {
    this.setScale({
      x: this.component.transform.scale.x * this.__COLLIDER_SCALE_OFFSET__.x,
      y: this.component.transform.scale.y * this.__COLLIDER_SCALE_OFFSET__.y,
      z: this.component.transform.scale.z * this.__COLLIDER_SCALE_OFFSET__.z,
    })
  }

  // Setters & getters for transform properties

  get position() {
    return this.__COLLIDER__.translation()
  }

  set position(position: { x: number, y: number, z: number }) {
    this.setPosition(position)
  }

  get x() {
    return this.__COLLIDER__.translation().x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.y, z: this.z })
  }

  get y() {
    return this.__COLLIDER__.translation().y
  }

  set y(y: number) {
    this.setPosition({ x: this.x, y, z: this.z })
  }

  get z() {
    return this.__COLLIDER__.translation().z
  }

  set z(z: number) {
    this.setPosition({ x: this.x, y: this.y, z })
  }

  get rotation() {
    const quaternion = this.__COLLIDER__.rotation()
    const euler = new THREE.Euler().setFromQuaternion(
      new THREE.Quaternion(
        quaternion.x,
        quaternion.y,
        quaternion.z,
        quaternion.w,
      ),
    )
    return { x: euler.x, y: euler.y, z: euler.z }
  }

  set rotation(rotation: { x: number, y: number, z: number }) {
    this.setRotation(rotation)
  }

  get rotationX() {
    return this.rotation.x
  }

  set rotationX(x: number) {
    this.setRotation({ x, y: this.rotation.y, z: this.rotation.z })
  }

  get rotationY() {
    return this.rotation.y
  }

  set rotationY(y: number) {
    this.setRotation({ x: this.rotation.x, y, z: this.rotation.z })
  }

  get rotationZ() {
    return this.rotation.z
  }

  set rotationZ(z: number) {
    this.setRotation({ x: this.rotation.x, y: this.rotation.y, z })
  }

  get rotationDegree() {
    const euler = this.rotation
    return { x: THREE.MathUtils.radToDeg(euler.x), y: THREE.MathUtils.radToDeg(euler.y), z: THREE.MathUtils.radToDeg(euler.z) }
  }

  set rotationDegree(rotation: { x: number, y: number, z: number }) {
    this.setRotationDegree(rotation)
  }

  get rotationDegreeX() {
    return this.rotationDegree.x
  }

  set rotationDegreeX(x: number) {
    this.setRotationDegree({ x, y: this.rotationDegree.y, z: this.rotationDegree.z })
  }

  get rotationDegreeY() {
    return this.rotationDegree.y
  }

  set rotationDegreeY(y: number) {
    this.setRotationDegree({ x: this.rotationDegree.x, y, z: this.rotationDegree.z })
  }

  get rotationDegreeZ() {
    return this.rotationDegree.z
  }

  set rotationDegreeZ(z: number) {
    this.setRotationDegree({ x: this.rotationDegree.x, y: this.rotationDegree.y, z })
  }

  get scale() {
    if (this.__COLLIDER__.shape instanceof RAPIER.Cuboid) {
      return {
        x: this.__COLLIDER__.shape.halfExtents.x * 2,
        y: this.__COLLIDER__.shape.halfExtents.y * 2,
        z: this.__COLLIDER__.shape.halfExtents.z * 2,
      }
    }
    else if (this.__COLLIDER__.shape instanceof RAPIER.Ball) {
      return {
        x: this.__COLLIDER__.shape.radius * 2,
        y: this.__COLLIDER__.shape.radius * 2,
        z: this.__COLLIDER__.shape.radius * 2,
      }
    }
    else {
      return { x: 0, y: 0, z: 0 }
    }
  }

  set scale(scale: { x: number, y: number, z: number }) {
    this.setScale(scale)
  }

  get scaleX() {
    return this.scale.x
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.scale.y, z: this.scale.z })
  }

  get scaleY() {
    return this.scale.y
  }

  set scaleY(y: number) {
    this.setScale({ x: this.scale.x, y, z: this.scale.z })
  }

  get scaleZ() {
    return this.scale.z
  }

  set scaleZ(z: number) {
    this.setScale({ x: this.scale.x, y: this.scale.y, z })
  }
}
