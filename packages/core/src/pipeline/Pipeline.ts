export enum PipelineState {
  RUNNING = 'running',
  STOPPED = 'stopped',
}

export interface PipelineOptions {
  frameRate?: number
}

/**
 * The Pipeline class is an abstract class that can be used to create pipelines.
 * A pipeline is a sequence of stages that are executed in order.
 * Each stage is called a frame and is executed at a specific frame rate.
 * Keep in mind that if the frame method takes longer to execute than the frame rate,
 * the pipeline will not be able to keep up with the desired frame rate.
 * @category Pipeline
 */
export abstract class Pipeline {
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

  constructor(options: PipelineOptions = {}) {
    // Define default values for the options
    const DEFAULT_OPTIONS = {
      frameRate: 30,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate the options
    if (options.frameRate === undefined)
      throw new Error('FibboError: The frame rate must be defined')

    // Store the options
    this.frameRate = options.frameRate

    // Set the initial state of the pipeline
    this.state = PipelineState.STOPPED
  }

  /**
   * The frame method is the main method that is called by the pipeline.
   * It should implement the desired behavior of the pipeline.
   */
  abstract frame(): void

  /**
   * Start the pipeline.
   */
  start(): void {
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

  /**
   * Stop the pipeline.
   */
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
