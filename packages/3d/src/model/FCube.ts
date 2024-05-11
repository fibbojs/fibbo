import * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import { FModel } from './FModel'

/**
 * @description A simple cube model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FCube extends FModel {
  /**
   * Object3D is redefined from FModel without the ? because it is
   * directly available after the constructor, as the cube is created synchronously.
   */
  object3D: THREE.Object3D

  constructor(scene: FScene3d) {
    super(scene)
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.object3D = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
