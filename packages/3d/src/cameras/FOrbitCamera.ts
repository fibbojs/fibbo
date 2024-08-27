import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { FComponent3d } from '../FComponent3d'
import { FCamera3d } from './FCamera3d'

/**
 * @description A camera that can be attached to a FComponent3d and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene3d, FOrbitCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FOrbitCamera(cube)
 * ```
 */
export class FOrbitCamera extends FCamera3d {
  // Model that the camera is attached to
  attachedComponent: FComponent3d
  // Orbit controls
  controls: OrbitControls

  /**
   * @param attachedComponent Component that the camera is attached to
   */
  constructor(attachedComponent: FComponent3d) {
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
    this.position.set(this.attachedComponent.position.x + x, this.attachedComponent.position.y + y, this.attachedComponent.position.z + z)
    // Set the target of the camera to the attached model
    this.lookAt(this.attachedComponent.position)
  }
}
