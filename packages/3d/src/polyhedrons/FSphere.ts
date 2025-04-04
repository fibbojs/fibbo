import * as THREE from 'three'
import type { FComponentOptions } from '../core/FComponent'
import type { FColliderOptions } from '../core/FCollider'
import { FShapes } from '../types/FShapes'
import type { FRigidBodyOptions } from '../core/FRigidBody'
import { FPolyhedron } from './FPolyhedron'

/**
 * A simple sphere model in Fibbo.
 * @category Polyhedrons
 * @example
 * ```ts
 * import { FScene, FSphere } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const sphere = new FSphere()
 * scene.addComponent(sphere)
 * ```
 */
export class FSphere extends FPolyhedron {
  constructor(options?: FComponentOptions) {
    super(options)
    // Create a sphere
    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const material = new THREE.MeshPhongMaterial({ color: 0x666666 })
    this.__MESH__ = new THREE.Mesh(geometry, material)
    // If shadows are enabled, cast and receive shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.__MESH__.castShadow = true
      this.__MESH__.receiveShadow = true
    }
    // Emit the onLoaded event
    this.emitOnLoaded()
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      shape: FShapes.SPHERE,
      ...options,
    })
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      shape: FShapes.SPHERE,
      ...options,
    })
  }

  initSensor(options?: FRigidBodyOptions): void {
    super.initSensor({
      shape: FShapes.SPHERE,
      ...options,
    })
  }
}
