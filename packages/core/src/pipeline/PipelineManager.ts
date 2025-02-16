import type { FScene } from '../FScene'
import type { IntervalPipeline } from './IntervalPipeline'
import { PipelineState } from './Pipeline'
import type { StandardPipeline } from './StandardPipeline'
import type { ThrottledPipeline } from './ThrottledPipeline'

export interface PipelineManagerOptions {
  scene: FScene
  autoLoop?: boolean
}

/**
 * The pipeline manager is responsible for managing pipelines.
 * @category Core
 */
export class PipelineManager {
  /**
   * The scene associated with the pipeline manager.
   */
  scene: FScene

  // Pipelines
  standardPipelines: StandardPipeline[]
  throttledPipelines: ThrottledPipeline[]
  intervalPipelines: IntervalPipeline[]

  /**
   * Animation frame request ID
   */
  __ANIMATION_FRAME_REQUEST_ID__: number | undefined

  /**
   * Auto loop flag.
   */
  autoLoop: boolean

  constructor(options: PipelineManagerOptions) {
    this.scene = options.scene
    this.autoLoop = options.autoLoop ?? true
    this.standardPipelines = []
    this.throttledPipelines = []
    this.intervalPipelines = []

    let lastTime = (new Date()).getTime()
    /**
     * Auto loop function that calls the pipelines frame methods with the desired behavior.
     * There's no need to handle interval pipelines here, as they are responsible for their own timing using `setInterval`.
     */
    const autoLoop = () => {
      this.__ANIMATION_FRAME_REQUEST_ID__ = requestAnimationFrame(autoLoop)

      // Standard pipelines
      this.standardPipelines.forEach((pipeline) => {
        // If the pipeline should be running
        if (pipeline.state === PipelineState.RUNNING) {
          // Calculate elapsed time
          const currentTime = (new Date()).getTime()
          const delta = (currentTime - lastTime) / 1000
          lastTime = currentTime
          // Call the pipeline
          pipeline.frame(delta)
        }
      })
      // Throttled pipelines
      this.throttledPipelines.forEach((pipeline) => {
        // If the pipeline should be running
        if (pipeline.state === PipelineState.RUNNING) {
          // Calculate elapsed time
          const currentTime = (new Date()).getTime()
          const elapsedTime = currentTime - pipeline.lastTime
          // If enough time has passed to match the expected framerate
          // A small buffer of 5ms is added to avoid calling the frame method too early
          if (elapsedTime > (1000 / pipeline.frameRate) - 5) {
            const delta = (currentTime - pipeline.lastTime) / 1000
            // Keep track of the last time the pipeline was called
            pipeline.lastTime = currentTime
            // Call the pipeline
            pipeline.frame(delta)
          }
        }
      })
    }

    // Launch the autoLoop if needed
    if (this.autoLoop) {
      autoLoop()

      // Listen to tab visibility changes
      document.addEventListener('visibilitychange', () => {
        // Stop the pipeline system when tab is hidden
        if (document.hidden) {
          // Stop all pipelines
          this.stop()
          // Cancel the autoLoop
          if (this.__ANIMATION_FRAME_REQUEST_ID__ !== undefined) {
            cancelAnimationFrame(this.__ANIMATION_FRAME_REQUEST_ID__)
            this.__ANIMATION_FRAME_REQUEST_ID__ = undefined
          }
        }
        // Start pipelines again when tab is visible
        else {
          // Reset the lastTime for each throttled pipeline
          // This is very important to avoid a huge delta time when the tab is hidden
          const currentTime = (new Date()).getTime()
          this.throttledPipelines.forEach((pipeline) => {
            pipeline.lastTime = currentTime
          })
          // Start all pipelines
          this.start()
          // Restart the autoLoop if needed
          if (this.autoLoop)
            autoLoop()
        }
      })
    }
  }

  /**
   * Start all pipelines.
   */
  start() {
    this.standardPipelines.forEach(pipeline => pipeline.start())
    this.throttledPipelines.forEach(pipeline => pipeline.start())
    this.intervalPipelines.forEach(pipeline => pipeline.start())
  }

  /**
   * Stop all pipelines.
   */
  stop() {
    this.standardPipelines.forEach(pipeline => pipeline.stop())
    this.throttledPipelines.forEach(pipeline => pipeline.stop())
    this.intervalPipelines.forEach(pipeline => pipeline.stop())
  }

  /**
   * Add a standard pipeline.
   */
  addStandardPipeline(pipeline: StandardPipeline) {
    this.standardPipelines.push(pipeline)
    if (this.autoLoop)
      pipeline.start()
  }

  /**
   * Remove a standard pipeline.
   */
  removeStandardPipeline(pipeline: StandardPipeline) {
    pipeline.stop()
    const index = this.standardPipelines.indexOf(pipeline)
    if (index !== -1) {
      this.standardPipelines.splice(index, 1)
    }
  }

  /**
   * Add a throttled pipeline.
   */
  addThrottledPipeline(pipeline: ThrottledPipeline) {
    this.throttledPipelines.push(pipeline)
    if (this.autoLoop)
      pipeline.start()
  }

  /**
   * Remove a throttled pipeline.
   */
  removeThrottledPipeline(pipeline: ThrottledPipeline) {
    pipeline.stop()
    const index = this.throttledPipelines.indexOf(pipeline)
    if (index !== -1) {
      this.throttledPipelines.splice(index, 1)
    }
  }

  /**
   * Add an interval pipeline.
   */
  addIntervalPipeline(pipeline: IntervalPipeline) {
    this.intervalPipelines.push(pipeline)
    if (this.autoLoop)
      pipeline.start()
  }

  /**
   * Remove an interval pipeline.
   */
  removeIntervalPipeline(pipeline: IntervalPipeline) {
    pipeline.stop()
    const index = this.intervalPipelines.indexOf(pipeline)
    if (index !== -1) {
      this.intervalPipelines.splice(index, 1)
    }
  }
}
