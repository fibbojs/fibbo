import * as THREE from 'three'
import { FLight as FLightCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'
import type { FVector3 } from '../types/FVector3'

export interface FLightOptions extends FTransformOptions {
  color?: THREE.ColorRepresentation
  intensity?: number
  lookAt?: FVector3
}

/**
 * The base class for 3d lights in Fibbo.
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
  declare __LIGHT__: THREE.Light

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
  __LOOK_AT__: FVector3 | undefined

  constructor(scene: FScene, options?: FLightOptions) {
    super(scene)

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5, z: 5 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position)
      throw new Error('FibboError: FLight requires position and lookAt options.')

    // Store scene
    this.scene = scene

    // Configure transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })
    this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__())
    this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__())
    this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__())
    this.__LOOK_AT__ = options.lookAt
  }

  /**
   * Update the position of the light according to the transform.
   * This method should be called after updating the transform properties.
   */
  __UPDATE_POSITION__(): void {
    this.__LIGHT__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    this.__UPDATE_LOOK_AT__()
  }

  /**
   * Update the rotation of the light according to the transform.
   * This method should be called after updating the transform properties.
   */
  __UPDATE_ROTATION__(): void {
    this.__LIGHT__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
  }

  /**
   * Update the scale of the light according to the transform.
   * This method should be called after updating the transform properties.
   */
  __UPDATE_SCALE__(): void {
    this.__LIGHT__.scale.set(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
  }

  /**
   * Update the look at target of the light.
   * This method should be called after updating the position, so the light can look at the target.
   */
  __UPDATE_LOOK_AT__(): void {
    if (this.__LOOK_AT__ && (this.__LIGHT__ instanceof THREE.SpotLight || this.__LIGHT__ instanceof THREE.DirectionalLight)) {
      this.__LIGHT__.target.position.set(this.__LOOK_AT__.x, this.__LOOK_AT__.y, this.__LOOK_AT__.z)
    }
  }

  // Setters & Getters

  get color(): THREE.Color {
    return this.__LIGHT__.color
  }

  set color(color: THREE.ColorRepresentation) {
    this.__LIGHT__.color.set(color)
  }

  get intensity(): number {
    return this.__LIGHT__.intensity
  }

  set intensity(intensity: number) {
    this.__LIGHT__.intensity = intensity
  }

  get lookAt(): FVector3 | undefined {
    return this.__LOOK_AT__
  }

  set lookAt(lookAt: FVector3) {
    this.__LOOK_AT__ = lookAt
    if (this.__LIGHT__ instanceof THREE.SpotLight) {
      this.__LIGHT__.lookAt(lookAt.x, lookAt.y, lookAt.z)
    }
  }
}
