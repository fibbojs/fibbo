import { defineCustomElement, reactive } from 'vue'
import type { FScene } from '@fibbojs/core'
import type { FScene as FScene2d } from '@fibbojs/2d'
import type { FScene as FScene3d } from '@fibbojs/3d'
import FDebugPanel from './components/FDebugPanel.ce.vue'
import { FDebug2d } from './FDebug2d'
import { FDebug3d } from './FDebug3d'

// Define the custom Web Component from the Vue component
const FDebugPanelElement = defineCustomElement(FDebugPanel)

/**
 * @description A helper class to debug a given scene
 * @example
 * ```ts
 * const fDebugger = FDebug(scene)
 * ```
 */
export class FDebug {
  /**
   * @description The scene being debugged by this instance
   */
  declare scene: FScene

  /**
   * 3d debugger
   */
  declare debugger3d: FDebug3d

  /**
   * 2d debugger
   */
  declare debugger2d: FDebug2d

  /**
   * @param scene The scene to be debugged
   */
  constructor(scene: FScene) {
    // Define the scene
    this.scene = scene

    // Define the custom element in the browser
    customElements.define('f-debug-panel', FDebugPanelElement)
    // Create and inject the custom element into the DOM
    const debugPanel = new FDebugPanelElement({
      title: 'Fibbo',
      scene: this.scene,
    })

    // Make the component array reactive
    this.scene.components = reactive(this.scene.components)

    // 3D specific debug behavior
    if (scene.__IS_3D__) {
      // Create 3d debugger
      this.debugger3d = new FDebug3d(scene as FScene3d)
    }
    // 2D specific debug behavior
    if (scene.__IS_2D__) {
      // Create 2d debugger
      this.debugger2d = new FDebug2d(scene as FScene2d)
    }

    // Add the debug panel to the body
    document.body.appendChild(debugPanel)
  }
}

/**
 * @description A helper function to debug a given scene
 * @param scene The scene to be debugged
 * @example
 * ```ts
 * fDebug(scene)
 * ```
 */
export function fDebug(scene: FScene): FDebug {
  return new FDebug(scene)
}
