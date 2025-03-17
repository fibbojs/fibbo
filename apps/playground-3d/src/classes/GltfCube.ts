import { FGLTF } from '@fibbojs/3d'

export default class GltfCube extends FGLTF {
  constructor() {
    super({
      name: 'Cube',
    })
    this.transform.position = { x: -4, y: 5, z: 2 }
    this.transform.rotationDegree = { x: 20, y: 0, z: 0 }
    this.transform.scale = { x: 2, y: 0.25, z: 2 }
    this.initRigidBody()
  }
}
