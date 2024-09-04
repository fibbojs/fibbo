import * as THREE from 'three'
import { FScene as FSceneCore } from '@fibbojs/core'
import type RAPIER from '@dimforge/rapier3d'
import type { FCamera } from '../cameras/FCamera'
import { FFixedCamera } from '../cameras/FFixedCamera'
import { FModel } from '../model/FModel'
import type { FComponent } from './FComponent'

export interface FSceneOptions {
  gravity?: { x: number, y: number, z: number }
  domNode?: HTMLElement
}

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FCuboid, FGameCamera, FScene } from '@fibbojs/3d'
 *
 * (async () => {
 *  // Initialize the scene
 *  const scene = new FScene()
 *  scene.init()
 *  await scene.initPhysics()
 *
 *  // Create a ground
 *  const ground = new FCuboid(scene)
 *  ground.setScale(15, 0.1, 15)
 *  ground.setPosition(0, -0.1, 0)
 *  ground.initCollider()
 *  ground.setColor(0x1F1F1F)
 *  scene.addComponent(ground)
 *
 *  // Create a cube
 *  const cube = new FCuboid(scene)
 *  cube.initRigidBody()
 *  scene.addComponent(cube)
 *
 *  // Attach a camera to the cube
 *  scene.camera = new FGameCamera(cube)
 * })()
 * ```
 */
export class FScene extends FSceneCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true

  // Components can be declared as it will be initialized by the parent class
  declare components: FComponent[]
  /**
   * DOM element that the renderer will be appended to
   */
  __DOM_NODE__: HTMLElement
  // Three.js
  THREE: typeof THREE = THREE
  declare scene: THREE.Scene
  declare renderer: THREE.WebGLRenderer
  declare camera: FCamera
  // Rapier
  gravity: { x: number, y: number, z: number }
  declare world: RAPIER.World
  declare eventQueue: RAPIER.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent> = new Map()

  constructor(options?: FSceneOptions) {
    super()

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FibboError: FScene must be instantiated in a browser environment')

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
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  init() {
    // Create scene and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x222324)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize((window as any).innerWidth, (window as any).innerHeight)
    // Create a default camera
    this.camera = new FFixedCamera()

    // Add renderer to DOM
    this.__DOM_NODE__.appendChild(this.renderer.domElement)

    // onFrame loop
    this.onFrame((delta) => {
      // Call onFrame for each component
      this.components.forEach(component => component.onFrame(delta))

      // Camera
      this.camera.onFrame(delta)

      // Render the scene
      this.renderer.render(this.scene, this.camera)
    })
  }

  async initPhysics() {
    // Import Rapier
    const RAPIER = await import('@dimforge/rapier3d')

    // Initialize Rapier world
    this.world = new RAPIER.World(this.gravity)

    // Initialize Rapier event queue
    this.eventQueue = new RAPIER.EventQueue(true)

    // onFrame loop
    this.onFrame((delta) => {
      // Step the physics world
      this.world.timestep = delta
      this.world.step(this.eventQueue)

      // Drain collision events
      this.eventQueue.drainCollisionEvents((handle1: RAPIER.ColliderHandle, handle2: RAPIER.ColliderHandle, started: boolean) => {
        this.handleCollision(handle1, handle2, started)
      })
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
    const component1 = this.__RAPIER_TO_COMPONENT__.get(handle1)
    const component2 = this.__RAPIER_TO_COMPONENT__.get(handle2)
    // If both colliders are undefined, return
    if (component1 === undefined && component2 === undefined)
      return
    // If the collision is a start event, a collision has started
    if (start) {
      // Call the onCollisionWith callbacks for the first collider
      if (component1) {
        // Call the callback for the class name
        component1.emitCollisionWith(component2?.constructor)
        // Call the callback for the specific object
        component1.emitCollisionWith(component2)
      }
      // Call the onCollisionWith callbacks for the second collider
      if (component2) {
        // Call the callback for the class name
        component2.emitCollisionWith(component1?.constructor)
        // Call the callback for the specific object
        component2?.emitCollisionWith(component1)
      }
    }
  }

  addComponent(component: FComponent) {
    super.addComponent(component)

    // Detect if the FComponent is a FGLTF instance
    if (component instanceof FModel) {
      // Wait for the model to be loaded before adding it to the scene
      component.onLoaded(() => {
        if (component.mesh)
          this.scene.add(component.mesh)

        // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
        if (component.sensor)
          this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.collider.handle, component)
        // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
        else if (component.collider)
          this.__RAPIER_TO_COMPONENT__.set(component.collider.collider.handle, component)
      })
    }
    else {
      if (component.mesh)
        this.scene.add(component.mesh)
    }

    // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    if (component.sensor)
      this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.collider.handle, component)
    // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    else if (component.collider)
      this.__RAPIER_TO_COMPONENT__.set(component.collider.collider.handle, component)
  }
}
