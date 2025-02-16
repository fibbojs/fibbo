import { Pipeline, PipelineCommands } from './Pipeline'

/**
 * A pipeline that abstract the usage of a web worker.
 * It provides better type checking, and more control over the worker.
 * @category Pipeline
 * @deprecated Marked as deprecated while we are not sure if we will keep it.
 */
export abstract class BackgroundPipeline extends Pipeline {
  worker: Worker

  constructor(path: string) {
    super()
    /*
    console.log(import.meta.url)
    console.log(new URL(path, import.meta.url).href)
    */
    this.worker = new Worker(new URL(path, import.meta.url), { type: 'module' })
  }

  /**
   * Start the corresponding pipeline.
   */
  start(): void {
    this.worker.postMessage(PipelineCommands.START)
  }

  /**
   * Stop the corresponding pipeline.
   */
  stop(): void {
    this.worker.postMessage(PipelineCommands.STOP)
  }
}
