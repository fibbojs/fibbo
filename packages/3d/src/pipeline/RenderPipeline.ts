import { StandardPipeline } from '@fibbojs/core'
import type { FScene } from '../core/FScene'

export interface RenderPipelineOptions {
  scene: FScene
}

/**
 * Render pipeline.
 */
export class RenderPipeline extends StandardPipeline {
  scene: FScene

  constructor(options: RenderPipelineOptions) {
    super()
    this.scene = options.scene
    this.frameRate = 60
  }

  frame(delta: number) {
    // Call frame for the camera
    this.scene.camera.frame(delta)

    // Render the scene
    this.scene.renderer.render(this.scene.scene, this.scene.camera.__CAMERA__)
  }
}
