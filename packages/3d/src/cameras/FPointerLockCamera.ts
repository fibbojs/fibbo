import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import type { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'
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

  constructor(scene: FScene, options: FAttachedCameraOptions) {
    super(scene, options)
    this.attachedComponent = options.target

    // Create Pointer Lock controls
    this.controls = new PointerLockControls(this.__CAMERA__, this.attachedComponent.scene.renderer.domElement)

    this.attachedComponent.scene.scene.add(this.controls.getObject())

    // Lock controls when clicking on the renderer
    this.attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
      this.controls.lock()
    })
  }

  frame(_delta: number): void {
    if (this.attachedComponent.__MESH__ === undefined)
      return

    // Position the camera at the model's position + offset
    this.position.x = this.attachedComponent.__MESH__.position.x
    this.position.y = this.attachedComponent.__MESH__.position.y
    this.position.z = this.attachedComponent.__MESH__.position.z
  }
}
