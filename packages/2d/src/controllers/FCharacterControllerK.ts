import RAPIER from '@dimforge/rapier2d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../core/FScene'
import type { FCharacterControllerOptions } from './FCharacterController'
import { FCharacterController } from './FCharacterController'

/**
 * An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Controller
 */
export abstract class FCharacterControllerK extends FCharacterController {
  /**
   * The y velocity of the character. Used to simulate gravity.
   */
  yVelocity: number

  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  constructor(scene: FScene, options: FCharacterControllerOptions) {
    super(scene, options)

    // Initialize the y velocity
    this.yVelocity = scene.world.gravity.y

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)
    // Bind the keyboard events
    fKeyboard.onKeyDown(' ', () => {
      this.yVelocity = 10
    })

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)
  }

  /**
   * Return the corrected movements for the current frame.
   */
  getCorrectedMovements(): { x: number, y: number } {
    const movementDirection = new RAPIER.Vector2(0, 0)
    // Compute the movement direction
    movementDirection.x = this.inputs.left ? -1 : this.inputs.right ? 1 : 0

    // Create movement vector
    const desiredMovement = {
      x: movementDirection.x * 8 * 0.01 * this.speed,
      y: this.yVelocity * 0.01,
    }
    // Compute the desired movement
    this.characterController.computeColliderMovement(
      this.component.rigidBody ? this.component.rigidBody.collider.__COLLIDER__ : this.component.collider?.__COLLIDER__ as RAPIER.Collider,
      desiredMovement,
      RAPIER.QueryFilterFlags.EXCLUDE_SENSORS,
    )

    // If yVelocity is not 0, apply gravity
    if (this.yVelocity > this.scene.world.gravity.y) {
      this.yVelocity += this.scene.world.gravity.y * 0.00981 * 4
    }
    else {
      this.yVelocity = this.scene.world.gravity.y
    }

    // Get the corrected movement
    return this.characterController.computedMovement()
  }
}
