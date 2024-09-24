import type { FScene } from '@fibbojs/2d'
import type { DebugRenderBuffers } from '@dimforge/rapier2d'

/**
 * A helper class to debug a given 2d scene
 * @example
 * ```ts
 * const fDebugger = FDebug2d(scene)
 * ```
 */
export class FDebug2d {
  /**
   * @param scene The scene to be debugged
   */
  constructor(scene: FScene) {
    // Add help grid
    const helpGrid = new scene.PIXI.Graphics()
    // Draw the grid
    for (let i = -1000; i <= 1000; i += 100) {
      helpGrid.moveTo(i, -1000)
      helpGrid.lineTo(i, 1000)
      helpGrid.moveTo(-1000, i)
      helpGrid.lineTo(1000, i)
    }
    // Apply style
    helpGrid.stroke({ width: 4, color: new scene.PIXI.Color({
      r: 70,
      g: 70,
      b: 70,
      a: 1,
    }) })
    // Add the grid to the viewport
    scene.viewport.addChild(helpGrid)

    // Initiliaze debug graphics
    const DEBUG_GRAPHICS = new scene.PIXI.Graphics()
    DEBUG_GRAPHICS.zIndex = 1000000
    scene.viewport.addChild(DEBUG_GRAPHICS)

    /**
     * Display debug lines on each frame
     */
    scene.onFrame(() => {
      DEBUG_GRAPHICS.clear() // Clear the previous frame

      const buffers: DebugRenderBuffers = scene.world.debugRender()
      const debugVerticies: Float32Array = buffers.vertices
      const debugColors: Float32Array = buffers.colors

      for (let i = 0; i < debugVerticies.length / 4; i++) {
        const x1 = debugVerticies[i * 4] * 100
        const y1 = -debugVerticies[i * 4 + 1] * 100
        const x2 = debugVerticies[i * 4 + 2] * 100
        const y2 = -debugVerticies[i * 4 + 3] * 100

        const color = new scene.PIXI.Color({
          r: debugColors[i * 4] * 255,
          g: debugColors[i * 4 + 1] * 255,
          b: debugColors[i * 4 + 2] * 255,
          a: debugColors[i * 4 + 3] * 255,
        })

        DEBUG_GRAPHICS.stroke({ width: 4, color })
        DEBUG_GRAPHICS.moveTo(x1, y1)
        DEBUG_GRAPHICS.lineTo(x2, y2)
      }
    })
  }
}
