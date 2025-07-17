import * as RAPIER from "@dimforge/rapier3d";
import type { FVector3 } from "@fibbojs/core";
import { FMathUtil } from "@fibbojs/util";
import * as THREE from "three";
import { FRigidBodyType } from "../types/FRigidBodyType";
import { FShapes } from "../types/FShapes";
import { FCollider } from "./FCollider";
import type { FComponent } from "./FComponent";
import type { FScene } from "./FScene";
import { FTransform } from "./FTransform";

export interface FRigidBodyOptions {
	scene?: FScene;
	position?: FVector3;
	rotation?: FVector3;
	rotationDegree?: FVector3;
	scale?: FVector3;
	positionOffset?: FVector3;
	rotationOffset?: FVector3;
	rotationDegreeOffset?: FVector3;
	scaleOffset?: FVector3;
	shape?: FShapes;
	mesh?: THREE.Mesh | THREE.Group;
	rigidBodyType?: FRigidBodyType;
	sensor?: boolean;
	lockTranslations?: boolean;
	lockRotations?: boolean;
	enabledTranslations?: {
		enableX: boolean;
		enableY: boolean;
		enableZ: boolean;
	};
	enabledRotations?: {
		enableX: boolean;
		enableY: boolean;
		enableZ: boolean;
	};
}

/**
 * A 3d rigidBody that can be attached to a component.
 * @category Core
 * @example
 * ```ts
 * import { FRigidBody } from '@fibbojs/3d'
 *
 * const rigidBody = new FRigidBody({
 *  position: { x: 0, y: 0, z: 0 },
 *  scale: { x: 1, y: 1, z: 1 },
 *  rotation: { x: 0, y: 0, z: 0 },
 *  shape: FShapes.CUBOID
 * })
 * ```
 */
export class FRigidBody {
	/**
	 * RAPIER RigidBody
	 */
	__RIGIDBODY__: RAPIER.RigidBody;
	/**
	 * Fibbo Collider
	 */
	collider: FCollider;
	/**
	 * The component the rigidBody is attached to.
	 */
	__COMPONENT__?: FComponent;
	/**
	 * The transform of the rigidBody.
	 */
	transform: FTransform;
	/**
	 * The transform offset of the rigidBody.
	 */
	offset: FTransform;

	/**
	 * Creates a rigidBody for the given component.
	 * @param options The options for the rigidBody.
	 * @param options.scene The scene the rigidBody belongs to.
	 * @param options.position The position of the rigidBody. Default is { x: 0, y: 0, z: 0 }.
	 * @param options.rotation The rotation of the rigidBody. Default is { x: 0, y: 0, z: 0 }.
	 * @param options.rotationDegree The rotation of the rigidBody in degrees.
	 * @param options.scale The scale of the rigidBody. Default is { x: 1, y: 1, z: 1 }.
	 * @param options.positionOffset The position offset of the rigidBody. Only used if the rigidBody is attached to a component. Default is { x: 0, y: 0, z: 0 }.
	 * @param options.rotationOffset The rotation offset of the rigidBody. Only used if the rigidBody is attached to a component. Default is { x: 0, y: 0, z: 0 }.
	 * @param options.rotationDegreeOffset The rotation offset of the rigidBody in degrees. Only used if the rigidBody is attached to a component.
	 * @param options.scaleOffset The scale offset of the rigidBody. Only used if the rigidBody is attached to a component. Default is { x: 0, y: 0, z: 0 }.
	 * @param options.shape The shape of the collider that will be generated from the rigidBody. If not defined, it will default to FShapes.CUBOID.
	 * @param options.rigidBodyType The type of the rigidBody. If not defined, it will default to FRigidBodyType.Dynamic.
	 * @param options.lockTranslations If true, the rigidBody will not be able to move.
	 * @param options.lockRotations If true, the rigidBody will not be able to rotate.
	 * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
	 * @param options.enabledTranslations.enableX If true, the rigidBody will be able to move on the x-axis.
	 * @param options.enabledTranslations.enableY If true, the rigidBody will be able to move on the y-axis.
	 * @param options.enabledTranslations.enableZ If true, the rigidBody will be able to move on the z-axis.
	 * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
	 * @param options.enabledRotations.enableX If true, the rigidBody will be able to rotate on the x-axis.
	 * @param options.enabledRotations.enableY If true, the rigidBody will be able to rotate on the y-axis.
	 * @param options.enabledRotations.enableZ If true, the rigidBody will be able to rotate on the z-axis.
	 */
	constructor(options?: FRigidBodyOptions) {
		// Apply default options
		const DEFAULT_OPTIONS = {
			scene: globalThis.__FIBBO_ACTUAL_SCENE__,
			position: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
			rotationOffset: { x: 0, y: 0, z: 0 },
			shape: FShapes.CUBOID,
			rigidBodyType: FRigidBodyType.DYNAMIC,
			sensor: false,
			lockTranslations: false,
			lockRotations: false,
		};
		// eslint-disable-next-line ts/ban-ts-comment
		// @ts-ignore
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (
			options.scene === undefined ||
			!options.position ||
			(!options.rotation && !options.rotationDegree) ||
			!options.scale ||
			!options.shape
		)
			throw new Error("FibboError: options missing in FRigidBody constructor");

		// Check if the world exists
		if (!options.scene.world)
			throw new Error(
				"FibboError: FScene must have a world to create a rigidBody",
			);

		// Configure transform
		this.transform = new FTransform({
			position: options.position,
			rotation: options.rotation,
			rotationDegree: options.rotationDegree,
			scale: options.scale,
		});
		this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__(true));
		this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__(true));
		this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__(true));
		this.offset = new FTransform({
			position: options.positionOffset
				? options.positionOffset
				: { x: 0, y: 0, z: 0 },
			rotation: options.rotationOffset,
			rotationDegree: options.rotationDegreeOffset,
			scale: options.scaleOffset ? options.scaleOffset : { x: 0, y: 0, z: 0 },
		});

		// Create a rigidBody description according to the type
		const rigidBodyDesc = new RAPIER.RigidBodyDesc(
			options.rigidBodyType === FRigidBodyType.DYNAMIC
				? RAPIER.RigidBodyType.Dynamic
				: options.rigidBodyType === FRigidBodyType.KINEMATIC_POSITION_BASED
					? RAPIER.RigidBodyType.KinematicPositionBased
					: options.rigidBodyType === FRigidBodyType.KINEMATIC_VELOCITY_BASED
						? RAPIER.RigidBodyType.KinematicVelocityBased
						: RAPIER.RigidBodyType.Fixed,
		);
		// Interprete the given position as relative to the component's position
		rigidBodyDesc.setTranslation(
			this.transform.position.x,
			this.transform.position.y,
			this.transform.position.z,
		);

		// Interprete the given rotation as relative to the component's rotation
		rigidBodyDesc.setRotation(
			new THREE.Quaternion().setFromEuler(
				new THREE.Euler(
					this.transform.rotation.x,
					this.transform.rotation.y,
					this.transform.rotation.z,
				),
			),
		);

		// Create the rigidBody
		this.__RIGIDBODY__ = options.scene.world.createRigidBody(rigidBodyDesc);

		// Lock the translation if needed
		if (options.lockTranslations)
			this.__RIGIDBODY__.lockTranslations(true, true);
		// Lock the rotation if needed
		if (options.lockRotations) this.__RIGIDBODY__.lockRotations(true, true);
		// Enable only specific translations if needed
		if (options.enabledTranslations) {
			this.__RIGIDBODY__.setEnabledTranslations(
				options.enabledTranslations.enableX,
				options.enabledTranslations.enableY,
				options.enabledTranslations.enableZ,
				true,
			);
		}
		// Enable only specific rotations if needed
		if (options.enabledRotations) {
			this.__RIGIDBODY__.setEnabledRotations(
				options.enabledRotations.enableX,
				options.enabledRotations.enableY,
				options.enabledRotations.enableZ,
				true,
			);
		}

		// Create the collider
		this.collider = new FCollider({
			...options,
			scene: options.scene,
			rigidBody: this,
		});

		// Add the rigidBody to the scene
		options.scene.addRigidBody(this);
	}

	frame(_delta: number): void {
		// As the rigidBody should have moved, update the transform to sync with the rigidBody
		this.transform.__POSITION__ = this.__RIGIDBODY__.translation();
		this.transform.__ROTATION__ = FMathUtil.quaternionToRad(
			this.__RIGIDBODY__.rotation(),
		);
		// Propagate the position and rotation update if the rigidBody is attached to a component
		if (this.component) {
			// Propagate the position update
			this.component.__UPDATE_POSITION__();
			this.component.sensor?.__UPDATE_POSITION__();
			// Propagate the rotation update
			this.component.__UPDATE_ROTATION__();
			this.component.sensor?.__UPDATE_ROTATION__();
		}
	}

	/**
	 * Set the linear velocity of the rigidBody.
	 * @param velocity The new linear velocity of the rigidBody.
	 */
	setLinvel(velocity: FVector3): void {
		this.__RIGIDBODY__.setLinvel(
			new RAPIER.Vector3(velocity.x, velocity.y, velocity.z),
			true,
		);
	}

	/**
	 * Set the angular velocity of the rigidBody.
	 * @param velocity The new angular velocity of the rigidBody.
	 */
	setAngvel(velocity: FVector3): void {
		this.__RIGIDBODY__.setAngvel(
			new RAPIER.Vector3(velocity.x, velocity.y, velocity.z),
			true,
		);
	}

	/**
	 * Update the position of the rigidBody according to the transform.
	 * This method should be called after updating the transform properties.
	 * @param initiator By default (false), the rigidBody won't be considered as the initiator of the position update.
	 * This means the new position will be the position of the attached component, plus the offset.
	 * Setting this to true will propagate the event to other objects (component, sensor,...).
	 */
	__UPDATE_POSITION__(initiator: boolean = false): void {
		// If the rigidBody is the initiator
		if (initiator) {
			// Update the rigidBody position
			this.__SET_POSITION__(this.transform.position);
			if (this.component) {
				// Propagate the position update
				this.component.__UPDATE_POSITION__();
				this.component.sensor?.__UPDATE_POSITION__();
			}
		}
		// Else, it was propagated to the rigidBody, so move the rigidBody to the new position with the offset
		else if (this.component) {
			const newPosition = {
				x: this.component.transform.position.x + this.offset.position.x,
				y: this.component.transform.position.y + this.offset.position.y,
				z: this.component.transform.position.z + this.offset.position.z,
			};
			// Update the rigidBody position
			this.__SET_POSITION__(newPosition);
		}
	}

	/**
	 * Update the rotation of the rigidBody according to the transform.
	 * This method should be called after updating the transform properties.
	 * @param initiator By default (false), the rigidBody won't be considered as the initiator of the rotation update.
	 * This means the new rotation will be the rotation of the attached component, plus the offset.
	 * Setting this to true will propagate the event to other objects (component, sensor,...).
	 */
	__UPDATE_ROTATION__(initiator: boolean = false): void {
		// If the rigidBody is the initiator
		if (initiator) {
			// Update the rigidBody rotation
			this.__SET_ROTATION__(this.transform.rotation);
			if (this.component) {
				// Propagate the rotation update
				this.component.__UPDATE_ROTATION__();
				this.component.sensor?.__UPDATE_ROTATION__();
			}
		}
		// Else, it was propagated to the rigidBody, so rotate the rigidBody to the new rotation with the offset
		else if (this.component) {
			const newRotation = {
				x: this.component.transform.rotation.x + this.offset.rotation.x,
				y: this.component.transform.rotation.y + this.offset.rotation.y,
				z: this.component.transform.rotation.z + this.offset.rotation.z,
			};
			// Update the rigidBody rotation
			this.__SET_ROTATION__(newRotation);
		}
	}

	/**
	 * Update the scale of the rigidBody according to the transform.
	 * This method should be called after updating the transform properties.
	 * @param initiator By default (false), the rigidBody won't be considered as the initiator of the scale update.
	 * This means the new scale will be the scale of the attached component, plus the offset.
	 * Setting this to true will propagate the event to other objects (component, sensor,...).
	 */
	__UPDATE_SCALE__(initiator: boolean = false): void {
		// If the rigidBody is the initiator
		if (initiator) {
			// Update the rigidBody scale
			this.__SET_SCALE__(this.transform.scale);
			if (this.component) {
				// Propagate the scale update
				this.component.__UPDATE_SCALE__();
				this.component.sensor?.__UPDATE_SCALE__();
			}
		}
		// Else, it was propagated to the rigidBody, so scale the rigidBody to the new scale with the offset
		else if (this.component) {
			const newScale = {
				x: this.component.transform.scale.x + this.offset.scale.x,
				y: this.component.transform.scale.y + this.offset.scale.y,
				z: this.component.transform.scale.z + this.offset.scale.z,
			};
			// Update the rigidBody scale
			this.__SET_SCALE__(newScale);
		}
	}

	/**
	 * Set the position of the rigidBody.
	 * @param position The new position of the rigidBody.
	 */
	__SET_POSITION__(position: FVector3): void {
		this.__RIGIDBODY__.setTranslation(position, true);
		this.transform.__POSITION__ = position;
		this.collider.__SET_POSITION__(position);
	}

	/**
	 * Set the rotation of the rigidBody.
	 * @param rotation The new rotation of the rigidBody.
	 */
	__SET_ROTATION__(rotation: FVector3): void {
		this.__RIGIDBODY__.setRotation(
			new THREE.Quaternion().setFromEuler(
				new THREE.Euler(rotation.x, rotation.y, rotation.z),
			),
			true,
		);
		this.transform.__ROTATION__ = rotation;
		this.collider.__SET_ROTATION__(rotation);
	}

	/**
	 * Set the scale of the rigidBody.
	 * @param scale The new scale of the rigidBody.
	 */
	__SET_SCALE__(scale: FVector3): void {
		// If the shape is a sphere, the scale should be the same on all axis
		if (this.collider.shape === FShapes.SPHERE) {
			scale.x = Math.max(scale.x, scale.y, scale.z);
			scale.y = scale.x;
			scale.z = scale.x;
		}
		// If the shape is a capsule, the scale should be the same on the x and z axis
		else if (this.collider.shape === FShapes.CAPSULE) {
			scale.x = Math.max(scale.x, scale.z);
			scale.z = scale.x;
		}
		this.transform.__SCALE__ = scale;
		this.collider.__SET_SCALE__(scale);
	}

	// Setters & Getters

	get component(): FComponent | undefined {
		return this.__COMPONENT__;
	}

	set component(component: FComponent | undefined) {
		this.__COMPONENT__ = component;
		// Update the position, rotation and scale of the rigidBody
		this.__UPDATE_POSITION__();
		this.__UPDATE_ROTATION__();
		this.__UPDATE_SCALE__();
	}
}
