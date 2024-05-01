import { FibboGLTF } from '@fibbojs/fibbo'

export default class Character extends FibboGLTF {
  constructor() {
    super('Duck.glb')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
    this.object3D.rotation.x += 0.2 * delta
    this.object3D.rotation.y += 0.2 * delta
  }
}
