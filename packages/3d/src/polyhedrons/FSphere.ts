import * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions } from '../FComponent3d'
import type { FRigidBody3dOptions } from '../FRigidBody3d'
import type { FCollider3dOptions } from '../FCollider3d'
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
 * const sphere = new FSphere(scene)
 * scene.addComponent(sphere)
 * ```
 */
export class FSphere extends FPolyhedron {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)
    // Create a sphere
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  initRigidBody(options?: FRigidBody3dOptions): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.SPHERE,
    })
  }

  initCollider(options?: FCollider3dOptions): void {
    super.initCollider({
      ...options,
      shape: F3dShapes.SPHERE,
    })
  }
}
