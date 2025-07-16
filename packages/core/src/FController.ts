import type { FComponent } from "./FComponent";

export interface FControllerOptions {
	component: FComponent;
	runInPhysicPipeline?: boolean;
}

/**
 * The base class for all controllers in Fibbo.
 * @category Core
 */
export abstract class FController {
	/**
	 * The component attached to the controller.
	 */
	public component: FComponent;
	/**
	 * True if the controller should run in the physic pipeline.
	 */
	public __RUN_IN_PHYSIC_PIPELINE__: boolean;

	/**
	 * @param options The options for the controller.
	 * @param options.component The component that the controller is controlling.
	 * @param options.runInPhysicPipeline If true, the controller will run in the physic pipeline.
	 */
	constructor(options: FControllerOptions) {
		this.component = options.component;
		this.__RUN_IN_PHYSIC_PIPELINE__ = options.runInPhysicPipeline || false;
	}

	/**
	 * Update the controller. Should be called every frame.
	 * The purpose of this method is to update the component transform based on the controller logic.
	 * @param delta The time since the last frame.
	 */
	abstract frame(delta: number): void;
}
