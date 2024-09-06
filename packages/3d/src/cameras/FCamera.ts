import * as THREE from 'three'
import type { FCamera as FCameraCore, OnCollisionWithData } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'

export interface FCameraOptions extends FTransformOptions {}

/**
 * @description The base class for cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends THREE.PerspectiveCamera implements FCameraCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true
  public __IS_2D__: boolean = false

  declare public __ID__: number
  public __CALLBACKS_ON_COLLISION__: { [key: string]: (() => void)[] } = {}

  /**
   * Transform of the camera.
   */
  transform: FTransform

  constructor(options?: FCameraOptions) {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5, z: 5 },
      rotation: { x: 0, y: 0.7853981634, z: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || (!options.rotation && !options.rotationDegree))
      throw new Error('FibboError: FCamera requires position and rotation options')

    // Store transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })

    // Set the position
    this.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Set the rotation
    this.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
  }

  abstract onFrame(_delta: number): void

  /**
   * @description Set the position of the camera.
   */
  setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z)
  }

  /**
   * @description Set the scale of the camera.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale.set(x, y, z)
  }

  /**
   * @description Set the rotation of the camera.
   */
  setRotation(x: number, y: number, z: number): void {
    this.rotation.set(x, y, z)
  }

  onCollisionWith(
    classOrObject: any,
    callback: (data: OnCollisionWithData) => void,
  ) {
    FCamera.prototype.onCollisionWith.call(this, classOrObject, callback)
  }

  emitCollisionWith(classOrObject: any) {
    FCamera.prototype.emitCollisionWith.call(this, classOrObject)
  }

  /**
   * @description Get the direction of the camera.
   * This method is useful to get the direction of the camera to apply forces in the direction of the camera.
   * @returns The direction of the camera. It is a normalized vector.
   */
  getCameraDirection() {
    const direction = new THREE.Vector3()
    this.getWorldDirection(direction)
    direction.normalize()
    return direction
  }
}
