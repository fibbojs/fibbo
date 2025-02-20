import type { FVector2, FVector3, FVector4 } from '@fibbojs/core'

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
    return radian * (180 / Math.PI)
  }

  /**
   * Convert an euler angle to a radian angle.
   * @param degree - The euler angle to convert.
   * @returns The radian angle.
   */
  static degreeToRad(degree: number): number {
    return degree * (Math.PI / 180)
  }

  /**
   * Convert a value from quaternion to a radian angle.
   * @param quaternion - The quaternion value to convert.
   * @returns The radian angle.
   */
  static quaternionToRad(quaternion: FVector4): FVector3 {
    return {
      x: Math.atan2(2 * (quaternion.w * quaternion.x + quaternion.y * quaternion.z), 1 - 2 * (quaternion.x ** 2 + quaternion.y ** 2)),
      y: Math.asin(2 * (quaternion.w * quaternion.y - quaternion.z * quaternion.x)),
      z: Math.atan2(2 * (quaternion.w * quaternion.z + quaternion.x * quaternion.y), 1 - 2 * (quaternion.y ** 2 + quaternion.z ** 2)),
    }
  }

  /**
   * Linearly interpolates between two FVector2 objects.
   * @param start The starting FVector2.
   * @param end The ending FVector2.
   * @param alpha The interpolation factor.
   * - 0 will be the start FVector2.
   * - 1 will be the end FVector2.
   * @returns The interpolated FVector2.
   */
  static lerp2(start: FVector2, end: FVector2, alpha: number): FVector2 {
    return {
      x: start.x + (end.x - start.x) * alpha,
      y: start.y + (end.y - start.y) * alpha,
    }
  }

  /**
   * Linearly interpolates between two FVector3 objects.
   * @param start The starting FVector3.
   * @param end The ending FVector3.
   * @param alpha The interpolation factor.
   *  - 0 will be the start FVector3.
   *  - 1 will be the end FVector3.
   * @returns The interpolated FVector3.
   */
  static lerp3(start: FVector3, end: FVector3, alpha: number): FVector3 {
    return {
      x: start.x + (end.x - start.x) * alpha,
      y: start.y + (end.y - start.y) * alpha,
      z: start.z + (end.z - start.z) * alpha,
    }
  }
}
