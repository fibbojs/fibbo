import * as RAPIER from '@dimforge/rapier2d'
import type { FVector2 } from '../types/FVector2'
import { FRigidBodyType } from '../types/FRigidBodyType'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import { FCollider } from './FCollider'
import { FTransform } from './FTransform'
import type { FScene } from './FScene'

export interface FRigidBodyOptions {
  position?: FVector2
  rotation?: number
  rotationDegree?: number
  scale?: FVector2
  positionOffset?: FVector2
  rotationOffset?: number
  rotationDegreeOffset?: number
  scaleOffset?: FVector2
  shape?: FShapes
  rigidBodyType?: FRigidBodyType
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
   * The component the rigidBody is attached to.
   */
  __COMPONENT__?: FComponent
  /**
   * The transform of the rigidBody.
   */
  transform: FTransform
  /**
   * The transform offset of the rigidBody.
   */
  offset: FTransform

  /**
   * Creates a rigidBody for the given component.
   * @param scene The scene the rigidBody belongs to.
   * @param options The options for the rigidBody.
   * @param options.position The position of the rigidBody. Default is { x: 0, y: 0 }.
   * @param options.rotation The rotation of the rigidBody in radians. Default is 0.
   * @param options.scale The scale of the rigidBody. Default is { x: 1, y: 1 }.
   * @param options.positionOffset The position offset of the rigidBody. Only used if the rigidBody is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.rotationOffset The rotation offset of the rigidBody in radians. Only used if the rigidBody is attached to a component. Default is 0.
   * @param options.scaleOffset The scale offset of the rigidBody. Only used if the rigidBody is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.shape The shape of the collider that will be generated from the rigidBody. If not defined, it will default to 'CUBOID'.
   * @param options.rigidBodyType The type of the rigidBody. If not defined, it will default to FRigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the rigidBody will not be able to move.
   * @param options.lockRotations If true, the rigidBody will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the rigidBody will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the rigidBody will be able to move on the y-axis.
   * @example
   * ```ts
   * const rigidBody = new FRigidBody(scene, {
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  shape: 'CUBOID'
   * })
   * ```
   */
  constructor(scene: FScene, options?: FRigidBodyOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
      rotationOffset: 0,
      shape: FShapes.RECTANGLE,
      rigidBodyType: FRigidBodyType.DYNAMIC,
      sensor: false,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
      enabledRotations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }

    // Validate options
    if (!options.position || (options.rotation === undefined && options.rotationDegree === undefined) || !options.scale || !options.shape)
      throw new Error('FibboError: options missing in FRigidBody constructor')

    // Check if the world exists
    if (!scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigidBody')

    // Configure transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
      scale: options.scale,
    })
    this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__(true))
    this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__(true))
    this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__(true))
    this.offset = new FTransform({
      position: options.positionOffset ? options.positionOffset : { x: 0, y: 0 },
      rotation: options.rotationOffset,
      rotationDegree: options.rotationDegreeOffset,
      scale: options.scaleOffset ? options.scaleOffset : { x: 0, y: 0 },
    })

    // Create a rigidBody description according to the type
    const rigidBodyDesc = new RAPIER.RigidBodyDesc(
      options.rigidBodyType === FRigidBodyType.DYNAMIC
        ? RAPIER.RigidBodyType.Dynamic
        : options.rigidBodyType === FRigidBodyType.KINEMATIC_POSITION_BASED
          ? RAPIER.RigidBodyType.KinematicPositionBased
          : options.rigidBodyType === FRigidBodyType.KINEMATIC_VELOCITY_BASED
            ? RAPIER.RigidBodyType.KinematicVelocityBased
            : RAPIER.RigidBodyType.Fixed,
    )

    // Interprete the given position as relative to the component's position
    rigidBodyDesc.setTranslation(
      this.transform.position.x,
      this.transform.position.y,
    )

    // Interprete the given rotation as relative to the component's rotation
    rigidBodyDesc.setRotation(this.transform.rotation)

    // Create the rigidBody
    this.__RIGIDBODY__ = scene.world.createRigidBody(rigidBodyDesc)

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

    // Create the collider
    this.collider = new FCollider(scene, {
      ...options,
      rigidBody: this,
    })

    // Add the rigidBody to the scene
    scene.addRigidBody(this)
  }

  frame(_delta: number): void {
    // As the rigidBody should have moved, update the transform to sync with the rigidBody
    this.transform.__POSITION__ = this.__RIGIDBODY__.translation()
    this.transform.__ROTATION__ = this.__RIGIDBODY__.rotation()
    // Propagate the position and rotation update if the rigidBody is attached to a component
    if (this.component) {
      // Propagate the position update
      this.component.__UPDATE_POSITION__()
      this.component.sensor?.__UPDATE_POSITION__()
      // Propagate the rotation update
      this.component.__UPDATE_ROTATION__()
      this.component.sensor?.__UPDATE_ROTATION__()
    }
  }

  /**
   * Set the linear velocity of the rigidBody.
   * @param velocity The new linear velocity of the rigidBody.
   */
  setLinvel(velocity: FVector2): void {
    this.__RIGIDBODY__.setLinvel(new RAPIER.Vector2(velocity.x, velocity.y), true)
  }

  /**
   * Set the angular velocity of the rigidBody.
   * @param velocity The new angular velocity of the rigidBody.
   */
  setAngvel(velocity: number): void {
    this.__RIGIDBODY__.setAngvel(velocity, true)
  }

  /**
   * Update the position of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the position update.
   * This means the new position will be the position of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If the rigidBody is the initiator
    if (initiator) {
      // Update the rigidBody position
      this.__SET_POSITION__(this.transform.position)
      if (this.component) {
        // Propagate the position update
        this.component.__UPDATE_POSITION__()
        this.component.sensor?.__UPDATE_POSITION__()
      }
    }
    // Else, it was propagated to the rigidBody, so move the rigidBody to the new position with the offset
    else if (this.component) {
      const newPosition = {
        x: this.component.transform.position.x + this.offset.position.x,
        y: this.component.transform.position.y + this.offset.position.y,
      }
      // Update the rigidBody position
      this.__SET_POSITION__(newPosition)
    }
  }

  /**
   * Update the rotation of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the rotation update.
   * This means the new rotation will be the rotation of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If the rigidBody is the initiator
    if (initiator) {
      // Update the rigidBody rotation
      this.__SET_ROTATION__(this.transform.rotation)
      if (this.component) {
        // Propagate the rotation update
        this.component.__UPDATE_ROTATION__()
        this.component.sensor?.__UPDATE_ROTATION__()
      }
    }
    // Else, it was propagated to the rigidBody, so rotate the rigidBody to the new rotation with the offset
    else if (this.component) {
      const newRotation = this.component.transform.rotation + this.offset.rotation
      // Update the rigidBody rotation
      this.__SET_ROTATION__(newRotation)
    }
  }

  /**
   * Update the scale of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the scale update.
   * This means the new scale will be the scale of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the rigidBody is the initiator
    if (initiator) {
      // Update the rigidBody scale
      this.__SET_SCALE__(this.transform.scale)
      if (this.component) {
        // Propagate the scale update
        this.component.__UPDATE_SCALE__()
        this.component.sensor?.__UPDATE_SCALE__()
      }
    }
    // Else, it was propagated to the rigidBody, so scale the rigidBody to the new scale with the offset
    else if (this.component) {
      const newScale = {
        x: this.component.transform.scale.x + this.offset.scale.x,
        y: this.component.transform.scale.y + this.offset.scale.y,
      }
      // Update the rigidBody scale
      this.__SET_SCALE__(newScale)
    }
  }

  /**
   * Set the position of the rigidBody.
   * @param position The new position of the rigidBody.
   */
  __SET_POSITION__(position: FVector2): void {
    this.__RIGIDBODY__.setTranslation(position, true)
    this.transform.__POSITION__ = position
    this.collider.__SET_POSITION__(position)
  }

  /**
   * Set the rotation of the rigidBody.
   * @param rotation The new rotation of the rigidBody.
   */
  __SET_ROTATION__(rotation: number): void {
    this.__RIGIDBODY__.setRotation(rotation, true)
    this.transform.__ROTATION__ = rotation
    this.collider.__SET_ROTATION__(rotation)
  }

  /**
   * Set the scale of the rigidBody.
   * @param scale The new scale of the rigidBody.
   */
  __SET_SCALE__(scale: FVector2): void {
    this.transform.__SCALE__ = scale
    this.collider.__SET_SCALE__(scale)
  }

  // Setters & Getters

  get component(): FComponent | undefined {
    return this.__COMPONENT__
  }

  set component(component: FComponent | undefined) {
    this.__COMPONENT__ = component
    // Update the position, rotation and scale of the rigidBody
    this.__UPDATE_POSITION__()
    this.__UPDATE_ROTATION__()
    this.__UPDATE_SCALE__()
  }
}
