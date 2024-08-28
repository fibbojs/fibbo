import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../FComponent'
import { FComponent } from '../FComponent'
import type { FScene } from '../FScene'
import { FShapes } from '../types/FShapes'

/**
 * @description A simple circle in FibboJS.
 * @category Polygons
 * @example
 * ```ts
 * import { FScene, FCircle } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const circle = new FCircle(scene)
 * scene.addComponent(circle)
 * ```
 */
export class FCircle extends FComponent {
  constructor(scene: FScene, options?: FComponentOptions) {
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
    shape?: FShapes
    lockTranslations?: boolean
    lockRotations?: boolean
    enabledTranslations?: {
      enableX: boolean
      enableY: boolean
    }
  }): void {
    super.initRigidBody({
      ...options,
      shape: FShapes.CIRCLE,
    })
  }

  initCollider(options?: {
    position?: PIXI.PointData
    scale?: PIXI.PointData
    rotation?: number
    shape?: FShapes
  }): void {
    super.initCollider({
      ...options,
      shape: FShapes.CIRCLE,
    })
  }
}
