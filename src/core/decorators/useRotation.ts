import * as THREE from 'three'
import type { FibboModel } from '../model/FibboModel'
import type { FibboVector3 } from '../../types/FibboVector3'

/**
 * @description This decorator is used to alter the rotation of a FibboModel (like FibboCube, FibboGLTF, etc).
 * It must be placed before useRigidBody.
 * @param rotation The rotation to be applied.
 * @returns {Function} The class with the rotation altered.
 * @example
 * ```ts
 * import { FibboCube, useRotation } from '@fibbojs/fibbo'
 * import type { FibboScene } from '@fibbojs/fibbo'
 *
 * @useRotation({ x: 1, y: 0, z: 0 })
 * export class MyCube extends FibboCube {
 *  constructor(scene: FibboScene) {
 *   super(scene)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export function useRotation(
  // Default rotation
  rotation: FibboVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FibboModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // If the object3D exists, apply the rotation
        if (this.object3D)
          this.object3D.rotation.set(rotation.x, rotation.y, rotation.z)

        // Store the rotation
        this.rotation = new THREE.Vector3(rotation.x, rotation.y, rotation.z)
      }

      onFrame(_delta: number) {
        // Call the original onFrame method
        originalOnFrame.call(this, _delta)
      }
    }

    // Define constructor name
    Object.defineProperty(newClass, 'name', { value: constructor.name })

    return newClass
  }
}
