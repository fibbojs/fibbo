import type RAPIER from '@dimforge/rapier2d'
import type { FScene2d } from '../FScene2d'
import { F2dShapes } from '../types/F2dShapes'
import type { FComponent2dOptions__initCollider, FComponent2dOptions__initRigidBody } from '../FComponent2d'
import type { FCharacter2dOptions } from './FCharacter2d'
import { FCharacter2d } from './FCharacter2d'

/**
 * @description An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Character
 */
export abstract class FCharacter2dKinematic extends FCharacter2d {
  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  constructor(scene: FScene2d, options?: FCharacter2dOptions) {
    super(scene, options)

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)
  }

  initRigidBody(options?: FComponent2dOptions__initRigidBody): void {
    super.initRigidBody({
      shape: F2dShapes.SQUARE,
      ...options,
    })
  }

  initCollider(options?: FComponent2dOptions__initCollider): void {
    super.initCollider({
      shape: F2dShapes.SQUARE,
      ...options,
    })
  }
}
