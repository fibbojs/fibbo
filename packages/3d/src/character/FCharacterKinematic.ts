import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../FScene'
import type { FCharacterOptions } from './FCharacter'
import { FCharacter } from './FCharacter'

/**
 * @description An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Character
 */
export abstract class FCharacterKinematic extends FCharacter {
  /**
   * The y velocity of the character. Used to apply gravity.
   */
  yVelocity: number

  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  constructor(scene: FScene, options?: FCharacterOptions) {
    super(scene, options)

    // Set the default yVelocity
    this.yVelocity = scene.world.gravity.y

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)
    // Bind the keyboard events
    fKeyboard.on(' ', () => {
      this.yVelocity = 10
    })

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)
    // Configure autostep
    this.characterController.enableAutostep(0.5, 0.1, true)
  }

  /**
   * Return the corrected movements for the current frame.
   * @param delta The time elapsed since the last frame.
   */
  getCorrectedMovements(delta: number): { x: number, y: number, z: number } {
    let worldDirection = new THREE.Vector3(0, 0, 0)
    // Compute the movement direction
    worldDirection.x = this.inputs.left ? 1 : this.inputs.right ? -1 : 0
    worldDirection.z = this.inputs.forward ? 1 : this.inputs.backward ? -1 : 0
    // Normalize the movement direction
    worldDirection = worldDirection.normalize()
    // Apply the camera direction to the movement direction
    const cameraDirection = this.scene.camera.getCameraDirection()
    worldDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(cameraDirection.x, cameraDirection.z))

    // Create movement vector
    const desiredMovement = {
      x: worldDirection.x * delta * 8,
      y: this.yVelocity * delta,
      z: worldDirection.z * delta * 8,
    }
    // Compute the desired movement
    this.characterController.computeColliderMovement(
      this.collider?.collider as RAPIER.Collider,
      desiredMovement,
      // I don't why this flag works, I would expect QueryFilterFlags.EXCLUDE_SENSORS to work but anyway
      RAPIER.QueryFilterFlags.EXCLUDE_SOLIDS,
    )

    // If yVelocity is not 0, apply gravity
    if (this.yVelocity > this.scene.world.gravity.y) {
      this.yVelocity += this.scene.world.gravity.y * delta * 4
    }
    else {
      this.yVelocity = this.scene.world.gravity.y
    }

    // Return the corrected movement
    return this.characterController.computedMovement()
  }
}
