import type { FScene } from "./FScene";

export interface FLightOptions {
	scene?: FScene;
	addToScene?: boolean;
}

/**
 * The base class for lights in Fibbo.
 * @category Core
 */
export abstract class FLight {
	/**
	 * Callbacks for when the light is loaded.
	 */
	public __CALLBACKS_ON_LOADED__: (() => void)[] = [];

	/**
	 * The scene the light is attached to.
	 */
	public scene: FScene;

	constructor(options?: FLightOptions) {
		// Define default options
		const DEFAULT_OPTIONS = {
			scene: globalThis.__FIBBO_ACTUAL_SCENE__,
			addToScene: true,
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (options.scene === undefined || options.addToScene === undefined)
			throw new Error(
				"FibboError: FLight requires addToScene and scene option",
			);

		// Store the scene
		this.scene = options.scene;

		// If addToScene is true, wait for the light to be loaded and add it to the scene
		if (options.addToScene) {
			this.onLoaded(() => {
				this.scene.addLight(this);
			});
		}
	}

	/**
	 * Add a callback to be called when the light is loaded.
	 * @param callback The callback function.
	 */
	onLoaded(callback: () => void) {
		this.__CALLBACKS_ON_LOADED__.push(callback);
	}

	/**
	 * Emit the onLoaded callbacks.
	 */
	emitOnLoaded() {
		this.__CALLBACKS_ON_LOADED__.forEach((callback) => {
			callback();
		});
	}
}
