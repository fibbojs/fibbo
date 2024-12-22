/// <reference lib="WebWorker" />

export enum PipelineCommands {
  START = 'start',
  STOP = 'stop',
}

export enum PipelineState {
  RUNNING = 'running',
  STOPPED = 'stopped',
}

/**
 * Pipeline class that abstract the usage of a web worker.
 * This is used for running background tasks that are generally CPU intensive.
 * @category Pipeline
 */
export abstract class Pipeline {
  sw: DedicatedWorkerGlobalScope
  state: PipelineState
  intervalId: ReturnType<typeof setInterval> | null = null
  frameRate: number = 30 // 30 FPS

  constructor(sw: DedicatedWorkerGlobalScope) {
    this.sw = sw
    this.sw.addEventListener('message', (event) => {
      this.handleMessage(event)
    })
    this.state = PipelineState.STOPPED
  }

  abstract frame(): void

  handleMessage(event: MessageEvent) {
    const command = event.data

    if (command === PipelineCommands.START) {
      if (this.intervalId !== null) {
        return
      }
      // Start the pipeline by setting an interval with the frame rate
      this.intervalId = setInterval(() => {
        this.frame()
      }, 1000 / this.frameRate)
      // Update the pipeline state
      this.state = PipelineState.RUNNING
    }
    else if (command === PipelineCommands.STOP) {
      // Stop the pipeline by clearing the interval
      if (this.intervalId !== null) {
        clearInterval(this.intervalId)
      }
      this.intervalId = null
      // Update the pipeline state
      this.state = PipelineState.STOPPED
    }
  }
}
