export class State {
  // Properties
  private static __HITBOXES__: boolean = false
  private static __HELPERS__: boolean = true
  private static __GLASSMORPHISM__: boolean = true

  // Callbacks
  private static __CALLBACKS_ON_HITBOXES_CHANGE__: ((newState: boolean) => void)[] = []
  private static __CALLBACKS_ON_HELPERS_CHANGE__: ((newState: boolean) => void)[] = []
  private static __CALLBACKS_ON_GLASSMORPHISM_CHANGE__: ((newState: boolean) => void)[] = []

  // Methods
  static onHitboxesChange(callback: (newState: boolean) => void) {
    this.__CALLBACKS_ON_HITBOXES_CHANGE__.push(callback)
  }

  static onHelpersChange(callback: (newState: boolean) => void) {
    this.__CALLBACKS_ON_HELPERS_CHANGE__.push(callback)
  }

  static onGlassmorphismChange(callback: (newState: boolean) => void) {
    this.__CALLBACKS_ON_GLASSMORPHISM_CHANGE__.push(callback)
  }

  // Getters & setters
  static get hitboxes() {
    return this.__HITBOXES__
  }

  static set hitboxes(newState: boolean) {
    this.__HITBOXES__ = newState
    this.__CALLBACKS_ON_HITBOXES_CHANGE__.forEach(callback => callback(newState))
  }

  static get helpers() {
    return this.__HELPERS__
  }

  static set helpers(newState: boolean) {
    this.__HELPERS__ = newState
    this.__CALLBACKS_ON_HELPERS_CHANGE__.forEach(callback => callback(newState))
  }

  static get glassmorphism() {
    return this.__GLASSMORPHISM__
  }

  static set glassmorphism(newState: boolean) {
    this.__GLASSMORPHISM__ = newState
    this.__CALLBACKS_ON_GLASSMORPHISM_CHANGE__.forEach(callback => callback(newState))
  }
}
