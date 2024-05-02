import type * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import type { FibboScene } from '../FibboScene'

/**
 * @description The base class for all models in FibboJS.
 */
export abstract class FibboModel {
  // Scene
  scene: FibboScene
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
  }

  abstract onFrame(_delta: number): void
}
