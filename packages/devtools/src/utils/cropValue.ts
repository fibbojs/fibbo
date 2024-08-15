/**
 * Crop a given value to a certain length.
 * Always convert to string and return as string.
 */
export function cropValue(value: any, length: number = 5): string {
  const str = String(value)
  return str.length > length ? str.slice(0, length) : str
}
