import * as THREE from 'three'

export abstract class FibboModel {
  object3D: THREE.Object3D
  physics: boolean = false
  collision: boolean = false

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.object3D = new THREE.Object3D()
    this.object3D.position.set(x, y, z)
  }

  onFrame(delta: number): void {
    if (this.physics)
      // TODO: Implement physics
      console.log(`Physics enabled : ${delta}`)
  }
}
