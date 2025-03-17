# Collisions

Collisions events are triggered when two objects collide with each other. This can be used to detect when a player touches a coin, or when a bullet hits an enemy.

## Initialization

To enable collisions events to be emitted on a component, you need to initialize a sensor on it. A sensor is a essentially a [rigidBody](/guide/physics/rigidbody) with the sensor flag (which mean it does not affect the physics simulation). It only emits events when it collides with another collider.

The available parameters are the same as for a [rigidBody](/guide/physics/rigidbody).

::: code-group

```typescript [2d]
import { FRectangle, FShapes } from '@fibbojs/2d'

const rectangle = new FRectangle()
rectangle.initSensor({
  position: { x: 0, y: 0 },
  rotation: 0,
  rotationDegree: 0,
  scale: { x: 1, y: 1 },
  shape: FShapes.RECTANGLE
})
```

```typescript [3d]
import { FCuboid, FShapes } from '@fibbojs/3d'

const cube = new FCuboid()
cube.initSensor({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

:::

## Listening to collisions

Every [`FComponent`](/api/core/classes/FComponent) has a [`onCollisionWith`](/api/core/classes/FComponent#oncollisionwith) method that allows you to listen to collisions events.

::: code-group

```typescript [2d]
import { FCircle, FRectangle } from '@fibbojs/2d'

const rectangle = new FRectangle()
const circle = new FCircle()

// Detect collisions with all rectangles
rectangle.onCollisionWith(FRectangle, ({ component }) => {
  console.log('Collision with a rectangle :', component)
})
// Detect collisions with the circle
rectangle.onCollisionWith(circle, () => {
  console.log('Collision with the circle')
})
```

```typescript [3d]
import { FCuboid, FSphere } from '@fibbojs/3d'

const cube = new FCuboid()
const sphere = new FSphere()

// Detect collisions with all cuboids
cube.onCollisionWith(FCuboid, ({ component }) => {
  console.log('Collision with a cuboid :', component)
})
// Detect collisions with the sphere
cube.onCollisionWith(sphere, () => {
  console.log('Collision with the sphere')
})
```

:::

## Getting data about the collision

When a collision event is triggered, you can get [data about the collision](/api/core/interfaces/OnCollisionWithData).

For now, the only data available is the component that the collision event is triggered on.
