import * as THREE from 'three'
import type { FibboScene } from '../FibboScene'
import { FibboModel } from './FibboModel'

/**
 * @description A simple cube model in FibboJS.
 * @example
 * ```ts
 * import { FibboCube } from './FibboCube'
 * import type { FibboScene } from '../FibboScene'
 *
 * export class MyCube extends FibboCube {
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
export class FibboCube extends FibboModel {
  /**
   * Object3D is redefined from FibboModel without the ? because it is
   * directly available after the constructor, as the cube is created synchronously.
   */
  object3D: THREE.Object3D

  constructor(scene: FibboScene) {
    super(scene)
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.object3D = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
  }
}
