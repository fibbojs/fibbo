import RAPIER from '@dimforge/rapier2d'
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
 * import { FScene, FCharacterDynamic } from '@fibbojs/2d'
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
      this.rigidBody?.rigidBody.applyImpulse({ x: 0, y: 0.5 }, true)
    })
  }

  onFrame(_delta: number): void {
    // Apply movement on the y axis
    if (this.inputs.up) {
      this.rigidBody?.rigidBody.applyImpulse({ x: 0, y: 0.15 * this.speed }, true)
    }
    else if (this.inputs.down) {
      this.rigidBody?.rigidBody.applyImpulse({ x: 0, y: -0.15 * this.speed }, true)
    }
    // Apply movement on the x axis
    if (this.inputs.left) {
      this.rigidBody?.rigidBody.applyImpulse({ x: -0.15 * this.speed, y: 0 }, true)
    }
    else if (this.inputs.right) {
      this.rigidBody?.rigidBody.applyImpulse({ x: 0.15 * this.speed, y: 0 }, true)
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
