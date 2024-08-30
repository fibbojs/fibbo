import type { World } from '@dimforge/rapier2d'
import { FScene as FSceneCore } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import type RAPIER from '@dimforge/rapier2d'
import type { FComponent } from './FComponent'
import { FSprite } from './sprite/FSprite'
import type { FCamera } from './cameras/FCamera'
import { FFreeCamera } from './cameras/FFreeCamera'

export interface FSceneOptions {
  gravity?: { x: number, y: number, z: number }
  domNode?: HTMLElement
}

/**
 * @description A scene which contains the models, the Pixi.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FScene, FRectangle } from '@fibbojs/2d'
 *
 * (async () => {
 *  const scene = new FScene()
 *  await scene.init()
 *  await scene.initPhysics()
 *
 *  const square = new FRectangle(scene)
 *  square.initRigidBody()
 *  scene.addComponent(square)
 * })()
 * ```
 */
export class FScene extends FSceneCore {
  /**
   * Internal flags
   */
  public __IS_2D__: boolean = true

  // Components can be declared as it will be initialized by the parent class
  declare components: FComponent[]
  // Camera
  declare __CAMERA__: FCamera
  /**
   * DOM element that the renderer will be appended to
   */
  __DOM_NODE__: HTMLElement
  // Pixi.js
  PIXI: typeof PIXI = PIXI
  app: PIXI.Application
  declare viewport: Viewport
  // Rapier
  gravity: { x: number, y: number, z: number }
  declare world: World
  declare eventQueue: RAPIER.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent> = new Map()
  // onReadyCallbacks
  public onReadyCallbacks: (() => void)[] = []

  constructor(options?: FSceneOptions) {
    super()

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FibboError: FScene must be instantiated in a browser environment')

    // Create a new PIXI application
    this.app = new PIXI.Application()

    // Define default values for the options
    const DEFAULT_OPTIONS = {
      gravity: { x: 0, y: -9.81, z: 0 },
      domNode: document.body,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate the options
    if (options.domNode === undefined || options.gravity === undefined)
      throw new Error('FibboError: The gravity option must be defined')

    // Store the DOM node
    this.__DOM_NODE__ = options.domNode
    // Store the gravity
    this.gravity = options.gravity

    // Handle window resize
    window.addEventListener('resize', () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
    })
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
    this.__DOM_NODE__.appendChild(this.app.canvas)

    // Resize the renderer
    this.app.renderer.resize(SCREEN_WIDTH, SCREEN_HEIGHT)

    // Modify background color to 0x222324
    const backgroundSystem = new PIXI.BackgroundSystem()
    backgroundSystem.color = new PIXI.Color(0x222324)
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

    // Create a default free camera
    this.camera = new FFreeCamera(this)

    // onFrame
    this.onFrame((delta) => {
      // Call the onFrame method of each component
      this.components.forEach((component) => {
        component.onFrame(delta)
      })
      // Call the onFrame method of the camera
      this.camera.onFrame(delta)
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
    const collider1 = this.__RAPIER_TO_COMPONENT__.get(handle1)
    const collider2 = this.__RAPIER_TO_COMPONENT__.get(handle2)
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

  addComponent(component: FComponent) {
    super.addComponent(component)

    // Detect if the FComponent is a FSprite instance
    if (component instanceof FSprite) {
      // Wait for the sprite to be loaded before adding it to the scene
      component.onLoaded(() => {
        this.viewport.addChild(component.container)

        // If a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
        if (component.collider?.collider.handle !== undefined)
          this.__RAPIER_TO_COMPONENT__.set(component.collider?.collider.handle, component)
      })
    }
    else {
      // The component is not a FSprite instance, it can be added directly
      this.viewport.addChild(component.container)
    }

    // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    if (component.sensor)
      this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.handle, component)
    // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    else if (component.collider)
      this.__RAPIER_TO_COMPONENT__.set(component.collider.collider.handle, component)
  }

  onReady(callback: () => void) {
    this.onReadyCallbacks.push(callback)
  }

  /**
   * @description Getter for the camera.
   * This is required because the camera is a private property.
   */
  get camera() {
    return this.__CAMERA__
  }

  /**
   * @description Setter for the camera.
   * This is required so when the camera is set, its method to defined the viewport behavior is called.
   */
  set camera(camera: FCamera) {
    this.__CAMERA__ = camera
    camera.__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__()
  }
}
