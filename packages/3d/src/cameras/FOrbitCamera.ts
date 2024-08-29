import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { FComponent } from '../FComponent'
import { FCamera } from './FCamera'

/**
 * @description A camera that can be attached to a FComponent and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FOrbitCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FOrbitCamera(cube)
 * ```
 */
export class FOrbitCamera extends FCamera {
  // Model that the camera is attached to
  attachedComponent: FComponent
  // Orbit controls
  controls: OrbitControls

  /**
   * @param attachedComponent Component that the camera is attached to
   */
  constructor(attachedComponent: FComponent) {
    super()
    this.attachedComponent = attachedComponent

    // Create orbit controls
    this.controls = new OrbitControls(this, attachedComponent.scene.renderer.domElement)
  }

  onFrame(_delta: number): void {
    if (this.attachedComponent.mesh === undefined)
      return

    this.controls.target = this.attachedComponent.mesh.position
    this.controls.update()
  }

  setPosition(x: number, y: number, z: number): void {
    super.setPosition(x, y, z)
    // Set the position of the camera relative to the attached model
    this.position.set(this.attachedComponent.transform.position.x + x, this.attachedComponent.transform.position.y + y, this.attachedComponent.transform.position.z + z)
    // Set the target of the camera to the attached model
    this.lookAt(this.attachedComponent.transform.position)
  }
}
