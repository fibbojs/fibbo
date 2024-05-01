import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
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

export class FibboGLTF extends FibboModel {
  public type: string = 'FibboGLTF'
  public onLoaded: () => void = () => {}

  constructor(model: string, x: number = 0, y: number = 0, z: number = 0) {
    super(x, y, z)
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
        this.object3D = gltf.scene
        this.object3D.scale.set(1, 1, 1)
        this.object3D.position.set(x, y, z)
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

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
