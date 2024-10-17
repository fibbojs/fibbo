import { FComponent } from './FComponent'
import type { FScene } from './FScene'

/**
 * The base class for lights in Fibbo.
 * @category Core
 */
export abstract class FLight extends FComponent {
  constructor(scene: FScene) {
    super(scene)
  }
}
