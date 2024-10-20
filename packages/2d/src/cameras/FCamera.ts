import { FCamera as FCameraCore } from '@fibbojs/core'
import type { FScene } from '../core/FScene'
import { FTransform } from '../core/FTransform'

export interface FCameraOptions {
  position?: { x: number, y: number }
}

/**
 * The base class for 2D cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends FCameraCore {
  /**
   * Internal flags
   */
  public __IS_2D__: boolean = true

  /**
   * The scene the camera is in.
   */
  scene: FScene

  /**
   * Transform of the camera.
   * It is used to store the position of the camera.
   * The scale and rotation of the transform are not used.
   */
  transform: FTransform

  /**
   * Create a new 2D camera.
   * @param scene The scene the camera is in.
   * @param options The options for the camera.
   */
  constructor(scene: FScene, options?: FCameraOptions) {
    super(scene)
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
    this.transform = new FTransform({
      position: options.position,
    })
  }

  abstract __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void

  setZoom(zoom: number): void {
    this.scene.viewport.setZoom(zoom)
  }

  setPosition(position: { x: number, y: number }): void {
    this.transform.position = position
    this.scene.viewport.x = position.x
    this.scene.viewport.y = position.y
  }

  // Setters & Getters

  get position() {
    return this.transform.position
  }

  set position(position: { x: number, y: number }) {
    this.setPosition(position)
  }

  get x() {
    return this.transform.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.y })
  }

  get y() {
    return this.transform.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.x, y })
  }
}
