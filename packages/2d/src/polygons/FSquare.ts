import * as PIXI from 'pixi.js'
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
 * const square = new FSquare()
 * scene.addComponent(square)
 * ```
 */
export class FSquare extends FComponent2d {
  constructor(scene: FScene2d) {
    super(scene)
    // Create a square
    this.container = new PIXI.Graphics()
      .rect(this.position.x, this.position.y, this.scale.x * 100, this.scale.y * 100)
      .fill(0xFF0000)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }
}
