import { PipelineCommands } from './Pipeline'

export class CustomWorker extends Worker {
  constructor(path: string) {
    super(new URL(path, import.meta.url), { type: 'module' })
  }

  start() {
    this.postMessage(PipelineCommands.START)
  }

  stop() {
    this.postMessage(PipelineCommands.STOP)
  }
}
