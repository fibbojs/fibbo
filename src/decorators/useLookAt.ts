import type { FCamera } from '../cameras/FCamera'
import type { FVector3 } from '../types/FVector3'

/**
 * @description This decorator is used to make a camera look at a specific position.
 * @param position The position to look at.
 * @returns {Function} The class with the look at behavior added.
 * @example
 * ```ts
 * import { FFixedCamera, useLookAt } from '@fibbojs/fibbo'
 *
 * @useLookAt({ x: 1, y: 1, z: 1 })
 * export class MyCamera extends FFixedCamera {
 *  constructor() {
 *   super()
 *  }
 *
 *  onFrame(_delta: number) {
 *  }
 * }
 * ```
 */
export function useLookAt(
  // Default position
  position: FVector3 = { x: 1, y: 1, z: 1 },
): Function {
  return function <T extends { new(...args: any[]): FCamera }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // Make the camera look at the position
        this.lookAt(position.x, position.y, position.z)
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
