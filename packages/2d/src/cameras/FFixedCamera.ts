import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

/**
 * A fixed camera.
 * @category Camera
 */
export class FFixedCamera extends FCamera {
  constructor(options?: FCameraOptions) {
    super(options)
  }

  __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void {
    // Disable all plugins on the pixi viewport
    this.scene.viewport.plugins.pause('drag')
    this.scene.viewport.plugins.pause('pinch')
    this.scene.viewport.plugins.pause('wheel')
    this.scene.viewport.plugins.pause('decelerate')
    // Move the camera to the target
    this.scene.viewport.moveCenter(this.transform.position.x * 100, -this.transform.position.y * 100)
  }
}
