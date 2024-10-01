import { beforeEach, describe, expect, it } from 'vitest'
import { FRectangle, FScene, FShapes } from '@fibbojs/2d'
import RAPIER from '@dimforge/rapier2d'

describe('fCollider', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene()
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a collider with default options', () => {
    const rectangle = new FRectangle(scene, {
      position: { x: 0, y: 0 },
      rotation: 0,
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
})
