import { FComponent } from './FComponent'
import type { FScene } from './FScene'

/**
 * The base class for cameras in Fibbo.
 * @category Core
 */
export abstract class FCamera extends FComponent {
  constructor(scene: FScene) {
    super(scene, { addToScene: false })
  }
}
