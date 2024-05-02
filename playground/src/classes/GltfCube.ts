import { FibboGLTF, useRigidBody } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@useRigidBody()
export default class GltfCube extends FibboGLTF {
  constructor(scene: FibboScene) {
    super(scene, 'Cube.gltf')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
