import * as THREE from 'three'
import type { FModel } from '../model/FModel'
import type { FVector3 } from '../types/FVector3'

/**
 * @description This decorator is used to alter the scale of a FModel (like FCube, FGLTF, etc).
 * It must be placed before useRigidBody.
 * @param scale The scale to be applied.
 * @returns {Function} The class with the scale altered.
 * @example
 * ```ts
 * import { FCube, useScale } from '@fibbojs/fibbo'
 * import type { FScene } from '@fibbojs/fibbo'
 *
 * @useScale({ x: 1, y: 1, z: 1 })
 * export class MyCube extends FCube {
 *  constructor(scene: FScene) {
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
  scale: FVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FModel }>(constructor: T) {
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
