/**
 * @description The base class for all 3D components in FibboJS.
 * @category Core
 */
export abstract class FComponent {
  constructor() {
  }

  abstract onFrame(_delta: number): void
}
