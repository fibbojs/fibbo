import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

/**
 * @description An ambient light in 3d space.
 * @category Light
 */
export class FAmbientLight extends FLight {
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
      throw new Error('FibboError: FAmbientLight requires color and intensity')

    // Create the ambient light
    this.light = new THREE.AmbientLight(options.color, options.intensity)
    // Apply the transform
    this.applyTransform()
  }

  onFrame(_delta: number): void {}
}
