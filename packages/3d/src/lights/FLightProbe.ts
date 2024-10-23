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
    this.__LIGHT__ = new THREE.LightProbe(options.sh, options.intensity)
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
