/**
 * @description The base class for all 3D components in FibboJS.
 * @category Core
 */
export abstract class FComponent {
  constructor() {
  }

  abstract onFrame(_delta: number): void

  /**
   * @description Set the position of the component.
   */
  abstract setPosition(x: number, y: number, z: number): void

  /**
   * @description Set the scale of the component.
   */
  abstract setScale(x: number, y: number, z: number): void

  /**
   * @description Set the rotation of the component.
   */
  abstract setRotation(x: number, y: number, z: number): void
}
