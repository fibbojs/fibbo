import { FGLTF } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

export default class Duck extends FGLTF {
  constructor(scene: FScene) {
    super(scene, 'Duck.glb')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
