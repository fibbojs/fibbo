import type { FScene3d } from '@fibbojs/3d'

/**
 * @description A helper class to debug a given 3d scene
 * @example
 * ```ts
 * const fDebugger = FDebug3d(scene)
 * ```
 */
export class FDebug3d {
  /**
   * @param scene The scene to be debugged
   */
  constructor(scene: FScene3d) {
    scene.onFrame(() => {
      // Remove previous debug lines
      const previousLines = scene.scene.getObjectByName('DEBUG_LINES')
      if (previousLines)
        scene.scene.remove(previousLines)

      // Render new debug lines
      const { vertices, colors } = scene.world.debugRender()
      const geometry = new scene.THREE.BufferGeometry()
      geometry.setAttribute('position', new scene.THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('color', new scene.THREE.Float32BufferAttribute(colors, 3))
      const material = new scene.THREE.LineBasicMaterial({ vertexColors: true })
      const lines = new scene.THREE.LineSegments(geometry, material)
      lines.name = 'DEBUG_LINES'
      scene.scene.add(lines)
    })
  }
}
