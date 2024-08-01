/**
 * @description The base class for all 2D and 3D components in FibboJS.
 */
export abstract class FComponent {
  /**
   * Callbacks for when a collision occurs with a given class.
   * It is a dictionary where the key is the class name and the value is the callback.
   */
  public CALLBACKS_ONCOLLISION: { [key: string]: (() => void)[] } = {}

  constructor() {
  }

  /**
   * @description Update the component.
   * Should be called every frame.
   * @param delta The time since the last frame.
   */
  abstract onFrame(delta: number): void

  /**
   * @description Add a callback to be called when a collision occurs.
   * @param class_ The class to add the callback to.
   * @param callback The callback to add.
   * @example
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.onCollisionWith(Enemy, () => {
   *  console.log('Player collided with enemy!')
   * })
   */
  onCollisionWith(
    class_: any,
    callback: () => void,
  ) {
    if (!this.CALLBACKS_ONCOLLISION[class_.name]) {
      this.CALLBACKS_ONCOLLISION[class_.name] = []
    }
    this.CALLBACKS_ONCOLLISION[class_.name].push(callback)
  }

  /**
   * @description Emit a collision event with a given class.
   * @param class_ The class to emit the
   * @example
   * ```typescript
   * const player = new Player()
   * const enemy = new Enemy()
   * player.onCollisionWith(Enemy, () => {
   * console.log('Player collided with enemy!')
   * })
   * player.emitCollisionWith(Enemy)
   * ```
   */
  emitCollisionWith(class_: any) {
    if (this.CALLBACKS_ONCOLLISION[class_.name]) {
      this.CALLBACKS_ONCOLLISION[class_.name].forEach((callback) => {
        callback()
      })
    }
  }
}
