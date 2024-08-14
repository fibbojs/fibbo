import type { FComponent } from '@fibbojs/core'
import { getPrototypeChain } from './getPrototypeChain'

// Tell if a given FComponent is an instance of FComponent2d
export function is2dComponent(component: FComponent) {
  return getPrototypeChain(component).includes('FComponent2d')
}
