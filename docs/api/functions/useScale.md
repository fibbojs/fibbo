[@fibbojs/fibbo](/api/index)  / useScale

# Function: useScale

▸ **useScale**(`scale?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`FVector3`](../interfaces/FVector3.md) | The scale to be applied. |

#### Returns

`Function`

The class with the scale altered.

**`Description`**

This decorator is used to alter the scale of a FModel (like FCube, FGLTF, etc).
It must be placed before useRigidBody.

**`Example`**

```ts
import { FCube, useScale } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

@useScale({ x: 1, y: 1, z: 1 })
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

[src/decorators/useScale.ts:27](https://github.com/fibbojs/fibbo/blob/5920737a801142e4f9dd76a2bdfcee7b009224d4/src/decorators/useScale.ts#L27)
