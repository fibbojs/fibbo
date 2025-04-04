import { FComponent } from './FComponent'
import type { FComponentOptions } from './FComponent'

/**
 * An empty component. The PIXI container will be empty.
 * @category Core
 */
export class FComponentEmpty extends FComponent {
  constructor(options?: FComponentOptions) {
    super(options)
  }
}
