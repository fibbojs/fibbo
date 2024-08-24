import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { FScene3d } from '../FScene3d'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/**
 * @description A GLB model in FibboJS.
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
export class FGLB extends FModel {
  constructor(scene: FScene3d, options?: FModelOptions) {
    super(scene, options)
    // Create GLTF Loader
    const loader = new GLTFLoader()

    // Load the glb resource
    loader.load(
      this.path,
      // Called when the resource is loaded
      (glb) => {
        // Get the mesh from the OBJ object
        this.mesh = glb.scene

        // If a position is defined, apply it
        if (this.position)
          this.mesh.position.set(this.position.x, this.position.y, this.position.z)

        // If a scale is defined, apply it
        if (this.scale)
          this.mesh.scale.set(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2)

        // If a rotation is defined, apply it
        if (this.rotation)
          this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z)

        // Call the onLoaded Callbacks
        this.emitOnLoaded()
      },
      // Called while loading is progressing
      (_xhr) => {
      },
      // Called when loading has errors
      (error) => {
        console.log(`An error happened while loading the model : ${this.path}`)
        console.log(error)
      },
    )
  }
}
