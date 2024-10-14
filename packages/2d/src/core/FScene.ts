import { FScene as FSceneCore } from '@fibbojs/core'
import type { FSceneOptions as FSceneOptionsCore } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import type RAPIER from '@dimforge/rapier2d'
import { FSprite } from '../sprite/FSprite'
import type { FCamera } from '../cameras/FCamera'
import { FFreeCamera } from '../cameras/FFreeCamera'
import type { FLight } from '../lights/FLight'
import type { FComponent } from './FComponent'

export interface FSceneOptions extends FSceneOptionsCore {
  gravity?: { x: number, y: number }
}

/**
 * A scene which contains the models, the Pixi.js scene and the Rapier world.
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
  // Lights can be declared as it will be initialized by the parent class
  declare lights: FLight[]

  // Camera
  declare __CAMERA__: FCamera

  // Pixi.js
  PIXI: typeof PIXI = PIXI
  app: PIXI.Application
  declare viewport: Viewport

  // Rapier
  declare gravity: { x: number, y: number }
  declare world: RAPIER.World
  declare eventQueue: RAPIER.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent> = new Map()

  constructor(options?: FSceneOptions) {
    super(options)

    // Create a new PIXI application
    this.app = new PIXI.Application()

    // Handle window resize
    window.addEventListener('resize', () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight)
    })
  }

  /**
   * Initialize the scene.
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

    // On each frame
    this.onFrame((delta) => {
      // Call the frame method of each component
      this.components.forEach((component) => {
        component.frame(delta)
      })
      // Call the frame method of the camera
      this.camera.frame(delta)
    })

    // Call the onReady callbacks
    this.__CALLBACKS_ON_READY__.forEach((callback) => {
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
   * Handle a collision event between two colliders.
   * @param handle1 The handle of the first collider
   * @param handle2 The handle of the second collider
   * @param start If the collision has started or ended
   */
  handleCollision(handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, start: boolean) {
    // Get the components from the handles
    const component1 = this.__RAPIER_TO_COMPONENT__.get(handle1)
    const component2 = this.__RAPIER_TO_COMPONENT__.get(handle2)
    // If both components are undefined, return
    if (component1 === undefined && component2 === undefined)
      return
    // If the collision is a start event, a collision has started
    if (start) {
      if (component1 && component2) {
        // Call the onCollisionWith callbacks for the first collider
        component1.emitCollisionWith({
          class: component2.constructor,
          component: component2,
        })
        // Call the onCollisionWith callbacks for the second collider
        component2.emitCollisionWith({
          class: component1.constructor,
          component: component1,
        })
      }
    }
  }

  addComponent(component: FComponent) {
    super.addComponent(component)

    // Wait for the component to be loaded before adding it to the scene
    component.onLoaded(() => {
      this.viewport.addChild(component.__CONTAINER__)

      // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
      if (component.sensor)
        this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.__COLLIDER__.handle, component)
      // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
      else if (component.collider)
        this.__RAPIER_TO_COMPONENT__.set(component.collider.__COLLIDER__.handle, component)
    })
  }

  removeComponent(component: FComponent): void {
    super.removeComponent(component)

    // Remove container from the viewport
    this.viewport.removeChild(component.__CONTAINER__)

    // Remove colliders and rigidBodies from rapier world
    if (component.rigidBody)
      this.world.removeRigidBody(component.rigidBody.__RIGIDBODY__)
    if (component.collider)
      this.world.removeCollider(component.collider.__COLLIDER__, false)
    if (component.sensor)
      this.world.removeCollider(component.sensor.collider.__COLLIDER__, false)

    // Remove handle from rapier map
    if (component.sensor)
      this.__RAPIER_TO_COMPONENT__.delete(component.sensor.collider.__COLLIDER__.handle)
    if (component.collider)
      this.__RAPIER_TO_COMPONENT__.delete(component.collider.__COLLIDER__.handle)
  }

  /**
   * Getter for the camera.
   * This is required because the camera is a private property.
   */
  get camera() {
    return this.__CAMERA__
  }

  /**
   * Setter for the camera.
   * This is required so when the camera is set, its method to defined the viewport behavior is called.
   */
  set camera(camera: FCamera) {
    this.__CAMERA__ = camera
    camera.__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__()
  }

  addLight(light: FLight): void {
    super.addLight(light)
  }

  removeLight(light: FLight): void {
    super.removeLight(light)
  }
}
