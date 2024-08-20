import type { FScene } from '@fibbojs/core'

/**
 * @description A helper class to manage keyboard events.
 * Events will be triggered on each frame.
 * @example
 * ```ts
 * // Static usage
 * FKeyboard.on('ArrowUp', () => {
 *  console.log('ArrowUp key pressed!')
 * })
 * // Instance usage
 * const keyboard = new FKeyboard()
 * keyboard.on('ArrowUp', () => {
 *  console.log('ArrowUp key pressed!')
 * })
 * ```
 */
export class FKeyboard {
  /**
   * @description A map of all the keys being pressed
   */
  keys: Record<string, boolean>
  /**
   * @description An map of all the callbacks for each key being pressed
   */
  callback: Record<string, Array<() => void>>

  constructor(scene: FScene) {
    // Initialize the keys map
    this.keys = {}
    // Initialize the callbacks map
    this.callback = {}

    // Detect keys being pressed
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.keys[event.key] = true
    })
    // Detect keys being released
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keys[event.key] = false
    })

    // On each frame, call the callback for each key being pressed
    scene.onFrame(() => {
      for (const key in this.keys) {
        if (this.keys[key] && this.callback[key]) {
          for (const cb of this.callback[key]) {
            cb()
          }
        }
      }
    })
  }

  /**
   * @description Add a listener to a given key event
   * @param key The key to listen to
   * @param callback The callback to call when the key is pressed
   * @returns The callback function that removes the listener
   * @example Basic usage
   * ```ts
   * const keyboard = new FKeyboard()
   * keyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * ```
   * @example Remove the listener
   * ```ts
   * const keyboard = new FKeyboard()
   * const removeListener = keyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * removeListener()
   * ```
   */
  on(key: string, callback: () => void): () => void {
    // If the key does not exist in the callback map, create it
    if (!this.callback[key]) {
      this.callback[key] = []
    }
    // Add the callback to the key
    this.callback[key].push(callback)
    // Return a function to remove the listener
    return () => {
      this.callback[key] = this.callback[key].filter(cb => cb !== callback)
    }
  }

  /**
   * @description Remove all the listeners
   * @example
   * ```ts
   * const keyboard = new FKeyboard(scene)
   * keyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * keyboard.clear()
   * ```
   */
  clear() {
    this.callback = {}
  }
}
