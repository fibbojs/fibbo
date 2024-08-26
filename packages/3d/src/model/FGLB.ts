import type { FScene3d } from '../FScene3d'
import type { FModelOptions } from './FModel'
import { FGLTF } from './FGLTF'

/**
 * @description A GLB model in FibboJS.
 * For now, it is just a wrapper around FGLTF as GLB is a binary form of glTF.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FGLB } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const glb = new FGLB(scene, {
 *  path: 'model.glb',
 * })
 * scene.addComponent(glb)
 * ```
 */
export class FGLB extends FGLTF {
  constructor(scene: FScene3d, options: FModelOptions) {
    super(scene, {
      fileExtension: 'glb',
      ...options,
    })
  }
}
