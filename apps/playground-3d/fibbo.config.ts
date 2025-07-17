import { resolve } from "node:path";
import { defineConfig } from "@fibbojs/config";

export default defineConfig({
	vite: {
		base: "/playground-3d/",
		build: {
			rollupOptions: {
				input: {
					main: resolve(import.meta.dirname, "index.html"),
					rainbowls: resolve(import.meta.dirname, "demos/rainbowls/index.html"),
				},
			},
		},
	},
});
