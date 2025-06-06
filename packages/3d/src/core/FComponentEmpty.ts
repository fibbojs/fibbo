import type { FScene } from './FScene'
import { FComponent } from './FComponent'
import type { FComponentOptions } from './FComponent'

/**
 * An empty component. No mesh is created.
 * @category Core
 */
export class FComponentEmpty extends FComponent {
  constructor(options?: FComponentOptions) {
    super(options)
  }
}
