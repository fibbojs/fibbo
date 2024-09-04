import './style.css'
import { FAttachedCamera, FCircle, FComponentEmpty, FRectangle, FScene, FShapes } from '@fibbojs/2d'
import { fDebug } from '@fibbojs/devtools'
import { FKeyboard } from '@fibbojs/event'
import MySquare from './classes/MySquare'
import { loadLevel } from './level'
import Character from './classes/Character'

(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

  // Create a death zone
  const deathZone = new FComponentEmpty(scene, {
    position: { x: 0, y: -5 },
    scale: { x: 20, y: 0.1 },
  })
  deathZone.initCollider()
  scene.addComponent(deathZone)

  // Load level
  loadLevel(scene)

  const square = new MySquare(scene)
  scene.addComponent(square)

  const square2 = new FRectangle(scene, {
    position: { x: 0, y: 3 },
    scale: { x: 0.5, y: 0.5 },
    rotationDegree: 45,
  })
  square2.initCollider({
    rotationDegree: 45,
  })
  scene.addComponent(square2)

  const square3 = new FRectangle(scene, {
    position: { x: 4, y: 1 },
  })
  square3.initCollider({
    shape: FShapes.CIRCLE,
  })
  scene.addComponent(square3)

  const square4 = new FRectangle(scene, {
    position: { x: -2.2, y: 1 },
    scale: { x: 0.5, y: 0.5 },
  })
  square4.initCollider({
    scale: { x: 1.5, y: 1.5 },
  })
  square4.initSensor({
    scale: { x: 2.5, y: 2.5 },
  })
  scene.addComponent(square4)

  const square5 = new FRectangle(scene, {
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

  /**
   * Create character
   */
  const character = new Character(scene)
  character.onCollisionWith(FRectangle, () => {
    console.log('Sprite collided with a square!')
  })
  character.onCollisionWith(circle, () => {
    console.log('Sprite collided with the circle!')
  })
  character.onCollisionWith(deathZone, () => {
    character.setPosition({ x: 0, y: 5 })
    console.log('Sprite collided with the death zone!')
  })
  scene.addComponent(character)

  // Create keyboard
  const keyboard = new FKeyboard(scene)
  keyboard.onKeyDown('p', () => {
    character.setPosition({ x: 0, y: 5 })

    // Remove a square
    scene.removeComponent(square4)
  })

  // Attach a camera to the character
  scene.camera = new FAttachedCamera(scene, {
    target: character,
  })
})()
