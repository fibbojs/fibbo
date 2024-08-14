import { defineCustomElement, reactive } from 'vue'
import type { FScene } from '@fibbojs/core'
import FDebugPanel from './components/FDebugPanel.ce.vue'

// Define the custom Web Component from the Vue component
const FDebugPanelElement = defineCustomElement(FDebugPanel)

/**
 * @description A helper class to debug a given scene
 * @example
 * ```ts
 * const scene = FDebug(FScene2d)
 * ```
 */
export class FDebug {
  /**
   * @description The scene being debugged by this instance
   */
  declare scene: FScene

  /**
   * @param scene The scene to be debugged
   */
  constructor(scene: FScene) {
    // Define the scene
    this.scene = scene
    // Make scene.components reactive
    this.scene.components = reactive(scene.components) as any
    // Define the custom element in the browser
    customElements.define('f-debug-panel', FDebugPanelElement)
    // Create and inject the custom element into the DOM
    const debugPanel = new FDebugPanelElement({
      title: 'Fibbo',
      scene: this.scene,
    })
    document.body.appendChild(debugPanel)
  }
}
