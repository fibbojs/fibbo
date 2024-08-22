import { FCamera } from '@fibbojs/core'
import type * as PIXI from 'pixi.js'
import type { FScene2d } from '../FScene2d'

export interface FCamera2dOptions {
  position?: PIXI.PointData
}

/**
 * @description The base class for 2D cameras in FibboJS.
 * @category Camera
 */
export abstract class FCamera2d extends FCamera {
  /**
   * @description The scene the camera is in.
   */
  scene: FScene2d

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
  constructor(scene: FScene2d, options?: FCamera2dOptions) {
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
      throw new Error('FCamera2d requires position')

    // Store options
    this.position = options.position
  }

  abstract onFrame(_delta: number): void

  abstract __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void
}
