import type { World as World3d } from '@dimforge/rapier3d'
import type { World as World2d } from '@dimforge/rapier2d'
import type { FComponent } from './FComponent'

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export abstract class FScene {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = false

  /**
   * The components in the scene.
   */
  components: FComponent[]
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  world?: World3d | World2d
  // Callbacks
  /**
   * @description Callbacks for when a frame is rendered.
   * It is an array of functions that take the delta time as an argument.
   */
  public __CALLBACKS_ON_FRAME__: ((delta: number) => void)[] = []
  /**
   * @description Callbacks for when a component is added to the scene.
   * It is an array of functions that take the component as an argument.
   */
  public __CALLBACKS_ON_COMPONENT_ADDED__: ((component: FComponent) => void)[] = []
  /**
   * @description Callbacks for when a component is remove from the scene.
   * It is an array of functions that take the component as an argument.
   */
  public __CALLBACKS_ON_COMPONENT_REMOVED__: ((component: FComponent) => void)[] = []

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
      this.__CALLBACKS_ON_FRAME__.forEach(callback => callback(delta))
    }

    animate()

    // Initialize the components array
    this.components = []
  }

  /**
   * @description Add a component to the scene.
   */
  addComponent(component: FComponent): void {
    this.components.push(component)
    this.__CALLBACKS_ON_COMPONENT_ADDED__.forEach(callback => callback(component))
  }

  /**
   * @description Remove a component from the scene.
   */
  removeComponent(component: FComponent): void {
    const index = this.components.indexOf(component)
    if (index !== -1) {
      this.components.splice(index, 1)
    }
    this.__CALLBACKS_ON_COMPONENT_REMOVED__.forEach(callback => callback(component))
  }

  /**
   * @description Add a callback to be called when a frame is rendered.
   */
  onFrame(callback: (delta: number) => void) {
    this.__CALLBACKS_ON_FRAME__.push(callback)
  }

  /**
   * @description Add a callback to be called when a component is added to the scene.
   */
  onComponentAdded(callback: (component: FComponent) => void) {
    this.__CALLBACKS_ON_COMPONENT_ADDED__.push(callback)
  }
}
