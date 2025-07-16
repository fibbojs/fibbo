import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "FibboDebug",
			fileName: (format) => `index.${format}.js`,
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	plugins: [vue(), wasm()],
	define: {
		__FIBBO_VERSION__: JSON.stringify(process.env.npm_package_version),
	},
});
