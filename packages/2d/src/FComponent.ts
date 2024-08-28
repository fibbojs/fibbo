import { FComponent as FComponentCore } from '@fibbojs/core'
import { Container } from 'pixi.js'
import * as RAPIER from '@dimforge/rapier2d'
import * as PIXI from 'pixi.js'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'

export interface FComponentOptions {
  position?: PIXI.PointData
  scale?: PIXI.PointData
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

  /**
   * PIXI container
   */
  container: Container

  // Transform
  /**
   * Position of the component.
   */
  position: PIXI.PointData
  /**
   * Scale of the component.
   */
  scale: PIXI.PointData
  /**
   * Rotation of the component.
   */
  rotation: number

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
  sensor?: FCollider

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
      position: new PIXI.Point(0, 5),
      scale: new PIXI.Point(1, 1),
      rotation: 0,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (options.rotation === undefined && options.rotationDegree === undefined))
      throw new Error('FibboError: FComponent requires position, scale and rotation options')

    // Set the transform values
    this.position = options.position
    this.scale = options.scale
    this.rotation = options.rotationDegree ? options.rotationDegree * (Math.PI / 180) : options.rotation ?? 0
    // Set the container values
    this.container.position.set(this.position.x, this.position.y)
    this.container.scale.set(this.scale.x * 100, this.scale.y * 100)
    this.container.rotation = this.rotation
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)
  }

  onFrame(_delta: number): void {
    // If the rigid body exist, update the container position and rotation according to the rigid body
    if (this.rigidBody) {
      const newContainerPosition = this.rigidBody.rigidBody.translation()
      const newContainerRotation = this.rigidBody.rigidBody.rotation()
      this.container.position.set(newContainerPosition.x * 100, -newContainerPosition.y * 100)
      this.container.rotation = -newContainerRotation
      // Update position and rotation properties of the component according to the rigid body
      this.position = {
        x: this.container.position.x / 100,
        y: -this.container.position.y / 100,
      }
      this.rotation = this.container.rotation
      // If a sensor exists, update its position and rotation according to the rigid body
      if (this.sensor) {
        // Apply offset to the sensor
        newContainerPosition.x += this.sensor.colliderPositionOffset.x
        newContainerPosition.y += this.sensor.colliderPositionOffset.y
        this.sensor.collider.setTranslation(newContainerPosition)
        this.sensor.collider.setRotation(newContainerRotation)
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
      this.position = {
        x: this.container.position.x / 100,
        y: -this.container.position.y / 100,
      }
      this.rotation = this.container.rotation
    }
    else {
      // If the rigid body and collider doesn't exist, update the container position and rotation according to the default values
      // The y position is inverted because the y axis is inverted in PIXI.js compared to Rapier
      this.container.position.set(this.position.x * 100, -this.position.y * 100)
      this.container.rotation = this.rotation
    }
  }

  /**
   * @description Set the position of the component.
   * @param x The x position.
   * @param y The y position.
   * @example
   * ```ts
   * component.setPosition(0, 0)
   * ```
   */
  setPosition(x: number, y: number): void {
    this.position = new PIXI.Point(x, y)
    this.container.position.set(x, y)
    // If a collider exists, update its translation
    if (this.collider)
      this.collider.collider.setTranslation(new RAPIER.Vector2(x, y))
    // If a rigid body exists, update its translation
    if (this.rigidBody)
      this.rigidBody.rigidBody.setTranslation(new RAPIER.Vector2(x, y), true)
  }

  /**
   * @description Set the scale of the component.
   * @param x The x scale.
   * @param y The y scale.
   * @example
   * ```ts
   * component.setScale(1, 1)
   * ```
   */
  setScale(x: number, y: number): void {
    this.scale = new PIXI.Point(x, y)
    this.container.height = y * 100
    this.container.width = x * 100
    // If a collider exists
    if (this.collider) {
      // If the collider is a cuboid, update its half extents
      if (this.collider.collider.shape.type === RAPIER.ShapeType.Cuboid) {
        this.collider.collider.setHalfExtents(new RAPIER.Vector2(x / 2, y / 2))
      }
      // If the collider is a ball, update its radius
      else if (this.collider.collider.shape.type === RAPIER.ShapeType.Ball) {
        this.collider.collider.setRadius(
          // Get the maximum value of x and y
          Math.max(x, y) / 2,
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
    this.rotation = r
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
    // Initialize the collider
    this.sensor = new FCollider(this, {
      ...options,
      sensor: true,
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
    this.setPosition(x, this.position.y)
  }

  get y(): number {
    return this.position.y
  }

  set y(y: number) {
    this.setPosition(this.position.x, y)
  }

  get rotationDegree(): number {
    return this.rotation * (180 / Math.PI)
  }

  set rotationDegree(r: number) {
    this.setRotationDegree(r)
  }

  get scaleX(): number {
    return this.scale.x
  }

  set scaleX(x: number) {
    this.setScale(x, this.scale.y)
  }

  get scaleY(): number {
    return this.scale.y
  }

  set scaleY(y: number) {
    this.setScale(this.scale.x, y)
  }
}
