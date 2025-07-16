import { mergeConfig, type UserConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import { jit } from "./util/jit";

export interface FibboOptions {
	vite?: UserConfig;
}

export interface ResolvedFibboOptions {
	vite: UserConfig;
}

const DEFAULT_OPTIONS: ResolvedFibboOptions = {
	vite: {
		plugins: [wasm(), topLevelAwait()],
		build: {
			rollupOptions: {
				// Solution found here: https://github.com/dimforge/rapier.js/issues/278
				// Without this option, treeshaking seems to ditch required code from Rapier
				// Basically results in : "TypeError: Cannot read properties of undefined (reading 'rawintegrationparameters_new')"
				treeshake: false,
			},
		},
		define: {
			// Enable hydration mismatch details in production build
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
			// Enable Vue Option API
			__VUE_OPTIONS_API__: false,
			// Enable Vue Devtools
			__VUE_PROD_DEVTOOLS__: false,
		},
	},
};

/**
 * Resolve the Fibbo options.
 * This function ensures that the options provided are in the correct format
 * and sets default values where necessary.
 * @param {FibboOptions} options - The options to resolve.
 * @return {ResolvedFibboOptions} The resolved options.
 */
export function resolveFibboOptions(
	options: FibboOptions,
): ResolvedFibboOptions {
	return {
		vite: mergeConfig(DEFAULT_OPTIONS.vite, options.vite || {}),
	};
}

/**
 * Load the Fibbo configuration from a specified path.
 * This function reads the configuration file at the given path and resolves it to the Fibbo options
 * @param path The path to the configuration file.
 * @returns {ResolvedFibboOptions} The resolved Fibbo options.
 */
export async function loadConfig(path?: string): Promise<ResolvedFibboOptions> {
	const module = await jit({
		path: path || "fibbo.config.ts",
	});

	if (module.default) {
		return resolveFibboOptions(module.default as FibboOptions);
	}

	return resolveFibboOptions(module as FibboOptions);
}

/**
 * Type helper to define the configuration for a Fibbo application.
 * This function allows users to define their configuration options in a type-safe manner.
 * @param {FibboOptions} options - The options to define.
 * @return {FibboOptions} The resolved options.
 */
export function defineConfig(options: FibboOptions): FibboOptions {
	return options;
}
