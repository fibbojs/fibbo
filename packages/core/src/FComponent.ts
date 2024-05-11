/**
 * @description The base class for all 2D and 3D components in FibboJS.
 */
export abstract class FComponent {
  constructor() {
  }

  abstract onFrame(delta: number): void
}
