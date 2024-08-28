import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import type { FComponent } from '../FComponent'
import { FCamera } from './FCamera'

/**
 * @description A camera that can be attached to a FComponent and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FPointerLockCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FPointerLockCamera(cube)
 * ```
 */
export class FPointerLockCamera extends FCamera {
  // Model that the camera is attached to
  attachedComponent: FComponent
  // Pointer Lock controls
  controls: PointerLockControls

  /**
   * @param attachedComponent Component that the camera is attached to
   */
  constructor(attachedComponent: FComponent) {
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
