import { Pipeline, PipelineState } from './Pipeline'

/**
 * Pipeline class.
 * @category Pipeline
 */
export abstract class StandardPipeline extends Pipeline {
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
