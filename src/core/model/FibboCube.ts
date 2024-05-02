import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import type { FibboScene } from '../FibboScene'
import { FibboModel } from './FibboModel'

/**
 * @description A simple cube model in FibboJS.
 */
export class FibboCube extends FibboModel {
  /**
   * Object3D, RigidBody and Collider are redefined from FibboModel without the ? because
   * they're directly available after the constructor, as the cube is created synchronously.
   */
  object3D: THREE.Object3D
  // Gravity
  rigidBody: RigidBody
  // Collision
  collider: Collider

  constructor(scene: FibboScene) {
    super(scene)
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
    this.object3D = new THREE.Mesh(geometry, material)
    this.object3D.position.set(0, 2, 0)

    // Create a dynamic rigid-body.
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(0.0, 2.0, 0.0)
    this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

    // Create a cuboid collider attached to the dynamic rigidBody.
    const colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5)
    this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
  }

  onFrame(_delta: number): void {
  }
}
