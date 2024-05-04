import { FibboAttachedCamera } from '../cameras/FibboAttachedCamera'
import { FibboCamera } from '../cameras/FibboCamera'
import { FibboOrbitCamera } from '../cameras/FibboOrbitCamera'
import type { FibboComponent } from '../core/FibboComponent'
import { FibboModel } from '../model/FibboModel'
import type { FibboVector3 } from '../types/FibboVector3'

/**
 * @description This decorator is used to alter the position of a FibboComponent (like a FibboModel or a FibboCamera).
 * It must be placed before useRigidBody.
 * @param position The position to be applied.
 * @returns {Function} The FibboComponent with the position altered.
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
  return function <T extends { new(...args: any[]): FibboComponent }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        /**
         * On FibboModel
         */
        if (this instanceof FibboModel) {
          // If the object3D exists, apply the position
          if (this.object3D)
            this.object3D.position.set(position.x, position.y, position.z)

          // Store the position
          this.position.x = position.x
          this.position.y = position.y
          this.position.z = position.z
        }

        /**
         * On FibboCamera
         */
        else if (this instanceof FibboCamera) {
          // Store the position
          this.position.x = position.x
          this.position.y = position.y
          this.position.z = position.z

          // On FibboAttachedCamera
          if (this instanceof FibboAttachedCamera) {
            // Define the offset using the position given
            this.offset = { x: position.x, y: position.y, z: position.z }
          }
          // On FibboOrbitCamera
          else if (this instanceof FibboOrbitCamera) {
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
