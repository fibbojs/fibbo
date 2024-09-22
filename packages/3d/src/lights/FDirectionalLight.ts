import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

/**
 * @description A directional light in 3d space.
 * @category Light
 */
export class FDirectionalLight extends FLight {
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
      throw new Error('FibboError: FDirectionalLight requires color and intensity')

    // Create the directional light
    this.light = new THREE.DirectionalLight(options.color, options.intensity)
    // Apply the transform
    this.applyTransform()

    // If shadows are enabled, set the light to cast shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.light.castShadow = true
      if (this.light.shadow && this.light.shadow.camera && this.light.shadow.camera instanceof THREE.OrthographicCamera) {
        this.light.shadow.camera.near = 0.5
        this.light.shadow.camera.far = 500
        this.light.shadow.camera.left = -100
        this.light.shadow.camera.right = 100
        this.light.shadow.camera.top = 100
        this.light.shadow.camera.bottom = -100
        this.light.shadow.mapSize.width = 16384
        this.light.shadow.mapSize.height = 16384
      }
    }
  }

  onFrame(_delta: number): void {}
}
