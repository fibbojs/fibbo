import * as THREE from 'three'
import type { FCamera as FCameraCore } from '@fibbojs/core'

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

  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000)
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
    callback: () => void,
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
