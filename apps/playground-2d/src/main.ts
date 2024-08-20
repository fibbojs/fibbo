import './style.css'
import { F2dShapes, FCircle, FScene2d, FSprite, FSquare } from '@fibbojs/2d'
import { FDebug } from '@fibbojs/devtools'
import { FKeyboard } from '@fibbojs/event'
import MySquare from './classes/MySquare'

(async () => {
  const scene = new FScene2d()
  await scene.init()
  await scene.initPhysics()
  // Create the debugger
  // eslint-disable-next-line unused-imports/no-unused-vars
  const fDebugger = new FDebug(scene)

  // Create the ground
  const ground = new FSquare(scene, {
    position: { x: 0, y: 0 },
    scale: { x: 10, y: 0.1 },
  })
  ground.initCollider()
  scene.addComponent(ground)

  const square = new MySquare(scene)
  scene.addComponent(square)

  const square2 = new FSquare(scene, {
    position: { x: 0, y: 3 },
    scale: { x: 0.5, y: 0.5 },
    rotationDegree: 45,
  })
  square2.initCollider()
  scene.addComponent(square2)

  const square3 = new FSquare(scene, {
    position: { x: 4, y: 1 },
  })
  square3.initCollider({
    shape: F2dShapes.CIRCLE,
  })
  scene.addComponent(square3)

  const square4 = new FSquare(scene, {
    position: { x: -2.2, y: 1 },
    scale: { x: 0.5, y: 0.5 },
  })
  square4.initCollider()
  scene.addComponent(square4)

  const square5 = new FSquare(scene, {
    position: { x: 1, y: 2 },
    scale: { x: 0.5, y: 0.5 },
  })
  scene.addComponent(square5)

  const circle = new FCircle(scene, {
    position: { x: 0, y: 3 },
    scale: { x: 1, y: 1 },
  })
  circle.initRigidBody()
  scene.addComponent(circle)

  const sprite = new FSprite(scene, '/fibbo/playground-2d/bunny.png')
  sprite.onLoaded(() => {
    sprite.setPosition(2, 3)
    sprite.initRigidBody({
      lockRotations: true,
    })
    sprite.setScaleWidth(0.5)
    sprite.onCollisionWith(FSquare, () => {
      console.log('Sprite collided with a square!')
    })
    sprite.onCollisionWith(circle, () => {
      console.log('Sprite collided with the circle!')
    })
  })
  scene.addComponent(sprite)

  // Detect inputs to move the cube
  FKeyboard.on('ArrowUp', () => {
    sprite.rigidBody?.applyImpulse({ x: 0, y: 1 }, true)
  })
  FKeyboard.on('ArrowDown', () => {
    sprite.rigidBody?.applyImpulse({ x: 0, y: -1 }, true)
  })
  FKeyboard.on('ArrowLeft', () => {
    sprite.rigidBody?.applyImpulse({ x: -1, y: 0 }, true)
  })
  FKeyboard.on('ArrowRight', () => {
    sprite.rigidBody?.applyImpulse({ x: 1, y: 0 }, true)
  })
  FKeyboard.on(' ', () => {
    sprite.rigidBody?.applyImpulse({ x: 0, y: 2 }, true)
  })
})()
