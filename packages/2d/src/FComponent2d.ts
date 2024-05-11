import { FComponent } from '@fibbojs/core'
import { Container } from 'pixi.js'

/**
 * @description The base class for all 2D components in FibboJS.
 * @category Core
 */
export abstract class FComponent2d extends FComponent {
  /**
   * container is the PIXI container that holds the square.
   */
  container: Container

  constructor() {
    super()
    this.container = new Container()
  }

  abstract onFrame(_delta: number): void

  /**
   * @description Set the position of the component.
   */
  abstract setPosition(x: number, y: number): void

  /**
   * @description Set the scale of the component.
   */
  abstract setScale(x: number, y: number): void

  /**
   * @description Set the rotation of the component.
   */
  abstract setRotation(x: number, y: number): void
}
