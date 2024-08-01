import * as THREE from 'three'
import type { FCamera, FComponent } from '@fibbojs/core'

/**
 * @description The base class for cameras in FibboJS.
 * @category Camera
 */
export abstract class FCamera3d extends THREE.PerspectiveCamera implements FCamera {
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

  onCollisionWith<T extends FComponent>(class_: { new(): T }, callback: () => void) {
    if (!this.CALLBACKS_ONCOLLISION[class_.name]) {
      this.CALLBACKS_ONCOLLISION[class_.name] = []
    }
    this.CALLBACKS_ONCOLLISION[class_.name].push(callback)
  }

  emitCollisionWith<T extends FComponent>(class_: { new(): T }) {
    if (this.CALLBACKS_ONCOLLISION[class_.name]) {
      this.CALLBACKS_ONCOLLISION[class_.name].forEach((callback) => {
        callback()
      })
    }
  }
}
