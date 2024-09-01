import type { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'
import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

export interface FAttachedCameraOptions extends FCameraOptions {
  target: FComponent
}

/**
 * @description A camera attached to a given target.
 * @category Camera
 */
export class FAttachedCamera extends FCamera {
  /**
   * @description The target to follow.
   */
  target: FComponent

  constructor(scene: FScene, options: FAttachedCameraOptions) {
    super(scene, options)
    this.target = options.target
  }

  onFrame(_delta: number): void {
    // Move the camera to the target
    this.scene.viewport.moveCenter(
      this.target.transform.position.x * 100 + this.position.x * 100,
      -this.target.transform.position.y * 100 - this.position.y * 100,
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
