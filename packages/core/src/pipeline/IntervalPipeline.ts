import { Pipeline, PipelineState } from "./Pipeline";

/**
 * Unlike the Standard and Throttled pipelines, the Interval pipeline runs at a fixed frame rate.
 * It relies on [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) to call the frame method at a fixed interval.
 * @category Pipeline
 */
export abstract class IntervalPipeline extends Pipeline {
	/**
	 * The interval ID returned by [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval).
	 */
	intervalId: NodeJS.Timeout | undefined;

	start(): void {
		// Update the pipeline state
		this.state = PipelineState.RUNNING;
		// Start the interval
		this.intervalId = setInterval(() => {
			this.frame(1000 / this.frameRate);
		}, 1000 / this.frameRate);
	}

	stop(): void {
		// Update the pipeline state
		this.state = PipelineState.STOPPED;
		// Stop the interval
		if (this.intervalId !== undefined) {
			clearInterval(this.intervalId);
		}
	}
}
