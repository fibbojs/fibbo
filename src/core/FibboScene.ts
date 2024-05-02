import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { World } from '@dimforge/rapier3d'
import type { FibboModel } from './model/FibboModel'
import { FibboGLTF } from './model/FibboGLTF'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @example
 * ```ts
 * import { FibboScene } from './FibboScene'
 * import { MyCube } from './model/MyCube'
 *
 * const scene = new FibboScene()
 * const cube = new MyCube(scene)
 * scene.addModel(cube)
 * ```
 */
export class FibboScene {
  models: FibboModel[]
  // Three.js
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  controls: OrbitControls | undefined
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  world: World

  constructor(debug = false) {
    // Initialize models array
    this.models = []

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FibboScene must be instantiated in a browser environment')

    // Create scene, camera, and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x121212)
    this.camera = new THREE.PerspectiveCamera(75, (window as any).innerWidth / (window as any).innerHeight, 0.1, 1000)
    this.camera.position.set(5, 5, 5)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize((window as any).innerWidth, (window as any).innerHeight)

    // Add ambient lights
    const light = new THREE.AmbientLight(0xFFFFFF)
    this.scene.add(light)

    // Debug mode
    if (debug) {
      // Grid helper
      const gridHelper = new THREE.GridHelper(10, 10)
      this.scene.add(gridHelper)

      // Orbit controls
      this.controls = new OrbitControls(this.camera, renderer.domElement)
      this.controls.update()

      // Axes helper
      const axesHelper = new THREE.AxesHelper(5)
      this.scene.add(axesHelper)

      // Add debug panel
      this.addDebugPanel()
    }

    // Add renderer to DOM
    document.body.appendChild(renderer.domElement)

    /**
     * Time management
     */
    let lastTime = (new Date()).getTime()
    let currentTime = 0
    let delta = 0

    // Initialize Rapier world
    this.world = new RAPIER.World(this.gravity)

    // Create the ground
    const groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1, 10.0)
    this.world.createCollider(groundColliderDesc)

    /**
     * Animation loop
     */
    const animate = () => {
      requestAnimationFrame(animate)

      // Calculate delta time
      currentTime = (new Date()).getTime()
      delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      // Call onFrame for each model
      this.models.forEach(model => model.onFrame(delta))

      // Debug mode
      if (debug) {
        // Update controls
        this.controls?.update()

        // Debug info
        this.debug()

        // Rapier debug
        if (this.world) {
          const { vertices, colors } = this.world.debugRender()
          const geometry = new THREE.BufferGeometry()
          geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
          geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
          const material = new THREE.LineBasicMaterial({ vertexColors: true })
          const lines = new THREE.LineSegments(geometry, material)
          this.scene.add(lines)
        }
      }

      // Physics
      if (this.world) {
        this.world.timestep = delta
        this.world.step()
      }

      renderer.render(this.scene, this.camera)
    }

    // Start animation loop
    animate()
  }

  addModel(model: FibboModel) {
    this.models.push(model)
    // Detect if the FibboModel is a FibboGLTF instance
    if (model instanceof FibboGLTF) {
      // Wait for the model to be loaded before adding it to the scene
      model.onLoaded = () => {
        if (model.object3D)
          this.scene.add(model.object3D)
      }
    }
    else {
      if (model.object3D)
        this.scene.add(model.object3D)
    }
  }

  private addDebugPanel() {
    const panel = document.createElement('div')
    panel.className = 'debug-panel'
    panel.innerHTML = `
      <h4>FibboJS</h4>
      <p id="camera-info">camera-info</p>
      <div id="objects">
        <div class="object-info">
          <span>object0 position: 0, 0, 0</span>
          <span>object0 rotation: 0, 0, 0</span>
          <span>object0 scale: 1, 1, 1</span>
        </div>
      </div>
      <style>
        .debug-panel {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid white;
          border-radius: 10px;
          color: white;
        }

        #objects {
          display: flex;
          flex-direction: column;
        }

        .object-info {
          display: flex;
          flex-direction: column;
        }
      </style>
    `
    document.body.appendChild(panel)
  }

  private debug() {
    const cameraInfo = document.getElementById('camera-info')
    if (cameraInfo)
      cameraInfo.textContent = `camera position: ${this.camera.position.x.toFixed(2)}, ${this.camera.position.y.toFixed(2)}, ${this.camera.position.z.toFixed(2)}`

    const objectsDOM = document.getElementById('objects')
    if (objectsDOM) {
      objectsDOM.innerHTML = ''
      this.models.forEach((model, i) => {
        if (!objectsDOM || !model.object3D)
          return

        const objectInfoDOM = document.createElement('div')
        objectInfoDOM.className = 'object-info'
        objectInfoDOM.id = `object${i}`
        objectInfoDOM.innerHTML = `
          <span>${model.constructor.name}${i} position: ${model.object3D.position.x.toFixed(2)}, ${model.object3D.position.y.toFixed(2)}, ${model.object3D.position.z.toFixed(2)}</span>
          <span>${model.constructor.name}${i} rotation: ${model.object3D.rotation.x.toFixed(2)}, ${model.object3D.rotation.y.toFixed(2)}, ${model.object3D.rotation.z.toFixed(2)}</span>
          <span>${model.constructor.name}${i} scale: ${model.object3D.scale.x.toFixed(2)}, ${model.object3D.scale.y.toFixed(2)}, ${model.object3D.scale.z.toFixed(2)}</span>
        `
        objectsDOM.appendChild(objectInfoDOM)
      })
    }
  }
}
