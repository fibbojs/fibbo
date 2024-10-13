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
  square5.initSensor()
  scene.addComponent(square5)

  const circle = new FCircle(scene, {
    position: { x: 0, y: 3 },
    scale: { x: 1, y: 1 },
  })
  circle.initRigidBody()
  scene.addComponent(circle)

  // Create a rotating square
  const rotatingSquare = new FRectangle(scene, {
    position: { x: 0, y: 5 },
  })
  rotatingSquare.initSensor()
  let totalDelta = 0
  scene.addComponent(rotatingSquare)
  scene.onFrame((delta) => {
    // Each frame, move the cube on a circle of radius 3
    const x = Math.cos(totalDelta) * 3
    const y = Math.sin(totalDelta) * 3
    rotatingSquare.setPosition({ x, y })
    totalDelta += delta
  })

  /**
   * Create character
   */
  const character = new Character(scene)
  const removeCollisionCallbackWithFRectangle = character.onCollisionWith(FRectangle, ({ component }) => {
    console.log('Sprite collided with a square!')
    // Cast the component to FRectangle
    const square = component as FRectangle
    // Change the color of the square to a random color
    square.__CONTAINER__.tint = Math.random() * 0xFFFFFF
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

    // Remove the collision callback with FRectangle
    removeCollisionCallbackWithFRectangle()

    // Make character 2 times bigger on Y axis
    character.setScale({ x: 0.5, y: 1 })

    // Zoom in the camera
    scene.camera.setZoom(1)
  })

  // Attach a camera to the character
  scene.camera = new FAttachedCamera(scene, {
    target: character,
  })
})()
