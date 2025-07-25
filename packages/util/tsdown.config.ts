import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	clean: true,
	dts: true,
	external: ["@dimforge/rapier3d", "@dimforge/rapier2d"],
});
