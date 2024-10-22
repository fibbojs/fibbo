import * as PIXI from 'pixi.js'
import type { FComponentOptions } from '../core/FComponent'
import { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'

export interface FSpriteOptions extends FComponentOptions {
  texture: string
}

/**
 * A simple sprite in Fibbo.
 * @category Sprite
 * @example
 * ```ts
 * import { FScene, FSprite } from '@fibbojs/2d'
 *
 * const scene = new FScene()
 *
 * const sprite = new FSprite(scene, '/my-texture.png')
 * scene.addComponent(sprite)
 * ```
 */
export class FSprite extends FComponent {
  /**
   * The texture of the sprite.
   */
  texture: PIXI.Texture

  constructor(scene: FScene, options: FSpriteOptions) {
    super(scene, options)

    // Define the texture and container while loading
    this.texture = PIXI.Texture.EMPTY
    this.__CONTAINER__ = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, 100, 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
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
    // Interpret path function
    function interpretPath(path: string) {
      // Resource URL (if it starts http, treat as a URL)
      if (path.startsWith('http')) {
        return path
      }
      // Absolute path (if it starts with /), add the current domain + path
      else if (path.startsWith('/')) {
        return `${window.location.href}${path}`
      }
      // Otherwise, treat as a relative path starting to the assets folder
      else {
        return `${window.location.href}/assets/${path}`
      }
    }

    // Interpret the path
    const path = interpretPath(texture)
    // Load the texture
    this.texture = await PIXI.Assets.load(path)
    this.texture.source.scaleMode = 'nearest'
    // Create a sprite
    this.__CONTAINER__ = new PIXI.Sprite(this.texture)
    this.__CONTAINER__.zIndex = 0
    // Set the pivot of the container to the center
    this.__CONTAINER__.pivot.set(this.__CONTAINER__.width / 2, this.__CONTAINER__.height / 2)
    // Set the scale of the component so it fits the texture by its width
    // Width will be 1 unit, height will be calculated according to the aspect ratio
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
    this.__SET_SCALE__({ x: width, y: width * this.texture.height / this.texture.width })
  }

  /**
   * Set the scale of the sprite to a specific height.
   * The width will be calculated according to the aspect ratio of the texture.
   * @param height The height of the sprite.
   */
  setScaleHeight(height: number) {
    this.__SET_SCALE__({ x: height * this.texture.width / this.texture.height, y: height })
  }
}
