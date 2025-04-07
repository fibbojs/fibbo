import * as THREE from 'three'
import { FScene as FSceneCore } from '@fibbojs/core'
import type { FSceneOptions as FSceneOptionsCore, FVector3 } from '@fibbojs/core'
import type RAPIER from '@dimforge/rapier3d'
import type { FCamera } from '../cameras/FCamera'
import { FFixedCamera } from '../cameras/FFixedCamera'
import type { FLight } from '../lights/FLight'
import { RenderPipeline } from '../pipeline/RenderPipeline'
import { PhysicPipeline } from '../pipeline/PhysicPipeline'
import type { FComponent } from './FComponent'
import type { FRigidBody } from './FRigidBody'
import type { FCollider } from './FCollider'

export interface FSceneOptions extends FSceneOptionsCore {
  gravity?: FVector3
  shadows?: boolean
}

/**
 * A scene which contains the components, the Three.js scene and the Rapier world.
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
 *  const ground = new FCuboid({
 *    position: { x: 0, y: -0.1, z: 0 },
 *    scale: { x: 15, y: 0.1, z: 15 },
 *  })
 *  ground.setColor(0x1F1F1F)
 *  ground.initCollider()
 *
 *  // Create a cube
 *  const cube = new FCuboid()
 *  cube.initRigidBody()
 *
 *  // Attach a camera to the cube
 *  scene.camera = new FGameCamera({target: cube})
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
  // The colliders of the scene
  colliders: FCollider[]
  // The rigidBodies of the scene
  rigidBodies: FRigidBody[]
  // Three.js
  THREE: typeof THREE = THREE
  declare scene: THREE.Scene
  declare renderer: THREE.WebGLRenderer
  declare __CAMERA__: FCamera

  // Rapier
  declare gravity: FVector3
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

    // Initialize collider and rigidBody arrays
    this.colliders = []
    this.rigidBodies = []
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
    this.camera = new FFixedCamera({
      scene: this,
    })

    // Add renderer to DOM
    this.__DOM_NODE__.appendChild(this.renderer.domElement)

    // Initialize the render pipeline
    this.__PIPELINE_MANAGER__.addStandardPipeline(new RenderPipeline({ scene: this }))

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

  addHandle(handle: number, component: FComponent) {
    this.__RAPIER_TO_COMPONENT__.set(handle, component)
  }

  removeHandle(handle: number) {
    this.__RAPIER_TO_COMPONENT__.delete(handle)
  }

  addComponent(component: FComponent) {
    super.addComponent(component)

    // Add mesh to scene
    if (component.__MESH__)
      this.scene.add(component.__MESH__)

    // If a sensor is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    if (component.sensor)
      this.addHandle(component.sensor.collider.__COLLIDER__.handle, component)
    // Else if a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    else if (component.collider)
      this.addHandle(component.collider.__COLLIDER__.handle, component)
  }

  removeComponent(component: FComponent): void {
    super.removeComponent(component)

    // Remove mesh from scene
    if (component.__MESH__)
      this.scene.remove(component.__MESH__)

    // Remove colliders and rigidBodies from the scene
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
    // Add the light to the THREE scene
    this.scene.add(light.__LIGHT__)
  }

  removeLight(light: FLight): void {
    super.removeLight(light)
    // Remove the light from the THREE scene
    this.scene.remove(light.__LIGHT__)
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

  get camera(): FCamera {
    return this.__CAMERA__
  }

  set camera(camera: FCamera) {
    this.__CAMERA__ = camera
  }
}
