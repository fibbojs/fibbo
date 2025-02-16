import { FCharacterControllerKP, FFBX } from '@fibbojs/3d'
import type { FRigidBodyOptions, FScene } from '@fibbojs/3d'

export default class Character extends FFBX {
  constructor(scene: FScene) {
    super(scene, {
      name: 'character-female-e',
      position: { x: 0, y: 10, z: 0 },
      scale: { x: 2, y: 2, z: 2 },
    })

    // Initialize the character controller
    this.addController(new FCharacterControllerKP(scene, {
      component: this,
    }))
  }

  initRigidBody(options?: FRigidBodyOptions) {
    super.initRigidBody({
      positionOffset: { x: 0, y: 0.25, z: 0 },
      scaleOffset: { x: -1.5, y: -1.5, z: -1.5 },
      ...options,
    })
  }

  initSensor(options?: FRigidBodyOptions) {
    super.initSensor({
      ...options,
      positionOffset: { x: 0, y: 0.25, z: 0 },
      scaleOffset: { x: -1.3, y: -1.8, z: -1.3 },
    })
  }
}
