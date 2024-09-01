import type { FComponent } from './FComponent'

/**
 * @description The base class for all groups of components in Fibbo.
 */
export abstract class FGroup {
  /**
   * @description The components in the group.
   */
  components: FComponent[] = []

  /**
   * @description Initialize the group with a list of components.
   * If no components are provided, the group will be empty.
   * @param options The options for the group.
   * @param options.components The components to add to the group.
   */
  constructor(options: { components: FComponent[] } = { components: [] }) {
    this.components = options.components
  }

  /**
   * @description Add a component to the group.
   */
  addComponent(component: FComponent) {
    this.components.push(component)
  }

  /**
   * @description Remove a component from the group.
   */
  removeComponent(component: FComponent) {
    this.components = this.components.filter(c => c !== component)
  }

  /**
   * @description Update all components in the group.
   * @param delta The time since the last frame.
   */
  onFrame(delta: number) {
    this.components.forEach(c => c.onFrame(delta))
  }
}
