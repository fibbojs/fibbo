import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

export interface FSpotLightOptions extends FLightOptions {
  distance?: number
  angle?: number
  penumbra?: number
  decay?: number
}

/**
 * A spot light in 3d space.
 * @category Light
 */
export class FSpotLight extends FLight {
  /**
   * @param scene — The scene the light belongs to.
   * @param options — The options of the light.
   * @param options.distance — Maximum range of the light. Default is 0 (no limit). Expects a Float.
   * @param options.angle — Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
   * @param options.penumbra — Percent of the SpotLight cone that is attenuated due to penumbra. Takes values between zero and 1. Expects a Float. Default 0.
   * @param options.decay — The amount the light dims along the distance of the light. Expects a Float. Default 2.
   */
  constructor(scene: FScene, options?: FSpotLightOptions) {
    super(scene, options)

    // Define default options
    const DEFAULT_OPTIONS = {
      color: 0xFFFFFF,
      intensity: 1,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.color || options.intensity === undefined)
      throw new Error('FibboError: FSpotLight requires color and intensity')

    // Create the spot light
    this.light = new THREE.SpotLight(
      options.color,
      options.intensity,
      options.distance,
      options.angle,
      options.penumbra,
      options.decay,
    )
    // Apply the transform
    this.applyTransform()

    // If shadows are enabled, set the light to cast shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.light.castShadow = true
      if (this.light.shadow) {
        this.light.shadow.mapSize.width = 16384
        this.light.shadow.mapSize.height = 16384
      }
    }
  }

  onFrame(_delta: number): void {}
}
