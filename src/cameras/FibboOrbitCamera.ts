import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { FibboScene } from '../core/FibboScene'
import type { FibboModel } from '../model/FibboModel'
import { FibboCamera } from './FibboCamera'

/**
 * @description A camera that can be attached to a FibboModel and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FibboOrbitCamera } from '@fibbojs/fibbo'
 * import type { FibboModel, FibboScene } from '@fibbojs/fibbo'
 *
 * export default class MyOrbitCamera extends FibboOrbitCamera {
 *  constructor(attachedModel: FibboModel, scene: FibboScene) {
 *   super(attachedModel, scene)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FibboOrbitCamera extends FibboCamera {
  // Model that the camera is attached to
  attachedModel: FibboModel
  // Orbit controls
  controls: OrbitControls

  /**
   * @param attachedModel Model that the camera is attached to
   * @param scene Scene that the camera is in
   */
  constructor(attachedModel: FibboModel, scene: FibboScene) {
    super()
    this.attachedModel = attachedModel

    // Create orbit controls
    this.controls = new OrbitControls(this, scene.renderer.domElement)
  }

  onFrame(_delta: number): void {
    if (this.attachedModel.object3D === undefined)
      return

    this.controls.target = this.attachedModel.object3D.position
    this.controls.update()
  }
}
