import { describe, expect, it } from "vitest";
import { FMathUtil } from "../../src";

describe("@fibbojs/util/FMathUtil should", () => {
	it("convert radian to degree", () => {
		expect(FMathUtil.radToDegree(Math.PI)).toEqual(180);
	});

	it("convert degree to radian", () => {
		expect(FMathUtil.degreeToRad(180)).toEqual(Math.PI);
	});

	it("convert quaternion to radian", () => {
		expect(FMathUtil.quaternionToRad({ x: 0, y: 0, z: 0, w: 1 })).toEqual({
			x: 0,
			y: 0,
			z: 0,
		});
		const euler1 = FMathUtil.quaternionToRad({
			x: Math.sqrt(2) / 2,
			y: 0,
			z: 0,
			w: Math.sqrt(2) / 2,
		});
		const euler1expect = { x: Math.PI / 2, y: 0, z: 0 };
		expect(euler1.x).closeTo(euler1expect.x, 0.0001);
		expect(euler1.y).closeTo(euler1expect.y, 0.0001);
		expect(euler1.z).closeTo(euler1expect.z, 0.0001);
		const euler2 = FMathUtil.quaternionToRad({
			x: 0,
			y: Math.sqrt(2) / 2,
			z: 0,
			w: Math.sqrt(2) / 2,
		});
		const euler2expect = { x: Math.PI, y: Number.NaN, z: Math.PI };
		expect(euler2.x).closeTo(euler2expect.x, 0.0001);
		expect(euler2.y).toBeNaN();
		expect(euler2.z).closeTo(euler2expect.z, 0.0001);
		const euler3 = FMathUtil.quaternionToRad({
			x: 0,
			y: 0,
			z: Math.sqrt(2) / 2,
			w: Math.sqrt(2) / 2,
		});
		const euler3expect = { x: 0, y: 0, z: Math.PI / 2 };
		expect(euler3.x).closeTo(euler3expect.x, 0.0001);
		expect(euler3.y).closeTo(euler3expect.y, 0.0001);
		expect(euler3.z).closeTo(euler3expect.z, 0.0001);
	});
});
