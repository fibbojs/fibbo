import type { World } from '@dimforge/rapier2d'
import { FScene } from '@fibbojs/core'
import type { FComponent2d } from './FComponent2d'

/**
 * @description A scene which contains the models, the Three.js scene and the Rapier world.
 * @category Core
 * @example
 * ```ts
 * import { FScene } from './FScene'
 * import { MyCube } from './model/MyCube'
 *
 * const scene = new FScene()
 * const cube = new MyCube(scene)
 * scene.addModel(cube)
 * ```
 */
export class FScene2d extends FScene {
  components: FComponent2d[]
  declare world?: World

  constructor() {
    super()
    this.components = []
  }

  addComponent(model: FComponent2d) {
    this.components.push(model)
  }
}
