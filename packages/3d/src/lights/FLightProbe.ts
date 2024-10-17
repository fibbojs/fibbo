import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FLightOptions } from './FLight'
import { FLight } from './FLight'

export interface FLightProbeOptions extends FLightOptions {
  sh: THREE.SphericalHarmonics3
}

/**
 * A light probe in 3d space.
 * Unlike other lights, light probes do not emit light.
 * Instead they store information about light passing through 3D space.
 * During rendering, the light that hits a 3D object is approximated by using the data from the light probe.
 * @category Light
 */
export class FLightProbe extends FLight {
  constructor(scene: FScene, options?: FLightProbeOptions) {
    super(scene, options)

    // Define default options
    const DEFAULT_OPTIONS = {
      sh: new THREE.SphericalHarmonics3(),
      intensity: 1,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.sh || options.intensity === undefined)
      throw new Error('FibboError: FLightProbe requires sh and intensity')

    // Create the light probe
    this.light = new THREE.LightProbe(options.sh, options.intensity)
    // Apply the transform
    this.applyTransform()

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
