import RAPIER from '@dimforge/rapier2d'
import type { FScene2d } from '../FScene2d'
import type { FComponent2dOptions, FComponent2dOptions__initRigidBody } from '../FComponent2d'
import { FCharacter2dKinematic } from './FCharacter2dKinematic'

/**
 * @description A pre-defined character controller based on Kinematic Velocity rigidbodies.
 * @category Character
 * @example
 * ```ts
 * import { FScene2d, FCharacter2dKV } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const capsule = new FCharacter2dKV(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacter2dKV extends FCharacter2dKinematic {
  constructor(scene: FScene2d, options?: FComponent2dOptions) {
    super(scene, options)

    /**
     * Handle movements on each frame (gravity + character movement)
     * For some reason, using the onFrame method will result in weird behavior with gravity
     * (e.g. the character crossing the ground)
     */
    scene.onFrame((delta) => {
      const movementDirection = new RAPIER.Vector2(0, 0)
      // Compute the movement direction
      movementDirection.x = this.inputs.left ? -1 : this.inputs.right ? 1 : 0
      // TODO : jump
      // movementDirection.y = this.inputs.up ? 1 : this.inputs.down ? -1 : 0

      // Create movement vector
      const desiredMovement = {
        x: movementDirection.x * delta * 8 * this.speed,
        y: this.scene.world.gravity.y * delta,
      }
      // Compute the desired movement
      this.characterController.computeColliderMovement(
        this.collider as RAPIER.Collider,
        desiredMovement,
      )
      // Get the corrected movement
      const correctedMovement = this.characterController.computedMovement()
      // Apply the movement to the rigid body
      this.rigidBody?.setLinvel({
        x: correctedMovement.x / delta,
        y: correctedMovement.y / delta,
      }, true)
    })

    // Initialize the rigid body
    this.initRigidBody()
  }

  initRigidBody(options?: FComponent2dOptions__initRigidBody): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
      ...options,
    })
  }
}
