import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../core/FComponent'
import type { FScene } from '../core/FScene'
import type { FVector2 } from '../types/FVector2'
import { FPolygon } from './FPolygon'

/**
 * A simple square in Fibbo.
 * @category Polygons
 * @example
 * ```ts
 * import { FScene, FRectangle } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const square = new FRectangle(scene)
 * scene.addComponent(square)
 * ```
 */
export class FRectangle extends FPolygon {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a square
    this.__CONTAINER__ = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, this.transform.scale.x * 100, this.transform.scale.y * 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Reset transform
    this.__SET_POSITION__(this.transform.position)
    this.__SET_ROTATION__(this.transform.rotation)
    this.__SET_SCALE__(this.transform.scale)
    // Emit the onLoaded event
    this.emitOnLoaded()
  }

  __SET_SCALE__(scale: FVector2): void {
    super.__SET_SCALE__(scale)
    this.__CONTAINER__.pivot.set(this.__CONTAINER__.width / 2, this.__CONTAINER__.height / 2)
  }
}
