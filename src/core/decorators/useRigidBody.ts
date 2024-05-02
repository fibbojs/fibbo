import * as RAPIER from '@dimforge/rapier3d'
import type { FibboModel } from '../model/FibboModel'
import type { Fibbo3DVector } from '../../types/Fibbo3DVector'

/**
 * @description This decorator is used to add a rigid body to a FibboModel (like FibboCube, FibboGLTF, etc).
 * @param position Default position.
 * @param scale Default scale.
 * @param rotation Default rotation.
 * @returns {Function} The class with the rigid body added.
 * @example
 * ```ts
 * import { FibboModel } from './FibboModel'
 * import type { FibboScene } from '../FibboScene'
 * import { useRigidBody } from '../decorators/useRigidBody'
 *
 * @useRigidBody()
 * export class MyModel extends FibboModel {
 *  constructor(scene: FibboScene) {
 *   super(scene)
 *  }
 * }
 * ```
 */
export function useRigidBody(
  // Default position
  position: Fibbo3DVector = { x: 0, y: 5, z: 0 },
  // Default scale
  scale: Fibbo3DVector = { x: 1, y: 1, z: 1 },
  // Default rotation
  rotation: Fibbo3DVector = { x: 0, y: 0, z: 0 },
): Function {
  return function <T extends { new(...args: any[]): FibboModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // Create a dynamic rigid-body.
        const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
          .setTranslation(position.x, position.y, position.z)
          .setRotation({ x: rotation.x, y: rotation.y, z: rotation.z, w: 1 })

        this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

        // Create a cuboid collider attached to the dynamic rigidBody.
        const colliderDesc = RAPIER.ColliderDesc.cuboid(scale.x, scale.y, scale.z)
        this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
      }

      onFrame(_delta: number) {
        if (this.rigidBody && this.object3D) {
          const position = this.rigidBody.translation()
          this.object3D.position.set(position.x, position.y, position.z)
          const rotation = this.rigidBody.rotation()
          this.object3D.rotation.set(rotation.x, rotation.y, rotation.z)
        }

        // Call the original onFrame method
        originalOnFrame.call(this, _delta)
      }
    }

    // Define constructor name
    Object.defineProperty(newClass, 'name', { value: constructor.name })

    return newClass
  }
}
