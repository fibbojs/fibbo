import type { FVector3 } from '@fibbojs/core'
import type { FComponent } from '../core/FComponent'
import type { FCameraOptions } from './FCamera'
import { FCamera } from './FCamera'

export interface FAttachedCameraOptions extends FCameraOptions {
  target: FComponent
}

/**
 * A camera that can be attached to a FComponent.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FAttachedCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid()
 *
 * scene.camera = new FAttachedCamera({
 *  target: cube
 * })
 * ```
 */
export class FAttachedCamera extends FCamera {
  // Component that the camera is attached to
  attachedComponent: FComponent
  // Offset from the component's position
  offset: FVector3 = { x: 0, y: 5, z: 5 }

  /**
   * @param options Options for the camera
   * @param options.target Component that the camera is attached to
   */
  constructor(options: FAttachedCameraOptions) {
    super(options)
    this.attachedComponent = options.target
  }

  frame(_delta: number): void {
    if (this.attachedComponent.__MESH__ === undefined)
      return

    // Position the camera at the model's position + offset
    this.transform.x = this.attachedComponent.__MESH__.position.x + this.offset.x
    this.transform.y = this.attachedComponent.__MESH__.position.y + this.offset.y
    this.transform.z = this.attachedComponent.__MESH__.position.z + this.offset.z
    // Make the camera look at the model
    this.lookAt({
      x: this.attachedComponent.__MESH__.position.x,
      y: this.attachedComponent.__MESH__.position.y,
      z: this.attachedComponent.__MESH__.position.z,
    })
  }
}
