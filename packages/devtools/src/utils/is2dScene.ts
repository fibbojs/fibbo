import type { FScene } from '@fibbojs/core'
import { getPrototypeChain } from './getPrototypeChain'

// Tell if a given FScene is an instance of FScene2d
export function is2dScene(scene: FScene) {
  return getPrototypeChain(scene).includes('FScene2d')
}
