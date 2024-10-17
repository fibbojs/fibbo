import type { FComponentOptions } from '../core/FComponent'
import type { FScene } from '../core/FScene'
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
    // Emit the onLoaded event
    this.emitOnLoaded()
  }
}
