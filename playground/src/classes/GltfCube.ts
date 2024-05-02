import { FibboGLTF, usePosition, useRigidBody, useRotationDegree, useScale } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@useRigidBody()
@usePosition({ x: -4, y: 5, z: 2 })
@useScale({ x: 2, y: 0.25, z: 2 })
@useRotationDegree({ x: 20, y: 0, z: 0 })
export default class GltfCube extends FibboGLTF {
  constructor(scene: FibboScene) {
    super(scene, 'Cube.gltf')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
