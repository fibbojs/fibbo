# Collisions

Collisions events are triggered when two objects collide with each other. This can be used to detect when a player touches a coin, or when a bullet hits an enemy.

## Initialization

To enable collisions events to be emitted on a component, you need to initialize a sensor collider on it. A sensor collider is a collider that does not affect the physics simulation, but only emits events when it collides with another collider.

The available parameters are the same as for a [collider](/guide/physics/colliders).

```typescript
import { FCuboid, FShape } from '@fibbojs/3d'

const cube = new FCuboid()
cube.initSensor({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotationDegree: { x: 0, y: 0, z: 0 }
  shape: FShape.CUBE,
})
```

## Listening to collisions

Every [`FComponent`](/api/core/classes/FComponent) has a [`onCollisionWith`](/api/core/classes/FComponent#oncollisionwith) method that allows you to listen to collisions events.

```typescript
import { FCuboid, FSphere } from '@fibbojs/3d'

const cube = new FCuboid()
const sphere = new FSphere()

cube.onCollisionWith((FCuboid) => {
  console.log('Collision with a cuboid')
})
cube.onCollisionWith((sphere) => {
  console.log('Collision with the sphere')
})
```

You can either listen to collisions with a specific component type, or with any component class.

Note that if you give a class and the component collide with a component extending this class, the event will be triggered.

For example :

```typescript
import { FCuboid } from '@fibbojs/3d'
import type { FComponentOptions } from '@fibbojs/3d'

class MyCuboid extends FCuboid {
  constructor(options?: FComponentOptions) {
    super(options)
  }
}

const cube = new FCuboid()
const myCube = new MyCuboid()

cube.onCollisionWith((FCuboid) => {
  console.log('Collision with a cuboid')
})
```

In this example, the event will be triggered when the `cube` collides with the `myCube` because `MyCuboid` extends `FCuboid`.
