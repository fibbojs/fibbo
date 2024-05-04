[@fibbojs/fibbo](/api/index)  / useLookAt

# Function: useLookAt

▸ **useLookAt**(`position?`): `Function`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`FibboVector3`](../interfaces/FibboVector3.md) | The position to look at. |

#### Returns

`Function`

The class with the look at behavior added.

**`Description`**

This decorator is used to make a camera look at a specific position.

**`Example`**

```ts
import { FibboFixedCamera, useLookAt } from '@fibbojs/fibbo'

@useLookAt({ x: 1, y: 1, z: 1 })
export class MyCamera extends FibboFixedCamera {
 constructor() {
  super()
 }

 onFrame(_delta: number) {
 }
}
```

#### Defined in

src/decorators/useLookAt.ts:23
