import { FCamera } from './FCamera'

/**
 * @description A fixed camera that does not move.
 * @category Camera
 * @example
 * ```ts
 * import { FFixedCamera, usePosition, useLookAt } from '@fibbojs/fibbo'
 *
 * @useLookAt({ x: 0, y: 0, z: 0 })
 * @usePosition({ x: 5, y: 5, z: 5 })
 * export default class MyCamera extends FFixedCamera {
 *  constructor() {
 *   super()
 *  }
 *
 *  onFrame(delta: number) {
 *    super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FFixedCamera extends FCamera {
  constructor() {
    super()
  }

  onFrame(_delta: number): void {
  }
}
