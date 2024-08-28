import RAPIER from '@dimforge/rapier2d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import { FCharacterKinematic } from './FCharacterKinematic'

/**
 * @description A pre-defined character controller based on Kinematic Position rigidbodies.
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
  yVelocity: number

  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)

    this.yVelocity = scene.world.gravity.y

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)
    // Bind the keyboard events
    fKeyboard.on(' ', () => {
      this.yVelocity = 10
    })

    // Initialize the rigid body
    this.initRigidBody()
    // Initialize a sensor
    this.initSensor()
  }

  onFrame(delta: number): void {
    /**
     * Handle movements on each frame (gravity + character movement)
     */
    const movementDirection = new RAPIER.Vector2(0, 0)
    // Compute the movement direction
    movementDirection.x = this.inputs.left ? -1 : this.inputs.right ? 1 : 0

    // Create movement vector
    const desiredMovement = {
      x: movementDirection.x * delta * 8 * this.speed,
      y: this.yVelocity * delta,
    }
    // Compute the desired movement
    this.characterController.computeColliderMovement(
      this.collider?.collider as RAPIER.Collider,
      desiredMovement,
      // I don't why this flag works, I would expect QueryFilterFlags.EXCLUDE_SENSORS to work but anyway
      RAPIER.QueryFilterFlags.EXCLUDE_SOLIDS,
    )
    // Get the corrected movement
    const correctedMovement = this.characterController.computedMovement()
    // Apply the movement to the rigid body
    this.rigidBody?.rigidBody.setNextKinematicTranslation({
      x: this.rigidBody.rigidBody.translation().x + correctedMovement.x * delta * this.speed * 64,
      y: this.rigidBody.rigidBody.translation().y + correctedMovement.y * delta * this.speed * 64,
    })

    // If yVelocity is not 0, apply gravity
    if (this.yVelocity > this.scene.world.gravity.y) {
      this.yVelocity += this.scene.world.gravity.y * delta * 4
    }
    else {
      this.yVelocity = this.scene.world.gravity.y
    }

    super.onFrame(delta)
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      ...options,
    })
  }
}
