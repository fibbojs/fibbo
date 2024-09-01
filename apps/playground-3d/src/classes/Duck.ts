import { FGLB } from '@fibbojs/3d'
import type { FScene } from '@fibbojs/3d'

export default class Duck extends FGLB {
  constructor(scene: FScene) {
    super(scene, {
      name: 'Duck',
    })
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
