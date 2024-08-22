import * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions, FComponent3dOptions__initCollider, FComponent3dOptions__initRigidBody } from '../FComponent3d'
import { FPolyhedron } from './FPolyhedron'

/**
 * @description A simple capsule model in FibboJS.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FCapsule } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const capsule = new FCapsule(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCapsule extends FPolyhedron {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)
    // Create a capsule
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  initRigidBody(options?: FComponent3dOptions__initRigidBody): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }

  initCollider(options?: FComponent3dOptions__initCollider): void {
    super.initCollider({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }
}
