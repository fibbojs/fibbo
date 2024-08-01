import type * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import type { FComponent3d } from '../FComponent3d'
import { FOrbitCamera } from './FOrbitCamera'

/**
 * @description A camera that can be attached to a FComponent3d and orbits around it in a more game-like way.
 * @category Camera
 * @example
 * ```ts
 * import { FScene3d, FGameCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FGameCamera(cube, scene)
 * ```
 */
export class FGameCamera extends FOrbitCamera {
  // Previous position of the attached component (at each frame)
  private previousModelPosition: THREE.Vector3

  /**
   * @param attachedComponent Component that the camera is attached to
   * @param scene Scene that the camera is in
   */
  constructor(attachedComponent: FComponent3d, scene: FScene3d) {
    super(attachedComponent, scene)
    this.previousModelPosition = attachedComponent.position.clone()
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)

    if (!this.attachedComponent.mesh)
      return

    // Calculate the difference between the previous and current position of the attached model
    const positionDifference = this.attachedComponent.mesh.position.clone().sub(this.previousModelPosition)
    // Move the camera by the same amount
    this.position.add(positionDifference)
    // Update the previous position
    this.previousModelPosition = this.attachedComponent.mesh.position.clone()
  }
}
