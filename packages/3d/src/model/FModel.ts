import type { FScene3d } from '../FScene3d'
import { FComponent3d } from '../FComponent3d'
import type { FComponent3dOptions } from '../FComponent3d'

export interface FModelOptions extends FComponent3dOptions {
  path: string
}

/**
 * @description An abstract 3D Model base class.
 * @category Model
 */
export abstract class FModel extends FComponent3d {
  /**
   * Callbacks for when the model is loaded
   */
  public __CALLBACKS_ON_LOADED__: (() => void)[] = []

  /**
   * The path to the model file.
   */
  public path: string

  /**
   * @param scene The 3D scene where the model will be added.
   * @param options The options for the component (inherits from FComponent3d).
   * @param options.path The path for the model file to load.
   */
  constructor(scene: FScene3d, options?: FModelOptions) {
    // Validate the options
    if (!options?.path)
      throw new Error('The path for the model file to load is required.')

    super(scene, options)

    // Interpret the path
    // Resource URL (if it starts http, treat as a URL)
    if (options.path.startsWith('http')) {
      this.path = options.path
    }
    // Absolute path (if it starts with /), add the current domain + path
    else if (options.path.startsWith('/')) {
      this.path = `${window.location.href}${options.path}`
    }
    // Otherwise, treat as a relative path to the models folder
    else {
      const modelName = options.path.split('.')[0]
      this.path = `${window.location.href}/models/${modelName}/${options.path}`
    }
  }

  /**
   * @description Add a callback to be called when the model is loaded.
   * @param callback The callback function.
   */
  onLoaded(callback: () => void) {
    this.__CALLBACKS_ON_LOADED__.push(callback)
  }

  /**
   * @description Emit the onLoaded callbacks.
   */
  emitOnLoaded() {
    this.__CALLBACKS_ON_LOADED__.forEach((callback) => {
      callback()
    })
  }
}
