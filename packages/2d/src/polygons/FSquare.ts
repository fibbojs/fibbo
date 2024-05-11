import * as PIXI from 'pixi.js'
import { FComponent2d } from '../FComponent2d'

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
  constructor() {
    super()
    // Create a square
    this.container = new PIXI.Graphics()
      .rect(0, 0, 100, 100)
      .fill(0xFF0000)
    // Set the pivot point to the center of the square
    this.container.pivot.set(50, 50)
    // Move the square to 50, 50
    this.container.position.set(50, 50)
  }

  onFrame(delta: number): void {
    // Make the square rotate
    this.container.rotation += 1 * delta
  }

  setPosition(x: number, y: number): void {
    this.container.position.set(x, y)
  }

  setScale(x: number, y: number): void {
    this.container.scale.set(x, y)
  }

  setRotation(x: number, y: number): void {
    this.container.rotation = x
    this.container.rotation = y
  }
}
