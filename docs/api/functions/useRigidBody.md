[@fibbojs/fibbo](/api/index)  / useRigidBody

# Function: useRigidBody

▸ **useRigidBody**(`position?`, `scale?`, `rotation?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `Fibbo3DVector` | Default position. |
| `scale` | `Fibbo3DVector` | Default scale. |
| `rotation` | `Fibbo3DVector` | Default rotation. |

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

core/decorators/useRigidBody.ts:25
