import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import { FCharacterKinematic } from './FCharacterKinematic'

/**
 * @description A pre-defined character controller based on a Kinematic Velocity RigidBody.
 * @category Character
 * @example
 * ```ts
 * import { FScene, FCharacterKV } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCharacterKV(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterKV extends FCharacterKinematic {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)

    // Initialize the rigid body
    this.initRigidBody()
    // Initialize a sensor
    this.initSensor()
  }

  onFrame(delta: number): void {
    /**
     * Get the corrected movements for the current frame
     */
    const correctedMovement = this.getCorrectedMovements(delta)

    // Apply the movement to the rigid body
    this.rigidBody?.rigidBody.setLinvel({
      x: correctedMovement.x / delta,
      y: correctedMovement.y / delta,
      z: correctedMovement.z / delta,
    }, true)

    // Call the super onFrame method
    super.onFrame(delta)
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.KinematicVelocityBased,
      ...options,
    })
  }
}
