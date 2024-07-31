import * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple sphere model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FSphere } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const cube = new FSphere(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FSphere extends FPolyhedron {
  constructor(scene: FScene3d) {
    super(scene)
    // Create a cube
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  initRigidBody(
    position?: THREE.Vector3,
    scale?: THREE.Vector3,
    rotation?: THREE.Vector3,
    shape?: F3dShapes,
  ): void {
    if (!shape)
      shape = F3dShapes.SPHERE
    super.initRigidBody(position, scale, rotation, shape)
  }
}
