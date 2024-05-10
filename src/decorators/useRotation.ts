import * as THREE from 'three'
import type { FModel } from '../model/FModel'
import type { FVector3 } from '../types/FVector3'

/**
 * @description This decorator is used to alter the rotation of a FModel (like FCube, FGLTF, etc).
 * It must be placed before useRigidBody.
 * @param rotation The rotation to be applied.
 * @returns {Function} The class with the rotation altered.
 * @example
 * ```ts
 * import { FCube, useRotation } from '@fibbojs/fibbo'
 * import type { FScene } from '@fibbojs/fibbo'
 *
 * @useRotation({ x: 1, y: 0, z: 0 })
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
export function useRotation(
  // Default rotation
  rotation: FVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FModel }>(constructor: T) {
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
