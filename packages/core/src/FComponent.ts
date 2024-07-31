/**
 * @description The base class for all 2D and 3D components in FibboJS.
 */
export abstract class FComponent {
  constructor() {
  }

  /**
   * @description Update the component.
   * Should be called every frame.
   * @param delta The time since the last frame.
   */
  abstract onFrame(delta: number): void
}
