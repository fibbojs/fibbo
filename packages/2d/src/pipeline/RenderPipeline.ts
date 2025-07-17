import { StandardPipeline } from "@fibbojs/core";
import type { FScene } from "../core/FScene";

export interface RenderPipelineOptions {
	scene: FScene;
}

/**
 * Render pipeline.
 */
export class RenderPipeline extends StandardPipeline {
	scene: FScene;

	constructor(options: RenderPipelineOptions) {
		super();
		this.scene = options.scene;
	}

	frame(delta: number) {
		// Call render for each component
		this.scene.components.forEach((component) => component.render(delta));

		// Call frame for the camera
		this.scene.camera.frame(delta);
	}
}
