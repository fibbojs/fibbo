import type * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../core/FComponent'
import { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'

export interface GradientStep {
  position: number
  color: number
}

export interface FPolygonOptions extends FComponentOptions {
  color?: number
  gradient?: GradientStep[]
}

/**
 * A simple polygon in Fibbo.
 * @category Polygons
 */
export abstract class FPolygon extends FComponent {
  /**
   * The color of the polygon.
   */
  __COLOR__?: number
  /**
   * The gradient of the polygon.
   */
  __GRADIENT__?: GradientStep[]

  // Declare __CONTAINER__ as PIXI.Graphics to be able to use the Graphics methods
  declare __CONTAINER__: PIXI.Graphics

  constructor(scene: FScene, options?: FPolygonOptions) {
    super(scene, options)

    // Apply default options
    const DEFAULT_OPTIONS = {
      color: 0xB978ED,
      gradient: undefined,
      alpha: 1,
    }
    options = { ...DEFAULT_OPTIONS, ...options }

    // Validate options
    if ((options.color === undefined && options.gradient === undefined)) {
      throw new Error('FibboError: polygon requires color or gradient')
    }

    // Store options
    this.__COLOR__ = options.color
    this.__GRADIENT__ = options.gradient
  }

  /**
   * Draw the shape of the polygon.
   * This method should be implemented by the child class.
   * @param graphics The PIXI.Graphics object to draw the shape on.
   */
  abstract __DRAW_SHAPE__(graphics: PIXI.Graphics): void

  // Getters & setters

  get color(): number | undefined {
    return this.__COLOR__
  }

  set color(value: number | undefined) {
    this.__COLOR__ = value
    if (this.__COLOR__ !== undefined) {
      // Clear the container
      this.__CONTAINER__.clear()
      // Draw the shape
      this.__DRAW_SHAPE__(this.__CONTAINER__)
      // Fill the shape with the color
      this.__CONTAINER__.fill(this.__COLOR__)
    }
  }
}
