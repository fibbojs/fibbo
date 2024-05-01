import { FibboGLTF } from '@fibbojs/fibbo'

export default class Duck extends FibboGLTF {
  constructor() {
    super('Duck.glb')
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
