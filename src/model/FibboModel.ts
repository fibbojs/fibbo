import * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import type { FibboScene } from '../core/FibboScene'
import type { FibboComponent } from '../core/FibboComponent'

/**
 * @description The base class for all models in FibboJS.
 * @category Model
 */
export abstract class FibboModel implements FibboComponent {
  // Scene
  scene: FibboScene
  position: THREE.Vector3
  scale: THREE.Vector3
  rotation: THREE.Vector3
  // Object3D
  object3D?: THREE.Object3D
  // Physics
  rigidBody?: RigidBody
  collider?: Collider

  /**
   * @param scene The FibboScene where the model will be added.
   */
  constructor(scene: FibboScene) {
    this.scene = scene

    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FibboScene must have a world to create a FibboCube')

    // Define default values for position, scale and rotation
    this.position = new THREE.Vector3(0, 1, 0)
    this.scale = new THREE.Vector3(1, 1, 1)
    this.rotation = new THREE.Vector3(0, 0, 0)
  }

  abstract onFrame(_delta: number): void
}
