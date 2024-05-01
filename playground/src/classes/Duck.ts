import { FibboGLTF } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

export default class Duck extends FibboGLTF {
  constructor(scene: FibboScene) {
    super(scene, 'Duck.glb')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
