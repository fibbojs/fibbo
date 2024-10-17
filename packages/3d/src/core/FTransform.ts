import * as THREE from 'three'

export interface FTransformOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
}

/**
 * 3D Transforms for a component.
 * @category Core
 */
export class FTransform {
  /**
   * The position of the component.
   */
  position: { x: number, y: number, z: number }
  /**
   * The scale of the component.
   */
  scale: { x: number, y: number, z: number }
  /**
   * The rotation of the component.
   */
  rotation: { x: number, y: number, z: number }

  /**
   * Create a new FTransform.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will default to `{ x: 0, y: 0, z: 0 }`.
   * @param options.scale The scale of the collider. If not defined, it will default to `{ x: 1, y: 1, z: 1 }`.
   * @param options.rotation The rotation of the collider. If not defined, it will default to `{ x: 0, y: 0, z: 0 }`.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to undefined.
   * @example
   * ```ts
   * const collider = new FTransform({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   * })
   * ```
   */
  constructor(options?: FTransformOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation)
      throw new Error('FibboError: FTransform requires position, scale, rotation and shape options')

    // Set the transform values
    this.position = options.position
    this.scale = options.scale
    this.rotation = options.rotationDegree
      ? { x: THREE.MathUtils.degToRad(options.rotationDegree.x), y: THREE.MathUtils.degToRad(options.rotationDegree.y), z: THREE.MathUtils.degToRad(options.rotationDegree.z) }
      : options.rotation || { x: 0, y: 0, z: 0 }
  }

  // Setters and getters for the transform values

  /**
   * Get the rotation in degrees.
   */
  get rotationDegree() {
    return { x: THREE.MathUtils.radToDeg(this.rotation.x), y: THREE.MathUtils.radToDeg(this.rotation.y), z: THREE.MathUtils.radToDeg(this.rotation.z) }
  }

  /**
   * Set the rotation in degrees.
   */
  set rotationDegree(rotation: { x: number, y: number, z: number }) {
    this.rotation = { x: THREE.MathUtils.degToRad(rotation.x), y: THREE.MathUtils.degToRad(rotation.y), z: THREE.MathUtils.degToRad(rotation.z) }
  }
}
