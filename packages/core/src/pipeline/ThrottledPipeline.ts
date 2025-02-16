import { Pipeline, PipelineState } from './Pipeline'

/**
 * A throttled pipeline is similar to a StandardPipeline (also based on [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)), but it only calls the frame method if enough time has passed.
 * This means the given frameRate is not guaranteed, but it will try to match it as close as possible.
 * @category Pipeline
 */
export abstract class ThrottledPipeline extends Pipeline {
  /**
   * The last time the frame was called.
   * This is used to determine if enough time has passed to call the frame method again.
   */
  lastTime: number

  constructor() {
    super()
    this.lastTime = (new Date()).getTime()
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
