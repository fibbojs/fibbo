import type { FComponent2d } from '../FComponent2d'
import type { FScene2d } from '../FScene2d'
import type { FCamera2dOptions } from './FCamera2d'
import { FCamera2d } from './FCamera2d'

export interface FAttachedCameraOptions extends FCamera2dOptions {
  target: FComponent2d
}

/**
 * @description A camera attached to a given target.
 * @category Camera
 */
export class FAttachedCamera extends FCamera2d {
  /**
   * @description The target to follow.
   */
  target: FComponent2d

  constructor(scene: FScene2d, options: FAttachedCameraOptions) {
    super(scene, options)
    this.target = options.target
  }

  onFrame(_delta: number): void {
    // Move the camera to the target
    this.scene.viewport.moveCenter(
      this.target.position.x * 100 + this.position.x * 100,
      -this.target.position.y * 100 - this.position.y * 100,
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
