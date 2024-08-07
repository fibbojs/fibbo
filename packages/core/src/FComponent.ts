/**
 * ID_COUNTER is used to generate unique identifiers for components.
 */
let ID_COUNTER = 0

/**
 * @description The base class for all 2D and 3D components in FibboJS.
 */
export abstract class FComponent {
  /**
   * @description Unique identifier for the component.
   * It is generated automatically.
   */
  public ID: number

  /**
   * @description Callbacks for when a collision occurs with a given class or object.
   * It is a dictionary where the key is the class name or object id and the value is an array of callbacks.
   */
  public CALLBACKS_ONCOLLISION: { [key: string]: (() => void)[] } = {}

  constructor() {
    this.ID = ID_COUNTER++
  }

  /**
   * @description Update the component.
   * Should be called every frame.
   * @param delta The time since the last frame.
   */
  abstract onFrame(delta: number): void

  /**
   * @description Add a callback to be called when a collision occurs.
   * @param classOrObject The class or object to add the callback to.
   * @param callback The callback to add.
   * @example With a class:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.onCollisionWith(Enemy, () => {
   *  console.log('Player collided with an Enemy!')
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
   */
  onCollisionWith(
    classOrObject: any,
    callback: () => void,
  ) {
    let eventKey = ''
    // If the classOrObject is an object, use the class name + ID
    if (classOrObject instanceof FComponent) {
      eventKey = `${classOrObject.constructor.name}@${classOrObject.ID}`
    }
    // Else, it should be a class, use the class name
    else {
      eventKey = classOrObject.name
    }
    // Create the array if it doesn't exist
    if (!this.CALLBACKS_ONCOLLISION[eventKey]) {
      this.CALLBACKS_ONCOLLISION[eventKey] = []
    }
    // Add the callback
    this.CALLBACKS_ONCOLLISION[eventKey].push(callback)
  }

  /**
   * @description Emit a collision event with a given class.
   * @param classOrObject The class or object to emit the collision event with.
   * @example With a class:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.emitCollisionWith(Enemy)
   * ```
   * @example With a specific object:
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.emitCollisionWith(enemy)
   * ```
   */
  emitCollisionWith(classOrObject: any) {
    let eventKey = ''
    // If the classOrObject is an object, use the class name + ID
    if (classOrObject instanceof FComponent) {
      eventKey = `${classOrObject.constructor.name}@${classOrObject.ID}`
    }
    // Else, it should be a class, use the class name
    else {
      eventKey = classOrObject.name
    }
    // Check if the event key exists and call the callbacks
    if (this.CALLBACKS_ONCOLLISION[eventKey]) {
      this.CALLBACKS_ONCOLLISION[eventKey].forEach((callback) => {
        callback()
      })
    }
  }
}
