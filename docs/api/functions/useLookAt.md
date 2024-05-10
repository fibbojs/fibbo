[@fibbojs/fibbo](/api/index)  / useLookAt

# Function: useLookAt

▸ **useLookAt**(`position?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`FVector3`](../interfaces/FVector3.md) | The position to look at. |

#### Returns

`Function`

The class with the look at behavior added.

**`Description`**

This decorator is used to make a camera look at a specific position.

**`Example`**

```ts
import { FFixedCamera, useLookAt } from '@fibbojs/fibbo'

@useLookAt({ x: 1, y: 1, z: 1 })
export class MyCamera extends FFixedCamera {
 constructor() {
  super()
 }

 onFrame(_delta: number) {
 }
}
```

#### Defined in

[src/decorators/useLookAt.ts:23](https://github.com/fibbojs/fibbo/blob/5920737a801142e4f9dd76a2bdfcee7b009224d4/src/decorators/useLookAt.ts#L23)
