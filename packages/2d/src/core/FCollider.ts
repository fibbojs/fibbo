import * as RAPIER from '@dimforge/rapier2d'
import type { FVector2 } from '@fibbojs/core'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import type { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'
import type { FScene } from './FScene'

export interface FColliderOptions {
  scene?: FScene
  position?: FVector2
  rotation?: number
  rotationDegree?: number
  scale?: FVector2
  positionOffset?: FVector2
  rotationOffset?: number
  rotationDegreeOffset?: number
  scaleOffset?: FVector2
  shape?: FShapes
  rigidBody?: FRigidBody
  sensor?: boolean
}

/**
 * A 2d collider that can be attached to a component.
 * @category Core
 */
export class FCollider {
  /**
   * RAPIER Collider
   */
  __COLLIDER__: RAPIER.Collider
  /**
   * The component the collider is attached to.
   */
  __COMPONENT__?: FComponent
  /**
   * The transform of the collider.
   */
  transform: FTransform
  /**
   * The transform offset of the collider.
   */
  offset: FTransform
  /**
   * The shape of the collider.
   */
  shape: FShapes

  /**
   * Creates a collider for a given component.
   * @param options The options for the collider.
   * @param options.scene The scene the collider belongs to.
   * @param options.position The position of the collider. Default is { x: 0, y: 0 }.
   * @param options.rotation The rotation of the collider in degrees. Default is 0.
   * @param options.scale The scale of the collider. Default is { x: 1, y: 1 }.
   * @param options.positionOffset The position offset of the collider. Only used if the collider is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.rotationOffset The rotation offset of the collider in degrees. Only used if the collider is attached to a component. Default is 0.
   * @param options.scaleOffset The scale offset of the collider. Only used if the collider is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CIRCLE.
   * @param options.rigidBody The rigidBody to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * const collider = new FCollider({
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  shape: FShapes.CIRCLE
   * })
   * ```
   */
  constructor(options?: FColliderOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      scene: globalThis.__FIBBO_ACTUAL_SCENE__,
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
      rotationOffset: 0,
      shape: FShapes.RECTANGLE,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (options.scene === undefined || !options.position || (options.rotation === undefined && options.rotationDegree === undefined) || !options.scale || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: options missing in FCollider constructor')

    // Check if the world exists
    if (!options.scene.world)
      throw new Error('FibboError: FScene must have a world to create a collider')

    // Store the options
    this.shape = options.shape

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

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case FShapes.CIRCLE:
        colliderDesc = RAPIER.ColliderDesc.ball(this.transform.scale.x / 2)
        break
      case FShapes.RECTANGLE:
        colliderDesc = RAPIER.ColliderDesc.cuboid(this.transform.scale.x / 2, this.transform.scale.y / 2)
        break
      default:
        throw new Error(`FibboError: shape not supported : ${options.shape}`)
    }
    // Move the collider to the position
    colliderDesc.setTranslation(this.transform.position.x, this.transform.position.y)
    // Rotate the collider
    colliderDesc.setRotation(this.transform.rotation)

    // Set the sensor flag
    if (options.sensor) {
      colliderDesc.setSensor(true)
      colliderDesc.setActiveCollisionTypes(RAPIER.ActiveCollisionTypes.ALL)
    }

    // Create the collider
    this.__COLLIDER__ = options.scene.world.createCollider(colliderDesc, options.rigidBody?.__RIGIDBODY__)

    // Add the collider to the scene
    options.scene.addCollider(this)
  }

  frame(_delta: number): void {
    // As the collider should have moved, update the transform to sync with the collider
    this.transform.__POSITION__ = this.__COLLIDER__.translation()
    this.transform.__ROTATION__ = this.__COLLIDER__.rotation()
    // Propagate the position and rotation update if the collider is attached to a component
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
   * Update the position of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the position update.
   * This means the new position will be the position of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      // Update the collider position
      this.__SET_POSITION__(this.transform.position)
      if (this.component) {
        // Propagate the position update
        this.component.__UPDATE_POSITION__()
        this.component.sensor?.__UPDATE_POSITION__()
      }
    }
    // Else, it was propagated to the collider, so move the collider to the new position with the offset
    else if (this.component) {
      const newPosition = {
        x: this.component.transform.position.x + this.offset.position.x,
        y: this.component.transform.position.y + this.offset.position.y,
      }
      // Update the collider position
      this.__SET_POSITION__(newPosition)
    }
  }

  /**
   * Update the rotation of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the rotation update.
   * This means the new rotation will be the rotation of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      // Update the collider rotation
      this.__SET_ROTATION__(this.transform.rotation)
      if (this.component) {
        // Propagate the rotation update
        this.component.__UPDATE_ROTATION__()
        this.component.sensor?.__UPDATE_ROTATION__()
      }
    }
    // Else, it was propagated to the collider, so rotate the collider to the new rotation with the offset
    else if (this.component) {
      const newRotation = this.component.transform.rotation + this.offset.rotation
      // Update the collider rotation
      this.__SET_ROTATION__(newRotation)
    }
  }

  /**
   * Update the scale of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the scale update.
   * This means the new scale will be the scale of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      // Update the collider scale
      this.__SET_SCALE__(this.transform.scale)
      if (this.component) {
        // Propagate the scale update
        this.component.__UPDATE_SCALE__()
        this.component.sensor?.__UPDATE_SCALE__()
      }
    }
    // Else, it was propagated to the collider, so scale the collider to the new scale with the offset
    else if (this.component) {
      const newScale = {
        x: this.component.transform.scale.x + this.offset.scale.x,
        y: this.component.transform.scale.y + this.offset.scale.y,
      }
      // Update the collider scale
      this.__SET_SCALE__(newScale)
    }
  }

  /**
   * Set the position of the collider.
   * @param position The new position of the collider.
   */
  __SET_POSITION__(position: FVector2): void {
    this.__COLLIDER__.setTranslation(position)
    this.transform.__POSITION__ = position
  }

  /**
   * Set the rotation of the collider.
   * @param rotation The new rotation of the collider in degrees.
   */
  __SET_ROTATION__(rotation: number): void {
    this.__COLLIDER__.setRotation(rotation)
    this.transform.__ROTATION__ = rotation
  }

  /**
   * Set the scale of the collider.
   * @param scale The new scale of the collider.
   */
  __SET_SCALE__(scale: FVector2): void {
    // If the shape is a circle, the scale should be the same on both axis
    if (this.shape === FShapes.CIRCLE) {
      scale.x = Math.max(scale.x, scale.y)
      scale.y = scale.x
    }
    // If the collider is a circle, update its radius
    if (this.__COLLIDER__.shape instanceof RAPIER.Ball) {
      this.__COLLIDER__.setShape(new RAPIER.Ball(scale.x / 2))
    }
    // If the collider is a rectangle, update its half extents
    else if (this.__COLLIDER__.shape instanceof RAPIER.Cuboid) {
      this.__COLLIDER__.setShape(new RAPIER.Cuboid(scale.x / 2, scale.y / 2))
    }
    this.transform.__SCALE__ = scale
  }

  // Setters & Getters

  get component(): FComponent | undefined {
    return this.__COMPONENT__
  }

  set component(component: FComponent | undefined) {
    this.__COMPONENT__ = component
    // Update the position, rotation and scale of the collider
    this.__UPDATE_POSITION__()
    this.__UPDATE_ROTATION__()
    this.__UPDATE_SCALE__()
  }
}
