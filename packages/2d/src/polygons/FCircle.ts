import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../core/FComponent'
import type { FScene } from '../core/FScene'
import { FShapes } from '../types/FShapes'
import type { FRigidBodyOptions } from '../core/FRigidBody'
import type { FColliderOptions } from '../core/FCollider'
import { FPolygon } from './FPolygon'

/**
 * A simple circle in Fibbo.
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
export class FCircle extends FPolygon {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a circle
    this.__CONTAINER__ = new PIXI.Graphics()
      .circle(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100 / 2)
      .fill(new PIXI.FillGradient(0, 0, 10, 10).addColorStop(0, 0x0000FF).addColorStop(1, 0xFFFF00))
    // Reset transform
    this.__SET_POSITION__(this.transform.position)
    this.__SET_ROTATION__(this.transform.rotation)
    this.__SET_SCALE__(this.transform.scale)
    // Emit the onLoaded event
    this.emitOnLoaded()
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      ...options,
      shape: FShapes.CIRCLE,
    })
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      ...options,
      shape: FShapes.CIRCLE,
    })
  }

  initSensor(options?: FRigidBodyOptions): void {
    super.initSensor({
      ...options,
      shape: FShapes.CIRCLE,
    })
  }
}
