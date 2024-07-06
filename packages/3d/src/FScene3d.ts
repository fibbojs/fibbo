import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { World } from '@dimforge/rapier3d'
import { FScene } from '@fibbojs/core'
import type { FModel } from './model/FModel'
import { FGLTF } from './model/FGLTF'
import type { FCamera3d } from './cameras/FCamera3d'
import { FFixedCamera } from './cameras/FFixedCamera'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FScene } from '@fibbojs/3d'
 * import { MyCube } from './classes/MyCube'
 *
 * const scene = new FScene()
 * const cube = new MyCube(scene)
 * scene.addComponent(cube)
 * ```
 */
export class FScene3d extends FScene {
  components: FModel[]
  // Three.js
  declare scene: THREE.Scene
  declare renderer: THREE.WebGLRenderer
  declare camera: FCamera3d
  declare debugCamera: FCamera3d
  declare controls?: OrbitControls
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  declare world: World
  // Debug
  debugMode: boolean

  constructor(debug = false) {
    super()
    // Initialize models array
    this.components = []
    this.debugMode = debug

    // Verify window and document are available
    if (typeof window === 'undefined' || typeof document === 'undefined')
      throw new Error('FScene must be instantiated in a browser environment')
  }

  init() {
    // Create scene, camera, and renderer
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x121212)
    this.debugCamera = new FFixedCamera()
    this.debugCamera.position.set(5, 5, 5)
    this.camera = this.debugCamera
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize((window as any).innerWidth, (window as any).innerHeight)

    // Add ambient lights
    const light = new THREE.AmbientLight(0xFFFFFF)
    this.scene.add(light)

    // Debug mode
    if (this.debugMode) {
      // Grid helper
      const gridHelper = new THREE.GridHelper(10, 10)
      this.scene.add(gridHelper)

      // Orbit controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.update()

      // Axes helper
      const axesHelper = new THREE.AxesHelper(5)
      this.scene.add(axesHelper)

      // Add debug panel
      this.addDebugPanel()
    }

    // Add renderer to DOM
    document.body.appendChild(this.renderer.domElement)

    // onFrame loop
    this.onFrame((delta) => {
      // Call onFrame for each model
      this.components.forEach(model => model.onFrame(delta))

      // Debug mode
      if (this.debugMode) {
        // Update controls
        this.controls?.update()

        // Debug info
        this.debug()
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

    // Create the ground
    const groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1, 10.0)
    this.world.createCollider(groundColliderDesc)

    // onFrame loop
    this.onFrame((delta) => {
      // Debug mode
      if (this.debugMode) {
        // Remove previous debug lines
        const previousLines = this.scene.getObjectByName('debugLines')
        if (previousLines)
          this.scene.remove(previousLines)

        // Render new debug lines
        const { vertices, colors } = this.world.debugRender()
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
        const material = new THREE.LineBasicMaterial({ vertexColors: true })
        const lines = new THREE.LineSegments(geometry, material)
        lines.name = 'debugLines'
        this.scene.add(lines)
      }
      // Step the physics world
      this.world.timestep = delta
      this.world.step()
    })
  }

  addComponent(model: FModel) {
    this.components.push(model)
    // Detect if the FModel is a FGLTF instance
    if (model instanceof FGLTF) {
      // Wait for the model to be loaded before adding it to the scene
      model.onLoaded(() => {
        if (model.object3D)
          this.scene.add(model.object3D)
      })
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
      <!-- Camera Info -->
      <div id="camera-panel">
        <p id="camera-info">camera-info</p>
        <!-- Camera FOV -->
        <label for="camera-fov">Camera FOV</label>
        <input type="range" min="1" max="200" value="75" step="1" id="camera-fov">
        <!-- Camera Near -->
        <label for="camera-near">Camera Near</label>
        <input type="range" min="0.1" max="20" value="0.1" step="0.1" id="camera-near">
        <!-- Camera Far -->
        <label for="camera-far">Camera Far</label>
        <input type="range" min="1" max="100" value="100" step="0.1" id="camera-far">
        <!-- Camera RotateX -->
        <label for="camera-rotate-x">Camera Rotate X</label>
        <input type="range" min="-180" max="180" value="0" step="1" id="camera-rotate-x">
        <!-- Camera RotateY -->
        <label for="camera-rotate-y">Camera Rotate Y</label>
        <input type="range" min="-180" max="180" value="0" step="1" id="camera-rotate-y">
        <!-- Camera RotateZ -->
        <label for="camera-rotate-z">Camera Rotate Z</label>
        <input type="range" min="-180" max="180" value="0" step="1" id="camera-rotate-z">
      </div>
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
          max-height: 90vh;
          overflow-y: auto;
        }

        #camera-panel {
          display: flex;
          flex-direction: column;
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

    const cameraFOV = document.getElementById('camera-fov')
    if (cameraFOV) {
      cameraFOV.addEventListener('input', (event) => {
        // If the camera is not a PerspectiveCamera, return
        if (!(this.camera instanceof THREE.PerspectiveCamera))
          return

        const target = event.target as HTMLInputElement
        this.camera.fov = Number.parseFloat(target.value)
        this.camera.updateProjectionMatrix()
      })
    }

    const cameraNear = document.getElementById('camera-near')
    if (cameraNear) {
      cameraNear.addEventListener('input', (event) => {
        // If the camera is not a PerspectiveCamera, return
        if (!(this.camera instanceof THREE.PerspectiveCamera))
          return

        const target = event.target as HTMLInputElement
        this.camera.near = Number.parseFloat(target.value)
        this.camera.updateProjectionMatrix()
      })
    }

    const cameraFar = document.getElementById('camera-far')
    if (cameraFar) {
      cameraFar.addEventListener('input', (event) => {
        // If the camera is not a PerspectiveCamera, return
        if (!(this.camera instanceof THREE.PerspectiveCamera))
          return

        const target = event.target as HTMLInputElement
        this.camera.far = Number.parseFloat(target.value)
        this.camera.updateProjectionMatrix()
      })
    }

    const cameraRotateX = document.getElementById('camera-rotate-x')
    if (cameraRotateX) {
      cameraRotateX.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        this.camera.rotation.x = THREE.MathUtils.degToRad(Number.parseFloat(target.value))
      })
    }

    const cameraRotateY = document.getElementById('camera-rotate-y')
    if (cameraRotateY) {
      cameraRotateY.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        this.camera.rotation.y = THREE.MathUtils.degToRad(Number.parseFloat(target.value))
      })
    }

    const cameraRotateZ = document.getElementById('camera-rotate-z')
    if (cameraRotateZ) {
      cameraRotateZ.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        this.camera.rotation.z = THREE.MathUtils.degToRad(Number.parseFloat(target.value))
      })
    }
  }

  private debug() {
    const cameraInfo = document.getElementById('camera-info')
    if (cameraInfo)
      cameraInfo.textContent = `camera position: X:${this.camera.position.x.toFixed(2)}, Y:${this.camera.position.y.toFixed(2)}, Z:${this.camera.position.z.toFixed(2)}`

    const objectsDOM = document.getElementById('objects')
    if (objectsDOM) {
      objectsDOM.innerHTML = ''
      this.components.forEach((model, i) => {
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
