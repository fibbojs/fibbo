import * as PIXI from 'pixi.js'
import type { FComponent2dOptions } from '../FComponent2d'
import { FComponent2d } from '../FComponent2d'
import type { FScene2d } from '../FScene2d'
import { F2dShapes } from '../types/F2dShapes'

/**
 * @description A simple circle in FibboJS.
 * @category Polygons
 * @example
 * ```ts
 * import { FScene2d, FCircle } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const circle = new FCircle(scene)
 * scene.addComponent(circle)
 * ```
 */
export class FCircle extends FComponent2d {
  constructor(scene: FScene2d, options?: FComponent2dOptions) {
    super(scene, options)
    // Create a circle
    this.container = new PIXI.Graphics()
      .circle(this.position.x, this.position.y, this.scale.x * 100 / 2)
      .fill(new PIXI.FillGradient(0, 0, 10, 10).addColorStop(0, 0x0000FF).addColorStop(1, 0xFFFF00))
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }

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
    super.initRigidBody({
      ...options,
      shape: F2dShapes.CIRCLE,
    })
  }

  initCollider(options?: {
    position?: PIXI.PointData
    scale?: PIXI.PointData
    rotation?: number
    shape?: F2dShapes
  }): void {
    super.initCollider({
      ...options,
      shape: F2dShapes.CIRCLE,
    })
  }
}
