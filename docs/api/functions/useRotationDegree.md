[@fibbojs/fibbo](/api/index)  / useRotationDegree

# Function: useRotationDegree

▸ **useRotationDegree**(`rotation?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`FibboVector3`](../interfaces/FibboVector3.md) | The rotation to be applied. |

#### Returns

`Function`

The class with the rotation altered.

**`Description`**

This decorator is used to alter the rotation of a FibboModel (like FibboCube, FibboGLTF, etc), using degrees.
It must be placed before useRigidBody.

**`Example`**

```ts
import { FibboCube, useRotationDegree } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@useRotationDegree({ x: 90, y: 0, z: 0 })
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

core/decorators/useRotationDegree.ts:27
