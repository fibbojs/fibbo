import type RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions__initCollider, FComponent3dOptions__initRigidBody } from '../FComponent3d'
import type { FCharacter3dOptions } from './FCharacter3d'
import { FCharacter3d } from './FCharacter3d'

/**
 * @description An abstract pre-defined character controller based on Kinematic rigidbodies.
 * @category Character
 */
export abstract class FCharacter3dKinematic extends FCharacter3d {
  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

  constructor(scene: FScene3d, options?: FCharacter3dOptions) {
    super(scene, options)

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)
  }

  initRigidBody(options?: FComponent3dOptions__initRigidBody): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }

  initCollider(options?: FComponent3dOptions__initCollider): void {
    super.initCollider({
      shape: F3dShapes.CAPSULE,
      ...options,
    })
  }
}
