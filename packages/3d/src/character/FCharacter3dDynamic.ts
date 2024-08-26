import RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from '../FScene3d'
import type { FComponent3dOptions } from '../FComponent3d'
import type { FRigidBody3dOptions } from '../FRigidBody3d'
import { FCharacter3d } from './FCharacter3d'

/**
 * @description A pre-defined character controller based on Dynamic rigidbodies.
 * @category Character
 * @example
 * ```ts
 * import { FScene3d, FCharacter3dDynamic } from '@fibbojs/3d'
 *
 * const scene = new FScene3d()
 *
 * const capsule = new FCharacter3dDynamic(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacter3dDynamic extends FCharacter3d {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)

    /**
     * Handle movements on each frame (only character movement, as gravity is handled by the dynamic rigid body)
     */
    scene.onFrame(() => {
      // Get camera direction
      const cameraDirection = scene.camera.getCameraDirection()
      // Ignore the y axis
      cameraDirection.y = 0

      // Apply movement on the x axis
      if (this.inputs.forward) {
        this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(0.4 * this.speed), true)
      }
      else if (this.inputs.backward) {
        this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(-0.4 * this.speed), true)
      }

      // Apply movement on the z axis
      if (this.inputs.left) {
        this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(0.4 * this.speed).applyAxisAngle(new scene.THREE.Vector3(0, 1, 0), Math.PI / 2), true)
      }
      else if (this.inputs.right) {
        this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(-0.4 * this.speed).applyAxisAngle(new scene.THREE.Vector3(0, 1, 0), Math.PI / 2), true)
      }
    })

    // Initialize the rigid body
    this.initRigidBody()
  }

  initRigidBody(options?: FRigidBody3dOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }
}
