import * as THREE from "three";
import type { FLightOptions } from "./FLight";
import { FLight } from "./FLight";

/**
 * A directional light in 3d space.
 * @category Light
 */
export class FDirectionalLight extends FLight {
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
			throw new Error(
				"FibboError: FDirectionalLight requires color and intensity",
			);

		// Create the directional light
		this.__LIGHT__ = new THREE.DirectionalLight(
			options.color,
			options.intensity,
		);
		// Apply the transform
		this.__UPDATE_POSITION__();
		this.__UPDATE_ROTATION__();

		// If shadows are enabled, set the light to cast shadows
		if (this.scene.__ENABLE_SHADOWS__) {
			this.__LIGHT__.castShadow = true;
			if (
				this.__LIGHT__.shadow?.camera &&
				this.__LIGHT__.shadow.camera instanceof THREE.OrthographicCamera
			) {
				this.__LIGHT__.shadow.camera.near = 0.5;
				this.__LIGHT__.shadow.camera.far = 500;
				this.__LIGHT__.shadow.camera.left = -100;
				this.__LIGHT__.shadow.camera.right = 100;
				this.__LIGHT__.shadow.camera.top = 100;
				this.__LIGHT__.shadow.camera.bottom = -100;
				this.__LIGHT__.shadow.mapSize.width = 2 ** this.shadowQuality;
				this.__LIGHT__.shadow.mapSize.height = 2 ** this.shadowQuality;
			}
		}

		// Emit the onLoaded event
		this.emitOnLoaded();
	}
}
