[@fibbojs/fibbo](/api/index)  / useScale

# Function: useScale

▸ **useScale**(`scale?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`FibboVector3`](../interfaces/FibboVector3.md) | The scale to be applied. |

#### Returns

`Function`

The class with the scale altered.

**`Description`**

This decorator is used to alter the scale of a FibboModel (like FibboCube, FibboGLTF, etc).
It must be placed before useRigidBody.

**`Example`**

```ts
import { FibboCube, useScale } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@useScale({ x: 1, y: 1, z: 1 })
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

core/decorators/useScale.ts:27
