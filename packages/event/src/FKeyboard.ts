/**
 * @description A helper class to manage keyboard events.
 * Can be instantiated or used statically.
 * Instantiate this class will let you manage the keyboard events for a specific instance.
 * Using this class statically will let you manage the keyboard events globally.
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
   * @description An array of all the listeners among all the instances of FKeyboard
   */
  static STATIC_LISTENERS: Array<(event: KeyboardEvent) => void> = []
  /**
   * @description An array of all the keys among the current instance of FKeyboard
   */
  listeners: Array<(event: KeyboardEvent) => void> = []

  constructor() {
    // Initialize the listeners array
    this.listeners = []
  }

  /**
   * @description Add a listener to a given key event
   * @param key The key to listen to
   * @param callback The callback to call when the key is pressed
   * @returns The callback function that removes the listener
   * @example Basic usage
   * ```ts
   * FKeyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * ```
   * @example Removing a listener
   * ```ts
   * // Get the remove listener function from the on method
   * const removeListener = FKeyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * // Remove the listener
   * removeListener()
   * ```
   */
  static on(key: string, callback: () => void): () => void {
    // Create a listener for the keydown event
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback()
      }
    }
    // Attach the listener to the document
    document.addEventListener('keydown', listener)

    // Attach the listener to the static listeners array
    this.STATIC_LISTENERS.push(listener)

    // Return a function to remove the listener if needed
    return () => {
      document.removeEventListener('keydown', listener)
    }
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
   * @example Removing a listener
   * ```ts
   * const keyboard = new FKeyboard()
   * // Get the remove listener function from the on method
   * const removeListener = keyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * // Remove the listener
   * removeListener()
   * ```
   */
  on(key: string, callback: () => void): () => void {
    // Create a listener for the keydown event
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback()
      }
    }
    // Attach the listener to the document
    document.addEventListener('keydown', listener)

    // Attach the listener to the static listeners array
    this.listeners.push(listener)

    // Return a function to remove the listener if needed
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }

  /**
   * @description Remove all the listeners
   * @example
   * ```ts
   * Keyboard.clear()
   * ```
   */
  static clear() {
    // Remove all the static listeners
    for (const listener of this.STATIC_LISTENERS) {
      document.removeEventListener('keydown', listener)
    }
    // Clear the static listeners array
    this.STATIC_LISTENERS = []
  }

  /**
   * @description Remove all the listeners
   * @example
   * ```ts
   * const keyboard = new FKeyboard()
   * keyboard.on('ArrowUp', () => {
   *  console.log('ArrowUp key pressed!')
   * })
   * keyboard.clear()
   * ```
   */
  clear() {
    // Remove all the listeners
    for (const listener of this.listeners) {
      document.removeEventListener('keydown', listener)
    }
    // Clear the listeners array
    this.listeners = []
  }
}
