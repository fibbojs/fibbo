import * as PIXI from 'pixi.js'
import { FComponent2d } from '../FComponent2d'
import type { FScene2d } from '../FScene2d'
import type { F2dShapes } from '../types/F2dShapes'

/**
 * @description A simple sprite in FibboJS.
 * @category Sprite
 * @example
 * ```ts
 * import { FScene2d, FSprite } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const sprite = new FSprite(scene)
 * scene.addComponent(sprite)
 * ```
 */
export class FSprite extends FComponent2d {
  // Texture
  texture: PIXI.Texture
  // Callbacks for when the texture is loaded
  public onLoadedCallbacks: (() => void)[] = []

  constructor(scene: FScene2d, texture: string) {
    super(scene)
    // Define the texture and container while loading
    this.texture = PIXI.Texture.EMPTY
    this.container = new PIXI.Graphics()
      .rect(this.position.x, this.position.y, this.scale.x * 100, this.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, 100, 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)

    // Load the texture
    this.loadTexture(texture)
  }

  async loadTexture(texture: string) {
    this.texture = await PIXI.Assets.load(texture)
    // Create a sprite
    this.container = new PIXI.Sprite(this.texture)
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)
    // Set the scale of the component so it fits the texture by its width
    // Width will be 1 unit, height will be calculated according to the aspect ratio
    this.setScaleWidth(1)
    // Call the onLoaded method
    this.emitOnLoaded()
  }

  setScaleWidth(width: number) {
    this.setScale(width, width * this.texture.height / this.texture.width)
  }

  setScaleHeight(height: number) {
    this.setScale(height * this.texture.width / this.texture.height, height)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }

  onLoaded(fn: () => void) {
    this.onLoadedCallbacks.push(fn)
  }

  emitOnLoaded() {
    this.onLoadedCallbacks.forEach((callback) => {
      callback()
    })
  }
}
