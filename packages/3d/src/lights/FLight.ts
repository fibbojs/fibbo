import * as THREE from 'three'
import { FLight as FLightCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'

export interface FLightOptions extends FTransformOptions {
  color?: THREE.ColorRepresentation
  intensity?: number
  lookAt?: { x: number, y: number, z: number }
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
  declare light: THREE.Light

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
  __LOOK_AT__: { x: number, y: number, z: number }

  constructor(scene: FScene, options?: FLightOptions) {
    super(scene)

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5, z: 5 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      lookAt: { x: 0, y: 0, z: 0 },
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

  applyTransform(): void {
    // Set the position
    this.light.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Set the scale
    this.light.scale.set(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
    // Set the rotation
    this.light.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
    // Set the look at
    if (this.light instanceof THREE.SpotLight || this.light instanceof THREE.DirectionalLight) {
      this.light.target.position.set(this.__LOOK_AT__.x, this.__LOOK_AT__.y, this.__LOOK_AT__.z)
    }
  }

  setPosition(position: { x: number, y: number, z: number }): void {
    this.light.position.set(position.x, position.y, position.z)
    this.transform.position = position
  }

  setRotation(rotation: { x: number, y: number, z: number }): void {
    this.light.rotation.set(rotation.x, rotation.y, rotation.z)
    this.transform.rotation = rotation
  }

  setRotationDegree(rotationDegree: { x: number, y: number, z: number }): void {
    const rotation = {
      x: THREE.MathUtils.degToRad(rotationDegree.x),
      y: THREE.MathUtils.degToRad(rotationDegree.y),
      z: THREE.MathUtils.degToRad(rotationDegree.z),
    }
    this.light.rotation.set(rotation.x, rotation.y, rotation.z)
    this.transform.rotation = rotation
  }

  setScale(scale: { x: number, y: number, z: number }): void {
    this.light.scale.set(scale.x, scale.y, scale.z)
    this.transform.scale = scale
  }

  // Setters & Getters

  get position(): { x: number, y: number, z: number } {
    return this.transform.position
  }

  set position(position: { x: number, y: number, z: number }) {
    this.setPosition(position)
  }

  get x(): number {
    return this.transform.position.x
  }

  set x(x: number) {
    this.position = { x, y: this.y, z: this.z }
  }

  get y(): number {
    return this.transform.position.y
  }

  set y(y: number) {
    this.position = { x: this.x, y, z: this.z }
  }

  get z(): number {
    return this.transform.position.z
  }

  set z(z: number) {
    this.position = { x: this.x, y: this.y, z }
  }

  get rotation(): { x: number, y: number, z: number } {
    return this.transform.rotation
  }

  set rotation(rotation: { x: number, y: number, z: number }) {
    this.setRotation(rotation)
  }

  get rotationX(): number {
    return this.transform.rotation.x
  }

  set rotationX(x: number) {
    this.rotation = { x, y: this.rotationY, z: this.rotationZ }
  }

  get rotationY(): number {
    return this.transform.rotation.y
  }

  set rotationY(y: number) {
    this.rotation = { x: this.rotationX, y, z: this.rotationZ }
  }

  get rotationZ(): number {
    return this.transform.rotation.z
  }

  set rotationZ(z: number) {
    this.rotation = { x: this.rotationX, y: this.rotationY, z }
  }

  get rotationDegree(): { x: number, y: number, z: number } {
    return {
      x: THREE.MathUtils.radToDeg(this.transform.rotation.x),
      y: THREE.MathUtils.radToDeg(this.transform.rotation.y),
      z: THREE.MathUtils.radToDeg(this.transform.rotation.z),
    }
  }

  set rotationDegree(rotationDegree: { x: number, y: number, z: number }) {
    this.setRotationDegree(rotationDegree)
  }

  get rotationDegreeX(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.x)
  }

  set rotationDegreeX(x: number) {
    this.rotationDegree = { x, y: this.rotationDegreeY, z: this.rotationDegreeZ }
  }

  get rotationDegreeY(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.y)
  }

  set rotationDegreeY(y: number) {
    this.rotationDegree = { x: this.rotationDegreeX, y, z: this.rotationDegreeZ }
  }

  get rotationDegreeZ(): number {
    return THREE.MathUtils.radToDeg(this.transform.rotation.z)
  }

  set rotationDegreeZ(z: number) {
    this.rotationDegree = { x: this.rotationDegreeX, y: this.rotationDegreeY, z }
  }

  get scale(): { x: number, y: number, z: number } {
    return this.transform.scale
  }

  set scale(scale: { x: number, y: number, z: number }) {
    this.setScale(scale)
  }

  get scaleX(): number {
    return this.transform.scale.x
  }

  set scaleX(x: number) {
    this.scale = { x, y: this.scaleY, z: this.scaleZ }
  }

  get scaleY(): number {
    return this.transform.scale.y
  }

  set scaleY(y: number) {
    this.scale = { x: this.scaleX, y, z: this.scaleZ }
  }

  get scaleZ(): number {
    return this.transform.scale.z
  }

  set scaleZ(z: number) {
    this.scale = { x: this.scaleX, y: this.scaleY, z }
  }

  get color(): THREE.Color {
    return this.light.color
  }

  set color(color: THREE.ColorRepresentation) {
    this.light.color.set(color)
  }

  get intensity(): number {
    return this.light.intensity
  }

  set intensity(intensity: number) {
    this.light.intensity = intensity
  }

  get lookAt(): { x: number, y: number, z: number } {
    return this.__LOOK_AT__
  }

  set lookAt(lookAt: { x: number, y: number, z: number }) {
    this.__LOOK_AT__ = lookAt
    if (this.light instanceof THREE.SpotLight) {
      this.light.lookAt(lookAt.x, lookAt.y, lookAt.z)
    }
  }
}
