import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple cube model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FCuboid extends FPolyhedron {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
