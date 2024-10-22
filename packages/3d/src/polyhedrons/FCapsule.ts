import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import type { FComponentOptions } from '../core/FComponent'
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
    this.__MESH__ = new THREE.Mesh(geometry, material)
    // If shadows are enabled, cast and receive shadows
    if (scene.__ENABLE_SHADOWS__) {
      this.__MESH__.castShadow = true
      this.__MESH__.receiveShadow = true
    }
    // Emit the onLoaded event
    this.emitOnLoaded()
  }
}
