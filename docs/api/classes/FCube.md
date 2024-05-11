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

- [initRigidBody](FCube.md#initrigidbody)
- [onFrame](FCube.md#onframe)
- [setPosition](FCube.md#setposition)
- [setRotation](FCube.md#setrotation)
- [setRotationDegree](FCube.md#setrotationdegree)
- [setScale](FCube.md#setscale)

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

[src/model/FCube.ts:31](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FCube.ts#L31)

## Methods

### initRigidBody

▸ **initRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `Vector3` |
| `scale?` | `Vector3` |
| `rotation?` | `Vector3` |
| `shape?` | [`F3dShapes`](../enums/F3dShapes.md) |

#### Returns

`void`

**`Description`**

Init a rigid body for the model.

#### Inherited from

[FModel](FModel.md).[initRigidBody](FModel.md#initrigidbody)

#### Defined in

[src/model/FModel.ts:96](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L96)

___

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

[src/model/FCube.ts:39](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FCube.ts#L39)

___

### setPosition

▸ **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the position of the model.

#### Inherited from

[FModel](FModel.md).[setPosition](FModel.md#setposition)

#### Defined in

[src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L49)

___

### setRotation

▸ **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the model.

#### Inherited from

[FModel](FModel.md).[setRotation](FModel.md#setrotation)

#### Defined in

[src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L69)

___

### setRotationDegree

▸ **setRotationDegree**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the model from degrees.

#### Inherited from

[FModel](FModel.md).[setRotationDegree](FModel.md#setrotationdegree)

#### Defined in

[src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L78)

___

### setScale

▸ **setScale**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the scale of the model.

#### Inherited from

[FModel](FModel.md).[setScale](FModel.md#setscale)

#### Defined in

[src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L60)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](FModel.md).[collider](FModel.md#collider)

#### Defined in

[src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L22)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FModel](FModel.md).[object3D](FModel.md#object3d)

#### Defined in

[src/model/FCube.ts:29](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FCube.ts#L29)

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](FModel.md).[position](FModel.md#position)

#### Defined in

[src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L15)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](FModel.md).[rigidBody](FModel.md#rigidbody)

#### Defined in

[src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L21)

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](FModel.md).[rotation](FModel.md#rotation)

#### Defined in

[src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L17)

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](FModel.md).[scale](FModel.md#scale)

#### Defined in

[src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L16)

___

### scene

• **scene**: [`FScene`](FScene.md)

#### Inherited from

[FModel](FModel.md).[scene](FModel.md#scene)

#### Defined in

[src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L14)
