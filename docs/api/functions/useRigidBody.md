[@fibbojs/fibbo](/api/index)  / useRigidBody

# Function: useRigidBody

▸ **useRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | [`FVector3`](../interfaces/FVector3.md) | Position of the rigid body. |
| `scale?` | [`FVector3`](../interfaces/FVector3.md) | Scale of the rigid body. |
| `rotation?` | [`FVector3`](../interfaces/FVector3.md) | Rotation of the rigid body. |
| `shape?` | [`F3dShapes`](../enums/F3dShapes.md) | Shape of the rigid body. |

#### Returns

`Function`

The class with the rigid body added.

**`Description`**

This decorator is used to add a rigid body to a FModel (like FCube, FGLTF, etc).

If no position, scale or rotation is provided, the default values of the FModel will be used.

If no shape is provided, the decorator will try to detect a supported polygonal shape, otherwise it will default to a cube.

**`Example`**

```ts
import { FCube, useRigidBody } from '@fibbojs/fibbo'
import type { FScene } from '../FScene'

@useRigidBody()
export class MyCube extends FCube {
 constructor(scene: FScene) {
  super(scene)
 }

 onFrame(delta: number) {
  super.onFrame(delta)
 }
}
```

#### Defined in

[src/decorators/useRigidBody.ts:37](https://github.com/fibbojs/fibbo/blob/5920737a801142e4f9dd76a2bdfcee7b009224d4/src/decorators/useRigidBody.ts#L37)
