import { Pipeline, PipelineState } from './Pipeline'

/**
 * A standard pipeline is a pipeline that runs at max FPS, using [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame).
 * This means that the frame method will be called as fast as possible.
 * Do not compute heavy tasks using this pipeline, as it will run at max FPS depending on the user's screen refresh rate.
 * @category Pipeline
 */
export abstract class StandardPipeline extends Pipeline {
  constructor() {
    super()
  }

  start(): void {
    // Update the pipeline state
    this.state = PipelineState.RUNNING
  }

  stop(): void {
    // Update the pipeline state
    this.state = PipelineState.STOPPED
  }
}
