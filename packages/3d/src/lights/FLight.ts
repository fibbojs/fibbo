import * as THREE from 'three'
import { FLight as FLightCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'

export interface FLightOptions extends FTransformOptions {
  color?: THREE.ColorRepresentation
  intensity?: number
  lookAt?: { x: number, y: number, z: number }
}

/**
 * @description The base class for 3d lights in Fibbo.
 * @category Light
 */
export abstract class FLight extends FLightCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true
  public __IS_2D__: boolean = false
  declare public __ID__: number
  public __CALLBACKS_ON_COLLISION__: { [key: string]: (() => void)[] } = {}

  /**
   * The original light object from Three.js.
   */
  declare light: THREE.Light

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
  __LOOK_AT__: { x: number, y: number, z: number }

  constructor(scene: FScene, options?: FLightOptions) {
    super()

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5, z: 5 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      lookAt: { x: 0, y: 0, z: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.lookAt)
      throw new Error('FibboError: FLight requires position')

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
    this.light.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Set the scale
    this.light.scale.set(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
    // Set the rotation
    this.light.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
    // Set the look at
    if (this.light instanceof THREE.SpotLight || this.light instanceof THREE.DirectionalLight) {
      this.light.target.position.set(this.__LOOK_AT__.x, this.__LOOK_AT__.y, this.__LOOK_AT__.z)
    }
  }

  set color(color: THREE.ColorRepresentation) {
    this.light.color.set(color)
  }

  get color(): THREE.Color {
    return this.light.color
  }

  set intensity(intensity: number) {
    this.light.intensity = intensity
  }

  get intensity(): number {
    return this.light.intensity
  }

  get lookAt(): { x: number, y: number, z: number } {
    return this.__LOOK_AT__
  }

  set lookAt(lookAt: { x: number, y: number, z: number }) {
    this.__LOOK_AT__ = lookAt
    if (this.light instanceof THREE.SpotLight) {
      this.light.lookAt(lookAt.x, lookAt.y, lookAt.z)
    }
  }
}
