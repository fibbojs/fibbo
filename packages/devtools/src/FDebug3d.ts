import type { FLight, FScene } from "@fibbojs/3d";
import { State } from "./State";

/**
 * A helper class to debug a given 3d scene
 */
export class FDebug3d {
	/**
	 * @param scene The scene to be debugged
	 */
	constructor(scene: FScene) {
		// Add grid helper
		const gridHelper = new scene.THREE.GridHelper(10, 10);
		gridHelper.visible = State.helpers;
		scene.scene.add(gridHelper);

		// Axes helper
		const axesHelper = new scene.THREE.AxesHelper(5);
		axesHelper.visible = State.helpers;
		scene.scene.add(axesHelper);

		/**
		 * When a light is added to the scene, add a helper for it
		 */
		// biome-ignore lint/suspicious/noExplicitAny: anty is required for flexibility
		const lightHelpers: any[] = [];
		scene.onLightAdded((lightParam) => {
			// Cast light to a 3D FLight
			const light = lightParam as FLight;
			// Create a helper depending on the light type
			// biome-ignore lint/suspicious/noExplicitAny: There's no common type for light helpers
			let helper: any;
			if (light.__LIGHT__ instanceof scene.THREE.DirectionalLight)
				helper = new scene.THREE.DirectionalLightHelper(light.__LIGHT__);
			else if (light.__LIGHT__ instanceof scene.THREE.HemisphereLight)
				helper = new scene.THREE.HemisphereLightHelper(light.__LIGHT__, 1);
			else if (light.__LIGHT__ instanceof scene.THREE.PointLight)
				helper = new scene.THREE.PointLightHelper(light.__LIGHT__);
			else if (light.__LIGHT__ instanceof scene.THREE.SpotLight)
				helper = new scene.THREE.SpotLightHelper(light.__LIGHT__);
			else return;
			helper.visible = State.helpers;
			// Add the helper to the scene
			// biome-ignore lint/suspicious/noExplicitAny: There's no common type for light helpers
			scene.scene.add(helper as any);
			// Add the helper to the list of helpers
			lightHelpers.push(helper);
		});

		/**
		 * Display debug lines on each frame
		 */
		scene.onFrame(() => {
			if (State.hitboxes) {
				// Remove previous debug lines
				const previousLines = scene.scene.getObjectByName("DEBUG_LINES");
				if (previousLines) scene.scene.remove(previousLines);

				// Render new debug lines
				const { vertices, colors } = scene.world.debugRender();
				const geometry = new scene.THREE.BufferGeometry();
				geometry.setAttribute(
					"position",
					new scene.THREE.Float32BufferAttribute(vertices, 3),
				);
				geometry.setAttribute(
					"color",
					new scene.THREE.Float32BufferAttribute(colors, 3),
				);
				const material = new scene.THREE.LineBasicMaterial({
					vertexColors: true,
				});
				const lines = new scene.THREE.LineSegments(geometry, material);
				lines.name = "DEBUG_LINES";
				scene.scene.add(lines);
			}
		});

		State.onHitboxesChange((newState) => {
			if (!newState) {
				// Remove previous debug lines
				const previousLines = scene.scene.getObjectByName("DEBUG_LINES");
				if (previousLines) scene.scene.remove(previousLines);
			}
		});

		State.onHelpersChange((newState) => {
			gridHelper.visible = newState;
			axesHelper.visible = newState;
			lightHelpers.forEach((helper) => {
				helper.visible = newState;
			});
		});
	}
}
