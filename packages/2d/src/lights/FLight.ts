import { FLight as FLightCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'

export interface FLightOptions extends FTransformOptions {
  color?: number
  intensity?: number
  lookAt?: { x: number, y: number }
}

/**
 * The base class for 2d lights in Fibbo.
 * @category Light
 */
export abstract class FLight extends FLightCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = true
  declare public __ID__: number
  public __CALLBACKS_ON_COLLISION__: { [key: string]: (() => void)[] } = {}

  /**
   * The original light object from PIXI.js.
   */
  declare light: any

  /**
   * Scene the light is in.
   */
  scene: FScene

  /**
   * Transform of the light.
   */
  transform: FTransform

  /**
   * Look at target of the light.
   */
  __LOOK_AT__: { x: number, y: number }

  constructor(scene: FScene, options?: FLightOptions) {
    super()

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      lookAt: { x: 0, y: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.lookAt)
      throw new Error('FibboError: FLight requires position and lookAt options.')

    // Store scene
    this.scene = scene

    // Store options
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })
    this.__LOOK_AT__ = options.lookAt
  }

  abstract onFrame(_delta: number): void

  applyTransform(): void {
    // Set the position
    this.light.position.set(this.transform.position.x, this.transform.position.y)
    // Set the scale
    this.light.scale.set(this.transform.scale.x, this.transform.scale.y)
    // Set the rotation
    this.light.rotation = this.transform.rotation
  }

  set color(color: number) {
    this.light.color = color
  }

  get color(): number {
    return this.light.color
  }

  set intensity(intensity: number) {
    this.light.brightness = intensity
  }

  get intensity(): number {
    return this.light.brightness
  }

  get lookAt(): { x: number, y: number } {
    return this.__LOOK_AT__
  }

  set lookAt(lookAt: { x: number, y: number }) {
    this.__LOOK_AT__ = lookAt
    /*
    if (this.light instanceof PIXI.DirectionalLight) {
      this.light.target = new PIXI.Point(lookAt.x, lookAt.y)
    }
    */
  }
}
