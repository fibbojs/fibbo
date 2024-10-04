import { beforeEach, describe, expect, it } from 'vitest'
import { FCuboid, FScene, FShapes } from '@fibbojs/3d'
import RAPIER from '@dimforge/rapier3d'

describe('fCollider', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene()
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a collider with default options', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider()
    expect(cuboid.collider).toBeDefined()
    // Validate offset
    expect(cuboid.collider.__COLLIDER_POSITION_OFFSET__).toEqual({ x: 0, y: 0, z: 0 })
    expect(cuboid.collider.__COLLIDER_ROTATION_OFFSET__).toEqual({ x: 0, y: 0, z: 0 })
    expect(cuboid.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 1, y: 1, z: 1 })
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(0)
    expect(cuboid.collider.position.y).toEqual(0)
    expect(cuboid.collider.position.z).toEqual(0)
    expect(cuboid.collider.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(1)
    expect(cuboid.collider.scale.y).toEqual(1)
    expect(cuboid.collider.scale.z).toEqual(1)
    expect(cuboid.collider.shape).toEqual(FShapes.CUBOID)
    // Validate scaleX, scaleY and scaleZ
    cuboid.collider.scaleX = 2
    cuboid.collider.scaleY = 3
    cuboid.collider.scaleZ = 4
    expect(cuboid.collider.scaleX).toEqual(2)
    expect(cuboid.collider.scaleY).toEqual(3)
    expect(cuboid.collider.scaleZ).toEqual(4)
    expect(cuboid.collider.scaleX).toEqual(cuboid.collider.scale.x)
    expect(cuboid.collider.scaleY).toEqual(cuboid.collider.scale.y)
    expect(cuboid.collider.scaleZ).toEqual(cuboid.collider.scale.z)
  })

  it('should create a collider with custom transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 2, z: 3 },
    })
    cuboid.initCollider({
      position: { x: -2, y: 3, z: -4 },
      rotation: { x: -0.3, y: 0.2, z: 0.1 },
      scale: { x: 2, y: 2, z: 2 },
    })
    expect(cuboid.collider).toBeDefined()
    // Validate offset
    expect(cuboid.collider.__COLLIDER_POSITION_OFFSET__).toEqual({ x: -2, y: 3, z: -4 })
    expect(cuboid.collider.__COLLIDER_ROTATION_OFFSET__).toEqual({ x: -0.3, y: 0.2, z: 0.1 })
    expect(cuboid.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(-1)
    expect(cuboid.collider.position.y).toEqual(4)
    expect(cuboid.collider.position.z).toEqual(-3)
    expect(cuboid.collider.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(2)
    expect(cuboid.collider.scale.y).toEqual(4)
    expect(cuboid.collider.scale.z).toEqual(6)
  })

  it('should create a collider with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.collider).toBeDefined()
    // Validate shape
    expect(cuboid.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(0)
    expect(cuboid.collider.position.y).toEqual(0)
    expect(cuboid.collider.position.z).toEqual(0)
    expect(cuboid.collider.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(1)
    expect(cuboid.collider.scale.y).toEqual(1)
    expect(cuboid.collider.scale.z).toEqual(1)
  })

  it('should modify collider transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 0, z: 0 },
      rotation: { x: 0, y: 0.2, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider()
    expect(cuboid.collider).toBeDefined()
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(1)
    expect(cuboid.collider.position.y).toEqual(0)
    expect(cuboid.collider.position.z).toEqual(0)
    expect(cuboid.collider.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(1)
    expect(cuboid.collider.scale.y).toEqual(1)
    expect(cuboid.collider.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.collider.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.collider.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.collider.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(1)
    expect(cuboid.collider.position.y).toEqual(1)
    expect(cuboid.collider.position.z).toEqual(1)
    expect(cuboid.collider.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(2)
    expect(cuboid.collider.scale.y).toEqual(2)
    expect(cuboid.collider.scale.z).toEqual(2)
    // Modify transforms with setters
    cuboid.collider.position = { x: 2, y: 4, z: 6 }
    cuboid.collider.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.collider.scale = { x: 3, y: 4, z: 5 }
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(2)
    expect(cuboid.collider.position.y).toEqual(4)
    expect(cuboid.collider.position.z).toEqual(6)
    expect(cuboid.collider.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.6, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(3)
    expect(cuboid.collider.scale.y).toEqual(4)
    expect(cuboid.collider.scale.z).toEqual(5)
  })

  it('should modify collider transforms with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.collider).toBeDefined()
    // Validate shape
    expect(cuboid.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(0)
    expect(cuboid.collider.position.y).toEqual(0)
    expect(cuboid.collider.position.z).toEqual(0)
    expect(cuboid.collider.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(1)
    expect(cuboid.collider.scale.y).toEqual(1)
    expect(cuboid.collider.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.collider.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.collider.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.collider.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(1)
    expect(cuboid.collider.position.y).toEqual(1)
    expect(cuboid.collider.position.z).toEqual(1)
    expect(cuboid.collider.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(2)
    expect(cuboid.collider.scale.y).toEqual(2)
    expect(cuboid.collider.scale.z).toEqual(2)
    // Modify transforms with setters
    cuboid.collider.position = { x: 2, y: 4, z: 6 }
    cuboid.collider.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.collider.scale = { x: 3, y: 5, z: 4 }
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(2)
    expect(cuboid.collider.position.y).toEqual(4)
    expect(cuboid.collider.position.z).toEqual(6)
    expect(cuboid.collider.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.6, 0.0001)
    // Circle shape has the same scale for x, y and z (the highest value is used)
    expect(cuboid.collider.scale.x).toEqual(5)
    expect(cuboid.collider.scale.y).toEqual(5)
    expect(cuboid.collider.scale.z).toEqual(5)
  })

  it('should update collider transforms with attached component transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 0.5, z: 1 },
    })
    cuboid.initCollider({
      position: { x: -2, y: 3, z: -4 },
      rotation: { x: -0.3, y: 0.2, z: 0.1 },
      scale: { x: 2, y: 4, z: 2 },
    })
    expect(cuboid.collider).toBeDefined()
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(-1)
    expect(cuboid.collider.position.y).toEqual(4)
    expect(cuboid.collider.position.z).toEqual(-3)
    expect(cuboid.collider.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(2)
    expect(cuboid.collider.scale.y).toEqual(2)
    expect(cuboid.collider.scale.z).toEqual(2)
    // Modify component transforms
    cuboid.setPosition({ x: 2, y: 2, z: 6 })
    cuboid.setRotation({ x: 0.2, y: 0.4, z: 0.6 })
    cuboid.setScale({ x: 3, y: 4, z: 5 })
    // Validate transforms
    expect(cuboid.collider.position.x).toEqual(0)
    expect(cuboid.collider.position.y).toEqual(5)
    expect(cuboid.collider.position.z).toEqual(2)
    expect(cuboid.collider.rotation.x).closeTo(-0.1, 0.0001)
    expect(cuboid.collider.rotation.y).closeTo(0.6, 0.0001)
    expect(cuboid.collider.rotation.z).closeTo(0.7, 0.0001)
    expect(cuboid.collider.scale.x).toEqual(6)
    expect(cuboid.collider.scale.y).toEqual(16)
    expect(cuboid.collider.scale.z).toEqual(10)
  })
})
