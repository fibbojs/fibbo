[@fibbojs/fibbo](/api/index)  / FCube

# Class: FCube

**`Description`**

A simple cube model in FibboJS.

**`Example`**

```ts
import { FCube } from './FCube'
import type { FScene } from '../FScene'

export class MyCube extends FCube {
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

  ↳ **`FCube`**

## Table of contents

### Constructors

- [constructor](FCube.md#constructor)

### Methods

- [onFrame](FCube.md#onframe)

### Properties

- [collider](FCube.md#collider)
- [object3D](FCube.md#object3d)
- [position](FCube.md#position)
- [rigidBody](FCube.md#rigidbody)
- [rotation](FCube.md#rotation)
- [scale](FCube.md#scale)
- [scene](FCube.md#scene)

## Constructors

### constructor

• **new FCube**(`scene`): [`FCube`](FCube.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene`](FScene.md) |

#### Returns

[`FCube`](FCube.md)

#### Overrides

[FModel](FModel.md).[constructor](FModel.md#constructor)

#### Defined in

src/model/FCube.ts:31

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

src/model/FCube.ts:39

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

src/model/FCube.ts:29

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
