import type { FibboVector3 } from '../types/FibboVector3'
import type { FibboModel } from '../model/FibboModel'
import { FibboCamera } from './FibboCamera'

/**
 * @description A camera that can be attached to a FibboModel.
 * @category Camera
 * @example
 * ```ts
 * import { FibboAttachedCamera } from '@fibbojs/fibbo'
 * import type { FibboModel } from '@fibbojs/fibbo'
 *
 * export default class MyAttachedCamera extends FibboAttachedCamera {
 *  constructor(attachedModel: FibboModel) {
 *   super(attachedModel)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FibboAttachedCamera extends FibboCamera {
  // Model that the camera is attached to
  attachedModel: FibboModel
  // Offset from the model's position
  offset: FibboVector3 = { x: 0, y: 5, z: 5 }

  /**
   * @param attachedModel Model that the camera is attached to
   */
  constructor(attachedModel: FibboModel) {
    super()
    this.attachedModel = attachedModel
  }

  onFrame(_delta: number): void {
    if (this.attachedModel.object3D === undefined)
      return

    // Position the camera at the model's position + offset
    this.position.x = this.attachedModel.object3D.position.x + this.offset.x
    this.position.y = this.attachedModel.object3D.position.y + this.offset.y
    this.position.z = this.attachedModel.object3D.position.z + this.offset.z
    // Make the camera look at the model
    this.lookAt(this.attachedModel.object3D.position.x, this.attachedModel.object3D.position.y, this.attachedModel.object3D.position.z)
  }
}
