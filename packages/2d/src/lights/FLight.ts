import { FLight as FLightCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'

export interface FLightOptions extends FTransformOptions {
  color?: number
  intensity?: number
  lookAt?: { x: number, y: number }
}

/**
 * The base class for 2d lights in Fibbo.
 * @category Light
 */
export abstract class FLight extends FLightCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = true
  declare public __ID__: number
  public __CALLBACKS_ON_COLLISION__: { [key: string]: (() => void)[] } = {}

  /**
   * The original light object from PIXI.js.
   */
  declare light: any

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
  __LOOK_AT__: { x: number, y: number }

  constructor(scene: FScene, options?: FLightOptions) {
    super(scene)

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      lookAt: { x: 0, y: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.lookAt)
      throw new Error('FibboError: FLight requires position and lookAt options.')

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

  setPosition(position: { x: number, y: number }): void {
    this.transform.position = position
    this.light.position.set(position.x, position.y)
  }

  setRotation(rotation: number): void {
    this.transform.rotation = rotation
    this.light.rotation = rotation
  }

  setRotationDegree(rotationDegree: number): void {
    this.setRotation(rotationDegree * (Math.PI / 180))
  }

  setScale(scale: { x: number, y: number }): void {
    this.transform.scale = scale
    this.light.scale.set(scale.x, scale.y)
  }

  // Setters & Getters

  get position(): { x: number, y: number } {
    return this.transform.position
  }

  set position(position: { x: number, y: number }) {
    this.setPosition(position)
  }

  get rotation(): number {
    return this.transform.rotation
  }

  set rotation(rotation: number) {
    this.setRotation(rotation)
  }

  get rotationDegree(): number {
    return this.transform.rotationDegree
  }

  set rotationDegree(rotationDegree: number) {
    this.setRotationDegree(rotationDegree)
  }

  get scale(): { x: number, y: number } {
    return this.transform.scale
  }

  set scale(scale: { x: number, y: number }) {
    this.setScale(scale)
  }

  get scaleX(): number {
    return this.transform.scale.x
  }

  set scaleX(scaleX: number) {
    this.scale = { x: scaleX, y: this.scaleY }
  }

  get scaleY(): number {
    return this.transform.scale.y
  }

  set scaleY(scaleY: number) {
    this.setScale({ x: this.scaleX, y: scaleY })
  }

  set color(color: number) {
    this.light.color = color
  }

  get color(): number {
    return this.light.color
  }

  set intensity(intensity: number) {
    this.light.brightness = intensity
  }

  get intensity(): number {
    return this.light.brightness
  }

  get lookAt(): { x: number, y: number } {
    return this.__LOOK_AT__
  }

  set lookAt(lookAt: { x: number, y: number }) {
    this.__LOOK_AT__ = lookAt
    /*
    if (this.light instanceof PIXI.DirectionalLight) {
      this.light.target = new PIXI.Point(lookAt.x, lookAt.y)
    }
    */
  }
}
