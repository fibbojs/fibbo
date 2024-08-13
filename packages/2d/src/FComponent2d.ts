import { FComponent } from '@fibbojs/core'
import { Container } from 'pixi.js'
import type { Collider, RigidBody } from '@dimforge/rapier2d'
import * as RAPIER from '@dimforge/rapier2d'
import * as PIXI from 'pixi.js'
import { F2dShapes } from './types/F2dShapes'
import type { FScene2d } from './FScene2d'

/**
 * @description The base class for all 2D components in FibboJS.
 * @category Core
 */
export abstract class FComponent2d extends FComponent {
  /**
   * The scene which the component is in.
   */
  scene: FScene2d

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
  rigidBody?: RigidBody
  /**
   * RAPIER Collider
   */
  collider?: Collider

  /**
   * @param scene The 2D scene where the component will be added.
   * @param options The options for the component.
   * @param options.position The position of the component.
   * @param options.scale The scale of the component.
   * @param options.rotation The rotation of the component.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   */
  constructor(scene: FScene2d, options?: {
    position?: PIXI.PointData
    scale?: PIXI.PointData
    rotation?: number
    rotationDegree?: number
  }) {
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
      throw new Error('FComponent2d requires position, scale and rotation options')

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
      const newRigidBodyPosition = this.rigidBody.translation()
      const newRigidBodyRotation = this.rigidBody.rotation()
      this.container.position.set(newRigidBodyPosition.x * 100, -newRigidBodyPosition.y * 100)
      this.container.rotation = -newRigidBodyRotation
      // Update position and rotation properties of the component according to the rigid body
      this.position = {
        x: this.container.position.x / 100,
        y: -this.container.position.y / 100,
      }
      this.rotation = this.container.rotation
    }
    // Else if the collider exist, update the container position and rotation according to the collider
    else if (this.collider) {
      const newColliderPosition = this.collider.translation()
      const newColliderRotation = this.collider.rotation()
      this.container.position.set(newColliderPosition.x * 100, -newColliderPosition.y * 100)
      this.container.rotation = -newColliderRotation
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
    // If a collider exists, update its half-extents
    if (this.collider)
      this.collider.setHalfExtents(new RAPIER.Vector2(x / 2, y / 2))
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
   *  position: new PIXI.Point(0, 0),
   *  scale: new PIXI.Point(1, 1),
   *  rotation: 0,
   *  shape: F2dShapes.SQUARE
   * })
   * ```
   */
  initRigidBody(options?: {
    position?: PIXI.PointData
    scale?: PIXI.PointData
    rotation?: number
    shape?: F2dShapes
    lockTranslations?: boolean
    lockRotations?: boolean
    enabledTranslations?: {
      enableX: boolean
      enableY: boolean
    }
  }): void {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: new PIXI.Point(this.position.x, this.position.y),
      scale: new PIXI.Point(this.scale.x / 2, this.scale.y / 2),
      rotation: this.rotation,
      shape: F2dShapes.SQUARE,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || options.rotation === undefined || !options.shape)
      throw new Error('initRigidBody requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    // Create a dynamic rigid-body.
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(options.position.x, options.position.y)
      .setRotation(options.rotation)

    this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

    // Lock the translation if needed
    if (options.lockTranslations)
      this.rigidBody.lockTranslations(true, true)
    // Lock the rotation if needed
    if (options.lockRotations)
      this.rigidBody.lockRotations(true, true)
    // Enable only specific translations if needed
    if (options.enabledTranslations)
      this.rigidBody.setEnabledTranslations(options.enabledTranslations.enableX, options.enabledTranslations.enableY, true)

    // Create a collider description for the rigid body
    const colliderDesc = options.shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y)
      : RAPIER.ColliderDesc.ball(options.scale.x)
    // Create the collider
    this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
  }

  /**
   * @description Only init a collider for the component, without a rigid body.
   * This is useful for static objects.
   * @param options The options for the collider.
   * @param options.position The position of the collider.
   * @param options.scale The scale of the collider.
   * @param options.rotation The rotation of the collider.
   * @param options.shape The shape of the collider.
   * @example
   * ```ts
   * component.initCollider({
   *  position: new PIXI.Point(0, 0),
   *  scale: new PIXI.Point(1, 1),
   *  rotation: 0,
   *  shape: F2dShapes.SQUARE
   * })
   * ```
   */
  initCollider(options?: {
    position?: PIXI.PointData
    scale?: PIXI.PointData
    rotation?: number
    shape?: F2dShapes
  }): void {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: new PIXI.Point(this.position.x, this.position.y),
      scale: new PIXI.Point(this.scale.x / 2, this.scale.y / 2),
      rotation: this.rotation,
      shape: F2dShapes.SQUARE,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || options.rotation === undefined || !options.shape)
      throw new Error('initCollider requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a collider')

    // Create a collider description
    const colliderDesc = options.shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y)
      : RAPIER.ColliderDesc.ball(options.scale.x)
    colliderDesc.setTranslation(options.position.x, options.position.y)
    colliderDesc.setRotation(options.rotation)
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
}
