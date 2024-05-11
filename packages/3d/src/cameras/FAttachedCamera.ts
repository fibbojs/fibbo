import * as THREE from 'three'
import type { FModel } from '../model/FModel'
import { FCamera3d } from './FCamera3d'

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
export class FAttachedCamera extends FCamera3d {
  // Model that the camera is attached to
  attachedModel: FModel
  // Offset from the model's position
  offset: THREE.Vector3 = new THREE.Vector3(0, 5, 5)

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

  setPosition(x: number, y: number, z: number): void {
    super.setPosition(x, y, z)
    this.offset = new THREE.Vector3(x, y, z)
  }
}
