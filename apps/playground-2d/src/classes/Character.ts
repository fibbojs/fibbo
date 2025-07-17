import type { FRigidBodyOptions } from "@fibbojs/2d";
import { FCharacterControllerKP, FSprite } from "@fibbojs/2d";

export default class Character extends FSprite {
	constructor() {
		super({
			texture: "character_0000.png",
			position: { x: 0, y: 10 },
			// rotationDegree: 45,
			scale: { x: 0.5, y: 0.5 },
		});

		// Initialize the character controller
		this.addController(
			new FCharacterControllerKP({
				component: this,
			}),
		);
	}

	initSensor(options?: FRigidBodyOptions): void {
		super.initSensor({
			scaleOffset: { x: 0.1, y: 0.1 },
			...options,
		});
	}
}
