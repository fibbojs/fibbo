import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

/**
 * A point light in 3d space.
 * @category Light
 */
export class FPointLight extends FLight {
  constructor(scene: FScene, options?: FLightOptions) {
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
      throw new Error('FibboError: FPointLight requires color and intensity')

    // Create the point light
    this.light = new THREE.PointLight(options.color, options.intensity)
    // Apply the transform
    this.__UPDATE_POSITION__()
    this.__UPDATE_ROTATION__()

    // If shadows are enabled, set the light to cast shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.light.castShadow = true
      if (this.light.shadow) {
        this.light.shadow.mapSize.width = 65536
        this.light.shadow.mapSize.height = 65536
      }
    }
  }
}
