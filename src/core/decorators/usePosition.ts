import * as THREE from 'three'
import type { FibboModel } from '../model/FibboModel'
import type { FibboVector3 } from '../../types/FibboVector3'

/**
 * @description This decorator is used to alter the position of a FibboModel (like FibboCube, FibboGLTF, etc).
 * It must be placed before useRigidBody.
 * @param position The position to be applied.
 * @returns {Function} The class with the position altered.
 * @example
 * ```ts
 * import { FibboCube, usePosition } from '@fibbojs/fibbo'
 * import type { FibboScene } from '@fibbojs/fibbo'
 *
 * @usePosition({ x: 1, y: 1, z: 1 })
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
export function usePosition(
  // Default position
  position: FibboVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FibboModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // If the object3D exists, apply the position
        if (this.object3D)
          this.object3D.position.set(position.x, position.y, position.z)

        // Store the position
        this.position = new THREE.Vector3(position.x, position.y, position.z)
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
