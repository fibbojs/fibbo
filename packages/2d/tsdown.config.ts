import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	clean: true,
	dts: true,
	external: ["pixi.js", "pixi-viewport", "@dimforge/rapier2d"],
});
