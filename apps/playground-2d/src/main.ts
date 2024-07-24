import './style.css'
import { FCircle, FScene2d, FSprite, FSquare } from '@fibbojs/2d'
import MySquare from './classes/MySquare'

(async () => {
  const scene = new FScene2d({ debug: true })
  await scene.init()
  await scene.initPhysics()

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

  const square5 = new FSquare(scene)
  square5.setPosition(1, 2)
  square5.setScale(0.5, 0.5)
  scene.addComponent(square5)

  const circle = new FCircle(scene)
  circle.setPosition(0, 3)
  circle.setScale(1, 1)
  circle.initRigidBody()
  scene.addComponent(circle)

  const sprite = new FSprite(scene, '/fibbo/playground-2d/bunny.png')
  sprite.onLoaded(() => {
    sprite.setPosition(2, 3)
    sprite.initRigidBody()
    sprite.setScaleWidth(0.5)
  })
  scene.addComponent(sprite)
})()
