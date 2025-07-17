import type {
	FCameraOptions as FCameraOptionsCore,
	FVector3,
} from "@fibbojs/core";
import { FCamera as FCameraCore } from "@fibbojs/core";
import * as THREE from "three";
import type { FTransformOptions } from "../core/FTransform";
import { FTransform } from "../core/FTransform";

export interface FCameraOptions extends FCameraOptionsCore {
	position?: FTransformOptions["position"];
	rotation?: FTransformOptions["rotation"];
	rotationDegree?: FTransformOptions["rotationDegree"];
	scale?: FTransformOptions["scale"];
}

/**
 * The base class for 3d cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends FCameraCore {
	/**
	 * Internal flags
	 */
	public __IS_3D__: boolean = true;
	public __IS_2D__: boolean = false;

	/**
	 * Three.js camera object.
	 */
	__CAMERA__: THREE.PerspectiveCamera;

	/**
	 * Transform of the camera.
	 */
	transform: FTransform;

	constructor(options?: FCameraOptions) {
		super(options);

		// Define default options
		const DEFAULT_OPTIONS = {
			position: { x: 5, y: 5, z: 5 },
			rotation: { x: 0, y: 0.7853981634, z: 0 },
		};
		// Apply default options
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (!options.position || (!options.rotation && !options.rotationDegree))
			throw new Error(
				"FibboError: FCamera requires position and rotation options",
			);

		// Create the Three.js camera
		this.__CAMERA__ = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);

		// Configure transform
		this.transform = new FTransform({
			position: options.position,
			rotation: options.rotation,
			rotationDegree: options.rotationDegree,
		});
		this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__());
		this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__());
		this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__());

		// Set the position
		this.__CAMERA__.position.set(
			this.transform.position.x,
			this.transform.position.y,
			this.transform.position.z,
		);
		// Set the rotation
		this.__CAMERA__.rotation.set(
			this.transform.rotation.x,
			this.transform.rotation.y,
			this.transform.rotation.z,
		);
	}

	/**
	 * Update the position of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_POSITION__(): void {
		this.__CAMERA__.position.set(
			this.transform.position.x,
			this.transform.position.y,
			this.transform.position.z,
		);
	}

	/**
	 * Update the rotation of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 */
	__UPDATE_ROTATION__(): void {
		this.__CAMERA__.rotation.set(
			this.transform.rotation.x,
			this.transform.rotation.y,
			this.transform.rotation.z,
		);
	}

	/**
	 * Update the scale of the camera according to the transform.
	 * This method should be called after updating the transform properties.
	 * This method does not make sense for cameras, but it is implemented for consistency.
	 */
	__UPDATE_SCALE__(): void {
		this.__CAMERA__.scale.set(
			this.transform.scale.x,
			this.transform.scale.y,
			this.transform.scale.z,
		);
	}

	/**
	 * Make the camera look at a target.
	 * @param target The target to look at.
	 * @param target.x The x coordinate of the target.
	 * @param target.y The y coordinate of the target.
	 * @param target.z The z coordinate of the target.
	 */
	lookAt(target: FVector3) {
		this.__CAMERA__.lookAt(target.x, target.y, target.z);
	}

	/**
	 * Get the direction of the camera.
	 * This method is useful to get the direction of the camera to apply forces in the direction of the camera.
	 * @returns The direction of the camera. It is a normalized vector.
	 */
	getCameraDirection() {
		const direction = new THREE.Vector3();
		this.__CAMERA__.getWorldDirection(direction);
		direction.normalize();
		return direction;
	}

	// Setters & Getters

	get zoom() {
		return this.__CAMERA__.zoom;
	}

	set zoom(zoom: number) {
		this.__CAMERA__.zoom = zoom;
		this.__CAMERA__.updateProjectionMatrix();
	}
}
