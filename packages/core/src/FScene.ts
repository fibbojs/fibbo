import type RAPIER2D from '@dimforge/rapier2d'
import type RAPIER3D from '@dimforge/rapier3d'
import type { FComponent } from './FComponent'
import type { FLight } from './FLight'
import { MainPipeline } from './pipeline/MainPipeline'
import { PipelineManager } from './pipeline/PipelineManager'
import type { FController } from './FController'
import type { FCamera } from './FCamera'

export interface FSceneOptions {
  gravity?: { x: number, y: number, z: number } | { x: number, y: number }
  domNode?: HTMLElement
  autoLoop?: boolean
  mainFrameRate?: number
  physicFrameRate?: number
}

/**
 * A scene which contains the components, lights and cameras.
 * Also contains the Rapier world if physics is enabled.
 * @category Core
 */
export abstract class FScene {
  // Internal flags
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = false

  /**
   * Pipeline manager that manages the pipelines of the scene.
   * By default, it contains the main pipeline.
   */
  __PIPELINE_MANAGER__: PipelineManager
  /**
   * Physic frame rate.
   * It is stored here as the initialisation of the physics pipeline is handled by child classes.
   */
  __PHYSIC_FRAME_RATE__: number

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
  lights: FLight[]

  /**
   * The camera of the scene.
   */
  __CAMERA__?: FCamera

  /**
   * Controllers that will run in the physic pipeline.
   */
  __PHYSIC_CONTROLLERS__: FController[] = []

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
   * Callbacks for when a component is removed from the scene.
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
   * Callbacks for when a light is removed from the scene.
   */
  public __CALLBACKS_ON_LIGHT_REMOVED__: ((light: FLight) => void)[] = []

  constructor(options?: FSceneOptions) {
    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FibboError: FScene must be instantiated in a browser environment')

    // Define globalThis.__FIBBO_ACTUAL_SCENE__ as the current scene
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-ignore
    globalThis.__FIBBO_ACTUAL_SCENE__ = this

    // Define default values for the options
    const DEFAULT_OPTIONS = {
      gravity: { x: 0, y: -9.81, z: 0 },
      domNode: document.body,
      autoLoop: true,
      mainFrameRate: 60,
      physicFrameRate: 30,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate the options
    if (options.domNode === undefined || options.gravity === undefined || options.physicFrameRate === undefined)
      throw new Error('FibboError: The gravity option, DOM node and physic framerate must be defined')

    // Store the options
    this.gravity = options.gravity
    this.__DOM_NODE__ = options.domNode
    this.__PHYSIC_FRAME_RATE__ = options.physicFrameRate

    // Initialize the components array
    this.components = []
    // Initialize the lights array
    this.lights = []

    // Initialize the pipeline manager
    this.__PIPELINE_MANAGER__ = new PipelineManager({ scene: this, autoLoop: options.autoLoop })
    // Add the main pipeline
    this.__PIPELINE_MANAGER__.addThrottledPipeline(new MainPipeline({ scene: this, frameRate: options.mainFrameRate }))
  }

  /**
   * Initialize the scene.
   */
  abstract init(): void

  /**
   * Initialize the physics world.
   */
  abstract initPhysics(): Promise<void>

  /**
   * Compute a frame with the given delta time.
   * By default, it is called every frame in the main pipeline, but this behavior can be changed by giving the `autoLoop` option as `false` when creating the scene.
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

  /**
   * Add a callback to be called when the scene is ready.
   * The scene is ready when the `init` method has finished.
   */
  onReady(callback: () => void) {
    this.__CALLBACKS_ON_READY__.push(callback)
  }

  /**
   * The camera of the scene.
   */
  get camera(): FCamera | undefined {
    return this.__CAMERA__
  }

  /**
   * The camera of the scene.
   */
  set camera(camera: FCamera) {
    this.__CAMERA__ = camera
  }
}
