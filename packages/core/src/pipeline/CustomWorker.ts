import { PipelineCommands } from './Pipeline'

/**
 * A custom worker that extends the Worker class.
 * It provides better type checking, and more control over the worker.
 * @category Pipeline
 */
export class CustomWorker extends Worker {
  constructor(path: string) {
    super(new URL(path, import.meta.url), { type: 'module' })
  }

  /**
   * Start the corresponding pipeline.
   */
  start() {
    this.postMessage(PipelineCommands.START)
  }

  /**
   * Stop the corresponding pipeline.
   */
  stop() {
    this.postMessage(PipelineCommands.STOP)
  }
}
