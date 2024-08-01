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
   */
  constructor(scene: FScene2d) {
    super()
    this.scene = scene
    // Create a new PIXI container
    this.container = new Container()
    // Set the default values
    this.position = new PIXI.Point(0, 5)
    this.scale = new PIXI.Point(1, 1)
    this.rotation = 0
    // Set the container values
    this.container.position.set(this.position.x, this.position.y)
    this.container.scale.set(this.scale.x, this.scale.y)
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
    }
    // Else if the collider exist, update the container position and rotation according to the collider
    else if (this.collider) {
      const newRigidBodyPosition = this.collider.translation()
      const newRigidBodyRotation = this.collider.rotation()
      this.container.position.set(newRigidBodyPosition.x * 100, -newRigidBodyPosition.y * 100)
      this.container.rotation = -newRigidBodyRotation
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
   * @param position The position of the rigid body.
   * @param scale The scale of the rigid body.
   * @param rotation The rotation of the rigid body.
   * @param shape The shape of the rigid body.
   * @example
   * ```ts
   * component.initRigidBody(
   *  new PIXI.Point(0, 0),
   *  new PIXI.Point(1, 1),
   *  0,
   *  F2dShapes.SQUARE
   * )
   */
  initRigidBody(
    position: PIXI.PointData = new PIXI.Point(this.position.x, this.position.y),
    scale: PIXI.PointData = new PIXI.Point(this.scale.x / 2, this.scale.y / 2),
    rotation: number = this.rotation,
    shape: F2dShapes = F2dShapes.SQUARE,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    // Create a dynamic rigid-body.
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y)
      .setRotation(rotation)

    this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

    // Create a collider for the rigid body
    const colliderDesc = shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(scale.x, scale.y)
      : RAPIER.ColliderDesc.ball(scale.x)
    this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
  }

  /**
   * @description Only init a collider for the component, without a rigid body.
   * This is useful for static objects.
   * @param position The position of the collider.
   * @param scale The scale of the collider.
   * @param rotation The rotation of the collider.
   * @param shape The shape of the collider.
   * @example
   * ```ts
   * component.initCollider(
   *  new PIXI.Point(0, 0),
   *  new PIXI.Point(1, 1),
   *  0,
   *  F2dShapes.SQUARE
   * )
   * ```
   */
  initCollider(
    position: PIXI.PointData = new PIXI.Point(this.position.x, this.position.y),
    scale: PIXI.PointData = new PIXI.Point(this.scale.x / 2, this.scale.y / 2),
    rotation: number = this.rotation,
    shape: F2dShapes = F2dShapes.SQUARE,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a collider')

    // Create the collider
    const colliderDesc = shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(scale.x, scale.y)
      : RAPIER.ColliderDesc.ball(scale.x)
    colliderDesc.setTranslation(position.x, position.y)
    colliderDesc.setRotation(rotation)
    this.collider = this.scene.world.createCollider(colliderDesc)
  }
}
