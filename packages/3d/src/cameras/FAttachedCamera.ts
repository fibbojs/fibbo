import * as THREE from 'three'
import type { FComponent } from '../FComponent'
import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

export interface FAttachedCameraOptions extends FCameraOptions {
  target: FComponent
}

/**
 * @description A camera that can be attached to a FComponent.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FAttachedCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FAttachedCamera(cube)
 * ```
 */
export class FAttachedCamera extends FCamera {
  // Component that the camera is attached to
  attachedComponent: FComponent
  // Offset from the component's position
  offset: { x: number, y: number, z: number } = { x: 0, y: 5, z: 5 }

  /**
   * @param attachedComponent Model that the camera is attached to
   */
  constructor(attachedComponent: FComponent) {
    super()
    this.attachedComponent = attachedComponent
  }

  onFrame(_delta: number): void {
    if (this.attachedComponent.mesh === undefined)
      return

    // Position the camera at the model's position + offset
    this.position.x = this.attachedComponent.mesh.position.x + this.offset.x
    this.position.y = this.attachedComponent.mesh.position.y + this.offset.y
    this.position.z = this.attachedComponent.mesh.position.z + this.offset.z
    // Make the camera look at the model
    this.lookAt(this.attachedComponent.mesh.position.x, this.attachedComponent.mesh.position.y, this.attachedComponent.mesh.position.z)
  }

  setPosition(x: number, y: number, z: number): void {
    super.setPosition(x, y, z)
    this.offset = new THREE.Vector3(x, y, z)
  }
}
