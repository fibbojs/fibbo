[@fibbojs/fibbo](/api/index)  / useRigidBody

# Function: useRigidBody

▸ **useRigidBody**(`position?`, `scale?`, `rotation?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Fibbo3DVector`](../interfaces/Fibbo3DVector.md) | Default position. |
| `scale` | [`Fibbo3DVector`](../interfaces/Fibbo3DVector.md) | Default scale. |
| `rotation` | [`Fibbo3DVector`](../interfaces/Fibbo3DVector.md) | Default rotation. |

#### Returns

`Function`

The class with the rigid body added.

**`Description`**

This decorator is used to add a rigid body to a FibboModel (like FibboCube, FibboGLTF, etc).

**`Example`**

```ts
import { FibboModel } from './FibboModel'
import type { FibboScene } from '../FibboScene'
import { useRigidBody } from '../decorators/useRigidBody'

@useRigidBody()
export class MyModel extends FibboModel {
 constructor(scene: FibboScene) {
  super(scene)
 }
}
```

#### Defined in

[core/decorators/useRigidBody.ts:25](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/decorators/useRigidBody.ts#L25)
