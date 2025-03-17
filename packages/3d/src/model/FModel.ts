import * as THREE from 'three'
import { FAssetUtil } from '@fibbojs/util'
import { FComponent } from '../core/FComponent'
import type { FComponentOptions } from '../core/FComponent'

export interface FModelOptions extends FComponentOptions {
  name: string
  path?: string
  textures?: Record<string, string>
  fileExtension?: string
}

/**
 * An abstract 3D Model base class.
 * @category Model
 */
export abstract class FModel extends FComponent {
  /**
   * The name of the model.
   * Shouldn't contain file extensions.
   */
  public name: string

  /**
   * The path to the model file.
   * Will be interpreted as a URL if it starts with http.
   * Will be interpreted as an absolute path if it starts with /.
   * Otherwise, it will be treated as a relative path to the models folder.
   */
  public path: string

  /**
   * A record containing texture path for each material.
   * @example
   * ```json
   * {
   *  "default": "/models/my-model/my-model.png"
   * }
   * ```
   */
  public textures: Record<string, string>

  /**
   * The file extension of the model.
   * Default is 'obj'.
   */
  public fileExtension: string

  /**
   * @param options The options for the component (inherits from FComponent).
   * @param options.scene The 3D scene where the model will be added.
   * @param options.path The path for the model file to load.
   */
  constructor(options: FModelOptions) {
    super(options)

    // Apply default options
    const DEFAULT_OPTIONS = {
      path: `/assets/${options.name}/${options.name}.${options.fileExtension || 'obj'}`,
      textures: {},
      fileExtension: 'obj',
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.path || !options.textures || !options.fileExtension)
      throw new Error('FibboError: path, texture, and fileExtension are required options to create a FModel')

    // Store options
    this.name = options.name
    this.path = options.path
    this.textures = options.textures
    this.fileExtension = options.fileExtension

    // Interpret the path
    this.path = FAssetUtil.interpretPath(this.path)
    // Interpret the textures
    this.textures = Object.fromEntries(
      Object.entries(this.textures).map(([materialName, texturePath]) => {
        return [materialName, FAssetUtil.interpretPath(texturePath)]
      }),
    )
  }

  /**
   * Emit the onLoaded callbacks.
   * It was overridden to add shadow support.
   */
  emitOnLoaded() {
    if (this.scene.__ENABLE_SHADOWS__ && this.__MESH__) {
      this.__MESH__.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
    this.__CALLBACKS_ON_LOADED__.forEach((callback) => {
      callback()
    })
  }

  /**
   * Define mesh transforms (used after loading the model).
   */
  defineMeshTransforms() {
    // If the mesh is not defined, return
    if (!this.__MESH__)
      return

    // If a position is defined, apply it
    if (this.transform.position)
      this.__MESH__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)

    // If a scale is defined, apply it
    if (this.transform.scale)
      this.__MESH__.scale.set(this.transform.scale.x / 2, this.transform.scale.y / 2, this.transform.scale.z / 2)

    // If a rotation is defined, apply it
    if (this.transform.rotation)
      this.__MESH__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
  }

  /**
   * Load the texture for a given mesh.
   * @param mesh The mesh.
   * @example
   * ```ts
   * model.loadTextureFor(material)
   * ```
   */
  loadTextureForMesh(mesh: THREE.Mesh) {
    const textureLoader = new THREE.TextureLoader()
    // Verify it is a mesh and has a material
    if (!mesh.material || !(mesh.material instanceof THREE.Material)) {
      throw new Error('FibboError: Mesh must have a material to load a texture')
    }

    // Check if the material has texture properties
    if (mesh.material.name) {
      // Define the path to the texture
      let texturePath
      // If a texture is defined for the material, use it
      if (this.textures[mesh.material.name]) {
        texturePath = this.textures[mesh.material.name]
      }
      else {
        // Otherwise, if a "default" texture is provided, use it
        if (this.textures.default)
          texturePath = this.textures.default
        // Otherwise, consider the default texture path to be the colormap.png
        else
          texturePath = `${window.location.href}/assets/${this.name}/Textures/colormap.png`
      }
      // Load the texture
      textureLoader.load(texturePath, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        // Apply the texture to the material
        mesh.material = new THREE.MeshPhongMaterial({
          map: texture,
          // Turn on depthWrite if shadows are enabled
          depthWrite: this.scene.__ENABLE_SHADOWS__,
        })
      }, undefined, (error) => {
        console.error(`FibboError: An error happened while loading the texture for model: name(${this.name}) path(${this.path}) materialName(${mesh.material instanceof THREE.Mesh ? mesh.material.name : 'ERROR-NO-MATERIAL-NAME'}) texturePath(${texturePath})`)
        console.error(error)
      })
    }
  }
}
