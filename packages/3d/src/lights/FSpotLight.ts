import * as THREE from 'three'
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
   * @param options — The options of the light.
   * @param options.scene — The scene the light belongs to.
   * @param options.distance — Maximum range of the light. Default is 0 (no limit). Expects a Float.
   * @param options.angle — Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
   * @param options.penumbra — Percent of the SpotLight cone that is attenuated due to penumbra. Takes values between zero and 1. Expects a Float. Default 0.
   * @param options.decay — The amount the light dims along the distance of the light. Expects a Float. Default 2.
   */
  constructor(options?: FSpotLightOptions) {
    super(options)

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
    this.__LIGHT__ = new THREE.SpotLight(
      options.color,
      options.intensity,
      options.distance,
      options.angle,
      options.penumbra,
      options.decay,
    )
    // Apply the transform
    this.__UPDATE_POSITION__()
    this.__UPDATE_ROTATION__()

    // If shadows are enabled, set the light to cast shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.__LIGHT__.castShadow = true
      if (this.__LIGHT__.shadow) {
        this.__LIGHT__.shadow.mapSize.width = 2 ** this.shadowQuality
        this.__LIGHT__.shadow.mapSize.height = 2 ** this.shadowQuality
      }
    }

    // Emit the onLoaded event
    this.emitOnLoaded()
  }
}
