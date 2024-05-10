import { FCube, usePosition, useRigidBody, useRotationDegree, useScale } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

@useRigidBody()
@usePosition({ x: 4, y: 5, z: -2 })
@useScale({ x: 2, y: 0.5, z: 1 })
@useRotationDegree({ x: 60, y: 0, z: 0 })
export default class MyCube extends FCube {
  constructor(scene: FScene) {
    super(scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
