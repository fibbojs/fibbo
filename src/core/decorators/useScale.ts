import * as THREE from 'three'
import type { FibboModel } from '../model/FibboModel'
import type { FibboVector3 } from '../../types/FibboVector3'

/**
 * @description This decorator is used to alter the scale of a FibboModel (like FibboCube, FibboGLTF, etc).
 * It must be placed before useRigidBody.
 * @param scale The scale to be applied.
 * @returns {Function} The class with the scale altered.
 * @example
 * ```ts
 * import { FibboCube, useScale } from '@fibbojs/fibbo'
 * import type { FibboScene } from '@fibbojs/fibbo'
 *
 * @useScale({ x: 1, y: 1, z: 1 })
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
export function useScale(
  // Default scale
  scale: FibboVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FibboModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // If the object3D exists, apply the scale
        if (this.object3D)
          this.object3D.scale.set(scale.x, scale.y, scale.z)

        // Store the scale
        this.scale = new THREE.Vector3(scale.x, scale.y, scale.z)
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
