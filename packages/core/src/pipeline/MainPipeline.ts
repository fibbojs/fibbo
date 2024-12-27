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
    // Call frame on the scene
    this.scene.frame(delta)

    // Call frame for each component
    this.scene.components.forEach(component => component.frame(delta))
  }
}
