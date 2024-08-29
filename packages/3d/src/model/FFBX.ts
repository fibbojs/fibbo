import * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import type { FScene } from '../FScene'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/**
 * @description A FBX model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FFBX } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const fbx = new FFBX(scene, {
 *   path: 'model.fbx',
 * })
 * scene.addComponent(fbx)
 * ```
 */
export class FFBX extends FModel {
  constructor(scene: FScene, options: FModelOptions) {
    super(scene, {
      fileExtension: 'fbx',
      ...options,
    })

    // Create FBX Loader
    const loader = new FBXLoader()

    // Load the FBX resource
    loader.load(
      this.path,
      // Called when the resource is loaded
      (fbx) => {
        // Get the mesh from the FBX scene
        this.mesh = fbx

        // Load textures
        fbx.traverse((child) => {
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
        // Optional: Implement progress tracking if needed
      },
      // Called when loading has errors
      (error) => {
        console.error(`FibboError: An error happened while loading the FBX model: ${this.path}`)
        console.error(error)
      },
    )
  }

  defineMeshTransforms() {
    // If the mesh is not defined, return
    if (!this.mesh)
      return

    super.defineMeshTransforms()

    // Define the scale differently for FBX models as they are usually larger
    if (this.transform.scale) {
      this.mesh.scale.set(this.transform.scale.x / 200, this.transform.scale.y / 200, this.transform.scale.z / 200)
    }
  }
}
