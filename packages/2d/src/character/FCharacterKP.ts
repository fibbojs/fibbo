import RAPIER from '@dimforge/rapier2d'
import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import { FCharacterKinematic } from './FCharacterKinematic'

/**
 * @description A pre-defined character controller based on a Kinematic Position RigidBody.
 * @category Character
 * @example
 * ```ts
 * import { FScene, FCharacterKP } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCharacterKP(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterKP extends FCharacterKinematic {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
  }

  onFrame(delta: number): void {
    // Get the corrected movement
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigid body
    this.rigidBody?.rigidBody.setNextKinematicTranslation({
      x: this.rigidBody.rigidBody.translation().x + correctedMovement.x * delta * this.speed * 64,
      y: this.rigidBody.rigidBody.translation().y + correctedMovement.y * delta * this.speed * 64,
    })

    super.onFrame(delta)
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      ...options,
    })
  }
}
