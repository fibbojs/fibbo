import type { FVector3 } from '../types/FVector3'
import type { FModel } from '../model/FModel'
import { FCamera } from './FCamera'

/**
 * @description A camera that can be attached to a FModel.
 * @category Camera
 * @example
 * ```ts
 * import { FAttachedCamera } from '@fibbojs/fibbo'
 * import type { FModel } from '@fibbojs/fibbo'
 *
 * export default class MyAttachedCamera extends FAttachedCamera {
 *  constructor(attachedModel: FModel) {
 *   super(attachedModel)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FAttachedCamera extends FCamera {
  // Model that the camera is attached to
  attachedModel: FModel
  // Offset from the model's position
  offset: FVector3 = { x: 0, y: 5, z: 5 }

  /**
   * @param attachedModel Model that the camera is attached to
   */
  constructor(attachedModel: FModel) {
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
