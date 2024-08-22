import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import type { FComponent3dOptions, FComponent3dOptions__initRigidBody } from '../FComponent3d'
import { FCharacter3d } from './FCharacter3d'

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
export class FCharacter3dKinematic extends FCharacter3d {
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

    // Initialize the rigid body
    this.initRigidBody()
  }

  initRigidBody(options?: FComponent3dOptions__initRigidBody): void {
    super.initRigidBody({
      ...options,
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
    })
  }
}
