import type { FComponent } from './FComponent'

export interface FControllerOptions {
  component: FComponent
}

/**
 * The base class for all 2D and 3D controllers in Fibbo.
 * @category Core
 */
export abstract class FController {
  /**
   * The component attached to the controller.
   */
  public component: FComponent

  /**
   * @param options The options for the controller.
   * @param options.component The component that the controller is controlling.
   */
  constructor(options: FControllerOptions) {
    this.component = options.component
  }

  /**
   * Update the controller. Should be called every frame.
   * The purpose of this method is to update the component transform based on the controller logic.
   * @param delta The time since the last frame.
   */
  abstract frame(delta: number): void
}
