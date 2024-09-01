import * as THREE from 'three'

export interface FTransformOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
}

/**
 * @description 3D Transforms for a component.
 * @category Core
 */
export class FTransform {
  /**
   * The position of the component.
   */
  position: THREE.Vector3
  /**
   * The scale of the component.
   */
  scale: THREE.Vector3
  /**
   * The rotation of the component.
   */
  rotation: THREE.Vector3

  /**
   * @description Create a new FTransform.
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
    this.position = new THREE.Vector3(options.position.x, options.position.y, options.position.z)
    this.scale = new THREE.Vector3(options.scale.x, options.scale.y, options.scale.z)
    this.rotation = options.rotationDegree
      ? new THREE.Vector3(
        THREE.MathUtils.degToRad(options.rotationDegree.x),
        THREE.MathUtils.degToRad(options.rotationDegree.y),
        THREE.MathUtils.degToRad(options.rotationDegree.z),
      )
      : options.rotation ? new THREE.Vector3(options.rotation.x, options.rotation.y, options.rotation.z) : new THREE.Vector3(0, 0, 0)
  }
}
