import { FRigidBodyType } from '../types/FRigidBodyType'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * A pre-defined character controller based on a Kinematic Velocity RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerKV, FScene } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule()
 * capsule.controller = new FCharacterControllerKV()
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterControllerKV extends FCharacterControllerK {
  constructor(options: FCharacterControllerOptions) {
    super(options)

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: FRigidBodyType.KINEMATIC_VELOCITY_BASED,
      lockRotations: true,
      ...options,
    })
  }

  frame(delta: number): void {
    // Get the corrected movement
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigidBody
    this.component.rigidBody?.__RIGIDBODY__.setLinvel({
      x: correctedMovement.x / delta,
      y: correctedMovement.y / delta,
    }, true)
  }
}
