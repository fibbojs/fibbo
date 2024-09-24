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
  /**
   * Callbacks for when the texture is loaded
   */
  public __CALLBACKS_ON_LOADED__: (() => void)[] = []

  constructor(scene: FScene, options: FSpriteOptions) {
    super(scene, options)

    // Define the texture and container while loading
    this.texture = PIXI.Texture.EMPTY
    this.container = new PIXI.Graphics()
      .rect(this.transform.position.x, this.transform.position.y, this.transform.scale.x * 100, this.transform.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, 100, 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)

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
    this.container = new PIXI.Sprite(this.texture)
    this.container.zIndex = 0
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)
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
    this.setScale({ x: width, y: width * this.texture.height / this.texture.width })
  }

  /**
   * Set the scale of the sprite to a specific height.
   * The width will be calculated according to the aspect ratio of the texture.
   * @param height The height of the sprite.
   */
  setScaleHeight(height: number) {
    this.setScale({ x: height * this.texture.width / this.texture.height, y: height })
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }

  /**
   * Add a callback to be called when the texture is loaded.
   * @param callback The callback function.
   */
  onLoaded(callback: () => void) {
    this.__CALLBACKS_ON_LOADED__.push(callback)
  }

  /**
   * Emit the onLoaded callbacks.
   */
  emitOnLoaded() {
    this.__CALLBACKS_ON_LOADED__.forEach((callback) => {
      callback()
    })
  }
}
