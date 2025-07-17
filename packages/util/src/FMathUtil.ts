import type { FVector3, FVector4 } from "@fibbojs/core";

/**
 * A class that provides math utilities.
 * @category Core
 */
export class FMathUtil {
	/**
	 * Convert a radian angle to a euler angle.
	 * @param radian - The radian angle to convert.
	 * @returns The euler angle.
	 */
	static radToDegree(radian: number): number {
		return radian * (180 / Math.PI);
	}

	/**
	 * Convert an euler angle to a radian angle.
	 * @param degree - The euler angle to convert.
	 * @returns The radian angle.
	 */
	static degreeToRad(degree: number): number {
		return degree * (Math.PI / 180);
	}

	/**
	 * Convert a value from quaternion to a radian angle.
	 * @param quaternion - The quaternion value to convert.
	 * @returns The radian angle.
	 */
	static quaternionToRad(quaternion: FVector4): FVector3 {
		return {
			x: Math.atan2(
				2 * (quaternion.w * quaternion.x + quaternion.y * quaternion.z),
				1 - 2 * (quaternion.x ** 2 + quaternion.y ** 2),
			),
			y: Math.asin(
				2 * (quaternion.w * quaternion.y - quaternion.z * quaternion.x),
			),
			z: Math.atan2(
				2 * (quaternion.w * quaternion.z + quaternion.x * quaternion.y),
				1 - 2 * (quaternion.y ** 2 + quaternion.z ** 2),
			),
		};
	}
}
