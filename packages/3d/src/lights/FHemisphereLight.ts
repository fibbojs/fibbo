import * as THREE from "three";
import type { FLightOptions } from "./FLight";
import { FLight } from "./FLight";

export interface FHemisphereLightOptions extends FLightOptions {
	skyColor?: THREE.ColorRepresentation;
	groundColor?: THREE.ColorRepresentation;
}

/**
 * An hemisphere light in 3d space.
 * @category Light
 */
export class FHemisphereLight extends FLight {
	constructor(options?: FHemisphereLightOptions) {
		super(options);

		// Define default options
		const DEFAULT_OPTIONS = {
			skyColor: 0xffffbb,
			groundColor: 0x080820,
			intensity: 1,
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (!options.color || options.intensity === undefined)
			throw new Error(
				"FibboError: FHemisphereLight requires color and intensity",
			);

		// Create the hemisphere light
		this.__LIGHT__ = new THREE.HemisphereLight(
			options.color,
			options.intensity,
		);
		// Apply the transform
		this.__UPDATE_POSITION__();
		this.__UPDATE_ROTATION__();
		// Emit the onLoaded event
		this.emitOnLoaded();
	}
}
