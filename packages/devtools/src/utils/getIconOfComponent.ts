import type { FComponent } from '@fibbojs/core'
import { FComponentIconSet } from '../components/icons/FComponentIconSet'
import { getPrototypeChain } from './getPrototypeChain'

/**
 * Get the icon of the component.
 */
export function getIconOfComponent(component: FComponent): FComponentIconSet {
  const chain = getPrototypeChain(component)
  // Return a default icon if the chain is empty
  if (chain.length === 0)
    return FComponentIconSet.Square
  // Get the icon of the component
  if (chain.includes('FCuboid'))
    return FComponentIconSet.Cube
  if (chain.includes('FSphere'))
    return FComponentIconSet.Sphere
  if (chain.includes('FCapsule'))
    return FComponentIconSet.Capsule
  if (chain.includes('FCharacter') || chain.includes('FCharacter'))
    return FComponentIconSet.Character
  if (chain.includes('FCamera'))
    return FComponentIconSet.Camera
  if (chain.includes('FLight'))
    return FComponentIconSet.Light
  if (chain.includes('FModel'))
    return FComponentIconSet.Mesh
  if (chain.includes('FRectangle'))
    return FComponentIconSet.Square
  if (chain.includes('FCircle'))
    return FComponentIconSet.Circle
  if (chain.includes('FSprite'))
    return FComponentIconSet.Sprite
  // Return a default icon if the component is not recognized
  return FComponentIconSet.Square
}
