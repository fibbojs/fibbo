import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

/**
 * @description A point light in 3d space.
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
    if (!options.color || !options.intensity)
      throw new Error('FibboError: FPointLight requires color and intensity')

    // Create the ambient light
    this.light = new THREE.PointLight(options.color, options.intensity)
    // Set the position
    this.light.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Set the rotation
    this.light.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)

    // If shadows are enabled, set the light to cast shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.light.castShadow = true
    }
  }

  onFrame(_delta: number): void {}
}
