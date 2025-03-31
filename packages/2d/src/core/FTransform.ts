import type { FVector2 } from '@fibbojs/core'
import { FMathUtil } from '@fibbojs/util'

export interface FTransformOptions {
  position?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
  scale?: { x: number, y: number }
}

/**
 * 2D Transform
 * @category Core
 */
export class FTransform {
  // Callback
  /**
   * Callback for when the position is updated.
   */
  __CALLBACKS_ON_POSITION_UPDATED__: (() => void)[] = []
  /**
   * Callback for when the rotation is updated.
   */
  __CALLBACKS_ON_ROTATION_UPDATED__: (() => void)[] = []
  /**
   * Callback for when the scale is updated.
   */
  __CALLBACKS_ON_SCALE_UPDATED__: (() => void)[] = []

  /**
   * The position of the transform.
   */
  __POSITION__: FVector2
  /**
   * The scale of the transform.
   */
  __SCALE__: FVector2
  /**
   * The rotation of the transform in radians.
   */
  __ROTATION__: number

  /**
   * Create a new FTransform.
   * @param options The options for the transform.
   * @param options.position The position of the transform. If not defined, it will default to `{ x: 0, y: 0 }`.
   * @param options.rotation The rotation of the transform in radians. If not defined, it will default to 0.
   * @param options.rotationDegree The rotation of the transform in degrees. If not defined, it will default to 0.
   * @param options.scale The scale of the transform. If not defined, it will default to `{ x: 1, y: 1 }`.
   * @example
   * ```ts
   * import { FTransform } from '@fibbojs/2d'
   *
   * const transform = new FTransform({
   *  position: { x: 0, y: 0 },
   *  rotation: 0,
   *  scale: { x: 1, y: 1 },
   * })
   * ```
   */
  constructor(options?: FTransformOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    }
    options = { ...DEFAULT_OPTIONS, ...options }

    // Validate options
    if (!options.position || (!options.rotation === undefined && options.rotationDegree === undefined) || !options.scale)
      throw new Error('FibboError: options missing for FTransform')

    // Set the transform values
    this.__POSITION__ = options.position
    this.__ROTATION__ = options.rotationDegree !== undefined ? FMathUtil.degreeToRad(options.rotationDegree) : options.rotation || 0
    this.__SCALE__ = options.scale
  }

  /**
   * Add a callback for when the position is updated.
   * @param callback The callback to add.
   */
  onPositionUpdated(callback: () => void) {
    this.__CALLBACKS_ON_POSITION_UPDATED__.push(callback)
  }

  /**
   * Add a callback for when the rotation is updated.
   * @param callback The callback to add.
   */
  onRotationUpdated(callback: () => void) {
    this.__CALLBACKS_ON_ROTATION_UPDATED__.push(callback)
  }

  /**
   * Add a callback for when the scale is updated.
   * @param callback The callback to add.
   */
  onScaleUpdated(callback: () => void) {
    this.__CALLBACKS_ON_SCALE_UPDATED__.push(callback)
  }

  /**
   * Set a new position.
   * @param position The new position.
   * @param position.x The new position on the x axis.
   * @param position.y The new position on the y axis.
   */
  setPosition(position: { x: number, y: number }) {
    this.__POSITION__ = position
    this.__CALLBACKS_ON_POSITION_UPDATED__.forEach(callback => callback())
  }

  /**
   * Set a new rotation in radians.
   * @param rotation The new rotation in radians.
   */
  setRotation(rotation: number) {
    this.__ROTATION__ = rotation
    this.__CALLBACKS_ON_ROTATION_UPDATED__.forEach(callback => callback())
  }

  /**
   * Set a new scale.
   * @param scale The new scale.
   * @param scale.x The new scale on the x axis.
   * @param scale.y The new scale on the y axis.
   */
  setScale(scale: { x: number, y: number }) {
    this.__SCALE__ = scale
    this.__CALLBACKS_ON_SCALE_UPDATED__.forEach(callback => callback())
  }

  // Setters & Getters

  /**
   * Get the position.
   */
  get position() {
    return this.__POSITION__
  }

  /**
   * Set the position.
   * @param position The new position.
   * @param position.x The new position on the x axis.
   * @param position.y The new position on the y axis.
   */
  set position(position: { x: number, y: number }) {
    this.setPosition(position)
  }

  /**
   * Get the position on the x axis.
   */
  get x() {
    return this.__POSITION__.x
  }

  /**
   * Set the x position.
   * @param x The new position on the x axis.
   */
  set x(x: number) {
    this.setPosition({ x, y: this.__POSITION__.y })
  }

  /**
   * Get the position on the y axis.
   */
  get y() {
    return this.__POSITION__.y
  }

  /**
   * Set the y position.
   * @param y The new position on the y axis.
   */
  set y(y: number) {
    this.setPosition({ x: this.__POSITION__.x, y })
  }

  /**
   * Get the rotation in radians.
   */
  get rotation() {
    return this.__ROTATION__
  }

  /**
   * Set the rotation in radians.
   * @param rotation The new rotation in radians.
   */
  set rotation(rotation: number) {
    this.setRotation(rotation)
  }

  /**
   * Get the rotation in degrees.
   */
  get rotationDegree() {
    return FMathUtil.radToDegree(this.__ROTATION__)
  }

  /**
   * Set the rotation in degrees.
   * @param rotationDegree The new rotation in degrees.
   */
  set rotationDegree(rotationDegree: number) {
    this.setRotation(FMathUtil.degreeToRad(rotationDegree))
  }

  /**
   * Get the scale.
   */
  get scale() {
    return this.__SCALE__
  }

  /**
   * Set the scale.
   * @param scale The new scale.
   * @param scale.x The new scale on the x axis.
   * @param scale.y The new scale on the y axis.
   */
  set scale(scale: { x: number, y: number }) {
    this.setScale(scale)
  }

  /**
   * Get the scale on the x axis.
   */
  get scaleX() {
    return this.__SCALE__.x
  }

  /**
   * Set the x scale.
   * @param x The new scale on the x axis.
   */
  set scaleX(x: number) {
    this.setScale({ x, y: this.__SCALE__.y })
  }

  /**
   * Get the scale on the y axis.
   */
  get scaleY() {
    return this.__SCALE__.y
  }

  /**
   * Set the y scale.
   * @param y The new scale on the y axis.
   */
  set scaleY(y: number) {
    this.setScale({ x: this.__SCALE__.x, y })
  }
}
