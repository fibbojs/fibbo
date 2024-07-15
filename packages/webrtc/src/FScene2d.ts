import type { FComponent2d } from '@fibbojs/2d'
import { FScene2d as FScene2dLegacy } from '@fibbojs/2d'

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export class FScene2d extends FScene2dLegacy {
  constructor() {
    super()
  }

  /**
   * @description Add a component to the scene.
   */
  addComponent(component: FComponent2d): void {
    super.addComponent(component)
  }
}
