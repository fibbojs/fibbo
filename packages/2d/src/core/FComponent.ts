import type { FComponentOptions as FComponentOptionsCore, OnCollisionWithData } from '@fibbojs/core'
import { FComponent as FComponentCore } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import * as RAPIER from '@dimforge/rapier2d'
import type { FController } from '../controllers/FController'
import type { FVector2 } from '../types/FVector2'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'
import { FSensor } from './FSensor'

export interface FComponentOptions extends FComponentOptionsCore {
  position?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
  scale?: { x: number, y: number }
}

/**
 * The base class for all 2D components in Fibbo.
 * @category Core
 */
export abstract class FComponent extends FComponentCore {
  /**
   * Internal flags
   */
  public __IS_2D__: boolean = true

  /**
   * The scene which the component is in.
   */
  scene: FScene

  // The controller attached to the component.
  // Redefined here to be able to use the updated FController type.
  declare controller?: FController

  /**
   * PIXI container
   */
  __CONTAINER__: PIXI.Container

  /**
   * Transforms
   */
  transform: FTransform

  // Physics & collision
  /**
   * RAPIER RigidBody
   */
  declare rigidBody: FRigidBody
  /**
   * RAPIER Collider
   */
  declare collider: FCollider
  /**
   * Sensor (a collider that doesn't collide with other colliders, but still triggers events)
   */
  declare sensor: FRigidBody

  /**
   * @param scene The 2D scene where the component will be added.
   * @param options The options for the component.
   * @param options.position The position of the component.
   * @param options.rotation The rotation of the component.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   * @param options.scale The scale of the component.
   */
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene)
    this.scene = scene
    // Create a new PIXI container
    this.__CONTAINER__ = new PIXI.Container()

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 5 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (options.rotation === undefined && options.rotationDegree === undefined))
      throw new Error('FibboError: FComponent requires transform properties.')

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
  }

  frame(_delta: number): void {
    super.frame(_delta)
  }

  /**
   * Update the position of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the position update.
   * Set this to true to propagate the position update to the rigidBody, collider and sensor.
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Move the component
      this.__SET_POSITION__(this.transform.position)
      // Propagate the position update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_POSITION__()
      else if (this.collider)
        this.collider.__UPDATE_POSITION__()
      if (this.sensor)
        this.sensor.__UPDATE_POSITION__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Move the component
        this.__SET_POSITION__({
          x: this.rigidBody.transform.position.x - this.rigidBody.offset.position.x,
          y: this.rigidBody.transform.position.y - this.rigidBody.offset.position.y,
        })
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Move the component
        this.__SET_POSITION__({
          x: this.collider.transform.position.x - this.collider.offset.x,
          y: this.collider.transform.position.y - this.collider.offset.y,
        })
      }
    }
  }

  /**
   * Update the rotation of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the rotation update.
   * Set this to true to propagate the rotation update to the rigidBody, collider and sensor.
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Rotate the component
      this.__SET_ROTATION__(this.transform.rotation)
      // Propagate the rotation update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_ROTATION__()
      else if (this.collider)
        this.collider.__UPDATE_ROTATION__()
      if (this.sensor)
        this.sensor.__UPDATE_ROTATION__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Rotate the component
        this.__SET_ROTATION__(this.rigidBody.transform.rotation - this.rigidBody.offset.rotation)
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Rotate the component
        this.__SET_ROTATION__(this.collider.transform.rotation - this.collider.offset.rotation)
      }
    }
  }

  /**
   * Update the scale of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the scale update.
   * Set this to true to propagate the scale update to the rigidBody, collider and sensor.
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Scale the component
      this.__SET_SCALE__(this.transform.scale)
      // Propagate the scale update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_SCALE__()
      else if (this.collider)
        this.collider.__UPDATE_SCALE__()
      if (this.sensor)
        this.sensor.__UPDATE_SCALE__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Scale the component
        this.__SET_SCALE__({
          x: this.rigidBody.transform.scale.x - this.rigidBody.offset.scaleX,
          y: this.rigidBody.transform.scale.y - this.rigidBody.offset.scaleY,
        })
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Scale the component
        this.__SET_SCALE__({
          x: this.collider.transform.scale.x - this.collider.offset.scaleX,
          y: this.collider.transform.scale.y - this.collider.offset.scaleY,
        })
      }
    }
  }

  __SET_POSITION__(position: FVector2): void {
    // Move the container
    this.__CONTAINER__.position.set(position.x * 100, -position.y * 100)
    // Update the transform
    this.transform.__POSITION__ = position
  }

  __SET_ROTATION__(rotation: number): void {
    // Rotate the container
    this.__CONTAINER__.rotation = -rotation
    // Update the transform
    this.transform.__ROTATION__ = rotation
  }

  __SET_SCALE__(scale: FVector2): void {
    // Scale the container
    this.__CONTAINER__.height = scale.y * 100
    this.__CONTAINER__.width = scale.x * 100
    // Update the transform
    this.transform.__SCALE__ = scale
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

  initCollider(options?: FColliderOptions) {
    this.collider = new FCollider(this.scene, options)
    this.collider.component = this
    this.scene.addHandle(this.collider.__COLLIDER__.handle, this)
  }

  initRigidBody(options?: FRigidBodyOptions) {
    this.rigidBody = new FRigidBody(this.scene, options)
    this.rigidBody.component = this
    this.scene.addHandle(this.rigidBody.collider.__COLLIDER__.handle, this)
  }

  initSensor(options?: FRigidBodyOptions) {
    this.sensor = new FSensor(this.scene, options)
    this.sensor.component = this
    // If a rigidBody or collider is already defined, remove its handle from being used to detect collisions
    if (this.rigidBody)
      this.scene.removeHandle(this.rigidBody.__RIGIDBODY__.handle)
    else if (this.collider)
      this.scene.removeHandle(this.collider.__COLLIDER__.handle)
    // Add the sensor's handle to the scene's handle map
    this.scene.addHandle(this.sensor.collider.__COLLIDER__.handle, this)
  }
}
