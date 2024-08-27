import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import type { FComponent3d } from '../FComponent3d'
import { FCamera3d } from './FCamera3d'

/**
 * @description A camera that can be attached to a FComponent3d and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene3d, FPointerLockCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FPointerLockCamera(cube)
 * ```
 */
export class FPointerLockCamera extends FCamera3d {
  // Model that the camera is attached to
  attachedComponent: FComponent3d
  // Pointer Lock controls
  controls: PointerLockControls

  /**
   * @param attachedComponent Component that the camera is attached to
   */
  constructor(attachedComponent: FComponent3d) {
    super()
    this.attachedComponent = attachedComponent

    // Create Pointer Lock controls
    this.controls = new PointerLockControls(this, attachedComponent.scene.renderer.domElement)

    attachedComponent.scene.scene.add(this.controls.getObject())

    // Lock controls when clicking on the renderer
    attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
      this.controls.lock()
    })
  }

  onFrame(_delta: number): void {
    if (this.attachedComponent.mesh === undefined)
      return

    // Position the camera at the model's position + offset
    this.position.x = this.attachedComponent.mesh.position.x
    this.position.y = this.attachedComponent.mesh.position.y
    this.position.z = this.attachedComponent.mesh.position.z
  }
}
