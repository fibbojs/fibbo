import { loadConfig as loadUnconfig } from "unconfig";
import { mergeConfig, type UserConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

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
 * Load the Fibbo configuration file and resolve the options.
 * @returns {ResolvedFibboOptions} The resolved Fibbo options.
 */
export async function loadConfig(): Promise<ResolvedFibboOptions> {
	const { config } = await loadUnconfig({
		sources: [
			{
				files: "fibbo.config",
				extensions: ["ts", "mts", "cts", "js", "mjs", "cjs", "json"],
			},
		],
	});

	if (!config) {
		throw new Error("No configuration found.");
	}
	return resolveFibboOptions(config as FibboOptions);
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
