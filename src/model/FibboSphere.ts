import * as THREE from 'three'
import type { FibboScene } from '../core/FibboScene'
import { FibboModel } from './FibboModel'

/**
 * @description A simple sphere model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FibboSphere } from './FibboSphere'
 * import type { FibboScene } from '../FibboScene'
 *
 * export class MySphere extends FibboSphere {
 *  constructor(scene: FibboScene) {
 *    super(scene)
 *  }
 *
 *  onFrame(delta: number) {
 *    super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FibboSphere extends FibboModel {
  /**
   * Object3D is redefined from FibboModel without the ? because it is
   * directly available after the constructor, as the cube is created synchronously.
   */
  object3D: THREE.Object3D

  constructor(scene: FibboScene) {
    super(scene)
    // Create a cube
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.object3D = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
  }
}
