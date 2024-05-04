/**
 * @description The base class for all 3D components in FibboJS.
 * @category Core
 */
export abstract class FibboComponent {
  constructor() {
  }

  abstract onFrame(_delta: number): void
}
