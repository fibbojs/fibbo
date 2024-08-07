import type { DebugRenderBuffers, World } from '@dimforge/rapier2d'
import { FScene } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import type RAPIER from '@dimforge/rapier2d'
import type { FComponent2d } from './FComponent2d'
import { FSprite } from './sprite/FSprite'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FScene2d, FSquare } from '@fibbojs/2d'
 *
 * (async () => {
 *  const scene = new FScene2d()
 *  await scene.init()
 *  await scene.initPhysics()
 *
 *  const square = new FSquare(scene)
 *  square.initRigidBody()
 *  scene.addComponent(square)
 * })()
 * ```
 */
export class FScene2d extends FScene {
  components: FComponent2d[]
  // Pixi.js
  app: PIXI.Application
  viewport?: Viewport
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  declare world?: World
  declare eventQueue: RAPIER.EventQueue
  rapierToComponent: Map<number, FComponent2d> = new Map()
  // onReadyCallbacks
  public onReadyCallbacks: (() => void)[] = []
  // Debug
  DEBUG_LINES: PIXI.Graphics[] = []
  DEBUG_MODE: boolean = false

  constructor(options: { debug?: boolean } = { debug: false }) {
    super()
    this.components = []

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FScene must be instantiated in a browser environment')

    // Create a new PIXI application
    this.app = new PIXI.Application()

    // Store the debug mode
    this.DEBUG_MODE = options.debug || false
  }

  /**
   * @description Initialize the scene.
   * The application will create a renderer using WebGL, if possible,
   * with a fallback to a canvas render. It will also setup the ticker
   * and the root stage PIXI.Container.
   */
  async init() {
    // Wait for the Renderer to be available
    await this.app.init()

    // Get the screen size
    const SCREEN_HEIGHT = window.innerHeight
    const SCREEN_WIDTH = window.innerWidth

    // The application will create a canvas element that can then inserted into the DOM
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
    if (this.DEBUG_MODE) {
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
      // Add the grid to the viewport
      this.viewport.addChild(helpGrid)
    }

    // onFrame
    this.onFrame((delta) => {
      // Call the onFrame method of each component
      this.components.forEach((component) => {
        component.onFrame(delta)
      })

      // Debug
      if (this.DEBUG_MODE)
        this.debug()
    })

    // Call the onReady callbacks
    this.onReadyCallbacks.forEach((callback) => {
      callback()
    })
  }

  async initPhysics() {
    // Import Rapier
    const RAPIER = await import('@dimforge/rapier2d')

    // Initialize Rapier world
    this.world = new RAPIER.World(this.gravity)

    // Initialize Rapier event queue
    this.eventQueue = new RAPIER.EventQueue(true)

    // onFrame
    this.onFrame((delta) => {
      // Physics
      if (this.world) {
        this.world.timestep = delta
        this.world.step(this.eventQueue)

        // Drain collision events
        this.eventQueue.drainCollisionEvents((handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, started: boolean) => {
          this.handleCollision(handle1, handle2, started)
        })
      }
    })
  }

  /**
   * @description Handle a collision event between two colliders.
   * @param handle1 The handle of the first collider
   * @param handle2 The handle of the second collider
   * @param start If the collision has started or ended
   */
  handleCollision(handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, start: boolean) {
    // Get the components from the handles
    const collider1 = this.rapierToComponent.get(handle1)
    const collider2 = this.rapierToComponent.get(handle2)
    // If both colliders are undefined, return
    if (collider1 === undefined && collider2 === undefined)
      return
    // If the collision is a start event, a collision has started
    if (start) {
      // Call the onCollisionWith callbacks for the first collider
      if (collider1) {
        // Call the callback for the class name
        collider1.emitCollisionWith(collider2?.constructor)
        // Call the callback for the specific object
        collider1.emitCollisionWith(collider2)
      }
      // Call the onCollisionWith callbacks for the second collider
      if (collider2) {
        // Call the callback for the class name
        collider2.emitCollisionWith(collider1?.constructor)
        // Call the callback for the specific object
        collider2?.emitCollisionWith(collider1)
      }
    }
  }

  addComponent(component: FComponent2d) {
    this.components.push(component)

    // Detect if the FComponent2d is a FSprite instance
    if (component instanceof FSprite) {
      // Wait for the sprite to be loaded before adding it to the scene
      component.onLoaded(() => {
        this.app.stage.addChild(component.container)
        if (!this.viewport) {
          this.onReady(() => {
            this.viewport?.addChild(component.container)
          })
        }
        else {
          this.viewport?.addChild(component.container)
        }

        // If a collider is defined, add it's handle to the rapierToComponent map
        if (component.collider?.handle !== undefined)
          this.rapierToComponent.set(component.collider?.handle, component)
      })
    }
    else {
      // The component is not a FSprite instance, it can be added directly
      this.app.stage.addChild(component.container)
      if (!this.viewport) {
        this.onReady(() => {
          this.viewport?.addChild(component.container)
        })
      }
      else {
        this.viewport?.addChild(component.container)
      }
    }

    // If a collider is defined, add it's handle to the rapierToComponent map
    if (component.collider?.handle !== undefined)
      this.rapierToComponent.set(component.collider?.handle, component)
  }

  onReady(callback: () => void) {
    this.onReadyCallbacks.push(callback)
  }

  debug() {
    const debugWorld = () => {
      if (!this.world || !this.viewport)
        return

      const buffers: DebugRenderBuffers = this.world.debugRender()
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

    debugWorld()
  }
}
