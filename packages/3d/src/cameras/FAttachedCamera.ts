import * as THREE from 'three'
import type { FModel } from '../model/FModel'
import { FCamera3d } from './FCamera3d'

/**
 * @description A camera that can be attached to a FModel.
 * @category Camera
 * @example
 * ```ts
 * import { FScene3d, FAttachedCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FAttachedCamera(cube)
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
