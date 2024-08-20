import { defineCustomElement, reactive } from 'vue'
import type { FScene } from '@fibbojs/core'
import type { FScene3d } from '@fibbojs/3d'
import type { FScene2d } from '@fibbojs/2d'
import FDebugPanel from './components/FDebugPanel.ce.vue'
import { is2dScene } from './utils/is2dScene'
import { is3dScene } from './utils/is3dScene'
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

    // Make scene.components reactive
    this.scene.components = reactive(scene.components) as any

    // Define the custom element in the browser
    customElements.define('f-debug-panel', FDebugPanelElement)
    // Create and inject the custom element into the DOM
    const debugPanel = new FDebugPanelElement({
      title: 'Fibbo',
      scene: this.scene,
    })

    // 3D specific debug behavior
    if (is3dScene(scene)) {
      // Create 3d debugger
      this.debugger3d = new FDebug3d(scene as FScene3d)
    }
    // 2D specific debug behavior
    if (is2dScene(scene)) {
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
