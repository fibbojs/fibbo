import type * as THREE from 'three'
import type { FibboScene } from '../core/FibboScene'
import type { FibboModel } from '../model/FibboModel'
import { FibboOrbitCamera } from './FibboOrbitCamera'

/**
 * @description A camera that can be attached to a FibboModel and orbits around it in a more game-like way.
 * @category Camera
 * @example
 * ```ts
 * import { FibboGameCamera } from '@fibbojs/fibbo'
 * import type { FibboModel, FibboScene } from '@fibbojs/fibbo'
 *
 * export default class MyGameCamera extends FibboGameCamera {
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
export class FibboGameCamera extends FibboOrbitCamera {
  // Previous position of the attached model (at each frame)
  private previousModelPosition: THREE.Vector3

  /**
   * @param attachedModel Model that the camera is attached to
   * @param scene Scene that the camera is in
   */
  constructor(attachedModel: FibboModel, scene: FibboScene) {
    super(attachedModel, scene)
    this.previousModelPosition = attachedModel.position.clone()
  }

  onFrame(delta: number): void {
    super.onFrame(delta)

    if (!this.attachedModel.object3D)
      return

    // Calculate the difference between the previous and current position of the attached model
    const positionDifference = this.attachedModel.object3D.position.clone().sub(this.previousModelPosition)
    // Move the camera by the same amount
    this.position.add(positionDifference)
    // Update the previous position
    this.previousModelPosition = this.attachedModel.object3D.position.clone()
  }
}
