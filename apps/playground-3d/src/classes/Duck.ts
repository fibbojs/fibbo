import { FGLTF } from '@fibbojs/3d'
import type { FScene3d } from '@fibbojs/3d'

export default class Duck extends FGLTF {
  constructor(scene: FScene3d) {
    super(scene, {
      path: 'Duck.glb',
    })
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
