import { FComponent } from './FComponent'

/**
 * @description The base class for cameras in Fibbo.
 */
export abstract class FCamera extends FComponent {
  constructor() {
    super()
  }

  /**
   * @description Set the zoom of the camera.
   */
  abstract setZoom(zoom: number): void
}
