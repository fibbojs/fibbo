import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple cube model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FCube extends FPolyhedron {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
