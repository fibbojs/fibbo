/**
 * @description A helper class to manage keyboard events.
 */
export class FKeyboard {
  constructor() {}

  /**
   * @description Add a listener a given key event
   * @param key The key to listen to
   * @param callback The callback to call when the key is pressed
   * @returns The callback function
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
  static on(key: string, callback: () => void): () => void {
    // Create a listener for the keydown event
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback()
      }
    }
    // Attach the listener to the document
    document.addEventListener('keydown', listener)

    // Return a function to remove the listener if needed
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }
}
