import type { OnCollisionWithData } from '@fibbojs/core'
import { FComponent as FComponentCore } from '@fibbojs/core'
import { Container } from 'pixi.js'
import * as RAPIER from '@dimforge/rapier2d'
import type { FController } from '../controllers/FController'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'

export interface FComponentOptions {
  position?: { x: number, y: number }
  scale?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
}

/**
 * @description The base class for all 2D components in Fibbo.
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
  container: Container

  /**
   * Transforms
   */
  transform: FTransform

  // Physics & collision
  /**
   * RAPIER RigidBody
   */
  rigidBody?: FRigidBody
  /**
   * RAPIER Collider
   */
  collider?: FCollider
  /**
   * Sensor (a collider that doesn't collide with other colliders, but still triggers events)
   */
  sensor?: FRigidBody

  /**
   * @param scene The 2D scene where the component will be added.
   * @param options The options for the component.
   * @param options.position The position of the component.
   * @param options.scale The scale of the component.
   * @param options.rotation The rotation of the component.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   */
  constructor(scene: FScene, options?: FComponentOptions) {
    super()
    this.scene = scene
    // Create a new PIXI container
    this.container = new Container()

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 5 },
      scale: { x: 1, y: 1 },
      rotation: 0,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (options.rotation === undefined && options.rotationDegree === undefined))
      throw new Error('FibboError: FComponent requires position, scale and rotation options')

    // Create the transform
    this.transform = new FTransform({
      position: options.position,
      scale: options.scale,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })
    // Set the container values
    this.container.position.set(this.transform.position.x, this.transform.position.y)
    this.container.scale.set(this.transform.scale.x * 100, this.transform.scale.y * 100)
    this.container.rotation = this.transform.rotation
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
    // If the rigid body exist, update the container position and rotation according to the rigid body
    if (this.rigidBody && this.collider) {
      // Translation
      const newContainerPosition = this.rigidBody.rigidBody.translation()
      // Remove offset
      newContainerPosition.x -= this.collider.colliderPositionOffset.x
      newContainerPosition.y -= this.collider.colliderPositionOffset.y

      // Rotation
      let newContainerRotation = this.rigidBody.rigidBody.rotation()
      // Remove offset
      newContainerRotation -= this.collider.colliderRotationOffset

      // Apply the new transforms to the container
      this.container.position.set(newContainerPosition.x * 100, -newContainerPosition.y * 100)
      this.container.rotation = -newContainerRotation

      // Update position and rotation properties of the component according to the rigid body
      this.transform.position = {
        x: this.container.position.x / 100,
        y: -this.container.position.y / 100,
      }
      this.transform.rotation = this.container.rotation
      // If a sensor exists, update its position and rotation according to the rigid body
      if (this.sensor) {
        // Apply offset to the sensor
        newContainerPosition.x += this.sensor.collider.colliderPositionOffset.x
        newContainerPosition.y += this.sensor.collider.colliderPositionOffset.y
        this.sensor.rigidBody.setTranslation(newContainerPosition, true)
        this.sensor.rigidBody.setRotation(newContainerRotation, true)
      }
    }
    // Else if the collider exist, update the container position and rotation according to the collider
    else if (this.collider) {
      // Get the new transforms from the collider

      // Transforms
      const newContainerPosition = this.collider.collider.translation()
      // Remove offset
      newContainerPosition.x -= this.collider.colliderPositionOffset.x
      newContainerPosition.y -= this.collider.colliderPositionOffset.y

      // Rotation
      let newContainerRotation = this.collider.collider.rotation()
      // Remove offset
      newContainerRotation -= this.collider.colliderRotationOffset

      // Apply the new transforms to the container
      this.container.position.set(newContainerPosition.x * 100, -newContainerPosition.y * 100)
      this.container.rotation = -newContainerRotation
      // Update position and rotation properties of the component according to the collider
      this.transform.position = {
        x: this.container.position.x / 100,
        y: -this.container.position.y / 100,
      }
      this.transform.rotation = this.container.rotation
    }
    else {
      // If the rigid body and collider doesn't exist, update the container position and rotation according to the default values
      // The y position is inverted because the y axis is inverted in PIXI.js compared to Rapier
      this.container.position.set(this.transform.position.x * 100, -this.transform.position.y * 100)
      this.container.rotation = this.transform.rotation
    }
  }

  /**
   * @description Set the position of the component.
   * @param options The options for the position.
   * @param options.x The x position.
   * @param options.y The y position.
   * @example
   * ```ts
   * component.setPosition({ x: 0, y: 0 })
   * ```
   */
  setPosition(options: { x: number, y: number }): void {
    this.transform.position = { x: options.x, y: options.y }
    this.container.position.set(options.x, options.y)
    // If a collider exists, update its translation
    if (this.collider)
      this.collider.collider.setTranslation(new RAPIER.Vector2(options.x, options.y))
    // If a rigid body exists, update its translation
    if (this.rigidBody)
      this.rigidBody.rigidBody.setTranslation(new RAPIER.Vector2(options.x, options.y), true)
  }

  /**
   * @description Set the scale of the component.
   * @param options The options for the scale.
   * @param options.x The x scale.
   * @param options.y The y scale.
   * @example
   * ```ts
   * component.setScale({ x: 1, y: 1 })
   * ```
   */
  setScale(options: { x: number, y: number }): void {
    this.transform.scale = { x: options.x, y: options.y }
    this.container.height = options.y * 100
    this.container.width = options.x * 100
    // If a collider exists
    if (this.collider) {
      // If the collider is a cuboid, update its half extents
      if (this.collider.collider.shape.type === RAPIER.ShapeType.Cuboid) {
        this.collider.collider.setHalfExtents(new RAPIER.Vector2(options.x / 2, options.y / 2))
      }
      // If the collider is a ball, update its radius
      else if (this.collider.collider.shape.type === RAPIER.ShapeType.Ball) {
        this.collider.collider.setRadius(
          // Get the maximum value of x and y
          Math.max(options.x, options.y) / 2,
        )
      }
    }
  }

  /**
   * @description Set the rotation of the component in radians.
   * @param r The rotation in radians.
   * @example
   * ```ts
   * component.setRotation(Math.PI / 2)
   * ```
   */
  setRotation(r: number): void {
    this.transform.rotation = r
    this.container.rotation = r
    // If a collider exists, update its rotation
    if (this.collider)
      this.collider.collider.setRotation(r)
    // If a rigid body exists, update its rotation
    if (this.rigidBody)
      this.rigidBody.rigidBody.setRotation(r, true)
  }

  /**
   * @description Set the rotation of the component in degrees.
   * @param r The rotation in degrees.
   * @example
   * ```ts
   * component.setRotationDegree(90)
   * ```
   */
  setRotationDegree(r: number): void {
    this.setRotation(r * (Math.PI / 180))
  }

  /**
   * @description Init a rigid body for the model.
   * @param options The options for the rigid body.
   * @param options.position The position of the rigid body.
   * @param options.scale The scale of the rigid body.
   * @param options.rotation The rotation of the rigid body.
   * @param options.shape The shape of the rigid body.
   * @param options.lockTranslations Lock the translations of the rigid body.
   * @param options.lockRotations Lock the rotations of the rigid body.
   * @param options.enabledTranslations Enable only specific translations of the rigid body.
   * @param options.enabledTranslations.enableX Enable the x translation of the rigid body.
   * @param options.enabledTranslations.enableY Enable the y translation of the rigid body.
   * @example
   * ```ts
   * component.initRigidBody({
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  rotation: 0,
   *  shape: FShapes.SQUARE
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
   * @param options.position The position of the collider.
   * @param options.scale The scale of the collider.
   * @param options.rotation The rotation of the collider.
   * @param options.shape The shape of the collider.
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initCollider({
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  rotation: 0,
   *  shape: FShapes.SQUARE
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
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  rotation: { x: 0, y: 0 },
   *  shape: FShapes.SQUARE
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
    if (this.sensor && this.sensor.collider.collider.activeEvents() === RAPIER.ActiveEvents.NONE) {
      // Set the active events
      this.sensor.collider.collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
    }
    // Call the core onCollisionWith method
    return super.onCollisionWith(classOrObject, callback)
  }

  /**
   * Setters & getters for transform properties
   */
  get position(): { x: number, y: number } {
    return this.transform.position
  }

  set position(p: { x: number, y: number }) {
    this.setPosition(p)
  }

  get x(): number {
    return this.transform.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.transform.position.y })
  }

  get y(): number {
    return this.transform.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.transform.position.x, y })
  }

  get rotation(): number {
    return this.transform.rotation
  }

  set rotation(r: number) {
    this.setRotation(r)
  }

  get rotationDegree(): number {
    return this.transform.rotation * (180 / Math.PI)
  }

  set rotationDegree(r: number) {
    this.setRotationDegree(r)
  }

  get scale(): { x: number, y: number } {
    return this.transform.scale
  }

  set scale(s: { x: number, y: number }) {
    this.setScale(s)
  }

  get scaleX(): number {
    return this.transform.scale.x
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.transform.scale.y })
  }

  get scaleY(): number {
    return this.transform.scale.y
  }

  set scaleY(y: number) {
    this.setScale({ x: this.transform.scale.x, y })
  }
}
