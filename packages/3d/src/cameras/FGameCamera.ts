import type * as THREE from 'three'
import type { FComponent } from '../FComponent'
import { FOrbitCamera } from './FOrbitCamera'

/**
 * @description A camera that can be attached to a FComponent and orbits around it in a more game-like way.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FGameCamera, FCube } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCube(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FGameCamera(cube)
 * ```
 */
export class FGameCamera extends FOrbitCamera {
  // Previous position of the attached component (at each frame)
  private previousModelPosition: THREE.Vector3
  // Flag to track if the pointer is locked
  isPointerLocked: boolean = false
  // Last mouse move event
  lastMouseMoveEvent: MouseEvent | undefined

  /**
   * @param attachedComponent Component that the camera is attached to
   */
  constructor(attachedComponent: FComponent) {
    super(attachedComponent)
    this.previousModelPosition = attachedComponent.position.clone()
    this.setPosition(0, 5, 5)

    this.controls.enableDamping = true
    this.controls.maxDistance = 5

    /**
     * Add event listeners
     */
    // Request pointer lock when the canvas is clicked
    attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
      this.attachedComponent.scene.renderer.domElement.requestPointerLock()
    })
    // Update the pointer lock flag when the pointer lock state changes
    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.attachedComponent.scene.renderer.domElement
    })
    // Store the last mouse move event
    document.addEventListener('mousemove', (event: MouseEvent) => {
      // Store the last mouse move event
      this.lastMouseMoveEvent = event
    })
  }

  onFrame(delta: number): void {
    super.onFrame(delta)

    if (!this.attachedComponent.mesh)
      return

    // Calculate the difference between the previous and current position of the attached model
    const positionDifference = this.attachedComponent.mesh.position.clone().sub(this.previousModelPosition)
    // Move the camera by the same amount
    this.position.add(positionDifference)
    // Update the previous position
    this.previousModelPosition = this.attachedComponent.mesh.position.clone()

    // Move the camera based on mouse movement if pointer is locked
    if (this.isPointerLocked && this.lastMouseMoveEvent) {
      // Get mouse movement deltas
      const movementX = this.lastMouseMoveEvent.movementX || 0
      const movementY = this.lastMouseMoveEvent.movementY || 0

      // Rotate the camera based on mouse movement
      /**
       * Let's be honest, I don't know why this works.
       * But it does.
       */
      this.translateX(-movementX * 0.01)
      this.translateY(movementY * 0.01)
      this.lastMouseMoveEvent = undefined
    }

    // Update the controls
    this.controls.update()
  }
}
