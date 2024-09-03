import { FCharacterControllerKP, FSprite } from '@fibbojs/2d'
import type { FScene } from '@fibbojs/2d'

export default class Character extends FSprite {
  constructor(scene: FScene) {
    super(scene, {
      texture: 'character_0000.png',
      position: { x: 0, y: 5 },
      scale: { x: 0.5, y: 0.5 },
    })

    // Initialize the character controller
    this.controller = new FCharacterControllerKP(scene, {
      component: this,
    })
  }
}
