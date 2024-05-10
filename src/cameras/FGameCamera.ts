import type * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FModel } from '../model/FModel'
import { FOrbitCamera } from './FOrbitCamera'

/**
 * @description A camera that can be attached to a FModel and orbits around it in a more game-like way.
 * @category Camera
 * @example
 * ```ts
 * import { FGameCamera } from '@fibbojs/fibbo'
 * import type { FModel, FScene } from '@fibbojs/fibbo'
 *
 * export default class MyGameCamera extends FGameCamera {
 *  constructor(attachedModel: FModel, scene: FScene) {
 *   super(attachedModel, scene)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FGameCamera extends FOrbitCamera {
  // Previous position of the attached model (at each frame)
  private previousModelPosition: THREE.Vector3

  /**
   * @param attachedModel Model that the camera is attached to
   * @param scene Scene that the camera is in
   */
  constructor(attachedModel: FModel, scene: FScene) {
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
