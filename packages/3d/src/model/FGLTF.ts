import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { FModel } from './FModel'
import type { FModelOptions } from './FModel'

/*
import * as THREE from 'three'
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'
const MANAGER = new THREE.LoadingManager()
const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`
const DRACO_LOADER = new DRACOLoader(MANAGER).setDecoderPath(
`${THREE_PATH}/examples/jsm/libs/draco/gltf/`,
)
const KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
`${THREE_PATH}/examples/jsm/libs/basis/`,
)
*/

/**
 * A GLTF model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FGLTF } from '@fibbojs/3d'
 *
 * const gltf = new FGLTF({
 *  path: 'model.glb',
 * })
 * ```
 */
export class FGLTF extends FModel {
  constructor(options: FModelOptions) {
    super({
      fileExtension: 'gltf',
      ...options,
    })
    // Create GLTF Loader
    const loader = new GLTFLoader()
    /*
      .setCrossOrigin('anonymous')
      .setDRACOLoader(DRACO_LOADER)
      .setKTX2Loader(KTX2_LOADER)
      .setMeshoptDecoder(MeshoptDecoder)
    */
    // Load the glTF resource
    loader.load(
      this.path,
      // Called when the resource is loaded
      (gltf) => {
        // Get the mesh from the glTF scene
        this.__MESH__ = gltf.scene

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
        console.log(`An error happened while loading the model : ${this.path}`)
        console.log(error)
      },
    )
  }
}
