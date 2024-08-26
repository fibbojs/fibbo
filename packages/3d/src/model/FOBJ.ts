import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import type { FScene3d } from '../FScene3d'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/**
 * @description An OBJ model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FOBJ } from '@fibbojs/3d';
 *
 * const scene = new FScene3d();
 *
 * const obj = new FOBJ(scene, {
 *   path: 'model.obj',
 * });
 * scene.addComponent(obj);
 * ```
 */
export class FOBJ extends FModel {
  constructor(scene: FScene3d, options: FModelOptions) {
    super(scene, options)

    // Create OBJ Loader
    const loader = new OBJLoader()

    // Load the OBJ resource
    loader.load(
      this.path,
      // Called when the resource is loaded
      (obj) => {
        // Get the mesh from the OBJ object
        this.mesh = obj

        // Load textures
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            this.loadTextureForMesh(child)
          }
        })

        // Define mesh transforms
        this.defineMeshTransforms()

        // Call the onLoaded Callbacks
        this.emitOnLoaded()
      },
      // Called while loading is progressing
      (_xhr) => {
      },
      // Called when loading has errors
      (error) => {
        console.log(`An error happened while loading the model: ${this.path}`)
        console.log(error)
      },
    )
  }
}
