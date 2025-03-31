import type { FComponentOptions } from '../core/FComponent'
import { FPolyhedron } from './FPolyhedron'

/**
 * A simple cube model in Fibbo.
 * @category Polyhedrons
 * @example
 * ```ts
 * import { FCuboid } from '@fibbojs/3d'
 *
 * const cube = new FCuboid()
 * ```
 */
export class FCuboid extends FPolyhedron {
  constructor(options?: FComponentOptions) {
    super(options)
    // Emit the onLoaded event
    this.emitOnLoaded()
  }
}
