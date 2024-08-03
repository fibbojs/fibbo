import type * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { FScene3d } from '../FScene3d'
import { FComponent3d } from '../FComponent3d'

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
export class FGLTF extends FComponent3d {
  /**
   * Callbacks for when the model is loaded
   */
  public CALLBACKS_ONLOADED: (() => void)[] = []

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
      // Resource URL (if it starts with / or http, treat as a URL)
      // Otherwise, treat as a relative path to the models folder
      model.startsWith('/') || model.startsWith('http') ? model : `${window.location.href}/models/${modelName}/${model}`,
      // Called when the resource is loaded
      (gltf) => {
        // Get the mesh from the glTF scene
        this.mesh = gltf.scene as unknown as THREE.Mesh

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
        console.log(`An error happened while loading the model : ${model}`)
        console.log(error)
      },
    )
  }

  /**
   * @description Add a callback to be called when the model is loaded.
   * @param fn The callback function.
   */
  onLoaded(fn: () => void) {
    this.CALLBACKS_ONLOADED.push(fn)
  }

  /**
   * @description Emit the onLoaded callbacks.
   */
  emitOnLoaded() {
    this.CALLBACKS_ONLOADED.forEach((callback) => {
      callback()
    })
  }
}
