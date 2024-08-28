import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../FScene'
import type { FComponentOptions } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import { FCharacter } from './FCharacter'

/**
 * @description A pre-defined character controller based on a Dynamic RigidBody.
 * @category Character
 * @example
 * ```ts
 * import { FScene, FCharacterDynamic } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const capsule = new FCharacterDynamic(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacterDynamic extends FCharacter {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)

    const fKeyboard = new FKeyboard(scene)
    fKeyboard.on(' ', () => {
      this.rigidBody?.rigidBody.applyImpulse(new THREE.Vector3(0, 1, 0), true)
    })

    // Initialize the rigid body
    this.initRigidBody()
    // Initialize a sensor
    this.initSensor()
  }

  onFrame(_delta: number): void {
    // Get camera direction
    const cameraDirection = this.scene.camera.getCameraDirection()
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
      this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(0.4 * this.speed).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), true)
    }
    else if (this.inputs.right) {
      this.rigidBody?.rigidBody.applyImpulse(cameraDirection.multiplyScalar(-0.4 * this.speed).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), true)
    }

    super.onFrame(_delta)
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }
}
