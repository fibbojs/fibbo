import { FCamera3d } from './FCamera3d'

/**
 * @description A fixed camera that does not move.
 * @category Camera
 * @example
 * ```ts
 * import { FFixedCamera, } from '@fibbojs/fibbo'
 *
 * export default class MyCamera extends FFixedCamera {
 *  constructor() {
 *   super()
 *   this.setPosition(5, 5, 5)
 *   this.lookAt(0, 0, 0)
 *  }
 *
 *  onFrame(delta: number) {
 *    super.onFrame(delta)
 *  }
 * }
 * ```
 */
export class FFixedCamera extends FCamera3d {
  constructor() {
    super()
  }

  onFrame(_delta: number): void {
  }
}
