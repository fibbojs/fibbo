import { FRigidBodyType } from '../types/FRigidBodyType'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * A pre-defined character controller based on a Kinematic Position RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerKP, FScene } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule()
 * capsule.controller = new FCharacterControllerKP()
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterControllerKP extends FCharacterControllerK {
  constructor(options: FCharacterControllerOptions) {
    super(options)

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: FRigidBodyType.KINEMATIC_POSITION_BASED,
      lockRotations: true,
      ...options,
    })
  }

  frame(delta: number): void {
    // Get the corrected movements for the current frame
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigidBody
    this.component.rigidBody?.__RIGIDBODY__.setNextKinematicTranslation({
      x: this.component.rigidBody.__RIGIDBODY__.translation().x + correctedMovement.x,
      y: this.component.rigidBody.__RIGIDBODY__.translation().y + correctedMovement.y,
    })
  }
}
