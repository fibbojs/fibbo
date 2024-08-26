import { FGLB } from '@fibbojs/3d'
import type { FScene3d } from '@fibbojs/3d'

export default class Duck extends FGLB {
  constructor(scene: FScene3d) {
    super(scene, {
      name: 'Duck',
    })
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
