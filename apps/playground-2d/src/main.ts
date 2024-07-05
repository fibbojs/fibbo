import './style.css'
import { FCircle, FScene2d, FSquare } from '@fibbojs/2d'
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

const square3 = new FSquare(scene)
square3.setPosition(4, 1)
square3.initCollider()
scene.addComponent(square3)

const square4 = new FSquare(scene)
square4.setPosition(-2.2, 1)
square4.setScale(0.5, 0.5)
square4.initCollider()
scene.addComponent(square4)

const circle = new FCircle(scene)
circle.setPosition(0, 3)
circle.setScale(1, 1)
circle.initRigidBody()
scene.addComponent(circle)

/*
const circle3 = new FCircle(scene)
circle3.setPosition(3, 1)
circle3.setScale(0.5, 0.5)
scene.addComponent(circle3)
*/
