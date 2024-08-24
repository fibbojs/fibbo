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
  constructor(scene: FScene3d, options?: FModelOptions) {
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

        // Apply textures if available
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const textureLoader = new THREE.TextureLoader()
            // Check if the material has texture properties
            if (child.material.name) {
              // Load the texture
              textureLoader.load(`models/${child.name}/${child.material.name}.png`, (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace
                // Apply the texture to the material
                child.material = new THREE.MeshBasicMaterial({ map: texture })
              })
            }
          }
        })

        // If a position is defined, apply it
        if (this.position) {
          this.mesh.position.set(this.position.x, this.position.y, this.position.z)
        }

        // If a scale is defined, apply it
        if (this.scale) {
          this.mesh.scale.set(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2)
        }

        // If a rotation is defined, apply it
        if (this.rotation) {
          this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z)
        }

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
