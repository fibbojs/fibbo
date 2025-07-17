import RAPIER from "@dimforge/rapier3d";
import * as THREE from "three";
import { beforeEach, describe, expect, it } from "vitest";
import { FCuboid, FScene, FShapes } from "../../src";

function validateRapierRigidBody(
	rigidBody: RAPIER.RigidBody,
	transform: {
		position: { x: number; y: number; z: number };
		rotation: { x: number; y: number; z: number };
	},
) {
	// Validate RAPIER collider
	expect(rigidBody).toBeDefined();
	expect(rigidBody.translation().x).toEqual(transform.position.x);
	expect(rigidBody.translation().y).toEqual(transform.position.y);
	expect(rigidBody.translation().z).toEqual(transform.position.z);
	const quaternion = rigidBody.rotation();
	const rotation = new THREE.Euler().setFromQuaternion(
		new THREE.Quaternion(
			quaternion.x,
			quaternion.y,
			quaternion.z,
			quaternion.w,
		),
	);
	expect(rotation.x).closeTo(transform.rotation.x, 0.0001);
	expect(rotation.y).closeTo(transform.rotation.y, 0.0001);
	expect(rotation.z).closeTo(transform.rotation.z, 0.0001);
}

describe("fRigidBody", () => {
	let scene: FScene;

	beforeEach(async () => {
		scene = new FScene({
			autoLoop: false,
		});
		await scene.init();
		await scene.initPhysics();
	});

	it("should create a collider with default options", () => {
		const cuboid = new FCuboid({
			position: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
		});
		cuboid.initRigidBody();
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate offset
		expect(cuboid.rigidBody.offset.position).toEqual({ x: 0, y: 0, z: 0 });
		expect(cuboid.rigidBody.offset.rotation).toEqual({ x: 0, y: 0, z: 0 });
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(0);
		expect(cuboid.rigidBody.transform.position.y).toEqual(0);
		expect(cuboid.rigidBody.transform.position.z).toEqual(0);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(1);
		expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.CUBOID);
		// Validate scaleX, scaleY and scaleZ
		cuboid.rigidBody.transform.scaleX = 2;
		cuboid.rigidBody.transform.scaleY = 3;
		cuboid.rigidBody.transform.scaleZ = 4;
		expect(cuboid.rigidBody.transform.scaleX).toEqual(2);
		expect(cuboid.rigidBody.transform.scaleY).toEqual(3);
		expect(cuboid.rigidBody.transform.scaleZ).toEqual(4);
		expect(cuboid.rigidBody.transform.scaleX).toEqual(
			cuboid.rigidBody.transform.scale.x,
		);
		expect(cuboid.rigidBody.transform.scaleY).toEqual(
			cuboid.rigidBody.transform.scale.y,
		);
		expect(cuboid.rigidBody.transform.scaleZ).toEqual(
			cuboid.rigidBody.transform.scale.z,
		);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});

	it("should create a collider with custom transforms", () => {
		const cuboid = new FCuboid({
			position: { x: 1, y: 1, z: 1 },
			rotation: { x: 0.1, y: 0.2, z: 0.3 },
			scale: { x: 1, y: 2, z: 3 },
		});
		cuboid.initRigidBody({
			positionOffset: { x: -2, y: 3, z: -4 },
			rotationOffset: { x: -0.3, y: 0.2, z: 0.1 },
			scaleOffset: { x: 2, y: 2, z: 2 },
		});
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate offset
		expect(cuboid.rigidBody.offset.position).toEqual({ x: -2, y: 3, z: -4 });
		expect(cuboid.rigidBody.offset.rotation).toEqual({
			x: -0.3,
			y: 0.2,
			z: 0.1,
		});
		expect(cuboid.rigidBody.collider.offset.scale).toEqual({
			x: 2,
			y: 2,
			z: 2,
		});
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(-1);
		expect(cuboid.rigidBody.transform.position.y).toEqual(4);
		expect(cuboid.rigidBody.transform.position.z).toEqual(-3);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(-0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(3);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(4);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(5);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});

	it("should create a collider with a sphere shape", () => {
		const cuboid = new FCuboid({
			position: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
		});
		cuboid.initRigidBody({
			shape: FShapes.SPHERE,
		});
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate shape
		expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.SPHERE);
		expect(cuboid.rigidBody.collider.__COLLIDER__.shape).toBeDefined();
		expect(cuboid.rigidBody.collider.__COLLIDER__.shape.type).toEqual(
			RAPIER.ShapeType.Ball,
		);
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(0);
		expect(cuboid.rigidBody.transform.position.y).toEqual(0);
		expect(cuboid.rigidBody.transform.position.z).toEqual(0);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(1);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});

	it("should modify collider transforms", () => {
		const cuboid = new FCuboid({
			position: { x: 1, y: 0, z: 0 },
			rotation: { x: 0, y: 0.2, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
		});
		cuboid.initRigidBody();
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(1);
		expect(cuboid.rigidBody.transform.position.y).toEqual(0);
		expect(cuboid.rigidBody.transform.position.z).toEqual(0);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(1);
		// Modify transforms with functions
		cuboid.rigidBody.transform.setPosition({ x: 1, y: 1, z: 1 });
		cuboid.rigidBody.transform.setRotation({ x: 0.1, y: 0.2, z: 0.3 });
		cuboid.rigidBody.transform.setScale({ x: 2, y: 2, z: 2 });
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(1);
		expect(cuboid.rigidBody.transform.position.y).toEqual(1);
		expect(cuboid.rigidBody.transform.position.z).toEqual(1);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0.1, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.3, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(2);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(2);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(2);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
		// Modify transforms with setters
		cuboid.rigidBody.transform.position = { x: 2, y: 4, z: 6 };
		cuboid.rigidBody.transform.rotation = { x: 0.2, y: 0.4, z: 0.6 };
		cuboid.rigidBody.transform.scale = { x: 3, y: 4, z: 5 };
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(2);
		expect(cuboid.rigidBody.transform.position.y).toEqual(4);
		expect(cuboid.rigidBody.transform.position.z).toEqual(6);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.6, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(3);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(4);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(5);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});

	it("should modify collider transforms with a sphere shape", () => {
		const cuboid = new FCuboid({
			position: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
			scale: { x: 1, y: 1, z: 1 },
		});
		cuboid.initRigidBody({
			shape: FShapes.SPHERE,
		});
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate shape
		expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.SPHERE);
		expect(cuboid.rigidBody.collider.__COLLIDER__.shape).toBeDefined();
		expect(cuboid.rigidBody.collider.__COLLIDER__.shape.type).toEqual(
			RAPIER.ShapeType.Ball,
		);
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(0);
		expect(cuboid.rigidBody.transform.position.y).toEqual(0);
		expect(cuboid.rigidBody.transform.position.z).toEqual(0);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(1);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(1);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
		// Modify transforms with functions
		cuboid.rigidBody.transform.setPosition({ x: 1, y: 1, z: 1 });
		cuboid.rigidBody.transform.setRotation({ x: 0.1, y: 0.2, z: 0.3 });
		cuboid.rigidBody.transform.setScale({ x: 2, y: 2, z: 2 });
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(1);
		expect(cuboid.rigidBody.transform.position.y).toEqual(1);
		expect(cuboid.rigidBody.transform.position.z).toEqual(1);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0.1, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.3, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(2);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(2);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(2);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
		// Modify transforms with setters
		cuboid.rigidBody.transform.position = { x: 2, y: 4, z: 6 };
		cuboid.rigidBody.transform.rotation = { x: 0.2, y: 0.4, z: 0.6 };
		cuboid.rigidBody.transform.scale = { x: 3, y: 5, z: 4 };
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(2);
		expect(cuboid.rigidBody.transform.position.y).toEqual(4);
		expect(cuboid.rigidBody.transform.position.z).toEqual(6);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.6, 0.0001);
		// Sphere shape has the same scale for x, y and z (the highest value is used)
		expect(cuboid.rigidBody.transform.scale.x).toEqual(5);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(5);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(5);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});

	it("should update collider transforms with attached component transforms", () => {
		const cuboid = new FCuboid({
			position: { x: 1, y: 1, z: 1 },
			rotation: { x: 0.1, y: 0.2, z: 0.3 },
			scale: { x: 1, y: 0.5, z: 1 },
		});
		cuboid.initRigidBody({
			positionOffset: { x: -2, y: 3, z: -4 },
			rotationOffset: { x: -0.3, y: 0.2, z: 0.1 },
			scaleOffset: { x: 2, y: 4, z: 2 },
		});
		expect(cuboid.rigidBody).toBeDefined();
		if (!cuboid.rigidBody) return;
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(-1);
		expect(cuboid.rigidBody.transform.position.y).toEqual(4);
		expect(cuboid.rigidBody.transform.position.z).toEqual(-3);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(-0.2, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.4, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(3);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(4.5);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(3);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
		// Modify component transforms
		cuboid.transform.position = { x: 2, y: 2, z: 6 };
		cuboid.transform.rotation = { x: 0.2, y: 0.4, z: 0.6 };
		cuboid.transform.scale = { x: 3, y: 4, z: 5 };
		// Validate transforms
		expect(cuboid.rigidBody.transform.position.x).toEqual(0);
		expect(cuboid.rigidBody.transform.position.y).toEqual(5);
		expect(cuboid.rigidBody.transform.position.z).toEqual(2);
		expect(cuboid.rigidBody.transform.rotation.x).closeTo(-0.1, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.y).closeTo(0.6, 0.0001);
		expect(cuboid.rigidBody.transform.rotation.z).closeTo(0.7, 0.0001);
		expect(cuboid.rigidBody.transform.scale.x).toEqual(5);
		expect(cuboid.rigidBody.transform.scale.y).toEqual(8);
		expect(cuboid.rigidBody.transform.scale.z).toEqual(7);
		// Validate RAPIER rigidBody
		validateRapierRigidBody(
			cuboid.rigidBody.__RIGIDBODY__,
			cuboid.rigidBody.transform,
		);
	});
});
