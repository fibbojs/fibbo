import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import type { FComponent } from '../core/FComponent'
import { FCamera } from './FCamera'
import type { FAttachedCameraOptions } from './FAttachedCamera'

/**
 * A camera that can be attached to a FComponent and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FPointerLockCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid(scene)
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
   * @param options Options for the camera.
   */
  constructor(options: FAttachedCameraOptions) {
    super(options)
    this.attachedComponent = options.target

    // Create Pointer Lock controls
    this.controls = new PointerLockControls(this, this.attachedComponent.scene.renderer.domElement)

    this.attachedComponent.scene.scene.add(this.controls.getObject())

    // Lock controls when clicking on the renderer
    this.attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
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
