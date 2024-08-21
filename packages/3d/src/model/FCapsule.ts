import * as THREE from 'three'
import type * as RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
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
  constructor(scene: FScene3d, options?: {
    position?: { x: number, y: number, z: number }
    scale?: { x: number, y: number, z: number }
    rotation?: { x: number, y: number, z: number }
    rotationDegree?: { x: number, y: number, z: number }
  }) {
    super(scene, options)
    // Create a capsule
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 32)
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
      shape: F3dShapes.CAPSULE,
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
      shape: F3dShapes.CAPSULE,
    })
  }
}
