import { beforeEach, describe, expect, it } from 'vitest'
import { FRectangle, FScene, FShapes } from '@fibbojs/2d'
import RAPIER from '@dimforge/rapier2d'

describe('fRigidBody', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene()
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a rigidBody with default options', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody()
    expect(rectangle.rigidBody).toBeDefined()
    // Validate offset
    expect(rectangle.rigidBody.__RIGIDBODY_POSITION_OFFSET__).toEqual({ x: 0, y: 0 })
    expect(rectangle.rigidBody.__RIGIDBODY_ROTATION_OFFSET__).toEqual(0)
    expect(rectangle.rigidBody.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 1, y: 1 })
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(0)
    expect(rectangle.rigidBody.position.y).toEqual(0)
    expect(rectangle.rigidBody.rotation).toEqual(0)
    expect(rectangle.rigidBody.scale.x).toEqual(1)
    expect(rectangle.rigidBody.scale.y).toEqual(1)
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.RECTANGLE)
  })

  it('should create a rigidBody with custom transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 2 },
    })
    rectangle.initRigidBody({
      position: { x: -2, y: 3 },
      rotation: 0.3,
      scale: { x: 2, y: 2 },
    })
    expect(rectangle.rigidBody).toBeDefined()
    // Validate offset
    expect(rectangle.rigidBody.__RIGIDBODY_POSITION_OFFSET__).toEqual({ x: -2, y: 3 })
    expect(rectangle.rigidBody.__RIGIDBODY_ROTATION_OFFSET__).toEqual(0.3)
    expect(rectangle.rigidBody.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(-1)
    expect(rectangle.rigidBody.position.y).toEqual(4)
    expect(rectangle.rigidBody.rotation).closeTo(0.4, 0.0001)
    expect(rectangle.rigidBody.scale.x).toEqual(2)
    expect(rectangle.rigidBody.scale.y).toEqual(4)
  })

  it('should create a rigidBody with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.rigidBody).toBeDefined()
    // Validate shape
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(0)
    expect(rectangle.rigidBody.position.y).toEqual(0)
    expect(rectangle.rigidBody.rotation).toEqual(0)
    expect(rectangle.rigidBody.scale.x).toEqual(1)
    expect(rectangle.rigidBody.scale.y).toEqual(1)
  })

  it('should modify rigidBody transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody()
    expect(rectangle.rigidBody).toBeDefined()
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(0)
    expect(rectangle.rigidBody.position.y).toEqual(0)
    expect(rectangle.rigidBody.rotation).toEqual(0)
    expect(rectangle.rigidBody.scale.x).toEqual(1)
    expect(rectangle.rigidBody.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.rigidBody.setPosition({ x: 1, y: 1 })
    rectangle.rigidBody.setRotation(0.1)
    rectangle.rigidBody.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(1)
    expect(rectangle.rigidBody.position.y).toEqual(1)
    expect(rectangle.rigidBody.rotation).closeTo(0.1, 0.0001)
    expect(rectangle.rigidBody.scale.x).toEqual(2)
    expect(rectangle.rigidBody.scale.y).toEqual(2)
    // Moify transforms with setters
    rectangle.rigidBody.position = { x: 2, y: 2 }
    rectangle.rigidBody.rotation = 0.2
    rectangle.rigidBody.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(2)
    expect(rectangle.rigidBody.position.y).toEqual(2)
    expect(rectangle.rigidBody.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.rigidBody.scale.x).toEqual(3)
    expect(rectangle.rigidBody.scale.y).toEqual(4)
  })

  it('should modify rigidBody transforms with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initRigidBody({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.rigidBody).toBeDefined()
    // Validate shape
    expect(rectangle.rigidBody.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(0)
    expect(rectangle.rigidBody.position.y).toEqual(0)
    expect(rectangle.rigidBody.rotation).toEqual(0)
    expect(rectangle.rigidBody.scale.x).toEqual(1)
    expect(rectangle.rigidBody.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.rigidBody.setPosition({ x: 1, y: 1 })
    rectangle.rigidBody.setRotation(0.1)
    rectangle.rigidBody.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(1)
    expect(rectangle.rigidBody.position.y).toEqual(1)
    expect(rectangle.rigidBody.rotation).closeTo(0.1, 0.0001)
    expect(rectangle.rigidBody.scale.x).toEqual(2)
    expect(rectangle.rigidBody.scale.y).toEqual(2)
    // Moify transforms with setters
    rectangle.rigidBody.position = { x: 2, y: 2 }
    rectangle.rigidBody.rotation = 0.2
    rectangle.rigidBody.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.rigidBody.position.x).toEqual(2)
    expect(rectangle.rigidBody.position.y).toEqual(2)
    expect(rectangle.rigidBody.rotation).closeTo(0.2, 0.0001)
    // Circle shape has the same scale for x and y (the highest value is used)
    expect(rectangle.rigidBody.scale.x).toEqual(4)
    expect(rectangle.rigidBody.scale.y).toEqual(4)
  })
})
