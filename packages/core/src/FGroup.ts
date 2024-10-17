import type { FComponent } from './FComponent'

/**
 * The base class for all groups of components in Fibbo.
 * @category Core
 */
export abstract class FGroup {
  /**
   * The components in the group.
   */
  components: FComponent[] = []

  /**
   * Initialize the group with a list of components.
   * If no components are provided, the group will be empty.
   * @param options The options for the group.
   * @param options.components The components to add to the group.
   */
  constructor(options: { components: FComponent[] } = { components: [] }) {
    this.components = options.components
  }

  /**
   * Add a component to the group.
   */
  addComponent(component: FComponent) {
    this.components.push(component)
  }

  /**
   * Remove a component from the group.
   */
  removeComponent(component: FComponent) {
    this.components = this.components.filter(c => c !== component)
  }

  /**
   * Update all components in the group.
   * @param delta The time since the last frame.
   */
  frame(delta: number) {
    this.components.forEach(c => c.frame(delta))
  }
}
