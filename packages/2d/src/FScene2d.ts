import type { World } from '@dimforge/rapier2d'
import { FScene } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import * as RAPIER from '@dimforge/rapier2d'
import type { FComponent2d } from './FComponent2d'
import { FSquare } from './polygons/FSquare'

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
  viewport?: Viewport
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  // onReadyCallbacks
  public onReadyCallbacks: (() => void)[] = []
  // Debug lines
  DEBUG_LINES: PIXI.Graphics[] = []

  constructor() {
    super()
    this.components = []
    this.app = new PIXI.Application()

    // Initialize Rapier world
    this.world = new RAPIER.World(this.gravity)

    // Create the ground
    const ground = new FSquare(this)
    ground.setPosition(0, 0)
    ground.setScale(10, 0.1)
    ground.initCollider()
    this.addComponent(ground)

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const initializeApp = async () => {
      // Wait for the Renderer to be available
      await this.app.init()

      // Get the screen size
      const SCREEN_HEIGHT = window.innerHeight
      const SCREEN_WIDTH = window.innerWidth

      // The application will create a canvas element for you that you
      // can then insert into the DOM
      document.body.appendChild(this.app.canvas)

      // Resize the renderer
      this.app.renderer.resize(SCREEN_WIDTH, SCREEN_HEIGHT)

      // Modify background color to 0x121212
      const backgroundSystem = new PIXI.BackgroundSystem()
      backgroundSystem.color = new PIXI.Color(0x121212)
      this.app.renderer.background = backgroundSystem

      /**
       * Create Viewport
       */
      this.viewport = new Viewport({
        screenWidth: SCREEN_WIDTH,
        screenHeight: SCREEN_HEIGHT,
        worldWidth: 1000,
        worldHeight: 1000,
        events: this.app.renderer.events,
      })
      // Add the viewport to the stage
      this.app.stage.addChild(this.viewport)
      // Activate plugins
      this.viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
      // Change the position of the viewport so that the origin is at the center
      this.viewport.moveCenter(0, 0)
      // Set the zoom level
      this.viewport.setZoom(0.8, true)

      // Add help grid
      const helpGrid = new PIXI.Graphics()
      // Draw the grid
      for (let i = -1000; i <= 1000; i += 100) {
        helpGrid.moveTo(i, -1000)
        helpGrid.lineTo(i, 1000)
        helpGrid.moveTo(-1000, i)
        helpGrid.lineTo(1000, i)
      }
      // Apply style
      helpGrid.stroke({ width: 4, color: new PIXI.Color({
        r: 70,
        g: 70,
        b: 70,
        a: 1,
      }) })
      this.viewport.addChild(helpGrid)

      // onFrame
      this.onFrame((delta) => {
        // Physics
        if (this.world) {
          this.world.timestep = delta
          this.world.step()
        }

        // Call the onFrame method of each component
        this.components.forEach((component) => {
          component.onFrame(delta)
        })

        // Debug
        this.debug()
      })

      // Call the onReady callbacks
      this.onReadyCallbacks.forEach((callback) => {
        callback()
      })
    }

    initializeApp()
  }

  addComponent(component: FComponent2d) {
    this.components.push(component)
    this.app.stage.addChild(component.container)
    if (!this.viewport) {
      this.onReady(() => {
        this.viewport?.addChild(component.container)
      })
    }
  }

  onReady(callback: () => void) {
    this.onReadyCallbacks.push(callback)
  }

  debug() {
    if (!this.world || !this.viewport)
      return

    const buffers: RAPIER.DebugRenderBuffers = this.world.debugRender()
    const debugVerticies: Float32Array = buffers.vertices
    const debugColors: Float32Array = buffers.colors

    // Remove the previous debug lines
    this.DEBUG_LINES.forEach((line) => {
      this.viewport?.removeChild(line)
    })

    // For each line (a line is represented by 4 numbers in the vertices array)
    for (let i = 0; i < debugVerticies.length / 4; i += 1) {
      // Create a new debug line
      const newDebugLine = new PIXI.Graphics()

      // Use the vertices to draw the line
      newDebugLine.moveTo(debugVerticies[i * 4] * 100, -debugVerticies[i * 4 + 1] * 100)
      newDebugLine.lineTo(debugVerticies[i * 4 + 2] * 100, -debugVerticies[i * 4 + 3] * 100)

      // Create a color array for the linear gradient
      const newDebugColor = new PIXI.Color({
        r: debugColors[i * 4] * 255,
        g: debugColors[i * 4 + 1] * 255,
        b: debugColors[i * 4 + 2] * 255,
        a: debugColors[i * 4 + 3] * 255,
      })
      // Apply the gradient fill to the graphics object
      newDebugLine.stroke({ width: 4, color: newDebugColor })
      // Add the line to the viewport and the DEBUG_LINES array
      this.viewport.addChild(newDebugLine)
      this.DEBUG_LINES.push(newDebugLine)
    }
  }
}
