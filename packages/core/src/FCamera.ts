import { FComponent } from './FComponent'

/**
 * The base class for cameras in Fibbo.
 */
export abstract class FCamera extends FComponent {
  constructor() {
    super()
  }

  /**
   * Set the zoom of the camera.
   */
  abstract setZoom(zoom: number): void
}
