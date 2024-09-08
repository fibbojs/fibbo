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
  /**
   * @description An map of all the callbacks for each key being released
   */
  callbackKeyDown: Record<string, Array<() => void>>
  /**
   * @description An map of all the callbacks for each key being released
   */
  callbackKeyUp: Record<string, Array<() => void>>

  constructor(scene: FScene) {
    // Initialize the keys map
    this.keys = {}
    // Initialize the callbacks map
    this.callback = {}
    this.callbackKeyDown = {}
    this.callbackKeyUp = {}

    // Detect keys being pressed
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (!this.keys[event.key]) {
        this.keys[event.key] = true
        if (this.callbackKeyDown[event.key]) {
          for (const cb of this.callbackKeyDown[event.key]) {
            cb()
          }
        }
      }
    })
    // Detect keys being released
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keys[event.key] = false
      if (this.callbackKeyUp[event.key]) {
        for (const cb of this.callbackKeyUp[event.key]) {
          cb()
        }
      }
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
   * @description Add a listener to a given key event.
   * This is a small wrapper around the native `addEventListener` method, which helps listen to key events continuously.
   * Basically, this prevents keyboard "debounce" delay by firing the given callback on each frame if the key is pressed.
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
   * @description Add a listener to a given key event when the key is pressed
   * @param key The key to listen to
   * @param callback The callback to call when the key is pressed
   * @returns The callback function that removes the listener
   * @example Basic usage
   * ```ts
   * const keyboard = new FKeyboard()
   * keyboard.onKeyDown('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * ```
   * @example Remove the listener
   * ```ts
   * const keyboard = new FKeyboard()
   * const removeListener = keyboard.onKeyDown('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * removeListener()
   * ```
   */
  onKeyDown(key: string, callback: () => void): () => void {
    // If the key does not exist in the callback map, create it
    if (!this.callbackKeyDown[key]) {
      this.callbackKeyDown[key] = []
    }
    // Add the callback to the key
    this.callbackKeyDown[key].push(callback)
    // Return a function to remove the listener
    return () => {
      this.callbackKeyDown[key] = this.callbackKeyDown[key].filter(cb => cb !== callback)
    }
  }

  /**
   * @description Add a listener to a given key event when the key is released
   * @param key The key to listen to
   * @param callback The callback to call when the key is released
   * @returns The callback function that removes the listener
   * @example Basic usage
   * ```ts
   * const keyboard = new FKeyboard()
   * keyboard.onKeyUp('ArrowUp', () => {
   *  console.log('ArrowUp key released!')
   * })
   * ```
   * @example Remove the listener
   * ```ts
   * const keyboard = new FKeyboard()
   * const removeListener = keyboard.onKeyUp('ArrowUp', () => {
   *  console.log('ArrowUp key released!')
   * })
   * removeListener()
   * ```
   */
  onKeyUp(key: string, callback: () => void): () => void {
    // If the key does not exist in the callback map, create it
    if (!this.callbackKeyUp[key]) {
      this.callbackKeyUp[key] = []
    }
    // Add the callback to the key
    this.callbackKeyUp[key].push(callback)
    // Return a function to remove the listener
    return () => {
      this.callbackKeyUp[key] = this.callbackKeyUp[key].filter(cb => cb !== callback)
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
    this.callbackKeyDown = {}
    this.callbackKeyUp = {}
  }
}
