import { BackgroundWorker } from '@fibbojs/core'

/**
 * Physic web worker.
 * @category Pipeline
 */
export class PhysicWorker extends BackgroundWorker {
  constructor(sw: DedicatedWorkerGlobalScope) {
    super(sw)
  }

  frame(delta: number) {
    console.log(`Worker : ${delta}`)

    /*
    // Step the physics world
    this.world.timestep = delta
    this.world.step(this.eventQueue)

    // Call frame for each collider and rigidBody
    this.colliders.forEach(collider => collider.frame(delta))
    this.rigidBodies.forEach(rigidBody => rigidBody.frame(delta))

    // Drain collision events
    this.eventQueue.drainCollisionEvents((handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, started: boolean) => {
      this.handleCollision(handle1, handle2, started)
    })
    */
  }
}
