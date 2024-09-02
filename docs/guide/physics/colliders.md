# Colliders

Colliders represent the geometric shapes that generate contacts and collision events when they touch. Attaching one or multiple colliders to a rigid-body allow the rigid-body to be affected by contact forces.

The only use case for a collider without a rigid-body might be to create ground or walls that are not supposed to move and which you do not want to detect contacts against.

Any other use case might require attaching the collider to a rigid-body.

## Adding a collider to a component

Every [`FComponent`](/api/core/classes/FComponent) has a [`initCollider`](/api/3d/classes/FComponent#initcollider) method that allows you to create a collider and attach it to the component directly.

```typescript
import { FCuboid, FShape } from '@fibbojs/3d'

const cube = new FCuboid()
cube.initCollider({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  shape: FShape.CUBE
})
```

The [transform](/guide/core/transforms) of the component will be interpreted as relative to the collider. This means that if you set the position of the component to `{ x: 1, y: 1, z: 1 }` and the position of the collider to `{ x: 2, y: 0, z: 0 }`, the collider will be placed at `{ x: 3, y: 1, z: 1 }` in the scene.

This is particularly useful as it allows to position the collider by defining offsets from the component's origin.

## Creating a collider by hand

You can also directly use the [`FCollider`](/api/3d/classes/FCollider) class to create a collider and attach it to a component.

```typescript
import { FCollider, FCuboid, FShape } from '@fibbojs/3d'

const cube = new FCuboid()
cube.collider = new FCollider({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  shape: FShape.CUBE
})
```

To learn more about colliders, you can refer to the [Rapier documentation](https://rapier.rs/docs/user_guides/javascript/colliders).
