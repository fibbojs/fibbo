import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { FScene3d } from '../FScene3d'
import type { FModel } from '../model/FModel'
import { FCamera3d } from './FCamera3d'

/**
 * @description A camera that can be attached to a FModel and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FOrbitCamera } from '@fibbojs/fibbo'
 * import type { FModel, FScene } from '@fibbojs/fibbo'
 *
 * export default class MyOrbitCamera extends FOrbitCamera {
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
export class FOrbitCamera extends FCamera3d {
  // Model that the camera is attached to
  attachedModel: FModel
  // Orbit controls
  controls: OrbitControls

  /**
   * @param attachedModel Model that the camera is attached to
   * @param scene Scene that the camera is in
   */
  constructor(attachedModel: FModel, scene: FScene3d) {
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

  setPosition(x: number, y: number, z: number): void {
    super.setPosition(x, y, z)
    // Set the position of the camera relative to the attached model
    this.position.set(this.attachedModel.position.x + x, this.attachedModel.position.y + y, this.attachedModel.position.z + z)
    // Set the target of the camera to the attached model
    this.lookAt(this.attachedModel.position)
  }
}
