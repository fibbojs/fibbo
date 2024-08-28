import { FGLTF } from '@fibbojs/3d'
import type { FScene } from '@fibbojs/3d'

export default class GltfCube extends FGLTF {
  constructor(scene: FScene) {
    super(scene, {
      name: 'Cube',
    })
    this.setPosition(-4, 5, 2)
    this.setScale(2, 0.25, 2)
    this.setRotationDegree(20, 0, 0)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
