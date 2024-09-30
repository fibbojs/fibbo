import RAPIER from '@dimforge/rapier2d'
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
    fKeyboard.onKeyDown(' ', () => {
      this.component.rigidBody?.__RIGIDBODY__.applyImpulse({ x: 0, y: 0.5 }, true)
    })

    // Initialize the rigidBody
    this.component.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }

  onFrame(_delta: number): void {
    // Apply movement on the y axis
    if (this.inputs.up) {
      this.component.rigidBody?.__RIGIDBODY__.applyImpulse({ x: 0, y: 0.15 * this.speed }, true)
    }
    else if (this.inputs.down) {
      this.component.rigidBody?.__RIGIDBODY__.applyImpulse({ x: 0, y: -0.15 * this.speed }, true)
    }
    // Apply movement on the x axis
    if (this.inputs.left) {
      this.component.rigidBody?.__RIGIDBODY__.applyImpulse({ x: -0.15 * this.speed, y: 0 }, true)
    }
    else if (this.inputs.right) {
      this.component.rigidBody?.__RIGIDBODY__.applyImpulse({ x: 0.15 * this.speed, y: 0 }, true)
    }
  }
}
