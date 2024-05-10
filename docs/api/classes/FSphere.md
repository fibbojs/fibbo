[@fibbojs/fibbo](/api/index)  / FSphere

# Class: FSphere

**`Description`**

A simple sphere model in FibboJS.

**`Example`**

```ts
import { FSphere } from './FSphere'
import type { FScene } from '../FScene'

export class MySphere extends FSphere {
 constructor(scene: FScene) {
   super(scene)
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FModel`](FModel.md)

  ↳ **`FSphere`**

## Table of contents

### Constructors

- [constructor](FSphere.md#constructor)

### Methods

- [onFrame](FSphere.md#onframe)

### Properties

- [collider](FSphere.md#collider)
- [object3D](FSphere.md#object3d)
- [position](FSphere.md#position)
- [rigidBody](FSphere.md#rigidbody)
- [rotation](FSphere.md#rotation)
- [scale](FSphere.md#scale)
- [scene](FSphere.md#scene)

## Constructors

### constructor

• **new FSphere**(`scene`): [`FSphere`](FSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene`](FScene.md) |

#### Returns

[`FSphere`](FSphere.md)

#### Overrides

[FModel](FModel.md).[constructor](FModel.md#constructor)

#### Defined in

src/model/FSphere.ts:31

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

[FModel](FModel.md).[onFrame](FModel.md#onframe)

#### Defined in

src/model/FSphere.ts:39

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](FModel.md).[collider](FModel.md#collider)

#### Defined in

src/model/FModel.ts:20

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FModel](FModel.md).[object3D](FModel.md#object3d)

#### Defined in

src/model/FSphere.ts:29

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](FModel.md).[position](FModel.md#position)

#### Defined in

src/model/FModel.ts:13

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](FModel.md).[rigidBody](FModel.md#rigidbody)

#### Defined in

src/model/FModel.ts:19

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](FModel.md).[rotation](FModel.md#rotation)

#### Defined in

src/model/FModel.ts:15

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](FModel.md).[scale](FModel.md#scale)

#### Defined in

src/model/FModel.ts:14

___

### scene

• **scene**: [`FScene`](FScene.md)

#### Inherited from

[FModel](FModel.md).[scene](FModel.md#scene)

#### Defined in

src/model/FModel.ts:12
