import { FGLTF } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

export default class GltfCube extends FGLTF {
  constructor(scene: FScene) {
    super(scene, 'Cube.gltf')
    this.setPosition(-4, 5, 2)
    this.setScale(2, 0.25, 2)
    this.setRotationDegree(20, 0, 0)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
