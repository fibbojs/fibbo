import type { FScene } from '../FScene'
import { ThrottledPipeline } from './ThrottledPipeline'

export interface MainPipelineOptions {
  scene: FScene
  frameRate?: number
}

/**
 * Main game loop pipeline.
 * It is a throttled pipeline, attempting to match 60 FPS as close as possible.
 */
export class MainPipeline extends ThrottledPipeline {
  scene: FScene

  constructor(options: MainPipelineOptions) {
    super()
    this.scene = options.scene
    this.frameRate = options.frameRate || 60
  }

  frame(delta: number) {
    // Call frame on the scene
    this.scene.frame(delta)

    // Call frame for each component
    this.scene.components.forEach(component => component.frame(delta))
  }
}
