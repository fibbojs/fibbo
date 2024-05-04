[@fibbojs/fibbo](/api/index)  / useRigidBody

# Function: useRigidBody

▸ **useRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | [`FibboVector3`](../interfaces/FibboVector3.md) | Position of the rigid body. |
| `scale?` | [`FibboVector3`](../interfaces/FibboVector3.md) | Scale of the rigid body. |
| `rotation?` | [`FibboVector3`](../interfaces/FibboVector3.md) | Rotation of the rigid body. |
| `shape?` | [`Fibbo3dShapes`](../enums/Fibbo3dShapes.md) | Shape of the rigid body. |

#### Returns

`Function`

The class with the rigid body added.

**`Description`**

This decorator is used to add a rigid body to a FibboModel (like FibboCube, FibboGLTF, etc).

If no position, scale or rotation is provided, the default values of the FibboModel will be used.

If no shape is provided, the decorator will try to detect a supported polygonal shape, otherwise it will default to a cube.

**`Example`**

```ts
import { FibboCube, useRigidBody } from '@fibbojs/fibbo'
import type { FibboScene } from '../FibboScene'

@useRigidBody()
export class MyCube extends FibboCube {
 constructor(scene: FibboScene) {
  super(scene)
 }

 onFrame(delta: number) {
  super.onFrame(delta)
 }
}
```

#### Defined in

src/decorators/useRigidBody.ts:37
