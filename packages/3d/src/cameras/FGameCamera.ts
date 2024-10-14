import type { FScene } from '../core/FScene'
import { FOrbitCamera } from './FOrbitCamera'
import type { FAttachedCameraOptions } from './FAttachedCamera'

/**
 * A camera that can be attached to a FComponent and orbits around it in a more game-like way.
 * @category Camera
 * @example
 * ```ts
 * import { FScene, FGameCamera, FCuboid } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const cube = new FCuboid(scene)
 * scene.addComponent(cube)
 *
 * scene.camera = new FGameCamera(cube)
 * ```
 */
export class FGameCamera extends FOrbitCamera {
  // Previous position of the attached component (at each frame)
  private previousModelPosition: { x: number, y: number, z: number }
  // Flag to track if the pointer is locked
  isPointerLocked: boolean = false
  // Last mouse move event
  lastMouseMoveEvent: MouseEvent | undefined

  constructor(scene: FScene, options: FAttachedCameraOptions) {
    super(scene, options)
    // Clone the model's position
    this.previousModelPosition = options.target.transform.position
    this.setPosition({ x: 0, y: 20, z: 20 })

    this.controls.enableDamping = true
    this.controls.maxDistance = 5

    /**
     * Add event listeners
     */
    // Request pointer lock when the canvas is clicked
    this.attachedComponent.scene.renderer.domElement.addEventListener('click', () => {
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

  frame(delta: number): void {
    super.frame(delta)

    if (!this.attachedComponent.__MESH__)
      return

    // Calculate the difference between the previous and current position of the attached model
    const positionDifference = this.attachedComponent.__MESH__.position.clone().sub(this.previousModelPosition)
    // Move the camera by the same amount
    this.position.x += positionDifference.x
    this.position.y += positionDifference.y
    this.position.z += positionDifference.z
    // Update the previous position
    this.previousModelPosition = this.attachedComponent.__MESH__.position.clone()

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
      this.__CAMERA__.translateX(-movementX * 0.01)
      this.__CAMERA__.translateY(movementY * 0.01)
      this.lastMouseMoveEvent = undefined
    }

    // Update the controls
    this.controls.update()
  }
}
