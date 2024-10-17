import { beforeEach, describe, expect, it } from 'vitest'
import RAPIER from '@dimforge/rapier2d'
import { FRectangle, FScene, FShapes } from '../../src'

describe('fCollider', () => {
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
      rotationDegree: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider()
    expect(rectangle.collider).toBeDefined()
    // Validate offset
    expect(rectangle.collider.__COLLIDER_POSITION_OFFSET__).toEqual({ x: 0, y: 0 })
    expect(rectangle.collider.__COLLIDER_ROTATION_OFFSET__).toEqual(0)
    expect(rectangle.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 1, y: 1 })
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(0)
    expect(rectangle.collider.position.y).toEqual(0)
    expect(rectangle.collider.rotation).toEqual(0)
    expect(rectangle.collider.scale.x).toEqual(1)
    expect(rectangle.collider.scale.y).toEqual(1)
    expect(rectangle.collider.shape).toEqual(FShapes.RECTANGLE)
    // Validate scaleX and scaleY
    rectangle.collider.scaleX = 2
    rectangle.collider.scaleY = 3
    expect(rectangle.collider.scaleX).toEqual(2)
    expect(rectangle.collider.scaleY).toEqual(3)
    expect(rectangle.collider.scaleX).toEqual(rectangle.collider.scale.x)
    expect(rectangle.collider.scaleY).toEqual(rectangle.collider.scale.y)
  })

  it('should create a collider with custom transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 2 },
    })
    rectangle.initCollider({
      position: { x: -2, y: 3 },
      rotation: 0.3,
      scale: { x: 2, y: 2 },
    })
    expect(rectangle.collider).toBeDefined()
    // Validate offset
    expect(rectangle.collider.__COLLIDER_POSITION_OFFSET__).toEqual({ x: -2, y: 3 })
    expect(rectangle.collider.__COLLIDER_ROTATION_OFFSET__).toEqual(0.3)
    expect(rectangle.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(-1)
    expect(rectangle.collider.position.y).toEqual(4)
    expect(rectangle.collider.rotation).closeTo(0.4, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(2)
    expect(rectangle.collider.scale.y).toEqual(4)
  })

  it('should create a collider with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.collider).toBeDefined()
    // Validate shape
    expect(rectangle.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(0)
    expect(rectangle.collider.position.y).toEqual(0)
    expect(rectangle.collider.rotation).toEqual(0)
    expect(rectangle.collider.scale.x).toEqual(1)
    expect(rectangle.collider.scale.y).toEqual(1)
  })

  it('should modify collider transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider()
    expect(rectangle.collider).toBeDefined()
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(0)
    expect(rectangle.collider.position.y).toEqual(0)
    expect(rectangle.collider.rotation).toEqual(0)
    expect(rectangle.collider.scale.x).toEqual(1)
    expect(rectangle.collider.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.collider.setPosition({ x: 1, y: 1 })
    rectangle.collider.setRotation(0.1)
    rectangle.collider.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(1)
    expect(rectangle.collider.position.y).toEqual(1)
    expect(rectangle.collider.rotation).closeTo(0.1, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(2)
    expect(rectangle.collider.scale.y).toEqual(2)
    // Moify transforms with setters
    rectangle.collider.position = { x: 2, y: 2 }
    rectangle.collider.rotation = 0.2
    rectangle.collider.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(2)
    expect(rectangle.collider.position.y).toEqual(2)
    expect(rectangle.collider.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(3)
    expect(rectangle.collider.scale.y).toEqual(4)
  })

  it('should modify collider transforms with a circle shape', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.collider).toBeDefined()
    // Validate shape
    expect(rectangle.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(0)
    expect(rectangle.collider.position.y).toEqual(0)
    expect(rectangle.collider.rotation).toEqual(0)
    expect(rectangle.collider.scale.x).toEqual(1)
    expect(rectangle.collider.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.collider.setPosition({ x: 1, y: 1 })
    rectangle.collider.setRotation(0.1)
    rectangle.collider.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(1)
    expect(rectangle.collider.position.y).toEqual(1)
    expect(rectangle.collider.rotation).closeTo(0.1, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(2)
    expect(rectangle.collider.scale.y).toEqual(2)
    // Moify transforms with setters
    rectangle.collider.position = { x: 2, y: 2 }
    rectangle.collider.rotation = 0.2
    rectangle.collider.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(2)
    expect(rectangle.collider.position.y).toEqual(2)
    expect(rectangle.collider.rotation).closeTo(0.2, 0.0001)
    // Circle shape has the same scale for x and y (the highest value is used)
    expect(rectangle.collider.scale.x).toEqual(4)
    expect(rectangle.collider.scale.y).toEqual(4)
  })

  it('should update collider transforms with attached component transforms', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 0.5 },
    })
    rectangle.initCollider({
      position: { x: -2, y: 3 },
      rotation: 0.3,
      scale: { x: 2, y: 2 },
    })
    expect(rectangle.collider).toBeDefined()
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(-1)
    expect(rectangle.collider.position.y).toEqual(4)
    expect(rectangle.collider.rotation).closeTo(0.4, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(2)
    expect(rectangle.collider.scale.y).toEqual(1)
    // Modify component transforms
    rectangle.setPosition({ x: 2, y: 2 })
    rectangle.setRotation(0.2)
    rectangle.setScale({ x: 3, y: 4 })
    // Validate transforms
    expect(rectangle.collider.position.x).toEqual(0)
    expect(rectangle.collider.position.y).toEqual(5)
    expect(rectangle.collider.rotation).closeTo(0.5, 0.0001)
    expect(rectangle.collider.scale.x).toEqual(6)
    expect(rectangle.collider.scale.y).toEqual(8)
  })
})
