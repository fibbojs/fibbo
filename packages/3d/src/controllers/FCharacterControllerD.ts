import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../core/FScene'
import type { FCharacterControllerOptions } from './FCharacterController'
import { FCharacterController } from './FCharacterController'

/**
 * A pre-defined character controller based on a Dynamic RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerD, FScene } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCapsule(scene)
 * capsule.controller = new FCharacterControllerD(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterControllerD extends FCharacterController {
  constructor(scene: FScene, options: FCharacterControllerOptions) {
    super(scene, options)

    const fKeyboard = new FKeyboard(scene)
    fKeyboard.on(' ', () => {
      this.component.rigidBody?.rigidBody.applyImpulse(new THREE.Vector3(0, 0.1, 0), true)
    })

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }

  onFrame(_delta: number): void {
    // Get camera direction
    const cameraDirection = this.scene.camera.getCameraDirection()
    // Ignore the y axis
    cameraDirection.y = 0

    // Apply movement on the x axis
    if (this.inputs.forward) {
      this.component.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(0.04 * this.speed), true)
    }
    else if (this.inputs.backward) {
      this.component.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(-0.04 * this.speed), true)
    }

    // Apply movement on the z axis
    if (this.inputs.left) {
      this.component.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(0.04 * this.speed).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), true)
    }
    else if (this.inputs.right) {
      this.component.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(-0.04 * this.speed).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), true)
    }

    // Apply corrected rotation
    if (this.inputs.forward || this.inputs.backward || this.inputs.left || this.inputs.right) {
      this.component.rigidBody?.rigidBody.setRotation(this.getCorrectedRotation(), true)
    }
  }
}
