import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import type { FibboScene } from '../FibboScene'

export abstract class FibboModel {
  // Object3D
  object3D: THREE.Object3D
  // Gravity
  gravity: boolean = false
  rigidBody?: RigidBody
  // Collision
  collision: boolean = false
  collider?: Collider
  // Scene
  scene: FibboScene

  constructor(scene: FibboScene) {
    this.scene = scene
    this.object3D = new THREE.Object3D()
    this.object3D.position.set(0, 2, 0)

    // Create a dynamic rigid-body.
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(0.0, 2.0, 0.0)
    this.rigidBody = this.scene.world?.createRigidBody(rigidBodyDesc)

    // Create a cuboid collider attached to the dynamic rigidBody.
    const colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5)
    this.collider = this.scene.world?.createCollider(colliderDesc, this.rigidBody)
  }

  onFrame(_delta: number): void {
    if (this.rigidBody) {
      const position = this.rigidBody.translation()
      this.object3D.position.set(position.x, position.y, position.z)
      const rotation = this.rigidBody.rotation()
      this.object3D.rotation.set(rotation.x, rotation.y, rotation.z)
    }
  }
}
