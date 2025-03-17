import { FComponent } from './FComponent'
import type { FScene } from './FScene'

export interface FCameraOptions {
  scene?: FScene
}

/**
 * The base class for cameras in Fibbo.
 * @category Core
 */
export abstract class FCamera extends FComponent {
  constructor(options?: FCameraOptions) {
    super({ addToScene: false, ...options })
  }
}
