import * as THREE from 'three'
import { FCamera } from '@fibbojs/core'

/**
 * @description The base class for cameras in FibboJS.
 * @category Camera
 */
export abstract class FCamera3d extends THREE.PerspectiveCamera implements FCamera {
  declare public ID: number
  public CALLBACKS_ONCOLLISION: { [key: string]: (() => void)[] } = {}

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
}
