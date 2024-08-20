import type { FScene2d } from '@fibbojs/2d'
import type { DebugRenderBuffers } from '@dimforge/rapier2d'
import type PIXI from 'pixi.js'

/**
 * @description A helper class to debug a given 2d scene
 * @example
 * ```ts
 * const fDebugger = FDebug2d(scene)
 * ```
 */
export class FDebug2d {
  /**
   * @param scene The scene to be debugged
   */
  constructor(scene: FScene2d) {
    // Initialize the array for the debug lines
    const DEBUG_LINES: PIXI.Graphics[] = []

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

    /**
     * Display debug lines on each frame
     */
    scene.onFrame(() => {
      const buffers: DebugRenderBuffers = scene.world.debugRender()
      const debugVerticies: Float32Array = buffers.vertices
      const debugColors: Float32Array = buffers.colors

      // Remove the previous debug lines
      DEBUG_LINES.forEach((line) => {
        scene.viewport.removeChild(line)
      })

      // For each line (a line is represented by 4 numbers in the vertices array)
      for (let i = 0; i < debugVerticies.length / 4; i += 1) {
        // Create a new debug line
        const newDebugLine = new scene.PIXI.Graphics()

        // Use the vertices to draw the line
        newDebugLine.moveTo(debugVerticies[i * 4] * 100, -debugVerticies[i * 4 + 1] * 100)
        newDebugLine.lineTo(debugVerticies[i * 4 + 2] * 100, -debugVerticies[i * 4 + 3] * 100)

        // Create a color array for the linear gradient
        const newDebugColor = new scene.PIXI.Color({
          r: debugColors[i * 4] * 255,
          g: debugColors[i * 4 + 1] * 255,
          b: debugColors[i * 4 + 2] * 255,
          a: debugColors[i * 4 + 3] * 255,
        })
        // Apply the gradient fill to the graphics object
        newDebugLine.stroke({ width: 4, color: newDebugColor })
        // Add the line to the viewport and the DEBUG_LINES array
        scene.viewport.addChild(newDebugLine)
        DEBUG_LINES.push(newDebugLine)
      }
    })
  }
}
