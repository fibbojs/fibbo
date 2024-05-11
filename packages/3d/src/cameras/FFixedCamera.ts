import { FCamera3d } from './FCamera3d'

/**
 * @description A fixed camera that does not move.
 * @category Camera
 * @example
 * ```ts
 * import { FScene3d, FFixedCamera } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * scene.camera = new FFixedCamera()
 * scene.camera.setPosition(0, 5, 5)
 * scene.camera.lookAt(0, 0, 0)
 * ```
 */
export class FFixedCamera extends FCamera3d {
  constructor() {
    super()
  }

  onFrame(_delta: number): void {
  }
}
