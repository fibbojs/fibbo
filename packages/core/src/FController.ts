import type { FComponent } from './FComponent'

export interface FControllerOptions {
  component: FComponent
}

/**
 * @description The base class for all 2D and 3D controllers in Fibbo.
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
   * @description Update the controller. Should be called every frame.
   * The purpose of `onFrame` on FController is to update the component's transform in the desired way.
   * Any rendering process should be done on the component, not here.
   * @param delta The time since the last frame.
   */
  abstract onFrame(delta: number): void
}
