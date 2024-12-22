import type RAPIER2D from '@dimforge/rapier2d'
import type RAPIER3D from '@dimforge/rapier3d'
import type { FComponent } from './FComponent'
import type { FLight } from './FLight'
import { CustomWorker } from './pipeline/CustomWorker'

export interface FSceneOptions {
  gravity?: { x: number, y: number, z: number } | { x: number, y: number }
  domNode?: HTMLElement
  autoLoop?: boolean
}

/**
 * A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 * @category Core
 */
export abstract class FScene {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = false

  /**
   * Pipelines
   */
  private __RENDER_PIPELINE__: CustomWorker | null = null
  private __PHYSIC_PIPELINE__: CustomWorker | null = null

  /**
   * DOM element that the renderer will be appended to
   */
  __DOM_NODE__: HTMLElement

  /**
   * The components in the scene.
   */
  components: FComponent[]

  /**
   * The lights in the scene.
   */
  lights: FLight[] = []

  // Rapier
  gravity: { x: number, y: number, z: number } | { x: number, y: number }
  declare world: RAPIER2D.World | RAPIER3D.World
  declare eventQueue: RAPIER2D.EventQueue | RAPIER3D.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent> = new Map()

  // Callbacks
  /**
   * Callbacks for when a frame is rendered.
   */
  public __CALLBACKS_ON_FRAME__: ((delta: number) => void)[] = []
  /**
   * Callbacks for when a component is added to the scene.
   */
  public __CALLBACKS_ON_COMPONENT_ADDED__: ((component: FComponent) => void)[] = []
  /**
   * Callbacks for when a component is remove from the scene.
   */
  public __CALLBACKS_ON_COMPONENT_REMOVED__: ((component: FComponent) => void)[] = []
  /**
   * Callbacks for when the scene is ready.
   */
  public __CALLBACKS_ON_READY__: (() => void)[] = []
  /**
   * Callbacks for when a light is added to the scene.
   */
  public __CALLBACKS_ON_LIGHT_ADDED__: ((light: FLight) => void)[] = []
  /**
   * Callbacks for when a light is added to the scene.
   */
  public __CALLBACKS_ON_LIGHT_REMOVED__: ((light: FLight) => void)[] = []

  constructor(options?: FSceneOptions) {
    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FibboError: FScene must be instantiated in a browser environment')

    // Define default values for the options
    const DEFAULT_OPTIONS = {
      gravity: { x: 0, y: -9.81, z: 0 },
      domNode: document.body,
      autoLoop: true,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate the options
    if (options.domNode === undefined || options.gravity === undefined)
      throw new Error('FibboError: The gravity option and the DOM node must be defined')

    // Store the options
    this.gravity = options.gravity
    this.__DOM_NODE__ = options.domNode

    /**
     * Time management
     */
    let lastTime = (new Date()).getTime()
    let currentTime = 0
    let delta = 0

    /**
     * Auto loop function that calls the frame method every frame.
     */
    const autoLoop = () => {
      requestAnimationFrame(autoLoop)

      // Calculate delta time
      currentTime = (new Date()).getTime()
      delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      // Call onFrame callbacks
      this.frame(delta)
    }

    if (options.autoLoop)
      autoLoop()

    // Initialize the components array
    this.components = []
    // Initialize the lights array
    this.lights = []

    // Initialize workers
    this.__RENDER_PIPELINE__ = new CustomWorker('./pipeline/RenderPipelineWorker.mjs')
    this.__RENDER_PIPELINE__.start()
    this.__PHYSIC_PIPELINE__ = new CustomWorker('./pipeline/PhysicPipelineWorker.mjs')
    this.__PHYSIC_PIPELINE__.start()
  }

  /**
   * Add a component to the scene.
   */
  addComponent(component: FComponent): void {
    this.components.push(component)
    this.__CALLBACKS_ON_COMPONENT_ADDED__.forEach(callback => callback(component))
  }

  /**
   * Remove a component from the scene.
   */
  removeComponent(component: FComponent): void {
    const index = this.components.indexOf(component)
    if (index !== -1) {
      this.components.splice(index, 1)
    }
    this.__CALLBACKS_ON_COMPONENT_REMOVED__.forEach(callback => callback(component))
  }

  /**
   * Add a light to the scene.
   */
  addLight(light: FLight): void {
    this.lights.push(light)
    this.__CALLBACKS_ON_LIGHT_ADDED__.forEach(callback => callback(light))
  }

  /**
   * Remove a light from the scene.
   */
  removeLight(light: FLight): void {
    const index = this.lights.indexOf(light)
    if (index !== -1) {
      this.lights.splice(index, 1)
    }
    this.__CALLBACKS_ON_LIGHT_REMOVED__.forEach(callback => callback(light))
  }

  /**
   * Compute a frame with the given delta time.
   * By default, it is called every frame, but this behavior can be changed by giving the `autoLoop` option as `false` when creating the scene.
   * @param delta The time in seconds since the last frame.
   */
  frame(delta: number): void {
    // Call onFrame callbacks
    this.__CALLBACKS_ON_FRAME__.forEach(callback => callback(delta))
  }

  /**
   * Add a callback to be called when a frame is rendered.
   */
  onFrame(callback: (delta: number) => void) {
    this.__CALLBACKS_ON_FRAME__.push(callback)
  }

  /**
   * Add a callback to be called when a component is added to the scene.
   */
  onComponentAdded(callback: (component: FComponent) => void) {
    this.__CALLBACKS_ON_COMPONENT_ADDED__.push(callback)
  }

  /**
   * Add a callback to be called when a component is removed from the scene.
   */
  onComponentRemoved(callback: (component: FComponent) => void) {
    this.__CALLBACKS_ON_COMPONENT_REMOVED__.push(callback)
  }

  /**
   * Add a callback to be called when the scene is ready.
   * The scene is ready when the `init` method has finished.
   */
  onReady(callback: () => void) {
    this.__CALLBACKS_ON_READY__.push(callback)
  }

  /**
   * Add a callback to be called when a light is added to the scene.
   */
  onLightAdded(callback: (light: FLight) => void) {
    this.__CALLBACKS_ON_LIGHT_ADDED__.push(callback)
  }

  /**
   * Add a callback to be called when a light is removed from the scene.
   */
  onLightRemoved(callback: (light: FLight) => void) {
    this.__CALLBACKS_ON_LIGHT_REMOVED__.push(callback)
  }
}
