import './style.css'
import { FScene2d } from '@fibbojs/2d'
import MySquare from './classes/MySquare'

const scene = new FScene2d()

const square = new MySquare()
scene.addComponent(square)
