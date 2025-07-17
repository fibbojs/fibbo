import { FKeyboard } from "@fibbojs/event";
import * as THREE from "three";
import { FRigidBodyType } from "../types/FRigidBodyType";
import type { FCharacterControllerOptions } from "./FCharacterController";
import { FCharacterController } from "./FCharacterController";

/**
 * A pre-defined character controller based on a Dynamic RigidBody.
 * @category Controller
 * @example
 * ```ts
 * import { FCapsule, FCharacterControllerD } from '@fibbojs/3d'
 *
 * const capsule = new FCapsule()
 * capsule.addController(new FCharacterControllerD())
 * ```
 */
export class FCharacterControllerD extends FCharacterController {
	constructor(options: FCharacterControllerOptions) {
		super(options);

		const fKeyboard = new FKeyboard({
			scene: this.scene,
		});
		fKeyboard.on(" ", () => {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				new THREE.Vector3(0, 0.1, 0),
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
		// Get camera direction
		const cameraDirection = this.scene.camera.getCameraDirection();
		// Ignore the y axis
		cameraDirection.y = 0;

		// Apply movement on the x axis
		if (this.inputs.forward) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				cameraDirection.multiplyScalar(0.04 * this.speed),
				true,
			);
		} else if (this.inputs.backward) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				cameraDirection.multiplyScalar(-0.04 * this.speed),
				true,
			);
		}

		// Apply movement on the z axis
		if (this.inputs.left) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				cameraDirection
					.multiplyScalar(0.04 * this.speed)
					.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2),
				true,
			);
		} else if (this.inputs.right) {
			this.component.rigidBody?.__RIGIDBODY__.applyImpulse(
				cameraDirection
					.multiplyScalar(-0.04 * this.speed)
					.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2),
				true,
			);
		}

		// Apply corrected rotation
		if (
			this.inputs.forward ||
			this.inputs.backward ||
			this.inputs.left ||
			this.inputs.right
		) {
			this.component.rigidBody?.__RIGIDBODY__.setRotation(
				this.getCorrectedRotation(),
				true,
			);
		}
	}
}
