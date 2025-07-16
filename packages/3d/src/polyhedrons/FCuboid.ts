import type { FPolyhedronOptions } from "./FPolyhedron";
import { FPolyhedron } from "./FPolyhedron";

/**
 * A simple cuboid model in Fibbo.
 * @category Polyhedrons
 * @example
 * ```ts
 * import { FCuboid } from '@fibbojs/3d'
 *
 * const cube = new FCuboid()
 * ```
 */
export class FCuboid extends FPolyhedron {
	constructor(options?: FPolyhedronOptions) {
		super(options);
		// Emit the onLoaded event
		this.emitOnLoaded();
	}
}
