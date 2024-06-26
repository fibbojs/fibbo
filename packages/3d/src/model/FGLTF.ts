import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { FScene3d } from '../FScene3d'
import { FModel } from './FModel'

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
 * const gltf = new FGLTF(scene, 'model.glb')
 * scene.addComponent(gltf)
 * ```
 */
export class FGLTF extends FModel {
  public type: string = 'FGLTF'
  public onLoadedCallbacks: (() => void)[] = []

  /**
   * @param scene The 3D scene where the model will be added.
   * @param model The name of the model file to load.
   * Should be a GLTF or GLB file.
   */
  constructor(scene: FScene3d, model: string) {
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
      `/models/${modelName}/${model}`,
      // Called when the resource is loaded
      (gltf) => {
        // Add the object to the scene
        this.object3D = gltf.scene

        // If a position is defined, apply it
        if (this.position)
          this.object3D.position.set(this.position.x, this.position.y, this.position.z)

        // If a scale is defined, apply it
        if (this.scale)
          this.object3D.scale.set(this.scale.x / 2, this.scale.y / 2, this.scale.z / 2)

        // If a rotation is defined, apply it
        if (this.rotation)
          this.object3D.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z)

        // Call the onLoaded method
        this.emitOnLoaded()
      },
      // Called while loading is progressing
      (_xhr) => {
      },
      // Called when loading has errors
      (error) => {
        console.log('An error happened', error)
        console.log(error)
      },
    )
  }

  onFrame(_delta: number) {
    super.onFrame(_delta)
  }

  onLoaded(fn: () => void) {
    this.onLoadedCallbacks.push(fn)
  }

  emitOnLoaded() {
    this.onLoadedCallbacks.forEach((callback) => {
      callback()
    })
  }
}
