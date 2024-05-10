[@fibbojs/fibbo](/api/index)  / usePosition

# Function: usePosition

▸ **usePosition**(`position?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`FVector3`](../interfaces/FVector3.md) | The position to be applied. |

#### Returns

`Function`

The FComponent with the position altered.

**`Description`**

This decorator is used to alter the position of a FComponent (like a FModel or a FCamera).
It must be placed before useRigidBody.

**`Example`**

```ts
import { FCube, usePosition } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

@usePosition({ x: 1, y: 1, z: 1 })
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

[src/decorators/usePosition.ts:30](https://github.com/fibbojs/fibbo/blob/5920737a801142e4f9dd76a2bdfcee7b009224d4/src/decorators/usePosition.ts#L30)
