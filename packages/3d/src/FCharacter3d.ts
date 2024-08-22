import * as THREE from 'three'
import { FKeyboard } from '@fibbojs/event'
import RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from './FScene3d'
import { F3dShapes } from './types/F3dShapes'
import type { FComponent3dOptions, FComponent3dOptions__initCollider, FComponent3dOptions__initRigidBody } from './FComponent3d'
import { FComponent3d } from './FComponent3d'

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
export class FCharacter3d extends FComponent3d {
  /**
   * The character controlelr that will be used to move the character.
   */
  characterController: RAPIER.KinematicCharacterController

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
    const inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    }

    // Handle movements on each frame (gravity + character movement)
    scene.onFrame((delta) => {
      let worldDirection = new THREE.Vector3(0, 0, 0)
      // Compute the movement direction
      worldDirection.x = inputs.left ? 1 : inputs.right ? -1 : 0
      worldDirection.z = inputs.forward ? 1 : inputs.backward ? -1 : 0
      // Normalize the movement direction
      worldDirection = worldDirection.normalize()
      // Apply the camera direction to the movement direction
      const cameraDirection = scene.camera.getCameraDirection()
      worldDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(cameraDirection.x, cameraDirection.z))

      // Create movement vector
      const desiredMovement = {
        x: worldDirection.x * delta * 8,
        y: this.scene.world.gravity.y * delta,
        z: worldDirection.z * delta * 8,
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
        z: correctedMovement.z / delta,
      }, true)
    })

    // Key down
    fKeyboard.onKeyDown('ArrowUp', () => {
      inputs.forward = true
    })
    fKeyboard.onKeyDown('ArrowDown', () => {
      inputs.backward = true
    })
    fKeyboard.onKeyDown('ArrowLeft', () => {
      inputs.left = true
    })
    fKeyboard.onKeyDown('ArrowRight', () => {
      inputs.right = true
    })

    // Key up
    fKeyboard.onKeyUp('ArrowUp', () => {
      inputs.forward = false
    })
    fKeyboard.onKeyUp('ArrowDown', () => {
      inputs.backward = false
    })
    fKeyboard.onKeyUp('ArrowLeft', () => {
      inputs.left = false
    })
    fKeyboard.onKeyUp('ArrowRight', () => {
      inputs.right = false
    })

    // Initialize the rigid body
    this.initRigidBody()
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  initRigidBody(options?: FComponent3dOptions__initRigidBody): void {
    super.initRigidBody({
      ...options,
      shape: F3dShapes.CAPSULE,
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
    })
  }

  initCollider(options?: FComponent3dOptions__initCollider): void {
    super.initCollider({
      ...options,
      shape: F3dShapes.CAPSULE,
    })
  }
}
