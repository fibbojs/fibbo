import * as THREE from "three";
import type { FLightOptions } from "./FLight";
import { FLight } from "./FLight";

/**
 * An ambient light in 3d space.
 * @category Light
 */
export class FAmbientLight extends FLight {
	constructor(options?: FLightOptions) {
		super(options);

		// Define default options
		const DEFAULT_OPTIONS = {
			color: 0xffffff,
			intensity: 1,
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (!options.color || options.intensity === undefined)
			throw new Error("FibboError: FAmbientLight requires color and intensity");

		// Create the ambient light
		this.__LIGHT__ = new THREE.AmbientLight(options.color, options.intensity);
		// Apply the transform
		this.__UPDATE_POSITION__();
		this.__UPDATE_ROTATION__();
		// Emit the onLoaded event
		this.emitOnLoaded();
	}
}
