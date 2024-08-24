import type * as THREE from 'three'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import type { FScene3d } from '../FScene3d'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/**
 * @description A FBX model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FFBX } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const fbx = new FFBX(scene, {
 *   path: 'model.fbx',
 * })
 * scene.addComponent(fbx)
 * ```
 */
export class FFBX extends FModel {
  constructor(scene: FScene3d, options?: FModelOptions) {
    super(scene, options)

    // Create FBX Loader
    const loader = new FBXLoader()

    // Load the FBX resource
    loader.load(
      this.path,
      // Called when the resource is loaded
      (fbx) => {
        // Get the mesh from the FBX scene
        this.mesh = fbx as unknown as THREE.Mesh

        // If a position is defined, apply it
        if (this.position) {
          this.mesh.position.set(this.position.x, this.position.y, this.position.z)
        }

        // If a scale is defined, apply it
        if (this.scale) {
          this.mesh.scale.set(this.scale.x, this.scale.y, this.scale.z)
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
        // Optional: Implement progress tracking if needed
      },
      // Called when loading has errors
      (error) => {
        console.error(`An error happened while loading the FBX model: ${this.path}`)
        console.error(error)
      },
    )
  }
}
