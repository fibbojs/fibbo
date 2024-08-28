import RAPIER from '@dimforge/rapier2d'
import type { FScene } from '../FScene'
import type { FComponentOptions, FComponentOptions__initRigidBody } from '../FComponent'
import { FCharacter } from './FCharacter'

/**
 * @description A pre-defined character controller based on Dynamic rigidbodies.
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

    /**
     * Handle movements on each frame (only character movement, as gravity is handled by the dynamic rigid body)
     */
    scene.onFrame(() => {
      // Apply movement on the y axis
      if (this.inputs.up) {
        this.rigidBody?.applyImpulse({ x: 0, y: 0.15 * this.speed }, true)
      }
      else if (this.inputs.down) {
        this.rigidBody?.applyImpulse({ x: 0, y: -0.15 * this.speed }, true)
      }
      // Apply movement on the x axis
      if (this.inputs.left) {
        this.rigidBody?.applyImpulse({ x: -0.15 * this.speed, y: 0 }, true)
      }
      else if (this.inputs.right) {
        this.rigidBody?.applyImpulse({ x: 0.15 * this.speed, y: 0 }, true)
      }
    })

    // Initialize the rigid body
    this.initRigidBody()
  }

  initRigidBody(options?: FComponentOptions__initRigidBody): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }
}
