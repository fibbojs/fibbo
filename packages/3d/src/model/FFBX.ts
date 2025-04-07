import * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import type { FVector3 } from '@fibbojs/core'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/**
 * A FBX model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FFBX } from '@fibbojs/3d'
 *
 * const fbx = new FFBX({
 *   path: 'model.fbx',
 * })
 * ```
 */
export class FFBX extends FModel {
  constructor(options: FModelOptions) {
    super({
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
        this.__MESH__ = fbx

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
    if (!this.__MESH__)
      return

    super.defineMeshTransforms()

    // Define the scale differently for FBX models as they are usually larger
    if (this.transform.scale) {
      this.__MESH__.scale.set(this.transform.scale.x / 200, this.transform.scale.y / 200, this.transform.scale.z / 200)
    }
  }

  __SET_SCALE__(scale: FVector3): void {
    super.__SET_SCALE__({
      x: scale.x / 200,
      y: scale.y / 200,
      z: scale.z / 200,
    })
  }
}
