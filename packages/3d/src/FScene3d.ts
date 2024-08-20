import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FScene } from '@fibbojs/core'
import type RAPIER from '@dimforge/rapier3d'
import type { FComponent3d } from './FComponent3d'
import { FGLTF } from './model/FGLTF'
import type { FCamera3d } from './cameras/FCamera3d'
import { FFixedCamera } from './cameras/FFixedCamera'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FCube, FGameCamera, FScene3d } from '@fibbojs/3d'
 *
 * (async () => {
 *  // Initialize the scene
 *  const scene = new FScene3d()
 *  scene.init()
 *  await scene.initPhysics()
 *
 *  // Create a ground
 *  const ground = new FCube(scene)
 *  ground.setScale(15, 0.1, 15)
 *  ground.setPosition(0, -0.1, 0)
 *  ground.initCollider()
 *  ground.setColor(0x1F1F1F)
 *  scene.addComponent(ground)
 *
 *  // Create a cube
 *  const cube = new FCube(scene)
 *  cube.initRigidBody()
 *  scene.addComponent(cube)
 *
 *  // Attach a camera to the cube
 *  scene.camera = new FGameCamera(cube, scene)
 * })()
 * ```
 */
export class FScene3d extends FScene {
  // Components can be declared as it will be initialized by the parent class
  declare components: FComponent3d[]
  // Three.js
  declare THREE: typeof THREE
  declare scene: THREE.Scene
  declare renderer: THREE.WebGLRenderer
  declare camera: FCamera3d
  declare debugCamera: FCamera3d
  declare controls?: OrbitControls
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  declare world: RAPIER.World
  declare eventQueue: RAPIER.EventQueue
  __RAPIER_TO_COMPONENT__: Map<number, FComponent3d> = new Map()
  // Debug
  __DEBUG_MODE__: boolean

  constructor(options: { debug?: boolean } = { debug: false }) {
    super()
    this.__DEBUG_MODE__ = options.debug || false

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FScene must be instantiated in a browser environment')
  }

  init() {
    // Attach THREE to the scene
    this.THREE = THREE
    // Create scene, camera, and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x222324)
    this.debugCamera = new FFixedCamera()
    this.debugCamera.position.set(5, 5, 5)
    this.camera = this.debugCamera
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize((window as any).innerWidth, (window as any).innerHeight)

    // Add ambient lights
    const light = new THREE.AmbientLight(0xFFFFFF)
    this.scene.add(light)

    // Debug mode
    if (this.__DEBUG_MODE__) {
      // Grid helper
      const gridHelper = new THREE.GridHelper(10, 10)
      this.scene.add(gridHelper)

      // Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.update()

      // Axes helper
      const axesHelper = new THREE.AxesHelper(5)
      this.scene.add(axesHelper)
    }

    // Add renderer to DOM
    document.body.appendChild(this.renderer.domElement)

    // onFrame loop
    this.onFrame((delta) => {
      // Call onFrame for each component
      this.components.forEach(component => component.onFrame(delta))

      // Debug mode
      if (this.__DEBUG_MODE__) {
        // Update controls
        this.controls?.update()
      }

      // Camera
      this.camera.onFrame(delta)

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

  addComponent(component: FComponent3d) {
    super.addComponent(component)

    // Detect if the FComponent3d is a FGLTF instance
    if (component instanceof FGLTF) {
      // Wait for the model to be loaded before adding it to the scene
      component.onLoaded(() => {
        if (component.mesh)
          this.scene.add(component.mesh)
      })
    }
    else {
      if (component.mesh)
        this.scene.add(component.mesh)
    }

    // If a collider is defined, add it's handle to the __RAPIER_TO_COMPONENT__ map
    if (component.collider?.handle !== undefined)
      this.__RAPIER_TO_COMPONENT__.set(component.collider?.handle, component)
  }
}
