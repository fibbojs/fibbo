import type { FModelOptions } from './FModel'
import { FGLTF } from './FGLTF'

/**
 * A GLB model in Fibbo.
 * For now, it is just a wrapper around FGLTF as GLB is a binary form of glTF.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FGLB } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const glb = new FGLB({
 *  path: 'model.glb',
 * })
 * scene.addComponent(glb)
 * ```
 */
export class FGLB extends FGLTF {
  constructor(options: FModelOptions) {
    super({
      fileExtension: 'glb',
      ...options,
    })
  }
}
