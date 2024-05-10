import { FSphere, usePosition, useRigidBody } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

@useRigidBody()
@usePosition({ x: -2, y: 3, z: -2 })
export default class MySphere extends FSphere {
  constructor(scene: FScene) {
    super(scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
