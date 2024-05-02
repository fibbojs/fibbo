import { FibboSphere, usePosition, useRigidBody } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@useRigidBody()
@usePosition({ x: -2, y: 3, z: -2 })
export default class MySphere extends FibboSphere {
  constructor(scene: FibboScene) {
    super(scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
