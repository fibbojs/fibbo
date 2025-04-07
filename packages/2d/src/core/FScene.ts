import { FScene as FSceneCore } from '@fibbojs/core'
import type { FSceneOptions as FSceneOptionsCore } from '@fibbojs/core'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import type RAPIER from '@dimforge/rapier2d'
import type { FCamera } from '../cameras/FCamera'
import { FFreeCamera } from '../cameras/FFreeCamera'
import type { FLight } from '../lights/FLight'
import { RenderPipeline } from '../pipeline/RenderPipeline'
import { PhysicPipeline } from '../pipeline/PhysicPipeline'
import type { FComponent } from './FComponent'
import type { FCollider } from './FCollider'
import type { FRigidBody } from './FRigidBody'

export interface FSceneOptions extends FSceneOptionsCore {
  gravity?: { x: number, y: number }
}

/**
 * A scene which contains the components, the Pixi.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FAttachedCamera, FScene, FRectangle } from '@fibbojs/2d'
 *
 * (async () => {
 *  // Initialize the scene
 *  const scene = new FScene()
 *  await scene.init()
 *  await scene.initPhysics()
 *
 *  // Create a ground
 *  const ground = new FRectangle({
 *    position: { x: 0, y: -0.1 },
 *    scale: { x: 15, y: 0.1 },
 *    color: 0x1F1F1F,
 *  })
 *  ground.initCollider()
 *
 *  // Create a square
 *  const square = new FRectangle()
 *  square.initRigidBody()
 *
 *  // Attach a camera to the square
 *  scene.camera = new FAttachedCamera({ target: square })
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
  // The colliders of the scene
  colliders: FCollider[]
  // The rigidBodies of the scene
  rigidBodies: FRigidBody[]

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

    // Initialize collider and rigidBody arrays
    this.colliders = []
    this.rigidBodies = []
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
    this.camera = new FFreeCamera({ scene: this })

    // Initialize the render pipeline
    this.__PIPELINE_MANAGER__.addStandardPipeline(new RenderPipeline({ scene: this }))

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

    // Initialize the physic pipeline
    this.__PIPELINE_MANAGER__.addIntervalPipeline(new PhysicPipeline({ scene: this, frameRate: this.__PHYSIC_FRAME_RATE__ }))
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

  addHandle(handle: number, component: FComponent) {
    this.__RAPIER_TO_COMPONENT__.set(handle, component)
  }

  removeHandle(handle: number) {
    this.__RAPIER_TO_COMPONENT__.delete(handle)
  }

  addComponent(component: FComponent) {
    super.addComponent(component)

    // Add the component to the viewport
    this.viewport.addChild(component.__CONTAINER__)

    // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    if (component.sensor)
      this.addHandle(component.sensor.collider.__COLLIDER__.handle, component)
    // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    else if (component.collider)
      this.addHandle(component.collider.__COLLIDER__.handle, component)
  }

  removeComponent(component: FComponent): void {
    super.removeComponent(component)

    // Remove container from the viewport
    this.viewport.removeChild(component.__CONTAINER__)

    // Remove colliders and rigidBodies from rapier world
    if (component.rigidBody)
      this.removeRigidBody(component.rigidBody)
    if (component.collider)
      this.removeCollider(component.collider)
    if (component.sensor)
      this.removeRigidBody(component.sensor)

    // Remove handle from rapier map
    if (component.sensor)
      this.removeHandle(component.sensor.collider.__COLLIDER__.handle)
    if (component.collider)
      this.removeHandle(component.collider.__COLLIDER__.handle)
  }

  addLight(light: FLight): void {
    super.addLight(light)
  }

  removeLight(light: FLight): void {
    super.removeLight(light)
  }

  addCollider(collider: FCollider): void {
    this.colliders.push(collider)
  }

  removeCollider(collider: FCollider): void {
    const index = this.colliders.indexOf(collider)
    if (index !== -1)
      this.colliders.splice(index, 1)
    this.world.removeCollider(collider.__COLLIDER__, false)
  }

  addRigidBody(rigidBody: FRigidBody): void {
    this.rigidBodies.push(rigidBody)
  }

  removeRigidBody(rigidBody: FRigidBody): void {
    this.removeCollider(rigidBody.collider)
    const index = this.rigidBodies.indexOf(rigidBody)
    if (index !== -1)
      this.rigidBodies.splice(index, 1)
    this.world.removeRigidBody(rigidBody.__RIGIDBODY__)
  }

  // Setters & Getters

  /**
   * Getter for the camera.
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
}
