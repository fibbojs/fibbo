import type { World } from '@dimforge/rapier2d'
import { FScene } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import type { FComponent2d } from './FComponent2d'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FScene2d, FSquare } from '@fibbojs/2d'
 *
 * const scene = new FScene2d()
 *
 * const square = new FSquare()
 * scene.addComponent(square)
 * ```
 */
export class FScene2d extends FScene {
  components: FComponent2d[]
  declare world?: World
  // Pixi.js application
  app: PIXI.Application

  constructor() {
    super()
    this.components = []
    this.app = new PIXI.Application()

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const initializeApp = async () => {
      // Wait for the Renderer to be available
      await this.app.init()

      // The application will create a canvas element for you that you
      // can then insert into the DOM
      document.body.appendChild(this.app.canvas)

      // onFrame
      this.onFrame((delta) => {
        this.components.forEach((component) => {
          component.onFrame(delta)
        })
      })
    }

    initializeApp()
  }

  addComponent(component: FComponent2d) {
    this.components.push(component)
    this.app.stage.addChild(component.container)
  }
}
