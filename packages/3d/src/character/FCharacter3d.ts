import * as THREE from 'three'
import { FKeyboard } from '@fibbojs/event'
import type RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions, FComponent3dOptions__initCollider, FComponent3dOptions__initRigidBody } from '../FComponent3d'
import { FComponent3d } from '../FComponent3d'

/**
 * @description A pre-defined character controller.
 * @category Model
 * @example
 * ```ts
 * import { FScene3d, FCharacter } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const capsule = new FCharacter(scene)
 * scene.addComponent(capsule)
 * ```
 */
export abstract class FCharacter3d extends FComponent3d {
  /**
   * The character controller that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController
  /**
   * The inputs that will be used to move the character.
   */
  inputs: {
    forward: boolean
    backward: boolean
    left: boolean
    right: boolean
  }

  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)
    // Create a capsule
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xA0FFA0 })
    this.mesh = new THREE.Mesh(geometry, material)

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)

    // The gap the controller will leave between the character and its environment
    const offset = 0.01
    // Create the character controller
    this.characterController = scene.world.createCharacterController(offset)

    // Map of the movements (will be updated by the keyboard)
    this.inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    }

    // Key down
    fKeyboard.onKeyDown('ArrowUp', () => {
      this.inputs.forward = true
    })
    fKeyboard.onKeyDown('ArrowDown', () => {
      this.inputs.backward = true
    })
    fKeyboard.onKeyDown('ArrowLeft', () => {
      this.inputs.left = true
    })
    fKeyboard.onKeyDown('ArrowRight', () => {
      this.inputs.right = true
    })

    // Key up
    fKeyboard.onKeyUp('ArrowUp', () => {
      this.inputs.forward = false
    })
    fKeyboard.onKeyUp('ArrowDown', () => {
      this.inputs.backward = false
    })
    fKeyboard.onKeyUp('ArrowLeft', () => {
      this.inputs.left = false
    })
    fKeyboard.onKeyUp('ArrowRight', () => {
      this.inputs.right = false
    })
  }

  initRigidBody(options?: FComponent3dOptions__initRigidBody): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }

  initCollider(options?: FComponent3dOptions__initCollider): void {
    super.initCollider({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }
}
