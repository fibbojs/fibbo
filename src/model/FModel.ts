import * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import type { FScene } from '../core/FScene'
import type { FComponent } from '../core/FComponent'

/**
 * @description The base class for all models in FibboJS.
 * @category Model
 */
export abstract class FModel implements FComponent {
  // Scene
  scene: FScene
  position: THREE.Vector3
  scale: THREE.Vector3
  rotation: THREE.Vector3
  // Object3D
  object3D?: THREE.Object3D
  // Physics
  rigidBody?: RigidBody
  collider?: Collider

  /**
   * @param scene The FScene where the model will be added.
   */
  constructor(scene: FScene) {
    this.scene = scene

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a FCube')

    // Define default values for position, scale and rotation
    this.position = new THREE.Vector3(0, 1, 0)
    this.scale = new THREE.Vector3(1, 1, 1)
    this.rotation = new THREE.Vector3(0, 0, 0)
  }

  abstract onFrame(_delta: number): void
}
