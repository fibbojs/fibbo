export interface FTransformOptions {
  position?: { x: number, y: number }
  scale?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
}

/**
 * @description 2D Transforms for a component.
 * @category Core
 */
export class FTransform {
  /**
   * Position of the component.
   */
  position: { x: number, y: number }
  /**
   * Scale of the component.
   */
  scale: { x: number, y: number }
  /**
   * Rotation of the component.
   */
  rotation: number

  /**
   * @description Create a new FTransform.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will default to `{ x: 0, y: 5 }`.
   * @param options.scale The scale of the collider. If not defined, it will default to `{ x: 1, y: 1 }`.
   * @param options.rotation The rotation of the collider. If not defined, it will default to 0.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to undefined.
   * @example
   * ```ts
   * const collider = new FTransform({
   *  position: { x: 0, y: 0 },
   *  scale: { x: 1, y: 1 },
   *  rotation: 0,
   * })
   * ```
   */
  constructor(options?: FTransformOptions) {
    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 5 },
      scale: { x: 1, y: 1 },
      rotation: 0,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (options.rotation === undefined && options.rotationDegree === undefined))
      throw new Error('FibboError: FComponent requires position, scale and rotation options')

    // Set the transform values
    this.position = options.position
    this.scale = options.scale
    this.rotation = options.rotationDegree ? options.rotationDegree * (Math.PI / 180) : options.rotation ?? 0
  }
}
