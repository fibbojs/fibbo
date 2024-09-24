import type { FScene } from './FScene'
import { FComponent } from './FComponent'
import type { FComponentOptions } from './FComponent'

/**
 * An empty component. The container is empty.
 * @category Core
 */
export class FComponentEmpty extends FComponent {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
