import type { World as World3d } from '@dimforge/rapier3d'
import type { World as World2d } from '@dimforge/rapier2d'
import type { FCamera } from './FCamera'
import type { FComponent } from './FComponent'

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export abstract class FScene {
  components?: FComponent[]
  camera?: FCamera
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  world?: World3d | World2d
  // Animation
  public onFrameCallbacks: ((delta: number) => void)[] = []

  constructor() {
    /**
     * Time management
     */
    let lastTime = (new Date()).getTime()
    let currentTime = 0
    let delta = 0

    /**
     * Animation loop
     */
    const animate = () => {
      requestAnimationFrame(animate)

      // Calculate delta time
      currentTime = (new Date()).getTime()
      delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      // Call onFrame callbacks
      this.onFrameCallbacks.forEach(callback => callback(delta))
    }

    animate()
  }

  /**
   * @description Add a component to the scene.
   */
  abstract addComponent(component: FComponent): void

  /**
   * @description Add a callback to the onFrame event.
   */
  onFrame(callback: (delta: number) => void) {
    this.onFrameCallbacks.push(callback)
  }
}
