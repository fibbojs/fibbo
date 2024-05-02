[@fibbojs/fibbo](/api/index)  / FibboSphere

# Class: FibboSphere

**`Description`**

A simple sphere model in FibboJS.

**`Example`**

```ts
import { FibboSphere } from './FibboSphere'
import type { FibboScene } from '../FibboScene'

export class MySphere extends FibboSphere {
 constructor(scene: FibboScene) {
   super(scene)
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboSphere`**

## Table of contents

### Constructors

- [constructor](FibboSphere.md#constructor)

### Methods

- [onFrame](FibboSphere.md#onframe)

### Properties

- [collider](FibboSphere.md#collider)
- [object3D](FibboSphere.md#object3d)
- [position](FibboSphere.md#position)
- [rigidBody](FibboSphere.md#rigidbody)
- [rotation](FibboSphere.md#rotation)
- [scale](FibboSphere.md#scale)
- [scene](FibboSphere.md#scene)

## Constructors

### constructor

• **new FibboSphere**(`scene`): [`FibboSphere`](FibboSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) |

#### Returns

[`FibboSphere`](FibboSphere.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

core/model/FibboSphere.ts:30

## Methods

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Overrides

[FibboModel](FibboModel.md).[onFrame](FibboModel.md#onframe)

#### Defined in

core/model/FibboSphere.ts:38

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

[core/model/FibboModel.ts:18](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L18)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FibboModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

core/model/FibboSphere.ts:28

___

### position

• **position**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[position](FibboModel.md#position)

#### Defined in

[core/model/FibboModel.ts:11](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L11)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FibboModel](FibboModel.md).[rigidBody](FibboModel.md#rigidbody)

#### Defined in

[core/model/FibboModel.ts:17](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L17)

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[rotation](FibboModel.md#rotation)

#### Defined in

[core/model/FibboModel.ts:13](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L13)

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[scale](FibboModel.md#scale)

#### Defined in

[core/model/FibboModel.ts:12](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L12)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Inherited from

[FibboModel](FibboModel.md).[scene](FibboModel.md#scene)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L10)
