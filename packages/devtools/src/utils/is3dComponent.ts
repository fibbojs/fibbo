import type { FComponent } from '@fibbojs/core'
import { getPrototypeChain } from './getPrototypeChain'

// Tell if a given FComponent is an instance of FComponent3d
export function is3dComponent(component: FComponent) {
  return getPrototypeChain(component).includes('FComponent3d')
}
