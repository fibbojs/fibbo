/// <reference lib="WebWorker" />

import { Pipeline, PipelineCommands, PipelineState } from './Pipeline'

/**
 * Hided worker behind the BackgroundPipeline class.
 * @category Pipeline
 */
export abstract class BackgroundWorker extends Pipeline {
  /**
   * The web worker instance.
   */
  sw: DedicatedWorkerGlobalScope
  /**
   * The interval id that is used to run the pipeline.
   * Corresponds to the id returned by setInterval.
   */
  intervalId: ReturnType<typeof setInterval> | null = null

  constructor(sw: DedicatedWorkerGlobalScope) {
    super()
    // Save the web worker instance
    this.sw = sw
    this.sw.addEventListener('message', (event) => {
      this.handleMessage(event)
    })
  }

  /**
   * Handle a message sent to the pipeline.
   * @param event The message event.
   */
  handleMessage(event: MessageEvent) {
    const command = event.data

    if (command === PipelineCommands.START) {
      this.start()
    }
    else if (command === PipelineCommands.STOP) {
      this.stop()
    }
  }

  start(): void {
    if (this.intervalId !== null) {
      return
    }
    // Start the pipeline by setting an interval with the frame rate
    this.intervalId = setInterval(() => {
      this.frame(1000 / this.frameRate / 1000)
    }, 1000 / this.frameRate)
    // Update the pipeline state
    this.state = PipelineState.RUNNING
  }

  stop(): void {
    // Stop the pipeline by clearing the interval
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
    this.intervalId = null
    // Update the pipeline state
    this.state = PipelineState.STOPPED
  }
}
