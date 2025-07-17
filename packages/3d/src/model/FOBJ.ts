import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import type { FModelOptions } from "./FModel";
import { FModel } from "./FModel";

/**
 * An OBJ model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FOBJ } from '@fibbojs/3d'
 *
 * const obj = new FOBJ({
 *   path: 'model.obj',
 * })
 * ```
 */
export class FOBJ extends FModel {
	constructor(options: FModelOptions) {
		super({
			fileExtension: "obj",
			...options,
		});

		// Create OBJ Loader
		const loader = new OBJLoader();

		// Load the OBJ resource
		loader.load(
			this.path,
			// Called when the resource is loaded
			(obj) => {
				// Get the mesh from the OBJ object
				this.__MESH__ = obj;

				// Load textures
				obj.traverse((child) => {
					if (child instanceof THREE.Mesh && child.material) {
						this.loadTextureForMesh(child);
					}
				});

				// Define mesh transforms
				this.defineMeshTransforms();

				// Call the onLoaded Callbacks
				this.emitOnLoaded();
			},
			// Called while loading is progressing
			(_xhr) => {},
			// Called when loading has errors
			(error) => {
				console.log(`An error happened while loading the model: ${this.path}`);
				console.log(error);
			},
		);
	}
}
