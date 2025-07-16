import type { FCameraOptions as FCameraOptionsCore } from "@fibbojs/core";
import { FCamera as FCameraCore } from "@fibbojs/core";
import type { FScene } from "../core/FScene";
import type { FTransformOptions } from "../core/FTransform";
import { FTransform } from "../core/FTransform";

export interface FCameraOptions extends FCameraOptionsCore {
	position?: FTransformOptions["position"];
}

/**
 * The base class for 2D cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends FCameraCore {
	/**
	 * Internal flags
	 */
	public __IS_2D__: boolean = true;

	declare scene: FScene;

	/**
	 * Transform of the camera.
	 * It is used to store the position of the camera.
	 * The scale and rotation of the transform are not used.
	 */
	transform: FTransform;

	constructor(options?: FCameraOptions) {
		super(options);

		// Define default options
		const DEFAULT_OPTIONS = {
			position: { x: 0, y: 0 },
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (!options.position)
			throw new Error("FibboError: FCamera requires position");

		// Store options
		this.transform = new FTransform({
			position: options.position,
		});
	}

	abstract __ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__(): void;

	setZoom(zoom: number): void {
		this.scene.viewport.setZoom(zoom);
	}

	/**
	 * Update the position of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_POSITION__(): void {
		this.__SET_POSITION__(this.transform.position);
	}

	/**
	 * Update the rotation of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_ROTATION__(): void {
		console.warn("FCamera does not support rotation.");
	}

	/**
	 * Update the scale of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 * This method does not make sense for cameras, but it is implemented for consistency.
	 */
	__UPDATE_SCALE__(): void {
		console.warn("FCamera does not support scale.");
	}

	__SET_POSITION__(position: { x: number; y: number }): void {
		this.transform.position = position;
		this.scene.viewport.x = position.x;
		this.scene.viewport.y = position.y;
	}
}
