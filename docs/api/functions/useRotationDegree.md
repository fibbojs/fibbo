[@fibbojs/fibbo](/api/index)  / useRotationDegree

# Function: useRotationDegree

▸ **useRotationDegree**(`rotation?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`FVector3`](../interfaces/FVector3.md) | The rotation to be applied. |

#### Returns

`Function`

The class with the rotation altered.

**`Description`**

This decorator is used to alter the rotation of a FModel (like FCube, FGLTF, etc), using degrees.
It must be placed before useRigidBody.

**`Example`**

```ts
import { FCube, useRotationDegree } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

@useRotationDegree({ x: 90, y: 0, z: 0 })
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

[src/decorators/useRotationDegree.ts:27](https://github.com/fibbojs/fibbo/blob/5920737a801142e4f9dd76a2bdfcee7b009224d4/src/decorators/useRotationDegree.ts#L27)
