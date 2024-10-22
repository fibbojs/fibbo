# Colliders

Colliders represent the geometric shapes that generate contacts and collision events when they touch. Attaching one or multiple colliders to a rigidBody allow the rigidBody to be affected by contact forces.

The only use case for a collider without a rigidBody might be to create ground or walls that are not supposed to move and which you do not want to detect contacts against.

Any other use case might require attaching the collider to a rigidBody.

## Adding a collider to a component

Every [`FComponent`](/api/core/classes/FComponent) has an `initCollider` method that allows you to create a collider and attach it to the component directly.

::: code-group

```typescript [2d]
import { FRectangle, FShapes } from '@fibbojs/3d'

const rectangle = new FRectangle()
rectangle.initCollider({
  position: { x: 0, y: 0 },
  rotation: 0,
  rotationDegree: 0,
  scale: { x: 1, y: 1 },
  positionOffset: { x: 0, y: 0 },
  rotationOffset: 0,
  rotationDegreeOffset: 0,
  scaleOffset: { x: 1, y: 1 },
  shape: FShapes.RECTANGLE
})
```

```typescript [3d]
import { FCuboid, FShapes } from '@fibbojs/3d'

const cube = new FCuboid()
cube.initCollider({
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  positionOffset: { x: 0, y: 0, z: 0 },
  rotationOffset: { x: 0, y: 0, z: 0 },
  rotationDegreeOffset: { x: 0, y: 0, z: 0 },
  scaleOffset: { x: 1, y: 1, z: 1 },
  shape: FShapes.CUBOID
})
```

:::

As soon as a collider is attached to a component, the component's transform will be updated relatively to the collider's transform.

An offset can be applied to the collider's transform so it can be placed relatively to the component's transform.

To learn more about colliders, you can refer to the [Rapier documentation](https://rapier.rs/docs/user_guides/javascript/colliders).
