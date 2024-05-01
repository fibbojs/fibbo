import './style.css'
import { FibboScene } from '@fibbojs/fibbo'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'

const scene = new FibboScene(true)

const duck = new Duck()
scene.addModel(duck)

const cube = new GltfCube()
scene.addModel(cube)
