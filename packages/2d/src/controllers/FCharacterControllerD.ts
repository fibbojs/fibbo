import { FKeyboard } from "@fibbojs/event";
import { FRigidBodyType } from "../types/FRigidBodyType";
import type { FCharacterControllerOptions } from "./FCharacterController";
import { FCharacterController } from "./FCharacterController";

/**
 * A pre-defined character controller based on a Dynamic RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FRectangle, FCharacterControllerD } from '@fibbojs/2d'
 *
 * const rectangle = new FRectangle()
 * rectangle.addController(new FCharacterControllerD())
 * ```
 */
export class FCharacterControllerD extends FCharacterController {
	constructor(options: FCharacterControllerOptions) {
		super(options);

		const fKeyboard = new FKeyboard({
			scene: this.scene,
		});
		fKeyboard.onKeyDown(" ", () => {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				{ x: 0, y: 0.5 },
				true,
			);
		});

		// Initialize the rigidBody
		this.component.initRigidBody({
			rigidBodyType: FRigidBodyType.DYNAMIC,
			lockRotations: true,
			...options,
		});
	}

	frame(_delta: number): void {
		// Apply movement on the y axis
		if (this.inputs.up) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				{ x: 0, y: 0.15 * this.speed },
				true,
			);
		} else if (this.inputs.down) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				{ x: 0, y: -0.15 * this.speed },
				true,
			);
		}
		// Apply movement on the x axis
		if (this.inputs.left) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				{ x: -0.15 * this.speed, y: 0 },
				true,
			);
		} else if (this.inputs.right) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				{ x: 0.15 * this.speed, y: 0 },
				true,
			);
		}
	}
}
