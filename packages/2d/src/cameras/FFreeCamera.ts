import type { FScene } from '../core/FScene'
import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

/**
 * A free camera that can be moved around.
 * @category Camera
 */
export class FFreeCamera extends FCamera {
  constructor(scene: FScene, options?: FCameraOptions) {
    super(scene, options)
  }

  __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void {
    // Enable all plugins on the pixi viewport
    this.scene.viewport.plugins.resume('drag')
    this.scene.viewport.plugins.resume('pinch')
    this.scene.viewport.plugins.resume('wheel')
    this.scene.viewport.plugins.resume('decelerate')
    // Move the camera to the target
    this.scene.viewport.moveCenter(this.transform.position.x * 100, -this.transform.position.y * 100)
  }
}
