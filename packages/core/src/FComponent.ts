import type { FController } from './FController'
import type { FScene } from './FScene'

/**
 * ID_COUNTER is used to generate unique identifiers for components.
 */
let ID_COUNTER = 0

export interface FComponentOptions {
  scene?: FScene
  addToScene?: boolean
}

/**
 * Data being sent to collision callbacks.
 */
export interface OnCollisionWithData {
  /**
   * The component that collided with the component.
   */
  component: FComponent
}

/**
 * The base class for all 2D and 3D components in Fibbo.
 * @category Core
 */
export abstract class FComponent {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = false
  public __IS_2D__: boolean = false

  /**
   * Unique identifier for the component.
   * It is generated automatically.
   */
  public __ID__: number

  /**
   * Callbacks for when a frame is rendered.
   */
  public __CALLBACKS_ON_FRAME__: (() => void)[] = []

  /**
   * Callbacks for when the component is loaded (could be a texture, a 3D model, etc).
   */
  public __CALLBACKS_ON_LOADED__: (() => void)[] = []

  /**
   * Callbacks for when a collision occurs with a given class or object.
   * It is a dictionary where the key is the class name or object id and the value is an array of callbacks.
   */
  public __CALLBACKS_ON_COLLISION__: { [key: string]: ((data: OnCollisionWithData) => void)[] } = {}

  /**
   * The scene the component is attached to.
   */
  public scene: FScene

  /**
   * The controllers attached to the component.
   */
  public controllers: FController[]

  constructor(options?: FComponentOptions) {
    // Define default options
    const DEFAULT_OPTIONS = {
      scene: globalThis.__FIBBO_ACTUAL_SCENE__,
      addToScene: true,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (options.scene === undefined || options.addToScene === undefined)
      throw new Error('FibboError: FComponent requires addToScene and scene option')

    // Store the scene
    this.scene = options.scene

    // Add the component to the scene if addToScene is true
    if (options.addToScene) {
      this.onLoaded(() => {
        this.scene.addComponent(this)
      })
    }

    // Generate a unique ID
    this.__ID__ = ID_COUNTER++

    // Initialize the controllers array
    this.controllers = []
  }

  /**
   * Add a controller to the component.
   * @param controller The controller to add.
   */
  addController(controller: FController): void {
    this.controllers.push(controller)
    // If the controller should run in the physic pipeline, add it to the scene's dedicated array
    if (controller.__RUN_IN_PHYSIC_PIPELINE__) {
      this.scene.__PHYSIC_CONTROLLERS__.push(controller)
    }
  }

  /**
   * Remove a controller from the component.
   * @param controller The controller to remove.
   */
  removeController(controller: FController): void {
    const index = this.controllers.indexOf(controller)
    if (index !== -1) {
      this.controllers.splice(index, 1)
    }
    // If the controller should run in the physic pipeline, remove it from the scene's dedicated array
    if (controller.__RUN_IN_PHYSIC_PIPELINE__) {
      const index = this.scene.__PHYSIC_CONTROLLERS__.indexOf(controller)
      if (index !== -1) {
        this.scene.__PHYSIC_CONTROLLERS__.splice(index, 1)
      }
    }
  }

  /**
   * Update the component. Should be called every frame.
   * The purpose of this method is to render the component, its mesh/sprite, and its properties.
   * @param delta The time since the last frame.
   */
  frame(delta: number): void {
    // For each controller, call the frame method
    this.controllers?.forEach((controller) => {
      // Check if the controller should run in the physic pipeline (to prevent double calls)
      if (!controller.__RUN_IN_PHYSIC_PIPELINE__) {
        controller.frame(delta)
      }
    })
    // Call the onFrame callbacks
    this.__CALLBACKS_ON_FRAME__.forEach((callback) => {
      callback()
    })
  }

  /**
   * Add a callback to be called every frame.
   * @param callback The callback function.
   */
  onFrame(callback: () => void) {
    this.__CALLBACKS_ON_FRAME__.push(callback)
  }

  /**
   * Add a callback to be called when the component is loaded (could be a texture, a 3D model, etc).
   * @param callback The callback function.
   */
  onLoaded(callback: () => void) {
    this.__CALLBACKS_ON_LOADED__.push(callback)
  }

  /**
   * Emit the onLoaded callbacks.
   */
  emitOnLoaded() {
    this.__CALLBACKS_ON_LOADED__.forEach((callback) => {
      callback()
    })
  }

  /**
   * Add a callback to be called when a collision occurs.
   * @param classOrObject The class or object to observe for collisions. Should inherit from FComponent.
   * @param callback The callback to add to the collision event.
   * @returns A function to remove the callback.
   * @example With a class:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.onCollisionWith(Enemy, ({ component }) => {
   *  console.log('Player collided with an Enemy!')
   *  console.log('The enemy is:', component)
   * })
   * ```
   * @example With a specific object:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.onCollisionWith(enemy, () => {
   *  console.log('Player collided with the enemy!')
   * })
   * ```
   * @example To remove the callback:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * const removeThisCallback = player.onCollisionWith(enemy, () => {
   *  console.log('Player collided with the enemy!')
   * })
   * // To remove the callback, call the function returned by onCollisionWith
   * removeThisCallback()
   */
  onCollisionWith(
    classOrObject: any,
    callback: (data: OnCollisionWithData) => void,
  ): () => void {
    let eventKey = ''
    // If the classOrObject is an object, use the class name + ID
    if (classOrObject instanceof FComponent) {
      eventKey = `${classOrObject.constructor.name}@${classOrObject.__ID__}`
    }
    // Else, it should be a class, use the class name
    else {
      eventKey = classOrObject.name
    }
    // Create the array if it doesn't exist
    if (!this.__CALLBACKS_ON_COLLISION__[eventKey]) {
      this.__CALLBACKS_ON_COLLISION__[eventKey] = []
    }
    // Add the callback
    this.__CALLBACKS_ON_COLLISION__[eventKey].push(callback)

    // Return a function to remove the callback
    return () => {
      this.__CALLBACKS_ON_COLLISION__[eventKey] = this.__CALLBACKS_ON_COLLISION__[eventKey].filter(
        cb => cb !== callback,
      )
    }
  }

  /**
   * Emit a collision event with a given class or object.
   * @param options The options for the collision event.
   * @param options.class The class to emit the collision event with.
   * @param options.component The component to emit the collision event with.
   * @example With a class:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.emitCollisionWith({
   *  class: Enemy
   * })
   * ```
   * @example With a specific object:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.emitCollisionWith({
   *  object: enemy
   * })
   * ```
   */
  emitCollisionWith(options: {
    class?: any
    component?: FComponent
  }) {
    // A component was passed, use the class name + ID to fire an instance specific event
    if (options.component) {
      const eventKey = `${options.component.constructor.name}@${options.component.__ID__}`

      // Check if the event key exists and call the callbacks
      if (this.__CALLBACKS_ON_COLLISION__[eventKey]) {
        this.__CALLBACKS_ON_COLLISION__[eventKey].forEach((callback) => {
          callback({
            component: options.component as FComponent,
          })
        })
      }
    }
    // A class was passed, use the class name to fire a class specific event
    if (options.class && options.component) {
      // Get the prototype chain for a given class
      const getPrototypeChain = (obj: any) => {
        const protoChain = []
        let currentProto = obj.prototype
        while (currentProto) {
          protoChain.push(currentProto.constructor.name)
          currentProto = Object.getPrototypeOf(currentProto)
        }
        return protoChain
      }
      // Get the prototype chain for the options.classOrObject
      const thisChain = getPrototypeChain(options.class)

      /**
       * For each class in the prototype chain, check if there are any callbacks.
       * If there are, call them.
       */
      thisChain.forEach((className) => {
        if (this.__CALLBACKS_ON_COLLISION__[className]) {
          this.__CALLBACKS_ON_COLLISION__[className].forEach((callback) => {
            callback({
              component: options.component as FComponent,
            })
          })
        }
      })
    }
  }
}
