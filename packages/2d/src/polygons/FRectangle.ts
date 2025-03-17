import * as PIXI from 'pixi.js'
import type { FVector2 } from '@fibbojs/core'
import type { FPolygonOptions } from './FPolygon'
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
 * const square = new FRectangle()
 * scene.addComponent(square)
 * ```
 */
export class FRectangle extends FPolygon {
  constructor(options?: FPolygonOptions) {
    super(options)
    // Create the rectangle
    this.__CONTAINER__ = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)

    // If a gradient was provided, use it to fill the rectangle
    if (this.__GRADIENT__ !== undefined) {
      const gradient = new PIXI.FillGradient(0, 0, this.transform.scale.x * 100, this.transform.scale.y * 100)
      this.__GRADIENT__.forEach(step => gradient.addColorStop(step.position, step.color))
      this.__CONTAINER__.fill(gradient)
    }
    // Else of a color was provided, use it to fill the rectangle
    else if (this.__COLOR__ !== undefined) {
      this.__CONTAINER__.fill(this.__COLOR__)
    }

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

  __DRAW_SHAPE__(graphics: PIXI.Graphics): void {
    graphics.rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
  }
}
