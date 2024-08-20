import type { FScene3d } from '../FScene3d'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple cube model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FCube extends FPolyhedron {
  constructor(scene: FScene3d, options?: {
    position?: { x: number, y: number, z: number }
    scale?: { x: number, y: number, z: number }
    rotation?: { x: number, y: number, z: number }
    rotationDegree?: { x: number, y: number, z: number }
  }) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
