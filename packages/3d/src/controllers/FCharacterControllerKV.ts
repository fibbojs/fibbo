import type { FScene } from '../core/FScene'
import { FRigidBodyType } from '../types/FRigidBodyType'
import { FCharacterControllerK } from './FCharacterControllerK'
import type { FCharacterControllerOptions } from './FCharacterController'

/**
 * A pre-defined character controller based on a Kinematic Velocity RigidBody.
 * @category Controller
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

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: FRigidBodyType.KINEMATIC_VELOCITY_BASED,
      ...options,
    })
  }

  frame(delta: number): void {
    /**
     * Get the corrected movements for the current frame
     */
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigidBody
    this.component.rigidBody?.__RIGIDBODY__.setLinvel({
      x: correctedMovement.x / delta,
      y: correctedMovement.y / delta,
      z: correctedMovement.z / delta,
    }, true)
    this.component.rigidBody?.__RIGIDBODY__.setRotation(this.getCorrectedRotation(), true)
  }
}
