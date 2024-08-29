import { FCamera as FCameraCore } from '@fibbojs/core'
import type * as PIXI from 'pixi.js'
import type { FScene } from '../FScene'

export interface FCameraOptions {
  position?: PIXI.PointData
}

/**
 * @description The base class for 2D cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends FCameraCore {
  /**
   * Internal flags
   */
  public __IS_2D__: boolean = true

  /**
   * @description The scene the camera is in.
   */
  scene: FScene

  // Transform
  /**
   * Position of the camera.
   */
  position: PIXI.PointData

  /**
   * @description Create a new 2D camera.
   * @param scene The scene the camera is in.
   * @param options The options for the camera.
   */
  constructor(scene: FScene, options?: FCameraOptions) {
    super()
    // Store scene
    this.scene = scene

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position)
      throw new Error('FibboError: FCamera requires position')

    // Store options
    this.position = options.position
  }

  abstract onFrame(_delta: number): void

  abstract __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void
}