import { FController as FControllerCore } from '@fibbojs/core'
import type { FControllerOptions as FControllerOptionsCore } from '@fibbojs/core'
import type { FComponent } from '../core/FComponent'

export interface FControllerOptions extends FControllerOptionsCore {
  component: FComponent
  runInPhysicPipeline?: boolean
}

/**
 * The base class for 3D controllers in Fibbo.
 */
export abstract class FController extends FControllerCore {
  /**
   * The component attached to the controller.
   * It is redefined here to get the correct type (with 3D properties).
   */
  public component: FComponent

  /**
   * @param options The options for the controller.
   * @param options.component The component that the controller is controlling.
   */
  constructor(options: FControllerOptions) {
    super(options)
    this.component = options.component
  }
}
