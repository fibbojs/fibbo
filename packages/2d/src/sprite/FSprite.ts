import * as PIXI from 'pixi.js'
import { FAssetUtil } from '@fibbojs/util'
import type { FComponentOptions } from '../core/FComponent'
import { FComponent } from '../core/FComponent'

export interface FSpriteOptions extends FComponentOptions {
  texture: string
}

/**
 * A simple sprite in Fibbo.
 * @category Sprite
 * @example
 * ```ts
 * import { FSprite } from '@fibbojs/2d'
 *
 * const sprite = new FSprite('/my-texture.png')
 * ```
 */
export class FSprite extends FComponent {
  /**
   * PIXI container
   */
  declare __CONTAINER__: PIXI.Sprite
  /**
   * The texture of the sprite.
   */
  __TEXTURE__: PIXI.Texture

  constructor(options: FSpriteOptions) {
    super(options)

    // Define the texture and container while loading
    this.__TEXTURE__ = PIXI.Texture.EMPTY
    this.__CONTAINER__ = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, 100, 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00)) as unknown as PIXI.Sprite
    // Set the pivot of the container to the center
    this.__CONTAINER__.pivot.set(this.__CONTAINER__.width / 2, this.__CONTAINER__.height / 2)

    // Load the texture
    this.loadTexture(options.texture)
  }

  /**
   * Load a texture from a path.
   * @param texture The path to the texture.
   */
  async loadTexture(texture: string) {
    // Interpret the path
    const path = FAssetUtil.interpretPath(texture)
    // Load the texture
    this.__TEXTURE__ = await PIXI.Assets.load(path)
    this.__TEXTURE__.source.scaleMode = 'nearest'
    // Create a sprite
    this.__CONTAINER__ = new PIXI.Sprite(this.__TEXTURE__)
    this.__CONTAINER__.anchor.set(0.5, 0.5)
    this.__CONTAINER__.zIndex = 0
    // Reset transform
    this.__SET_POSITION__(this.transform.position)
    this.__SET_ROTATION__(this.transform.rotation)
    // Set the scale of the component so it fits the texture by its width
    // Width will be the actual width, height will be calculated according to the aspect ratio
    this.setScaleWidth(this.transform.scale.x)
    // Call the onLoaded method
    this.emitOnLoaded()
  }

  /**
   * Set the scale of the sprite to a specific width.
   * The height will be calculated according to the aspect ratio of the texture.
   * @param width The width of the sprite.
   */
  setScaleWidth(width: number) {
    this.__SET_SCALE__({ x: width, y: width * this.__TEXTURE__.height / this.__TEXTURE__.width })
  }

  /**
   * Set the scale of the sprite to a specific height.
   * The width will be calculated according to the aspect ratio of the texture.
   * @param height The height of the sprite.
   */
  setScaleHeight(height: number) {
    this.__SET_SCALE__({ x: height * this.__TEXTURE__.width / this.__TEXTURE__.height, y: height })
  }
}
