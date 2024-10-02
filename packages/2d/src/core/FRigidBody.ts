import * as RAPIER from '@dimforge/rapier2d'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import { FCollider } from './FCollider'

export interface FRigidBodyOptions {
  position?: { x: number, y: number }
  scale?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
  shape?: FShapes
  rigidBodyType?: RAPIER.RigidBodyType
  sensor?: boolean
  lockTranslations?: boolean
  lockRotations?: boolean
  enabledTranslations?: {
    enableX: boolean
    enableY: boolean
  }
}

/**
 * A 2d rigidBody that can be attached to a component.
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
   * This is used to adjust the rigidBody position relative to the mesh.
   */
  __RIGIDBODY_POSITION_OFFSET__: { x: number, y: number }
  /**
   * Rotation Offset for the rigidBody.
   * This is used to adjust the rigidBody position relative to the mesh.
   */
  __RIGIDBODY_ROTATION_OFFSET__: number
  /**
   * The component the rigidBody is attached to.
   */
  component: FComponent

  /**
   * Creates a rigidBody for the given component.
   * @param component The component which the rigidBody will be attached to.
   * @param options The options for the rigidBody.
   * @param options.position The position of the rigidBody. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the rigidBody. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the rigidBody. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the rigidBody. If not defined, it will default to FShapes.CUBE.
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
   * const rigidBody = new FRigidBody(component, {
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  rotation: 0,
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  constructor(component: FComponent, options?: FRigidBodyOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: 0,
      rotationDegree: undefined,
      shape: FShapes.RECTANGLE,
      sensor: false,
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
      enabledRotations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || options.rotation === undefined || !options.shape)
      throw new Error('FibboError: initRigidBody requires transforms options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigidBody')

    // Store the options
    this.__RIGIDBODY_POSITION_OFFSET__ = { x: options.position.x, y: options.position.y }
    this.__RIGIDBODY_ROTATION_OFFSET__ = options.rotation
    this.component = component

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      // Convert the degree to radians
      options.rotation = (options.rotationDegree * Math.PI) / 180
    }

    // Create a rigidBody description according to the type
    const rigidBodyDesc = new RAPIER.RigidBodyDesc(options.rigidBodyType as RAPIER.RigidBodyType)
    // Interprete the given position as relative to the component's position
    rigidBodyDesc.setTranslation(
      component.transform.position.x + options.position.x,
      component.transform.position.y + options.position.y,
    )

    // Interprete the given rotation as relative to the component's rotation
    rigidBodyDesc.setRotation(component.transform.rotation + options.rotation)

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
        true,
      )
    }

    // Create the collider attached to the rigidBody
    this.collider = new FCollider(component, {
      ...options,
      rigidBody: this.__RIGIDBODY__,
    })
  }

  /**
   * Set the position of the rigidBody.
   * @param position The new position of the rigidBody.
   * @param position.x The new x position of the rigidBody.
   * @param position.y The new y position of the rigidBody.
   */
  setPosition(position: { x: number, y: number }) {
    this.__RIGIDBODY__.setTranslation(position, true)
    this.collider.setPosition(position)
  }

  /**
   * Set the rotation of the rigidBody.
   * @param rotation The new rotation of the rigidBody.
   */
  setRotation(rotation: number) {
    this.__RIGIDBODY__.setRotation(rotation, true)
    this.collider.setRotation(rotation)
  }

  /**
   * Set the rotation of the rigidBody in degrees.
   * @param rotation The new rotation of the rigidBody in degrees.
   */
  setRotationDegree(rotation: number) {
    const newRotation = (rotation * Math.PI) / 180
    this.__RIGIDBODY__.setRotation(newRotation, true)
    this.collider.setRotation(newRotation)
  }

  /**
   * Set the scale of the rigidBody.
   * @param scale The new scale of the rigidBody.
   * @param scale.x The new x scale of the rigidBody.
   * @param scale.y The new y scale of the rigidBody.
   */
  setScale(scale: { x: number, y: number }) {
    this.collider.scale = scale
  }

  /**
   * Update the position of the rigidBody according to the component's position.
   * This takes into account the position offset.
   */
  updatePosition() {
    const newPosition = this.component.transform.position
    newPosition.x += this.__RIGIDBODY_POSITION_OFFSET__.x
    newPosition.y += this.__RIGIDBODY_POSITION_OFFSET__.y
    this.setPosition(newPosition)
    this.collider.setPosition(newPosition)
  }

  /**
   * Update the rotation of the rigidBody according to the component's rotation.
   * This takes into account the rotation offset.
   */
  updateRotation() {
    const newRotation = this.component.transform.rotation + this.__RIGIDBODY_ROTATION_OFFSET__
    this.setRotation(newRotation)
    this.collider.setRotation(newRotation)
  }

  /**
   * Update the scale of the rigidBody's collider according to the component's scale.
   * This takes into account the scale offset.
   */
  updateScale() {
    this.collider.updateScale()
  }

  // Setters & getters for transform properties

  get position() {
    return this.__RIGIDBODY__.translation()
  }

  set position(position: { x: number, y: number }) {
    this.setPosition(position)
  }

  get x() {
    return this.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.position.y })
  }

  get y() {
    return this.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.position.x, y })
  }

  get rotation() {
    return this.__RIGIDBODY__.rotation()
  }

  set rotation(rotation: number) {
    this.setRotation(rotation)
  }

  get rotationDegree() {
    return (this.rotation * 180) / Math.PI
  }

  set rotationDegree(rotation: number) {
    this.setRotationDegree(rotation)
  }

  get scale() {
    return this.collider.scale
  }

  set scale(scale: { x: number, y: number }) {
    this.setScale(scale)
  }

  get scaleX() {
    return this.collider.scaleX
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.scaleY })
  }

  get scaleY() {
    return this.collider.scaleY
  }

  set scaleY(y: number) {
    this.setScale({ x: this.scaleX, y })
  }
}
