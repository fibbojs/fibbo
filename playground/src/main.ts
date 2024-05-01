import './style.css'
import { FibboScene } from '@fibbojs/fibbo'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'

const scene = new FibboScene(true)

const duck = new Duck(scene)
scene.addModel(duck)

const gltfCube = new GltfCube(scene)
scene.addModel(gltfCube)

setTimeout(() => {
  gltfCube.rigidBody?.applyImpulse({ x: 0, y: 5, z: 0 }, true)
}, 2000)
