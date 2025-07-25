import RAPIER from "@dimforge/rapier3d";
import { FKeyboard } from "@fibbojs/event";
import * as THREE from "three";
import type { FScene } from "../core/FScene";
import { FShapes } from "../types/FShapes";
import type { FControllerOptions } from "./FController";
import { FController } from "./FController";

export interface FCharacterControllerOptions extends FControllerOptions {
	/**
	 * The speed of the character.
	 */
	speed?: number;
}

/**
 * An abstract pre-defined character controller.
 * @category Controller
 */
export abstract class FCharacterController extends FController {
	/**
	 * The inputs that will be used to move the character.
	 */
	inputs: {
		forward: boolean;
		backward: boolean;
		left: boolean;
		right: boolean;
	};

	/**
	 * The speed of the character.
	 */
	speed: number;

	/**
	 * The scene where the character is.
	 */
	scene: FScene;

	constructor(options: FCharacterControllerOptions) {
		// Define default values
		const DEFAULT_OPTIONS = {
			runInPhysicPipeline: true,
			speed: 1,
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (options.speed === undefined)
			throw new Error(
				"FibboError: options missing in FCharacterController constructor",
			);

		// Call the parent constructor
		super(options);

		// Store options
		this.scene = options.component.scene;
		this.speed = options.speed;

		// Map of the movements (will be updated by the keyboard)
		this.inputs = {
			forward: false,
			backward: false,
			left: false,
			right: false,
		};

		// Create a keyboard instance
		const fKeyboard = new FKeyboard({
			scene: this.scene,
		});

		// Key down
		fKeyboard.onKeyDown("w", () => {
			this.inputs.forward = true;
		});
		fKeyboard.onKeyDown("s", () => {
			this.inputs.backward = true;
		});
		fKeyboard.onKeyDown("a", () => {
			this.inputs.left = true;
		});
		fKeyboard.onKeyDown("d", () => {
			this.inputs.right = true;
		});
		// For AZERTY keyboards
		fKeyboard.onKeyDown("z", () => {
			this.inputs.forward = true;
		});
		fKeyboard.onKeyDown("q", () => {
			this.inputs.left = true;
		});

		// Key up
		fKeyboard.onKeyUp("w", () => {
			this.inputs.forward = false;
		});
		fKeyboard.onKeyUp("s", () => {
			this.inputs.backward = false;
		});
		fKeyboard.onKeyUp("a", () => {
			this.inputs.left = false;
		});
		fKeyboard.onKeyUp("d", () => {
			this.inputs.right = false;
		});
		// For AZERTY keyboards
		fKeyboard.onKeyUp("z", () => {
			this.inputs.forward = false;
		});
		fKeyboard.onKeyUp("q", () => {
			this.inputs.left = false;
		});

		// Initialize a sensor
		this.component.initSensor({
			shape: FShapes.CAPSULE,
		});
	}

	/**
	 * Return the corrected rotation for the current frame.
	 * Uses the camera so the character nevers faces the camera.
	 */
	getCorrectedRotation(): RAPIER.Quaternion {
		// Get the camera direction
		const cameraDirection = this.scene.camera.getCameraDirection();
		// Get the angle between the camera direction and the character direction
		const angle = Math.atan2(cameraDirection.x, cameraDirection.z);
		// Create a THREE quaternion from the corrected rotation
		const quaternion = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(0, angle, 0),
		);
		// Return the corrected rotation as a RAPIER quaternion
		return new RAPIER.Quaternion(
			quaternion.x,
			quaternion.y,
			quaternion.z,
			quaternion.w,
		);
	}
}
