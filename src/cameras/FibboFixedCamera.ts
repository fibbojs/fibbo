import { FibboCamera } from './FibboCamera'

/**
 * @description A fixed camera that does not move.
 * @category Camera
 * @example
 * ```ts
 * import { FibboFixedCamera, usePosition, useLookAt } from '@fibbojs/fibbo'
 *
 * @useLookAt({ x: 0, y: 0, z: 0 })
 * @usePosition({ x: 5, y: 5, z: 5 })
 * export default class MyCamera extends FibboFixedCamera {
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
export class FibboFixedCamera extends FibboCamera {
  constructor() {
    super()
  }

  onFrame(_delta: number): void {
  }
}
