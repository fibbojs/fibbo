import type { FScene } from '../FScene'
import { StandardPipeline } from './StandardPipeline'

export interface MainPipelineOptions {
  scene: FScene
}

/**
 * Main game loop.
 */
export class MainPipeline extends StandardPipeline {
  scene: FScene

  constructor(options: MainPipelineOptions) {
    super()
    this.scene = options.scene
    this.frameRate = 60
  }

  frame(delta: number) {
    this.scene.frame(delta)
  }
}
