// vitest.workspace.ts

import wasm from "vite-plugin-wasm";
import { defineWorkspace } from "vitest/config";

/**
 * This configuration will be used to run tests for all packages.
 * This means paths are relative to the root of each package.
 */
export default defineWorkspace([
	// Node-based tests
	{
		test: {
			include: ["./**/test/unit/**/*.test.ts"],
			name: "unit",
			environment: "node",
		},
	},
	// Browser-based tests
	{
		plugins: [wasm()],
		test: {
			include: ["./**/test/browser/**/*.test.ts"],
			name: "browser",
			browser: {
				enabled: true,
				provider: "playwright",
				name: "chromium",
				headless: true,
			},
		},
	},
]);
