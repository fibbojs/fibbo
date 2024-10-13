import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../core/FComponent'
import { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'

/**
 * A simple polygon in Fibbo.
 * @category Polygons
 */
export abstract class FPolygon extends FComponent {
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a square
    this.__CONTAINER__ = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, this.transform.scale.x * 100, this.transform.scale.y * 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Set the pivot of the container to the center
    this.__CONTAINER__.pivot.set(this.__CONTAINER__.width / 2, this.__CONTAINER__.height / 2)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }
}
