import { FGLTF } from "./FGLTF";
import type { FModelOptions } from "./FModel";

/**
 * A GLB model in Fibbo.
 * For now, it is just a wrapper around FGLTF as GLB is a binary form of glTF.
 * @category Model
 * @example
 * ```ts
 * import { FGLB } from '@fibbojs/3d'
 *
 * const glb = new FGLB({
 *  path: 'model.glb',
 * })
 * ```
 */
export class FGLB extends FGLTF {
	constructor(options: FModelOptions) {
		super({
			fileExtension: "glb",
			...options,
		});
	}
}
