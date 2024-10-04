import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import { FCollider } from './FCollider'

export interface FRigidBodyOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
  shape?: FShapes
  rigidBodyType?: RAPIER.RigidBodyType
  sensor?: boolean
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
}

/**
 * A 3d rigidBody that can be attached to a component.
 * @category Core
 */
export class FRigidBody {
  /**
   * RAPIER RigidBody
   */
  __RIGIDBODY__: RAPIER.RigidBody
  /**
   * Fibbo Collider
   */
  collider: FCollider
  /**
   * Position Offset for the rigidBody.
   * This is used to adjust the rigidBody position relative to the component.
   */
  __RIGIDBODY_POSITION_OFFSET__: { x: number, y: number, z: number }
  /**
   * Rotation Offset for the rigidBody.
   * This is used to adjust the rigidBody position relative to the component.
   */
  __RIGIDBODY_ROTATION_OFFSET__: { x: number, y: number, z: number }
  /**
   * The component the rigidBody is attached to.
   */
  component: FComponent

  /**
   * Creates a rigidBody for the given component.
   * @param component The component which the collider will be attached to.
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
   * const rigidBody = new FRigidBody({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(component: FComponent, options?: FRigidBodyOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
      shape: FShapes.CUBOID,
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      sensor: false,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
      enabledRotations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape)
      throw new Error('FibboError: initRigidBody requires transforms options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigidBody')

    // Store the options
    this.__RIGIDBODY_POSITION_OFFSET__ = { x: options.position.x, y: options.position.y, z: options.position.z }
    this.__RIGIDBODY_ROTATION_OFFSET__ = { x: options.rotation.x, y: options.rotation.y, z: options.rotation.z }
    this.component = component

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation.x = THREE.MathUtils.degToRad(options.rotationDegree.x)
      options.rotation.y = THREE.MathUtils.degToRad(options.rotationDegree.y)
      options.rotation.z = THREE.MathUtils.degToRad(options.rotationDegree.z)
    }

    // Create a rigidBody description according to the type
    const rigidBodyDesc = new RAPIER.RigidBodyDesc(options.rigidBodyType as RAPIER.RigidBodyType)
    // Interprete the given position as relative to the component's position
    rigidBodyDesc.setTranslation(
      component.transform.position.x + options.position.x,
      component.transform.position.y + options.position.y,
      component.transform.position.z + options.position.z,
    )

    // Interprete the given rotation as relative to the component's rotation
    rigidBodyDesc.setRotation(new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        component.transform.rotation.x + options.rotation.x,
        component.transform.rotation.y + options.rotation.y,
        component.transform.rotation.z + options.rotation.z,
      ),
    ))

    // Create the rigidBody
    this.__RIGIDBODY__ = component.scene.world.createRigidBody(rigidBodyDesc)

    // Lock the translation if needed
    if (options.lockTranslations)
      this.__RIGIDBODY__.lockTranslations(true, true)
    // Lock the rotation if needed
    if (options.lockRotations)
      this.__RIGIDBODY__.lockRotations(true, true)
    // Enable only specific translations if needed
    if (options.enabledTranslations) {
      this.__RIGIDBODY__.setEnabledTranslations(
        options.enabledTranslations.enableX,
        options.enabledTranslations.enableY,
        options.enabledTranslations.enableZ,
        true,
      )
    }
    // Enable only specific rotations if needed
    if (options.enabledRotations) {
      this.__RIGIDBODY__.setEnabledRotations(
        options.enabledRotations.enableX,
        options.enabledRotations.enableY,
        options.enabledRotations.enableZ,
        true,
      )
    }

    // Create the collider
    this.collider = new FCollider(component, {
      ...options,
      rigidBody: this,
    })
  }

  /**
   * Set the position of the rigidBody.
   * @param position The new position of the rigidBody.
   * @param position.x The new x position of the rigidBody.
   * @param position.y The new y position of the rigidBody.
   * @param position.z The new z position of the rigidBody.
   */
  setPosition(position: { x: number, y: number, z: number }) {
    this.__RIGIDBODY__.setTranslation(position, true)
    this.collider.setPosition(position)
  }

  /**
   * Set the rotation of the rigidBody.
   * @param rotation The new rotation of the rigidBody.
   * @param rotation.x The new x rotation of the rigidBody.
   * @param rotation.y The new y rotation of the rigidBody.
   * @param rotation.z The new z rotation of the rigidBody.
   */
  setRotation(rotation: { x: number, y: number, z: number }) {
    this.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z)), true)
    this.collider.setRotation(rotation)
  }

  /**
   * Set the rotation of the rigidBody in degrees.
   * @param rotation The new rotation of the rigidBody in degrees.
   * @param rotation.x The new x rotation of the rigidBody in degrees.
   * @param rotation.y The new y rotation of the rigidBody in degrees.
   * @param rotation.z The new z rotation of the rigidBody in degrees.
   */
  setRotationDegree(rotation: { x: number, y: number, z: number }) {
    this.setRotation({
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    })
  }

  /**
   * Set the scale of the rigidBody.
   * @param scale The new scale of the rigidBody.
   * @param scale.x The new x scale of the rigidBody.
   * @param scale.y The new y scale of the rigidBody.
   * @param scale.z The new z scale of the rigidBody.
   */
  setScale(scale: { x: number, y: number, z: number }) {
    this.collider.setScale(scale)
  }

  /**
   * Update the position of the rigidBody according to its component's position.
   * This takes into account the position offset.
   */
  updatePosition() {
    const newPosition = {
      x: this.component.transform.position.x + this.__RIGIDBODY_POSITION_OFFSET__.x,
      y: this.component.transform.position.y + this.__RIGIDBODY_POSITION_OFFSET__.y,
      z: this.component.transform.position.z + this.__RIGIDBODY_POSITION_OFFSET__.z,
    }
    this.setPosition(newPosition)
    this.collider.setPosition(newPosition)
  }

  /**
   * Update the rotation of the rigidBody according to its component's rotation.
   * This takes into account the rotation offset.
   */
  updateRotation() {
    const newRotation = {
      x: this.component.transform.rotation.x + this.__RIGIDBODY_ROTATION_OFFSET__.x,
      y: this.component.transform.rotation.y + this.__RIGIDBODY_ROTATION_OFFSET__.y,
      z: this.component.transform.rotation.z + this.__RIGIDBODY_ROTATION_OFFSET__.z,
    }
    this.setRotation(newRotation)
    this.collider.setRotation(newRotation)
  }

  /**
   * Update the scale of the rigidBody according to its component's scale.
   * This takes into account the scale offset.
   * As a rigidBody does not have a scale, this will only update the attached collider's scale.
   */
  updateScale() {
    this.collider.updateScale()
  }

  // Setters & getters for transform properties

  get position() {
    return this.__RIGIDBODY__.translation()
  }

  set position(position: { x: number, y: number, z: number }) {
    this.setPosition(position)
  }

  get x() {
    return this.__RIGIDBODY__.translation().x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.y, z: this.z })
  }

  get y() {
    return this.__RIGIDBODY__.translation().y
  }

  set y(y: number) {
    this.setPosition({ x: this.x, y, z: this.z })
  }

  get z() {
    return this.__RIGIDBODY__.translation().z
  }

  set z(z: number) {
    this.setPosition({ x: this.x, y: this.y, z })
  }

  get rotation() {
    const quaternion = this.__RIGIDBODY__.rotation()
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
    return this.collider.scale
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
