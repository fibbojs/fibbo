import * as PIXI from 'pixi.js'
import { FComponent2d } from '../FComponent2d'
import type { FScene2d } from '../FScene2d'
import { F2dShapes } from '../types/F2dShapes'

/**
 * @description A simple square in FibboJS.
 * @category Polygons
 * @example
 * ```ts
 * import { FScene2d, FCircle } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const square = new FCircle(scene)
 * scene.addComponent(square)
 * ```
 */
export class FCircle extends FComponent2d {
  constructor(scene: FScene2d) {
    super(scene)
    // Create a square
    this.container = new PIXI.Graphics()
      .circle(this.position.x, this.position.y, this.scale.x * 100 / 2)
      .fill(new PIXI.FillGradient(0, 0, 10, 10).addColorStop(0, 0x0000FF).addColorStop(1, 0xFFFF00))
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }

  initRigidBody(
    position?: PIXI.PointData,
    scale?: PIXI.PointData,
    rotation?: number,
    shape?: F2dShapes,
  ): void {
    if (!shape)
      shape = F2dShapes.CIRCLE
    super.initRigidBody(position, scale, rotation, shape)
  }

  initCollider(
    position?: PIXI.PointData,
    scale?: PIXI.PointData,
    rotation?: number,
    shape?: F2dShapes,
  ): void {
    if (!shape)
      shape = F2dShapes.CIRCLE
    super.initCollider(position, scale, rotation, shape)
  }
}