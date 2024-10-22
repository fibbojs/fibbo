import type { FScene } from '../core/FScene'
import { FRigidBody } from '../core/FRigidBody'
import { FRigidBodyType } from '../types/FRigidBodyType'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * A pre-defined character controller based on a Kinematic Position RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerKP, FScene } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule(scene)
 * capsule.controller = new FCharacterControllerKP(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterControllerKP extends FCharacterControllerK {
  constructor(scene: FScene, options: FCharacterControllerOptions) {
    super(scene, options)

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: FRigidBodyType.KINEMATIC_POSITION_BASED,
      ...options,
    })
  }

  frame(delta: number): void {
    /**
     * Get the corrected movements for the current frame
     */
    const correctedMovement = this.getCorrectedMovements()

    // Apply the movement to the rigidBody
    this.component.rigidBody?.__RIGIDBODY__.setNextKinematicTranslation({
      x: this.component.rigidBody.__RIGIDBODY__.translation().x + correctedMovement.x * delta * this.speed * 64,
      y: this.component.rigidBody.__RIGIDBODY__.translation().y + correctedMovement.y * delta * this.speed * 64,
      z: this.component.rigidBody.__RIGIDBODY__.translation().z + correctedMovement.z * delta * this.speed * 64,
    })

    // If one of the inputs is true, apply the corrected rotation
    if (this.inputs.forward || this.inputs.backward || this.inputs.left || this.inputs.right) {
      // Apply the rotation to the rigidBody
      this.component.rigidBody?.__RIGIDBODY__.setNextKinematicRotation(this.getCorrectedRotation())
    }
  }
}
