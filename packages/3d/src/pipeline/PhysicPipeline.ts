import { StandardPipeline } from '@fibbojs/core'
import type RAPIER from '@dimforge/rapier3d'
import type { FScene } from '../core/FScene'

export interface PhysicPipelineOptions {
  scene: FScene
}

/**
 * Render pipeline.
 */
export class PhysicPipeline extends StandardPipeline {
  scene: FScene

  constructor(options: PhysicPipelineOptions) {
    super()
    this.scene = options.scene
    this.frameRate = 60
  }

  frame(delta: number) {
    // Step the physics world
    this.scene.world.timestep = delta
    this.scene.world.step(this.scene.eventQueue)

    // Call frame for each collider and rigidBody
    this.scene.colliders.forEach(collider => collider.frame(delta))
    this.scene.rigidBodies.forEach(rigidBody => rigidBody.frame(delta))

    // Drain collision events
    this.scene.eventQueue.drainCollisionEvents((handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, started: boolean) => {
      this.scene.handleCollision(handle1, handle2, started)
    })
  }
}
