import { FCamera } from "./FCamera";

/**
 * A fixed camera that does not move.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FFixedCamera } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * scene.camera = new FFixedCamera()
 * scene.camera.setPosition(0, 5, 5)
 * scene.camera.lookAt(0, 0, 0)
 * ```
 */
export class FFixedCamera extends FCamera {}
