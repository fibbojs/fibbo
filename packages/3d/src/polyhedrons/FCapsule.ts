import * as THREE from "three";
import type { FColliderOptions } from "../core/FCollider";
import type { FRigidBodyOptions } from "../core/FRigidBody";
import { FShapes } from "../types/FShapes";
import type { FPolyhedronOptions } from "./FPolyhedron";
import { FPolyhedron } from "./FPolyhedron";

/**
 * A simple capsule model in Fibbo.
 * @category Polyhedrons
 * @example
 * ```ts
 * import { FCapsule } from '@fibbojs/3d'
 *
 * const capsule = new FCapsule()
 * ```
 */
export class FCapsule extends FPolyhedron {
	constructor(options?: FPolyhedronOptions) {
		super(options);
		// Create a capsule
		const geometry = new THREE.CapsuleGeometry(0.5, 1, 32);
		const material = new THREE.MeshPhongMaterial({ color: 0x666666 });
		this.__MESH__ = new THREE.Mesh(geometry, material);
		// If shadows are enabled, cast and receive shadows
		if (this.scene.__ENABLE_SHADOWS__) {
			this.__MESH__.castShadow = true;
			this.__MESH__.receiveShadow = true;
		}
		// Emit the onLoaded event
		this.emitOnLoaded();
	}

	initCollider(options?: FColliderOptions): void {
		super.initCollider({
			shape: FShapes.CAPSULE,
			...options,
		});
	}

	initRigidBody(options?: FRigidBodyOptions): void {
		super.initRigidBody({
			shape: FShapes.CAPSULE,
			...options,
		});
	}

	initSensor(options?: FRigidBodyOptions): void {
		super.initSensor({
			shape: FShapes.CAPSULE,
			...options,
		});
	}
}
