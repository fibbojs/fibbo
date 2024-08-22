import * as PIXI from 'pixi.js'
import type { FComponent2dOptions } from '../FComponent2d'
import { FComponent2d } from '../FComponent2d'
import type { FScene2d } from '../FScene2d'

/**
 * @description A simple square in FibboJS.
 * @category Polygons
 * @example
 * ```ts
 * import { FScene2d, FSquare } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const square = new FSquare(scene)
 * scene.addComponent(square)
 * ```
 */
export class FSquare extends FComponent2d {
  constructor(scene: FScene2d, options?: FComponent2dOptions) {
    super(scene, options)
    // Create a square
    this.container = new PIXI.Graphics()
      .rect(this.position.x, this.position.y, this.scale.x * 100, this.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, this.scale.x * 100, this.scale.y * 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }
}
