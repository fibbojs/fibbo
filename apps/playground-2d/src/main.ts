import './style.css'
import { FScene2d, FSquare } from '@fibbojs/2d'
import MySquare from './classes/MySquare'

const scene = new FScene2d()

const square = new MySquare(scene)
scene.addComponent(square)

const square2 = new FSquare(scene)
square2.setPosition(0, 3)
square2.setScale(0.5, 0.5)
square2.setRotationDegree(45)
square2.initCollider()
scene.addComponent(square2)
