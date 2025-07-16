import type { FLightOptions as FLightOptionsCore } from "@fibbojs/core";
import { FLight as FLightCore } from "@fibbojs/core";
import type { FScene } from "../core/FScene";
import type { FTransformOptions } from "../core/FTransform";
import { FTransform } from "../core/FTransform";

export interface FLightOptions extends FLightOptionsCore {
	position?: FTransformOptions["position"];
	rotation?: FTransformOptions["rotation"];
	rotationDegree?: FTransformOptions["rotationDegree"];
	scale?: FTransformOptions["scale"];
	color?: number;
	intensity?: number;
	lookAt?: { x: number; y: number };
}

/**
 * The base class for 2d lights in Fibbo.
 * @category Light
 */
export abstract class FLight extends FLightCore {
	/**
	 * Internal flags
	 */
	public __IS_3D__: boolean = false;
	public __IS_2D__: boolean = true;
	public declare __ID__: number;
	public __CALLBACKS_ON_COLLISION__: { [key: string]: (() => void)[] } = {};

	/**
	 * The original light object from PIXI.js.
	 */
	// biome-ignore lint/suspicious/noExplicitAny: There's no common type for lights
	declare __LIGHT__: any;

	declare scene: FScene;

	/**
	 * Transform of the light.
	 */
	transform: FTransform;

	/**
	 * Look at target of the light.
	 */
	__LOOK_AT__: { x: number; y: number };

	constructor(options?: FLightOptions) {
		super(options);

		// Define default options
		const DEFAULT_OPTIONS = {
			position: { x: 5, y: 5 },
			scale: { x: 1, y: 1 },
			rotation: 0,
			lookAt: { x: 0, y: 0 },
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (!options.position || !options.lookAt)
			throw new Error(
				"FibboError: FLight requires position and lookAt options.",
			);

		// Configure transform
		this.transform = new FTransform({
			position: options.position,
			rotation: options.rotation,
			rotationDegree: options.rotationDegree,
		});
		this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__());
		this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__());
		this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__());

		this.__LOOK_AT__ = options.lookAt;
	}

	/**
	 * Update the position of the light according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_POSITION__(): void {
		this.__LIGHT__.position.set(
			this.transform.position.x,
			this.transform.position.y,
		);
	}

	/**
	 * Update the rotation of the light according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_ROTATION__(): void {
		this.__LIGHT__.rotation.set(this.transform.rotation);
	}

	/**
	 * Update the scale of the light according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_SCALE__(): void {
		this.__LIGHT__.scale.set(this.transform.scale.x, this.transform.scale.y);
	}

	// Setters & Getters

	set color(color: number) {
		this.__LIGHT__.color = color;
	}

	get color(): number {
		return this.__LIGHT__.color;
	}

	set intensity(intensity: number) {
		this.__LIGHT__.brightness = intensity;
	}

	get intensity(): number {
		return this.__LIGHT__.brightness;
	}

	get lookAt(): { x: number; y: number } {
		return this.__LOOK_AT__;
	}

	set lookAt(lookAt: { x: number; y: number }) {
		this.__LOOK_AT__ = lookAt;
		/*
    if (this.light instanceof PIXI.DirectionalLight) {
      this.light.target = new PIXI.Point(lookAt.x, lookAt.y)
    }
    */
	}
}
