import * as THREE from 'three'
import RAPIER, { QueryFilterFlags } from '@dimforge/rapier3d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene3d } from '../FScene3d'
import type { FComponent3dOptions } from '../FComponent3d'
import type { FRigidBody3dOptions } from '../FRigidBody3d'
import { FCharacter3dKinematic } from './FCharacter3dKinematic'

/**
 * @description A pre-defined character controller based on Kinematic Position rigidbodies.
 * @category Character
 * @example
 * ```ts
 * import { FScene3d, FCharacter3dKP } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const capsule = new FCharacter3dKP(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacter3dKP extends FCharacter3dKinematic {
  yVelocity: number

  constructor(scene: FScene3d, options?: FComponent3dOptions) {
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
      QueryFilterFlags.EXCLUDE_SOLIDS,
    )
    // Get the corrected movement
    const correctedMovement = this.characterController.computedMovement()
    // Apply the movement to the rigid body
    this.rigidBody?.rigidBody.setNextKinematicTranslation({
      x: this.rigidBody.rigidBody.translation().x + correctedMovement.x * delta * this.speed * 64,
      y: this.rigidBody.rigidBody.translation().y + correctedMovement.y * delta * this.speed * 64,
      z: this.rigidBody.rigidBody.translation().z + correctedMovement.z * delta * this.speed * 64,
    })

    // If yVelocity is not 0, apply gravity
    if (this.yVelocity > this.scene.world.gravity.y) {
      this.yVelocity += this.scene.world.gravity.y * delta * 4
    }
    else {
      this.yVelocity = this.scene.world.gravity.y
    }

    // Call the super onFrame method
    super.onFrame(delta)
  }

  initRigidBody(options?: FRigidBody3dOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      ...options,
    })
  }
}
