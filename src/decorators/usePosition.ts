import { FAttachedCamera } from '../cameras/FAttachedCamera'
import { FCamera } from '../cameras/FCamera'
import { FOrbitCamera } from '../cameras/FOrbitCamera'
import type { FComponent } from '../core/FComponent'
import { FModel } from '../model/FModel'
import type { FVector3 } from '../types/FVector3'

/**
 * @description This decorator is used to alter the position of a FComponent (like a FModel or a FCamera).
 * It must be placed before useRigidBody.
 * @param position The position to be applied.
 * @returns {Function} The FComponent with the position altered.
 * @example
 * ```ts
 * import { FCube, usePosition } from '@fibbojs/fibbo'
 * import type { FScene } from '@fibbojs/fibbo'
 *
 * @usePosition({ x: 1, y: 1, z: 1 })
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
export function usePosition(
  // Default position
  position: FVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FComponent }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        /**
         * On FModel
         */
        if (this instanceof FModel) {
          // If the object3D exists, apply the position
          if (this.object3D)
            this.object3D.position.set(position.x, position.y, position.z)

          // Store the position
          this.position.x = position.x
          this.position.y = position.y
          this.position.z = position.z
        }

        /**
         * On FCamera
         */
        else if (this instanceof FCamera) {
          // Store the position
          this.position.x = position.x
          this.position.y = position.y
          this.position.z = position.z

          // On FAttachedCamera
          if (this instanceof FAttachedCamera) {
            // Define the offset using the position given
            this.offset = { x: position.x, y: position.y, z: position.z }
          }
          // On FOrbitCamera
          else if (this instanceof FOrbitCamera) {
            // Set the position of the camera relative to the attached model
            this.position.set(this.attachedModel.position.x + position.x, this.attachedModel.position.y + position.y, this.attachedModel.position.z + position.z)
            // Set the target of the camera to the attached model
            this.lookAt(this.attachedModel.position)
          }
        }
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
