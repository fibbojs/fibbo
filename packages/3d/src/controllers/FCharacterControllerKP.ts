import { FRigidBodyType } from '../types/FRigidBodyType'
import { FShapes } from '../types/FShapes'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * A pre-defined character controller based on a Kinematic Position RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerKP } from '@fibbojs/3d'
 *
 * const capsule = new FCapsule()
 * capsule.addController(new FCharacterControllerKP())
 * ```
 */
export class FCharacterControllerKP extends FCharacterControllerK {
  constructor(options: FCharacterControllerOptions) {
    super(options)

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: FRigidBodyType.KINEMATIC_POSITION_BASED,
      shape: FShapes.CAPSULE,
      ...options,
    })
  }

  frame(delta: number): void {
    /**
     * Get the corrected movements for the current frame
     */
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigidBody
    this.component.rigidBody?.__RIGIDBODY__.setNextKinematicTranslation({
      x: this.component.rigidBody.__RIGIDBODY__.translation().x + correctedMovement.x,
      y: this.component.rigidBody.__RIGIDBODY__.translation().y + correctedMovement.y,
      z: this.component.rigidBody.__RIGIDBODY__.translation().z + correctedMovement.z,
    })

    // If one of the inputs is true, apply the corrected rotation
    if (this.inputs.forward || this.inputs.backward || this.inputs.left || this.inputs.right) {
      // Apply the rotation to the rigidBody
      this.component.rigidBody?.__RIGIDBODY__.setNextKinematicRotation(this.getCorrectedRotation())
    }
  }
}
