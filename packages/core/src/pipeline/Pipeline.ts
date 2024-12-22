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
  /**
   * The web worker instance.
   */
  sw: DedicatedWorkerGlobalScope
  /**
   * The current state of the pipeline.
   */
  state: PipelineState
  /**
   * The interval id that is used to run the pipeline.
   * Corresponds to the id returned by setInterval.
   */
  intervalId: ReturnType<typeof setInterval> | null = null
  /**
   * The frame rate of the pipeline.
   * This is the number of frames per second that the pipeline will run at.
   * e.g. 30 will run the pipeline at 30 frames per second.
   * The default value is 30.
   */
  frameRate: number

  constructor(sw: DedicatedWorkerGlobalScope) {
    // Save the web worker instance
    this.sw = sw
    this.sw.addEventListener('message', (event) => {
      this.handleMessage(event)
    })
    // Set the initial state of the pipeline
    this.state = PipelineState.STOPPED
    this.frameRate = 30
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
