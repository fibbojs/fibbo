import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FKeyboard } from '@fibbojs/event'
import type { FVector3 } from '@fibbojs/core'
import type { FCharacterControllerOptions } from './FCharacterController'
import { FCharacterController } from './FCharacterController'

/**
 * An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Controller
 */
export abstract class FCharacterControllerK extends FCharacterController {
  /**
   * The y velocity of the character. Used to apply gravity.
   */
  yVelocity: number

  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  /**
   * Tells if the character is grounded.
   */
  isGrounded: boolean
  /**
   * Tells if the character was grounded in the last frame.
   */
  __LAST_IS_GROUNDED__: boolean

  constructor(options: FCharacterControllerOptions) {
    super(options)

    // Set the default yVelocity
    this.yVelocity = 0
    // Set the default isGrounded
    this.isGrounded = false
    this.__LAST_IS_GROUNDED__ = false

    // Create a keyboard instance
    const fKeyboard = new FKeyboard({
      scene: this.scene,
    })
    // Bind the keyboard events
    fKeyboard.onKeyDown(' ', () => {
      // Verify if the character is grounded
      if (this.isGrounded) {
        // Apply a vertical impulse
        this.yVelocity = 0.5
      }
    })

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = this.scene.world.createCharacterController(offset)
    // Configure autostep
    this.characterController.enableAutostep(0.5, 0.1, true)
    this.characterController.enableSnapToGround(0.1)
  }

  /**
   * Return the corrected movements for the current frame.
   */
  getCorrectedMovements(delta: number): FVector3 {
    let movementDirection = new THREE.Vector3(0, 0, 0)
    // Compute the movement direction
    movementDirection.x = this.inputs.left ? 1 : this.inputs.right ? -1 : 0
    movementDirection.z = this.inputs.forward ? 1 : this.inputs.backward ? -1 : 0
    // Normalize the movement direction
    movementDirection = movementDirection.normalize()
    // Apply the camera direction to the movement direction
    const cameraDirection = this.scene.camera.getCameraDirection()
    movementDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(cameraDirection.x, cameraDirection.z))

    // Create desired movement
    const desiredMovement = {
      x: movementDirection.x * this.speed * delta * 10,
      y: this.yVelocity,
      z: movementDirection.z * this.speed * delta * 10,
    }
    // Compute the desired movement
    this.characterController.computeColliderMovement(
      this.component.rigidBody ? this.component.rigidBody.collider.__COLLIDER__ : this.component.collider?.__COLLIDER__ as RAPIER.Collider,
      desiredMovement,
      RAPIER.QueryFilterFlags.EXCLUDE_SENSORS,
    )

    // If the character is grounded, reset the yVelocity
    if (this.characterController.computedGrounded()) {
      this.yVelocity = 0
    }
    else {
      this.yVelocity -= 9.81 * delta / 5
    }

    /**
     * There's a bug with `computedGrounded` method that makes it alternate between true and false when the character is effectively grounded.
     * This is a workaround to fix this issue.
     * We basically add a 1 frame delay to the isGrounded property by storing the last value of computedGrounded and checking if it's false 2 frames in a row.
     */
    if (!this.__LAST_IS_GROUNDED__ && !this.characterController.computedGrounded()) {
      this.isGrounded = false
    }
    if (this.characterController.computedGrounded()) {
      this.isGrounded = true
      this.__LAST_IS_GROUNDED__ = true
    }
    else {
      this.__LAST_IS_GROUNDED__ = false
    }

    // Return the corrected movement
    return this.characterController.computedMovement()
  }
}
