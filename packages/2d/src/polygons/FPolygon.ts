import type { FComponentOptions } from '../core/FComponent'
import { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'

/**
 * A simple polygon in Fibbo.
 * @category Polygons
 */
export abstract class FPolygon extends FComponent {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
  }
}
