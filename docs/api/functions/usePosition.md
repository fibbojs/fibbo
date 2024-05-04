[@fibbojs/fibbo](/api/index)  / usePosition

# Function: usePosition

▸ **usePosition**(`position?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`FibboVector3`](../interfaces/FibboVector3.md) | The position to be applied. |

#### Returns

`Function`

The FibboComponent with the position altered.

**`Description`**

This decorator is used to alter the position of a FibboComponent (like a FibboModel or a FibboCamera).
It must be placed before useRigidBody.

**`Example`**

```ts
import { FibboCube, usePosition } from '@fibbojs/fibbo'
import type { FibboScene } from '@fibbojs/fibbo'

@usePosition({ x: 1, y: 1, z: 1 })
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

src/decorators/usePosition.ts:30
