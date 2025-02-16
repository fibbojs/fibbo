import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { FVector3 } from '@fibbojs/core'
import type { FComponent } from '../core/FComponent'
import type { FScene } from '../core/FScene'
import { FCamera } from './FCamera'
import type { FAttachedCameraOptions } from './FAttachedCamera'

/**
 * A camera that can be attached to a FComponent and orbits around it.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FOrbitCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FOrbitCamera(cube)
 * ```
 */
export class FOrbitCamera extends FCamera {
  // Model that the camera is attached to
  attachedComponent: FComponent
  // Orbit controls
  controls: OrbitControls

  constructor(scene: FScene, options: FAttachedCameraOptions) {
    super(scene, options)
    this.attachedComponent = options.target

    // Create orbit controls
    this.controls = new OrbitControls(this.__CAMERA__, this.attachedComponent.scene.renderer.domElement)
  }

  frame(_delta: number): void {
    if (this.attachedComponent.__MESH__) {
      this.controls.target = new THREE.Vector3(
        this.attachedComponent.__MESH__.position.x,
        this.attachedComponent.__MESH__.position.y,
        this.attachedComponent.__MESH__.position.z,
      )
    }
    this.controls.update()
  }

  setPosition(position: FVector3): void {
    if (!this.attachedComponent.__MESH__)
      return
    this.transform.position = {
      x: this.attachedComponent.__MESH__.position.x + position.x,
      y: this.attachedComponent.__MESH__.position.y + position.y,
      z: this.attachedComponent.__MESH__.position.z + position.z,
    }
    // Set the target of the camera to the attached model
    this.lookAt(this.attachedComponent.transform.position)
  }

  setZoom(zoom: number): void {
    const oldMinDistance = this.controls.minDistance
    const oldMaxDistance = this.controls.maxDistance
    this.controls.minDistance = zoom
    this.controls.maxDistance = zoom
    this.controls.update()
    this.controls.minDistance = oldMinDistance
    this.controls.maxDistance = oldMaxDistance
  }
}
