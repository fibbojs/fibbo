import type { FScene } from '@fibbojs/core'
import { getPrototypeChain } from './getPrototypeChain'

// Tell if a given FScene is an instance of FScene3d
export function is3dScene(scene: FScene) {
  return getPrototypeChain(scene).includes('FScene3d')
}
