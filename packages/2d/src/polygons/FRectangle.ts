import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../FComponent'
import { FComponent } from '../FComponent'
import type { FScene } from '../FScene'
import { FPolygon } from './FPolygon'

/**
 * @description A simple square in Fibbo.
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
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }
}
