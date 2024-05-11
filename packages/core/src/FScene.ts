import type { World as World3d } from '@dimforge/rapier3d'
import type { World as World2d } from '@dimforge/rapier2d'
import type { FCamera } from './FCamera'
import type { FComponent } from './FComponent'

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export abstract class FScene {
  components?: FComponent[]
  camera?: FCamera
  // Rapier
  gravity: { x: number, y: number, z: number } = { x: 0, y: -9.81, z: 0 }
  world?: World3d | World2d

  constructor() {
  }

  /**
   * @description Add a component to the scene.
   */
  abstract addComponent(component: FComponent): void
}
