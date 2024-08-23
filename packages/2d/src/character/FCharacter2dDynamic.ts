import RAPIER from '@dimforge/rapier2d'
import type { FScene2d } from '../FScene2d'
import type { FComponent2dOptions, FComponent2dOptions__initRigidBody } from '../FComponent2d'
import { FCharacter2d } from './FCharacter2d'

/**
 * @description A pre-defined character controller based on Dynamic rigidbodies.
 * @category Character
 * @example
 * ```ts
 * import { FScene2d, FCharacter2dDynamic } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const capsule = new FCharacter2dDynamic(scene)
 * scene.addComponent(capsule)
 * ```
 */
export class FCharacter2dDynamic extends FCharacter2d {
  constructor(scene: FScene2d, options?: FComponent2dOptions) {
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

  initRigidBody(options?: FComponent2dOptions__initRigidBody): void {
    super.initRigidBody({
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      lockRotations: true,
      ...options,
    })
  }
}
