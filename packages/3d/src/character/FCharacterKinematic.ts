import type RAPIER from '@dimforge/rapier3d'
import type { FScene } from '../FScene'
import type { FCharacterOptions } from './FCharacter'
import { FCharacter } from './FCharacter'

/**
 * @description An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Character
 */
export abstract class FCharacterKinematic extends FCharacter {
  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  constructor(scene: FScene, options?: FCharacterOptions) {
    super(scene, options)

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)
    // Configure autostep
    this.characterController.enableAutostep(0.5, 0.1, true)
  }
}
