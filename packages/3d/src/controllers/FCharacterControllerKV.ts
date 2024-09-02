import RAPIER from '@dimforge/rapier3d'
import type { FScene } from '../core/FScene'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * @description A pre-defined character controller based on a Kinematic Velocity RigidBody.
 * @category Character
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerKV, FScene } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule(scene)
 * capsule.controller = new FCharacterControllerKV(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterControllerKV extends FCharacterControllerK {
  constructor(scene: FScene, options: FCharacterControllerOptions) {
    super(scene, options)

    // Initialize the rigid body
    this.component.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
      ...options,
    })
  }

  onFrame(delta: number): void {
    /**
     * Get the corrected movements for the current frame
     */
    const correctedMovement = this.getCorrectedMovements()

    // Apply the movement to the rigid body
    this.component.rigidBody?.rigidBody.setLinvel({
      x: correctedMovement.x / delta,
      y: correctedMovement.y / delta,
      z: correctedMovement.z / delta,
    }, true)
  }
}