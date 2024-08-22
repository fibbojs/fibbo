import type { FScene2d } from '../FScene2d'
import type { FCamera2dOptions } from './FCamera2d'
import { FCamera2d } from './FCamera2d'

/**
 * @description A fixed camera.
 * @category Camera
 */
export class FFixedCamera extends FCamera2d {
  constructor(scene: FScene2d, options?: FCamera2dOptions) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
  }

  __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void {
    // Disable all plugins on the pixi viewport
    this.scene.viewport.plugins.pause('drag')
    this.scene.viewport.plugins.pause('pinch')
    this.scene.viewport.plugins.pause('wheel')
    this.scene.viewport.plugins.pause('decelerate')
    // Move the camera to the target
    this.scene.viewport.moveCenter(this.position.x * 100, -this.position.y * 100)
  }
}