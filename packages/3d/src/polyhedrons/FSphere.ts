import * as THREE from 'three'
import type { FScene } from '../FScene'
import { FShapes } from '../types/FShapes'
import type { FComponentOptions } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import type { FColliderOptions } from '../FCollider'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple sphere model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FSphere } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const sphere = new FSphere(scene)
 * scene.addComponent(sphere)
 * ```
 */
export class FSphere extends FPolyhedron {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a sphere
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      shape: FShapes.SPHERE,
      ...options,
    })
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      shape: FShapes.SPHERE,
      ...options,
    })
  }
}
