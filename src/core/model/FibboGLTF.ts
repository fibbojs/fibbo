import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { FibboScene } from '../FibboScene'
import { FibboModel } from './FibboModel'

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
 * @example
 * ```ts
 * import { FibboGLTF } from './FibboGLTF'
 * import type { FibboScene } from '../FibboScene'
 *
 * export class MyGltfModel extends FibboGLTF {
 *  constructor(scene: FibboScene) {
 *    super(scene, 'Cube.gltf')
 *  }
 *
 *  onFrame(delta: number) {
 *    super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FibboGLTF extends FibboModel {
  public type: string = 'FibboGLTF'
  public onLoaded: () => void = () => {}

  /**
   * @param scene The FibboScene where the model will be added.
   * @param model The name of the model file to load.
   * Should be a GLTF or GLB file.
   */
  constructor(scene: FibboScene, model: string) {
    super(scene)
    // Create GLTF Loader
    const loader = new GLTFLoader()
    /*
      .setCrossOrigin('anonymous')
      .setDRACOLoader(DRACO_LOADER)
      .setKTX2Loader(KTX2_LOADER)
      .setMeshoptDecoder(MeshoptDecoder)
    */
    const modelName = model.split('.')[0]
    // Load the glTF resource
    loader.load(
      // Resource URL
      `models/${modelName}/${model}`,
      // Called when the resource is loaded
      (gltf) => {
        // Add the object to the scene
        this.object3D = gltf.scene

        // If a scale is defined, apply it
        if (this.scale)
          this.object3D.scale.set(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2)

        // Call the onLoaded method
        this.onLoaded()
      },
      // Called while loading is progressing
      (xhr) => {
        console.log(`${xhr.loaded / xhr.total * 100}% loaded`)
      },
      // Called when loading has errors
      (error) => {
        console.log('An error happened', error)
      },
    )
  }

  onFrame(_delta: number) {
  }
}
