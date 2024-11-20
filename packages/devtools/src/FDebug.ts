import { createApp, reactive } from 'vue'
import type { FScene } from '@fibbojs/core'
import type { FScene as FScene2d } from '@fibbojs/2d'
import type { FScene as FScene3d } from '@fibbojs/3d'
import FDebugComponent from './components/FDebug.vue'
import { FDebug2d } from './FDebug2d'
import { FDebug3d } from './FDebug3d'
import { State } from './State'
import { FLogger } from './FLogger'

/**
 * A helper class to debug a given scene
 * @example
 * ```ts
 * const fDebugger = FDebug(scene)
 * ```
 */
export class FDebug {
  /**
   * The scene being debugged by this instance
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

    // Load devtools state from local storage
    State.load()

    /**
     * Override console methods
     */
    // Override console.log
    const originalConsoleLog = console.log
    console.log = (...args: any[]) => {
      originalConsoleLog(...args)
      FLogger.log(...args)
    }
    // Override console.warn
    const originalConsoleWarn = console.warn
    console.warn = (...args: any[]) => {
      originalConsoleWarn(...args)
      FLogger.warn(...args)
    }
    // Override console.error
    const originalConsoleError = console.error
    console.error = (...args: any[]) => {
      originalConsoleError(...args)
      FLogger.error(...args)
    }

    // Fetch the CSS
    fetch(import.meta.url.replace('index.es.js', 'style.css'))
      .then(res => res.text())
      .then((css) => {
        // Extract the CSS content
        css = css
          .split('const __vite__css = "')[1]
          .split('\\n"')[0]
        const style = document.createElement('style')
        style.innerHTML = css
        document.head.appendChild(style)
      })

    // Make the component array reactive
    this.scene.components = reactive(this.scene.components) as any

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

    // Create a HTML element for the debug panel
    const debugPanel = document.createElement('div')
    debugPanel.id = 'f-debug'
    // Append the debug panel to the body
    document.body.appendChild(debugPanel)
    // Mount the Vue instance
    createApp(FDebugComponent, {
      title: 'Fibbo',
      version: __FIBBO_VERSION__,
      scene: this.scene,
    }).mount('#f-debug')
  }
}

/**
 * A helper function to debug a given scene
 * @param scene The scene to be debugged
 * @example
 * ```ts
 * fDebug(scene)
 * ```
 */
export function fDebug(scene: FScene): FDebug {
  return new FDebug(scene)
}
