import * as THREE from 'three'
import { FScene as FSceneCore } from '@fibbojs/core'
import type { FSceneOptions as FSceneOptionsCore } from '@fibbojs/core'
import type RAPIER from '@dimforge/rapier3d'
import type { FCamera } from '../cameras/FCamera'
import { FFixedCamera } from '../cameras/FFixedCamera'
import { FModel } from '../model/FModel'
import type { FLight } from '../lights/FLight'
import type { FComponent } from './FComponent'

export interface FSceneOptions extends FSceneOptionsCore {
  gravity?: { x: number, y: number, z: number }
  shadows?: boolean
}

/**
 * A scene which contains the models, the Three.js scene and the Rapier world.
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
  public __ENABLE_SHADOWS__: boolean

  // Components can be declared as it will be initialized by the parent class
  declare components: FComponent[]
  // Lights can be declared as it will be initialized by the parent class
  declare lights: FLight[]

  // Three.js
  THREE: typeof THREE = THREE
  declare scene: THREE.Scene
  declare renderer: THREE.WebGLRenderer
  declare camera: FCamera

  // Rapier
  declare gravity: { x: number, y: number, z: number }
  declare world: RAPIER.World
  declare eventQueue: RAPIER.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent> = new Map()

  constructor(options?: FSceneOptions) {
    super(options)

    // Define default values for the options
    const DEFAULT_OPTIONS = {
      shadows: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate the options
    if (options.shadows === undefined || typeof options.shadows !== 'boolean')
      throw new Error('FibboError: FScene options.shadows must be a boolean')

    // Set the options
    this.__ENABLE_SHADOWS__ = options.shadows

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.__CAMERA__.aspect = window.innerWidth / window.innerHeight
      this.camera.__CAMERA__.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  init() {
    // Create scene and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x222324)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize((window as any).innerWidth, (window as any).innerHeight)
    // If shadows are enabled, set the renderer to cast and receive shadows
    if (this.__ENABLE_SHADOWS__) {
      this.renderer.shadowMap.enabled = true
      // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    }
    // Create a default camera
    this.camera = new FFixedCamera(this)

    // Add renderer to DOM
    this.__DOM_NODE__.appendChild(this.renderer.domElement)

    // onFrame loop
    this.onFrame((delta) => {
      // Call onFrame for each component
      this.components.forEach(component => component.onFrame(delta))

      // Camera
      this.camera.onFrame(delta)

      // Render the scene
      this.renderer.render(this.scene, this.camera.__CAMERA__)
    })

    // Call the onReady callbacks
    this.__CALLBACKS_ON_READY__.forEach((callback) => {
      callback()
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
   * Handle a collision event between two colliders.
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

    // Detect if the FComponent is a FGLTF instance
    if (component instanceof FModel) {
      // Wait for the model to be loaded before adding it to the scene
      component.onLoaded(() => {
        if (component.__MESH__)
          this.scene.add(component.__MESH__)

        // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
        if (component.sensor)
          this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.__COLLIDER__.handle, component)
        // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
        else if (component.collider)
          this.__RAPIER_TO_COMPONENT__.set(component.collider.__COLLIDER__.handle, component)
      })
    }
    else {
      if (component.__MESH__)
        this.scene.add(component.__MESH__)

      // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
      if (component.sensor)
        this.__RAPIER_TO_COMPONENT__.set(component.sensor.collider.__COLLIDER__.handle, component)
      // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
      else if (component.collider)
        this.__RAPIER_TO_COMPONENT__.set(component.collider.__COLLIDER__.handle, component)
    }
  }

  removeComponent(component: FComponent): void {
    super.removeComponent(component)

    // Remove mesh from scene
    if (component.__MESH__)
      this.scene.remove(component.__MESH__)

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

  addLight(light: FLight): void {
    super.addLight(light)

    // Add the light to the THREE scene
    this.scene.add(light.light)
  }

  removeLight(light: FLight): void {
    super.removeLight(light)

    // Remove the light from the THREE scene
    this.scene.remove(light.light)
  }
}
