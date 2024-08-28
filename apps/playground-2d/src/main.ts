import './style.css'
import { FAttachedCamera, FCharacterKV, FCircle, FScene, FShapes, FSprite, FSquare } from '@fibbojs/2d'
import { fDebug } from '@fibbojs/devtools'
import MySquare from './classes/MySquare'

(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

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
    shape: FShapes.CIRCLE,
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

  // Create a sprite
  const sprite = new FSprite(scene, '/fibbo/playground-2d/bunny.png')
  sprite.onLoaded(() => {
    sprite.setPosition(2, 3)
    sprite.initRigidBody({
      lockRotations: true,
    })
    sprite.setScaleWidth(0.5)
  })
  scene.addComponent(sprite)

  /**
   * Create character
   */
  const character = new FCharacterKV(scene)
  character.onCollisionWith(FSquare, () => {
    console.log('Sprite collided with a square!')
  })
  character.onCollisionWith(circle, () => {
    console.log('Sprite collided with the circle!')
  })
  scene.addComponent(character)

  // Attach a camera to the character
  scene.camera = new FAttachedCamera(scene, {
    target: character,
  })
})()
