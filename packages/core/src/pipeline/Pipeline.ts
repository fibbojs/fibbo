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
 * Pipeline class that helps handling many processes at a time.
 * @category Pipeline
 */
export abstract class Pipeline {
  /**
   * The current state of the pipeline.
   */
  state: PipelineState
  /**
   * The frame rate of the pipeline.
   * This is the number of frames per second that the pipeline will run at.
   * e.g. 30 will run the pipeline at 30 frames per second.
   * The default value is 30.
   */
  frameRate: number

  constructor() {
    // Set the initial state of the pipeline
    this.state = PipelineState.STOPPED
    this.frameRate = 30
  }

  /**
   * The frame method is the main method that is called by the pipeline.
   * It should implement the desired behavior of the pipeline.
   */
  abstract frame(delta: number): void

  /**
   * Start the pipeline
   */
  abstract start(): void

  /**
   * Stop the pipeline
   */
  abstract stop(): void
}
