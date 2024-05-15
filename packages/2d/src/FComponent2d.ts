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
  // Scene
  scene: FScene2d
  /**
   * container is the PIXI container that holds the square.
   */
  container: Container
  position: PIXI.PointData
  scale: PIXI.PointData
  rotation: number
  // Physics
  rigidBody?: RigidBody
  collider?: Collider

  constructor(scene: FScene2d) {
    super()
    this.scene = scene
    this.container = new Container()
    this.container.pivot.set(0.5, 0.5)
    this.position = new PIXI.Point(0, 5)
    this.scale = new PIXI.Point(1, 1)
    this.rotation = 0
  }

  onFrame(_delta: number): void {
    // If the rigid body and container exist, update the container position and rotation according to the rigid body
    if (this.rigidBody && this.container) {
      const newRigidBodyPosition = this.rigidBody.translation()
      this.container.position.set(newRigidBodyPosition.x * 10 - this.container.width / 2, -newRigidBodyPosition.y * 100 - this.container.height / 2)
      const newRigidBodyRotation = this.rigidBody.rotation()
      this.container.rotation = newRigidBodyRotation
    }
    else if (this.collider) {
      const newColliderPosition = this.collider.translation()
      this.container.position.set(newColliderPosition.x * 10 - this.container.width / 2, -newColliderPosition.y * 10 - this.container.height / 2)
      const newColliderRotation = this.collider.rotation()
      this.container.rotation = newColliderRotation
    }
  }

  /**
   * @description Set the position of the component.
   */
  setPosition(x: number, y: number): void {
    this.position = new PIXI.Point(x, y)
    this.container.position.set(x, y)
  }

  /**
   * @description Set the scale of the component.
   */
  setScale(x: number, y: number): void {
    this.scale = new PIXI.Point(x, y)
    this.container.scale.set(x, y)
  }

  /**
   * @description Set the rotation of the component.
   */
  setRotation(x: number): void {
    this.rotation = x
    this.container.rotation = x
  }

  /**
   * @description Init a rigid body for the model.
   */
  initRigidBody(
    position?: PIXI.PointData,
    scale?: PIXI.PointData,
    rotation?: number,
    shape?: F2dShapes,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    let rigidBodyPosition: PIXI.PointData | undefined = position
    let rigidBodyScale: PIXI.PointData | undefined = scale
    let rigidBodyRotation: number | undefined = rotation

    // If position is not defined
    if (!rigidBodyPosition) {
      // Use default position of the FModel
      rigidBodyPosition = new PIXI.Point(this.position.x, this.position.y)
    }

    // If scale is not defined
    if (!rigidBodyScale) {
      // Use default scale of the FModel
      rigidBodyScale = new PIXI.Point(this.scale.x, this.scale.y)
    }

    // Devide scale by 2 (RAPIER uses half-extents)
    if (rigidBodyScale) {
      rigidBodyScale.x /= 2
      rigidBodyScale.y /= 2
    }

    // If rotation is not defined
    if (!rigidBodyRotation) {
      // Use default rotation of the FModel
      rigidBodyRotation = this.rotation
    }

    // If a shape wasn't defined
    if (!shape) {
      // Default to cube
      shape = F2dShapes.SQUARE
    }

    // Create a dynamic rigid-body.
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(rigidBodyPosition.x, rigidBodyPosition.y)
      .setRotation(rigidBodyRotation)

    this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

    // Create a cuboid collider attached to the dynamic rigidBody.
    const colliderDesc = shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(rigidBodyScale.x, rigidBodyScale.y)
      : RAPIER.ColliderDesc.ball(rigidBodyScale.x)
    this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
  }

  /**
   * @description Only init a collider for the model, without a rigid body.
   * This is useful for static objects.
   */
  initCollider(
    position?: PIXI.PointData,
    scale?: PIXI.PointData,
    shape?: F2dShapes,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a collider')

    let colliderPosition: PIXI.PointData | undefined = position
    let colliderScale: PIXI.PointData | undefined = scale

    // If position is not defined
    if (!colliderPosition) {
      // Use default position of the FModel
      colliderPosition = new PIXI.Point(this.position.x, this.position.y)
    }

    // If scale is not defined
    if (!colliderScale) {
      // Use default scale of the FModel
      colliderScale = new PIXI.Point(this.scale.x, this.scale.y)
    }

    // Devide scale by 2 (RAPIER uses half-extents)
    if (colliderScale) {
      colliderScale.x /= 2
      colliderScale.y /= 2
    }

    // If a shape wasn't defined
    if (!shape) {
      // Default to cube
      shape = F2dShapes.SQUARE
    }

    // Create a cuboid collider attached to the dynamic rigidBody.
    const colliderDesc = shape === F2dShapes.SQUARE
      ? RAPIER.ColliderDesc.cuboid(colliderScale.x, colliderScale.y)
      : RAPIER.ColliderDesc.ball(colliderScale.x)
    colliderDesc.setTranslation(colliderPosition.x, colliderPosition.y)
    this.collider = this.scene.world.createCollider(colliderDesc)
  }
}
