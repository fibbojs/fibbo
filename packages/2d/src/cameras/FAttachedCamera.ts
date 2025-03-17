import type { FComponent } from '../core/FComponent'
import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

export interface FAttachedCameraOptions extends FCameraOptions {
  target: FComponent
}

/**
 * A camera attached to a given target.
 * @category Camera
 */
export class FAttachedCamera extends FCamera {
  /**
   * The target to follow.
   */
  target: FComponent

  constructor(options: FAttachedCameraOptions) {
    super(options)
    this.target = options.target
  }

  frame(_delta: number): void {
    // Move the camera to the target
    this.scene.viewport.moveCenter(
      this.target.__CONTAINER__.position.x + this.transform.position.x * 100,
      this.target.__CONTAINER__.position.y - this.transform.position.y * 100,
    )
  }

  __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void {
    // Disable all plugins on the pixi viewport
    this.scene.viewport.plugins.pause('drag')
    this.scene.viewport.plugins.pause('pinch')
    this.scene.viewport.plugins.pause('wheel')
    this.scene.viewport.plugins.pause('decelerate')
  }
}
