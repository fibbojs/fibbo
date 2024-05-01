import { FibboGLTF } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

export default class GltfCube extends FibboGLTF {
  constructor(scene: FibboScene) {
    super(scene, 'Cube.gltf')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
