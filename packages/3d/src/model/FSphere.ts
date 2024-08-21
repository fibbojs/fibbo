import * as THREE from 'three'
import type * as RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions } from '../FComponent3d'
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

  initRigidBody(options?: {
    position?: THREE.Vector3
    scale?: THREE.Vector3
    rotation?: THREE.Vector3
    shape?: F3dShapes
    rigidBodyType?: RAPIER.RigidBodyType
    lockTranslations?: boolean
    lockRotations?: boolean
    enabledTranslations?: {
      enableX: boolean
      enableY: boolean
      enableZ: boolean
    }
    enabledRotations?: {
      enableX: boolean
      enableY: boolean
      enableZ: boolean
    }
  }): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.SPHERE,
    })
  }

  initCollider(options?: {
    position?: THREE.Vector3
    scale?: THREE.Vector3
    rotation?: THREE.Vector3
    shape?: F3dShapes
  }): void {
    super.initCollider({
      ...options,
      shape: F3dShapes.SPHERE,
    })
  }
}
