import { FibboFixedCamera, useLookAt, usePosition } from '@fibbojs/fibbo'

@useLookAt({ x: 0, y: 0, z: 0 })
@usePosition({ x: 5, y: 5, z: 5 })
export default class MyCamera extends FibboFixedCamera {
  constructor() {
    super()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
