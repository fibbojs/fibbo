import RAPIER from '@dimforge/rapier2d'
import type { FScene } from '../core/FScene'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * @description A pre-defined character controller based on a Kinematic Position RigidBody.
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

    // Initialize the rigid body
    this.component.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      lockRotations: true,
      ...options,
    })
  }

  onFrame(delta: number): void {
    // Get the corrected movement
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigid body
    this.component.rigidBody?.rigidBody.setNextKinematicTranslation({
      x: this.component.rigidBody.rigidBody.translation().x + correctedMovement.x * delta * this.speed * 64,
      y: this.component.rigidBody.rigidBody.translation().y + correctedMovement.y * delta * this.speed * 64,
    })
  }
}
