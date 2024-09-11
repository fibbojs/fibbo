import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import { FShapes } from '../types/FShapes'
import type { FComponentOptions } from '../core/FComponent'
import type { FRigidBodyOptions } from '../core/FRigidBody'
import type { FColliderOptions } from '../core/FCollider'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple sphere model in Fibbo.
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
    const material = new THREE.MeshPhongMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
    // If shadows are enabled, cast and receive shadows
    if (scene.__ENABLE_SHADOWS__) {
      this.mesh.castShadow = true
      this.mesh.receiveShadow = true
    }
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
