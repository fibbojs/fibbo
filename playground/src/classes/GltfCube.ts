import { FibboGLTF } from '@fibbojs/fibbo'

export default class GltfCube extends FibboGLTF {
  constructor() {
    super('Cube.gltf', 2, 0, -2)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
    this.object3D.rotation.x += 0.2 * delta
    this.object3D.rotation.y += 0.2 * delta
  }
}
