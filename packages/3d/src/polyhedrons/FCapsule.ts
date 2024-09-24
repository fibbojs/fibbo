import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import { FShapes } from '../types/FShapes'
import type { FComponentOptions } from '../core/FComponent'
import type { FColliderOptions } from '../core/FCollider'
import type { FRigidBodyOptions } from '../core/FRigidBody'
import { FPolyhedron } from './FPolyhedron'

/**
 * A simple capsule model in Fibbo.
 * @category Polyhedrons
 * @example
 * ```ts
 * import { FScene, FCapsule } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCapsule extends FPolyhedron {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a capsule
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 32)
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
      shape: FShapes.CAPSULE,
      ...options,
    })
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      shape: FShapes.CAPSULE,
      ...options,
    })
  }
}
