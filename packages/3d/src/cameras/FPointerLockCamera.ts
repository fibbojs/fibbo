import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import type { FComponent } from '../core/FComponent'
import { FCamera } from './FCamera'
import type { FAttachedCameraOptions } from './FAttachedCamera'

/**
 * A camera that can be attached to a FComponent and uses Pointer Lock controls.
 * This camera is useful for first-person or immersive experiences where the camera
 * is locked to the mouse movement and the user can look around freely.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FPointerLockCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid()
 *
 * scene.camera = new FPointerLockCamera({
 *  target: cube
 * })
 * ```
 */
export class FPointerLockCamera extends FCamera {
  // Model that the camera is attached to
  attachedComponent: FComponent
  // Pointer Lock controls
  controls: PointerLockControls

  constructor(options: FAttachedCameraOptions) {
    super(options)
    this.attachedComponent = options.target

    // Create Pointer Lock controls
    this.controls = new PointerLockControls(this.__CAMERA__, this.attachedComponent.scene.renderer.domElement)

    this.attachedComponent.scene.scene.add(this.controls.getObject())

    // Lock controls when clicking on the renderer's DOM element
    this.attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
      this.controls.lock()
    })
  }

  frame(_delta: number): void {
    if (this.attachedComponent.__MESH__ === undefined)
      return

    // Position the camera at the model's position + offset
    this.transform.x = this.attachedComponent.__MESH__.position.x
    this.transform.y = this.attachedComponent.__MESH__.position.y
    this.transform.z = this.attachedComponent.__MESH__.position.z
  }
}
