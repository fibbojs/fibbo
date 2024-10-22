import { beforeEach, describe, expect, it } from 'vitest'
import RAPIER from '@dimforge/rapier2d'
import { FRectangle, FScene, FShapes } from '../../src'

function validateRapierRigidBody(rigidBody: RAPIER.RigidBody, transform: {
  position: { x: number, y: number }
  rotation: number
}) {
  // Validate RAPIER collider
  expect(rigidBody).toBeDefined()
  expect(rigidBody.translation().x).toEqual(transform.position.x)
  expect(rigidBody.translation().y).toEqual(transform.position.y)
  const rotation = rigidBody.rotation()
  expect(rotation).closeTo(transform.rotation, 0.0001)
}

describe('fRigidBody', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene({
      autoLoop: false,
    })
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a collider with default options', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody()
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate offset
    expect(rectangle.rigidBody.offset.position).toEqual({ x: 0, y: 0 })
    expect(rectangle.rigidBody.offset.rotation).toEqual(0)
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(0)
    expect(rectangle.rigidBody.transform.position.y).toEqual(0)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(1)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(1)
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.RECTANGLE)
    // Validate scaleX, scaleY
    rectangle.rigidBody.transform.scaleX = 2
    rectangle.rigidBody.transform.scaleY = 3
    expect(rectangle.rigidBody.transform.scaleX).toEqual(2)
    expect(rectangle.rigidBody.transform.scaleY).toEqual(3)
    expect(rectangle.rigidBody.transform.scaleX).toEqual(rectangle.rigidBody.transform.scale.x)
    expect(rectangle.rigidBody.transform.scaleY).toEqual(rectangle.rigidBody.transform.scale.y)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })

  it('should create a collider with custom transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 2 },
    })
    rectangle.initRigidBody({
      positionOffset: { x: -2, y: 3 },
      rotationOffset: 0.2,
      scaleOffset: { x: 2, y: 2 },
    })
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate offset
    expect(rectangle.rigidBody.offset.position).toEqual({ x: -2, y: 3 })
    expect(rectangle.rigidBody.offset.rotation).toEqual(0.2)
    expect(rectangle.rigidBody.collider.offset.scale).toEqual({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(-1)
    expect(rectangle.rigidBody.transform.position.y).toEqual(4)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(3)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(4)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })

  it('should create a collider with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate shape
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(0)
    expect(rectangle.rigidBody.transform.position.y).toEqual(0)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(1)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(1)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })

  it('should modify collider transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 0 },
      rotation: 0.2,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody()
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(1)
    expect(rectangle.rigidBody.transform.position.y).toEqual(0)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(1)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.rigidBody.transform.setPosition({ x: 1, y: 1 })
    rectangle.rigidBody.transform.setRotation(0.3)
    rectangle.rigidBody.transform.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(1)
    expect(rectangle.rigidBody.transform.position.y).toEqual(1)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(2)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(2)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
    // Modify transforms with setters
    rectangle.rigidBody.transform.position = { x: 2, y: 4 }
    rectangle.rigidBody.transform.rotation = 0.4
    rectangle.rigidBody.transform.scale = { x: 3, y: 5 }
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(2)
    expect(rectangle.rigidBody.transform.position.y).toEqual(4)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.4, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(3)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(5)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })

  it('should modify collider transforms with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate shape
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(0)
    expect(rectangle.rigidBody.transform.position.y).toEqual(0)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(1)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(1)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
    // Modify transforms with functions
    rectangle.rigidBody.transform.setPosition({ x: 1, y: 1 })
    rectangle.rigidBody.transform.setRotation(0.1)
    rectangle.rigidBody.transform.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(1)
    expect(rectangle.rigidBody.transform.position.y).toEqual(1)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.1, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(2)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(2)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
    // Modify transforms with setters
    rectangle.rigidBody.transform.position = { x: 2, y: 4 }
    rectangle.rigidBody.transform.rotation = 0.2
    rectangle.rigidBody.transform.scale = { x: 3, y: 5 }
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(2)
    expect(rectangle.rigidBody.transform.position.y).toEqual(4)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(5)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(5)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })

  it('should update collider transforms with attached component transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 0.5 },
    })
    rectangle.initRigidBody({
      positionOffset: { x: -2, y: 3 },
      rotationOffset: 0.2,
      scaleOffset: { x: 2, y: 4 },
    })
    expect(rectangle.rigidBody).toBeDefined()
    if (!rectangle.rigidBody)
      return
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(-1)
    expect(rectangle.rigidBody.transform.position.y).toEqual(4)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(3)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(4.5)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
    // Modify component transforms
    rectangle.transform.position = { x: 2, y: 2 }
    rectangle.transform.rotation = 0.2
    rectangle.transform.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.rigidBody.transform.position.x).toEqual(0)
    expect(rectangle.rigidBody.transform.position.y).toEqual(5)
    expect(rectangle.rigidBody.transform.rotation).closeTo(0.4, 0.0001)
    expect(rectangle.rigidBody.transform.scale.x).toEqual(5)
    expect(rectangle.rigidBody.transform.scale.y).toEqual(8)
    // Validate RAPIER rigidBody
    validateRapierRigidBody(rectangle.rigidBody.__RIGIDBODY__, rectangle.rigidBody.transform)
  })
})
