import type * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { FScene3d } from '../FScene3d'
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
 * @description A GLTF model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FGLTF } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const gltf = new FGLTF(scene, {
 *  path: 'model.glb',
 * })
 * scene.addComponent(gltf)
 * ```
 */
export class FGLTF extends FModel {
  constructor(scene: FScene3d, options?: FModelOptions) {
    super(scene, options)
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
        this.mesh = gltf.scene

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
