import type { FComponent } from '@fibbojs/core'

/**
 * Explore prototype chain of given FComponent to get all the classes in the chain.
 * For some reason, `instanceof` doesn't work in this context, so we have to do this.
 */
export function getPrototypeChain(component: FComponent) {
  let proto = component
  const names = []
  while (proto) {
    names.push(proto.constructor.name)
    proto = Object.getPrototypeOf(proto)
  }
  return names
}
