/**
 * Round a given transform number
 */
export function roundTransform(value: number, length: number = 2): number {
	return Math.round(value * 10 ** length) / 10 ** length;
}
