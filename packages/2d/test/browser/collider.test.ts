import { beforeEach, describe, expect, it } from 'vitest'
import RAPIER from '@dimforge/rapier2d'
import { FRectangle, FScene, FShapes } from '../../src'

function validateRapierCollider(collider: RAPIER.Collider, transform: {
  position: { x: number, y: number }
  rotation: number
  scale: { x: number, y: number }
  shape: RAPIER.ShapeType
}) {
  // Validate RAPIER collider
  expect(collider).toBeDefined()
  expect(collider.translation().x).toEqual(transform.position.x)
  expect(collider.translation().y).toEqual(transform.position.y)
  expect(collider.rotation()).closeTo(transform.rotation, 0.0001)
  expect(collider.shape).toBeDefined()
  expect(collider.shape.type).toEqual(transform.shape)
  if (transform.shape === RAPIER.ShapeType.Cuboid) {
    const colliderShape = collider.shape as RAPIER.Cuboid
    expect(colliderShape.halfExtents.x).toEqual(transform.scale.x)
    expect(colliderShape.halfExtents.y).toEqual(transform.scale.y)
  }
  else if (transform.shape === RAPIER.ShapeType.Ball) {
    const colliderShape = collider.shape as RAPIER.Ball
    expect(colliderShape.radius).toEqual(transform.scale.x)
  }
}

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
    const rectangle = new FRectangle({
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider()
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate offset
    expect(rectangle.collider.offset.position).toEqual({ x: 0, y: 0 })
    expect(rectangle.collider.offset.rotation).closeTo(0, 0.0001)
    expect(rectangle.collider.offset.scale).toEqual({ x: 0, y: 0 })
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(0)
    expect(rectangle.collider.transform.position.y).toEqual(0)
    expect(rectangle.collider.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(1)
    expect(rectangle.collider.transform.scale.y).toEqual(1)
    expect(rectangle.collider.shape).toEqual(FShapes.RECTANGLE)
    // Validate scaleX, scaleY
    rectangle.collider.transform.scaleX = 2
    rectangle.collider.transform.scaleY = 3
    expect(rectangle.collider.transform.scaleX).toEqual(2)
    expect(rectangle.collider.transform.scaleY).toEqual(3)
    expect(rectangle.collider.transform.scaleX).toEqual(rectangle.collider.transform.scale.x)
    expect(rectangle.collider.transform.scaleY).toEqual(rectangle.collider.transform.scale.y)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1.5 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should create a collider with custom transforms', () => {
    const rectangle = new FRectangle({
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 2 },
    })
    rectangle.initCollider({
      positionOffset: { x: -2, y: 3 },
      rotationOffset: 0.2,
      scaleOffset: { x: 2, y: 2 },
    })
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate offset
    expect(rectangle.collider.offset.position).toEqual({ x: -2, y: 3 })
    expect(rectangle.collider.offset.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.collider.offset.scale).toEqual({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(-1)
    expect(rectangle.collider.transform.position.y).toEqual(4)
    expect(rectangle.collider.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(3)
    expect(rectangle.collider.transform.scale.y).toEqual(4)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: -1, y: 4 },
      rotation: 0.3,
      scale: { x: 1.5, y: 2 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should create a collider with a circle shape', () => {
    const rectangle = new FRectangle({
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate shape
    expect(rectangle.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(0)
    expect(rectangle.collider.transform.position.y).toEqual(0)
    expect(rectangle.collider.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(1)
    expect(rectangle.collider.transform.scale.y).toEqual(1)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 0.5, y: 0.5 },
      shape: RAPIER.ShapeType.Ball,
    })
  })

  it('should modify collider transforms', () => {
    const rectangle = new FRectangle({
      position: { x: 1, y: 0 },
      rotation: 0.2,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider()
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(1)
    expect(rectangle.collider.transform.position.y).toEqual(0)
    expect(rectangle.collider.transform.rotation).toEqual(0.2)
    expect(rectangle.collider.transform.scale.x).toEqual(1)
    expect(rectangle.collider.transform.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.collider.transform.setPosition({ x: 1, y: 1 })
    rectangle.collider.transform.setRotation(0.3)
    rectangle.collider.transform.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(1)
    expect(rectangle.collider.transform.position.y).toEqual(1)
    expect(rectangle.collider.transform.rotation).toEqual(0.3)
    expect(rectangle.collider.transform.scale.x).toEqual(2)
    expect(rectangle.collider.transform.scale.y).toEqual(2)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 1, y: 1 },
      rotation: 0.3,
      scale: { x: 1, y: 1 },
      shape: RAPIER.ShapeType.Cuboid,
    })
    // Modify transforms with setters
    rectangle.collider.transform.position = { x: 2, y: 2 }
    rectangle.collider.transform.rotation = 0.4
    rectangle.collider.transform.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(2)
    expect(rectangle.collider.transform.position.y).toEqual(2)
    expect(rectangle.collider.transform.rotation).toEqual(0.4)
    expect(rectangle.collider.transform.scale.x).toEqual(3)
    expect(rectangle.collider.transform.scale.y).toEqual(4)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 2, y: 2 },
      rotation: 0.4,
      scale: { x: 1.5, y: 2 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should modify collider transforms with a circle shape', () => {
    const rectangle = new FRectangle({
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
    })
    rectangle.initCollider({
      shape: FShapes.CIRCLE,
    })
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate shape
    expect(rectangle.collider.shape).toEqual(FShapes.CIRCLE)
    expect(rectangle.collider.__COLLIDER__.shape).toBeDefined()
    expect(rectangle.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(0)
    expect(rectangle.collider.transform.position.y).toEqual(0)
    expect(rectangle.collider.transform.rotation).closeTo(0, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(1)
    expect(rectangle.collider.transform.scale.y).toEqual(1)
    // Modify transforms with functions
    rectangle.collider.transform.setPosition({ x: 1, y: 1 })
    rectangle.collider.transform.setRotation(0.2)
    rectangle.collider.transform.setScale({ x: 2, y: 2 })
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(1)
    expect(rectangle.collider.transform.position.y).toEqual(1)
    expect(rectangle.collider.transform.rotation).closeTo(0.2, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(2)
    expect(rectangle.collider.transform.scale.y).toEqual(2)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 1, y: 1 },
      rotation: 0.2,
      scale: { x: 1, y: 1 },
      shape: RAPIER.ShapeType.Ball,
    })
    // Modify transforms with setters
    rectangle.collider.transform.position = { x: 2, y: 2 }
    rectangle.collider.transform.rotation = 0.3
    rectangle.collider.transform.scale = { x: 3, y: 4 }
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(2)
    expect(rectangle.collider.transform.position.y).toEqual(2)
    expect(rectangle.collider.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(4)
    expect(rectangle.collider.transform.scale.y).toEqual(4)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 2, y: 2 },
      rotation: 0.3,
      scale: { x: 2, y: 2 },
      shape: RAPIER.ShapeType.Ball,
    })
  })

  it('should update collider transforms with attached component transforms', () => {
    const rectangle = new FRectangle({
      position: { x: 1, y: 1 },
      rotation: 0.1,
      scale: { x: 1, y: 2 },
    })
    rectangle.initCollider({
      positionOffset: { x: -2, y: 3 },
      rotationOffset: 0.2,
      scaleOffset: { x: 2, y: 2 },
    })
    expect(rectangle.collider).toBeDefined()
    if (!rectangle.collider)
      return
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(-1)
    expect(rectangle.collider.transform.position.y).toEqual(4)
    expect(rectangle.collider.transform.rotation).closeTo(0.3, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(3)
    expect(rectangle.collider.transform.scale.y).toEqual(4)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: -1, y: 4 },
      rotation: 0.3,
      scale: { x: 1.5, y: 2 },
      shape: RAPIER.ShapeType.Cuboid,
    })
    // Modify component transforms
    rectangle.transform.setPosition({ x: 2, y: 2 })
    rectangle.transform.setRotation(0.4)
    rectangle.transform.setScale({ x: 3, y: 4 })
    // Validate transforms
    expect(rectangle.collider.transform.position.x).toEqual(0)
    expect(rectangle.collider.transform.position.y).toEqual(5)
    expect(rectangle.collider.transform.rotation).closeTo(0.6, 0.0001)
    expect(rectangle.collider.transform.scale.x).toEqual(5)
    expect(rectangle.collider.transform.scale.y).toEqual(6)
    // Validate RAPIER collider
    validateRapierCollider(rectangle.collider.__COLLIDER__, {
      position: { x: 0, y: 5 },
      rotation: 0.6,
      scale: { x: 2.5, y: 3 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })
})
