import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import type { FComponent3dOptions } from '../FComponent3d'
import type { FRigidBody3dOptions } from '../FRigidBody3d'
import { FCharacter3dKinematic } from './FCharacter3dKinematic'

/**
 * @description A pre-defined character controller based on Kinematic Velocity rigidbodies.
 * @category Character
 * @example
 * ```ts
 * import { FScene3d, FCharacter3dKV } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const capsule = new FCharacter3dKV(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacter3dKV extends FCharacter3dKinematic {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)

    /**
     * Handle movements on each frame (gravity + character movement)
     * For some reason, using the onFrame method will result in weird behavior with gravity
     * (e.g. the character crossing the ground)
     */
    scene.onFrame((delta) => {
      let worldDirection = new THREE.Vector3(0, 0, 0)
      // Compute the movement direction
      worldDirection.x = this.inputs.left ? 1 : this.inputs.right ? -1 : 0
      worldDirection.z = this.inputs.forward ? 1 : this.inputs.backward ? -1 : 0
      // Normalize the movement direction
      worldDirection = worldDirection.normalize()
      // Apply the camera direction to the movement direction
      const cameraDirection = scene.camera.getCameraDirection()
      worldDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(cameraDirection.x, cameraDirection.z))

      // Create movement vector
      const desiredMovement = {
        x: worldDirection.x * delta * 8 * this.speed,
        y: this.scene.world.gravity.y * delta,
        z: worldDirection.z * delta * 8 * this.speed,
      }
      // Compute the desired movement
      this.characterController.computeColliderMovement(
        this.collider?.collider as RAPIER.Collider,
        desiredMovement,
        undefined,
        undefined,
        (collider) => {
          // Ignore all sensors
          return !collider.isSensor()
        },
      )
      // Get the corrected movement
      const correctedMovement = this.characterController.computedMovement()
      // Apply the movement to the rigid body
      this.rigidBody?.rigidBody.setLinvel({
        x: correctedMovement.x / delta,
        y: correctedMovement.y / delta,
        z: correctedMovement.z / delta,
      }, true)
    })

    // Initialize the rigid body
    this.initRigidBody()
  }

  initRigidBody(options?: FRigidBody3dOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
      ...options,
    })
  }
}