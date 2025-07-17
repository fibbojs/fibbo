import { resolve } from "node:path";
import { defineConfig } from "@fibbojs/config";

export default defineConfig({
	vite: {
		base: "/playground-2d/",
		build: {
			rollupOptions: {
				input: {
					main: resolve(import.meta.dirname, "index.html"),
					squairbows: resolve(
						import.meta.dirname,
						"demos/squairbows/index.html",
					),
					perlinRainbow: resolve(
						import.meta.dirname,
						"demos/perlin-rainbow/index.html",
					),
				},
			},
		},
	},
});
