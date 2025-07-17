import type { FVector3 } from "@fibbojs/core";
import { FMathUtil } from "@fibbojs/util";

export interface FTransformOptions {
	position?: FVector3;
	rotation?: FVector3;
	rotationDegree?: FVector3;
	scale?: FVector3;
}

/**
 * 3D Transform
 * @category Core
 * @example
 * ```ts
 * import { FTransform } from '@fibbojs/3d'
 *
 * const transform = new FTransform({
 *  position: { x: 0, y: 0, z: 0 },
 *  scale: { x: 1, y: 1, z: 1 },
 *  rotation: { x: 0, y: 0, z: 0 },
 * })
 * ```
 */
export class FTransform {
	// Callback
	/**
	 * Callback for when the position is updated.
	 */
	__CALLBACKS_ON_POSITION_UPDATED__: (() => void)[] = [];
	/**
	 * Callback for when the rotation is updated.
	 */
	__CALLBACKS_ON_ROTATION_UPDATED__: (() => void)[] = [];
	/**
	 * Callback for when the scale is updated.
	 */
	__CALLBACKS_ON_SCALE_UPDATED__: (() => void)[] = [];

	/**
	 * The position of the transform.
	 */
	__POSITION__: FVector3;
	/**
	 * The scale of the transform.
	 */
	__SCALE__: FVector3;
	/**
	 * The rotation of the transform.
	 */
	__ROTATION__: FVector3;

	/**
	 * Create a new FTransform.
	 * @param options The options for the transform.
	 * @param options.position The position of the transform. If not defined, it will default to `{ x: 0, y: 0, z: 0 }`.
	 * @param options.rotation The rotation of the transform. If not defined, it will default to `{ x: 0, y: 0, z: 0 }`.
	 * @param options.rotationDegree The rotation of the transform in degrees. If not defined, it will default to undefined.
	 * @param options.scale The scale of the transform. If not defined, it will default to `{ x: 1, y: 1, z: 1 }`.
	 */
	constructor(options?: FTransformOptions) {
		// Apply default options
		const DEFAULT_OPTIONS = {
			position: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
		};
		options = { ...DEFAULT_OPTIONS, ...options };
		// Validate options
		if (
			!options.position ||
			(!options.rotation && !options.rotationDegree) ||
			!options.scale
		) {
			throw new Error("FibboError: options missing for FTransform");
		}

		// Set the transform values
		this.__POSITION__ = options.position;
		this.__ROTATION__ = options.rotationDegree
			? {
					x: FMathUtil.degreeToRad(options.rotationDegree.x),
					y: FMathUtil.degreeToRad(options.rotationDegree.y),
					z: FMathUtil.degreeToRad(options.rotationDegree.z),
				}
			: options.rotation || { x: 0, y: 0, z: 0 };
		this.__SCALE__ = options.scale;
	}

	/**
	 * Add a callback for when the position is updated.
	 * @param callback The callback to add.
	 */
	onPositionUpdated(callback: () => void) {
		this.__CALLBACKS_ON_POSITION_UPDATED__.push(callback);
	}

	/**
	 * Add a callback for when the rotation is updated.
	 * @param callback The callback to add.
	 */
	onRotationUpdated(callback: () => void) {
		this.__CALLBACKS_ON_ROTATION_UPDATED__.push(callback);
	}

	/**
	 * Add a callback for when the scale is updated.
	 * @param callback The callback to add.
	 */
	onScaleUpdated(callback: () => void) {
		this.__CALLBACKS_ON_SCALE_UPDATED__.push(callback);
	}

	/**
	 * Set a new position.
	 * @param position The new position.
	 * @param position.x The new position on the x axis.
	 * @param position.y The new position on the y axis.
	 * @param position.z The new position on the z axis.
	 */
	setPosition(position: FVector3) {
		this.__POSITION__ = position;
		this.__CALLBACKS_ON_POSITION_UPDATED__.forEach((callback) => callback());
	}

	/**
	 * Set a new rotation.
	 * @param rotation The new rotation.
	 * @param rotation.x The new rotation on the x axis.
	 * @param rotation.y The new rotation on the y axis.
	 * @param rotation.z The new rotation on the z axis.
	 */
	setRotation(rotation: FVector3) {
		this.__ROTATION__ = rotation;
		this.__CALLBACKS_ON_ROTATION_UPDATED__.forEach((callback) => callback());
	}

	/**
	 * Set a new rotation in degrees.
	 * @param rotationDegree The new rotation in degrees.
	 * @param rotationDegree.x The new rotation on the x axis in degrees.
	 * @param rotationDegree.y The new rotation on the y axis in degrees.
	 * @param rotationDegree.z The new rotation on the z axis in degrees.
	 */
	setRotationDegree(rotationDegree: FVector3) {
		this.setRotation({
			x: FMathUtil.degreeToRad(rotationDegree.x),
			y: FMathUtil.degreeToRad(rotationDegree.y),
			z: FMathUtil.degreeToRad(rotationDegree.z),
		});
	}

	/**
	 * Set a new scale.
	 * @param scale The new scale.
	 * @param scale.x The new scale on the x axis.
	 * @param scale.y The new scale on the y axis.
	 * @param scale.z The new scale on the z axis.
	 */
	setScale(scale: FVector3) {
		this.__SCALE__ = scale;
		this.__CALLBACKS_ON_SCALE_UPDATED__.forEach((callback) => callback());
	}

	// Setters & Getters

	/**
	 * Get the position.
	 */
	get position() {
		return this.__POSITION__;
	}

	/**
	 * Set the position.
	 * @param position The new position.
	 * @param position.x The new position on the x axis.
	 * @param position.y The new position on the y axis.
	 * @param position.z The new position on the z axis.
	 */
	set position(position: FVector3) {
		this.setPosition(position);
	}

	/**
	 * Get the position on the x axis.
	 */
	get x() {
		return this.__POSITION__.x;
	}

	/**
	 * Set the x position.
	 * @param x The new position on the x axis.
	 */
	set x(x: number) {
		this.setPosition({ x, y: this.__POSITION__.y, z: this.__POSITION__.z });
	}

	/**
	 * Get the position on the y axis.
	 */
	get y() {
		return this.__POSITION__.y;
	}

	/**
	 * Set the y position.
	 * @param y The new position on the y axis.
	 */
	set y(y: number) {
		this.setPosition({ x: this.__POSITION__.x, y, z: this.__POSITION__.z });
	}

	/**
	 * Get the position on the z axis.
	 */
	get z() {
		return this.__POSITION__.z;
	}

	/**
	 * Set the z position.
	 * @param z The new position on the z axis.
	 */
	set z(z: number) {
		this.setPosition({ x: this.__POSITION__.x, y: this.__POSITION__.y, z });
	}

	/**
	 * Get the rotation.
	 */
	get rotation() {
		return this.__ROTATION__;
	}

	/**
	 * Set the rotation.
	 * @param rotation The new rotation.
	 * @param rotation.x The new rotation on the x axis.
	 * @param rotation.y The new rotation on the y axis.
	 * @param rotation.z The new rotation on the z axis.
	 */
	set rotation(rotation: FVector3) {
		this.setRotation(rotation);
	}

	/**
	 * Get the rotation on the x axis.
	 */
	get rotationX() {
		return this.__ROTATION__.x;
	}

	/**
	 * Set the x rotation.
	 * @param x The new rotation on the x axis.
	 */
	set rotationX(x: number) {
		this.setRotation({ x, y: this.__ROTATION__.y, z: this.__ROTATION__.z });
	}

	/**
	 * Get the rotation on the y axis.
	 */
	get rotationY() {
		return this.__ROTATION__.y;
	}

	/**
	 * Set the y rotation.
	 * @param y The new rotation on the y axis.
	 */
	set rotationY(y: number) {
		this.setRotation({ x: this.__ROTATION__.x, y, z: this.__ROTATION__.z });
	}

	/**
	 * Get the rotation on the z axis.
	 */
	get rotationZ() {
		return this.__ROTATION__.z;
	}

	/**
	 * Set the z rotation.
	 * @param z The new rotation on the z axis.
	 */
	set rotationZ(z: number) {
		this.setRotation({ x: this.__ROTATION__.x, y: this.__ROTATION__.y, z });
	}

	/**
	 * Get the rotation in degrees.
	 */
	get rotationDegree() {
		return {
			x: FMathUtil.radToDegree(this.__ROTATION__.x),
			y: FMathUtil.radToDegree(this.__ROTATION__.y),
			z: FMathUtil.radToDegree(this.__ROTATION__.z),
		};
	}

	/**
	 * Set the rotation in degrees.
	 * @param rotationDegree The new rotation in degrees.
	 * @param rotationDegree.x The new rotation on the x axis in degrees.
	 * @param rotationDegree.y The new rotation on the y axis in degrees.
	 * @param rotationDegree.z The new rotation on the z axis in degrees.
	 */
	set rotationDegree(rotationDegree: FVector3) {
		this.setRotationDegree(rotationDegree);
	}

	/**
	 * Get the rotation in degrees on the x axis.
	 */
	get rotationDegreeX() {
		return FMathUtil.radToDegree(this.__ROTATION__.x);
	}

	/**
	 * Set the x rotation in degrees.
	 * @param x The new rotation on the x axis in degrees.
	 */
	set rotationDegreeX(x: number) {
		this.setRotationDegree({
			x,
			y: FMathUtil.radToDegree(this.__ROTATION__.y),
			z: FMathUtil.radToDegree(this.__ROTATION__.z),
		});
	}

	/**
	 * Get the rotation in degrees on the y axis.
	 */
	get rotationDegreeY() {
		return FMathUtil.radToDegree(this.__ROTATION__.y);
	}

	/**
	 * Set the y rotation in degrees.
	 * @param y The new rotation on the y axis in degrees.
	 */
	set rotationDegreeY(y: number) {
		this.setRotationDegree({
			x: FMathUtil.radToDegree(this.__ROTATION__.x),
			y,
			z: FMathUtil.radToDegree(this.__ROTATION__.z),
		});
	}

	/**
	 * Get the rotation in degrees on the z axis.
	 */
	get rotationDegreeZ() {
		return FMathUtil.radToDegree(this.__ROTATION__.z);
	}

	/**
	 * Set the z rotation in degrees.
	 * @param z The new rotation on the z axis in degrees.
	 */
	set rotationDegreeZ(z: number) {
		this.setRotationDegree({
			x: FMathUtil.radToDegree(this.__ROTATION__.x),
			y: FMathUtil.radToDegree(this.__ROTATION__.y),
			z,
		});
	}

	/**
	 * Get the scale.
	 */
	get scale() {
		return this.__SCALE__;
	}

	/**
	 * Set the scale.
	 * @param scale The new scale.
	 * @param scale.x The new scale on the x axis.
	 * @param scale.y The new scale on the y axis.
	 * @param scale.z The new scale on the z axis.
	 */
	set scale(scale: FVector3) {
		this.setScale(scale);
	}

	/**
	 * Get the scale on the x axis.
	 */
	get scaleX() {
		return this.__SCALE__.x;
	}

	/**
	 * Set the x scale.
	 * @param x The new scale on the x axis.
	 */
	set scaleX(x: number) {
		this.setScale({ x, y: this.__SCALE__.y, z: this.__SCALE__.z });
	}

	/**
	 * Get the scale on the y axis.
	 */
	get scaleY() {
		return this.__SCALE__.y;
	}

	/**
	 * Set the y scale.
	 * @param y The new scale on the y axis.
	 */
	set scaleY(y: number) {
		this.setScale({ x: this.__SCALE__.x, y, z: this.__SCALE__.z });
	}

	/**
	 * Get the scale on the z axis.
	 */
	get scaleZ() {
		return this.__SCALE__.z;
	}

	/**
	 * Set the z scale.
	 * @param z The new scale on the z axis.
	 */
	set scaleZ(z: number) {
		this.setScale({ x: this.__SCALE__.x, y: this.__SCALE__.y, z });
	}
}
