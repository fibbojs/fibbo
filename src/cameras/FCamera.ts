import * as THREE from 'three'
import type { FComponent } from '../core/FComponent'

/**
 * @description The base class for cameras in FibboJS.
 * @category Camera
 */
export abstract class FCamera extends THREE.PerspectiveCamera implements FComponent {
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
}
