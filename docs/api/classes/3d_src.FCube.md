[@fibbojs](/api/index)  / [3d](/api/modules/3d_src) / FCube

# Class: FCube

[3d](/api/modules/3d_src).FCube

**`Description`**

A simple cube model in FibboJS.

**`Example`**

```ts
import { FScene3d, FCube } from '@fibbojs/3d'

const scene = new FScene3d()

const cube = new FCube(scene)
scene.addComponent(cube)
```

## Hierarchy

- [`FModel`](3d_src.FModel.md)

  ↳ **`FCube`**

## Table of contents

### Constructors

- [constructor](3d_src.FCube.md#constructor)

### Methods

- [initRigidBody](3d_src.FCube.md#initrigidbody)
- [onFrame](3d_src.FCube.md#onframe)
- [setPosition](3d_src.FCube.md#setposition)
- [setRotation](3d_src.FCube.md#setrotation)
- [setRotationDegree](3d_src.FCube.md#setrotationdegree)
- [setScale](3d_src.FCube.md#setscale)

### Properties

- [collider](3d_src.FCube.md#collider)
- [object3D](3d_src.FCube.md#object3d)
- [position](3d_src.FCube.md#position)
- [rigidBody](3d_src.FCube.md#rigidbody)
- [rotation](3d_src.FCube.md#rotation)
- [scale](3d_src.FCube.md#scale)
- [scene](3d_src.FCube.md#scene)

## Constructors

### constructor

• **new FCube**(`scene`): [`FCube`](3d_src.FCube.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene3d`](3d_src.FScene3d.md) |

#### Returns

[`FCube`](3d_src.FCube.md)

#### Overrides

[FModel](3d_src.FModel.md).[constructor](3d_src.FModel.md#constructor)

#### Defined in

[packages/3d/src/model/FCube.ts:25](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FCube.ts#L25)

## Methods

### initRigidBody

▸ **initRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `Vector3` |
| `scale?` | `Vector3` |
| `rotation?` | `Vector3` |
| `shape?` | [`F3dShapes`](../enums/3d_src.F3dShapes.md) |

#### Returns

`void`

**`Description`**

Init a rigid body for the model.

#### Inherited from

[FModel](3d_src.FModel.md).[initRigidBody](3d_src.FModel.md#initrigidbody)

#### Defined in

[packages/3d/src/model/FModel.ts:96](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L96)

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

[FModel](3d_src.FModel.md).[onFrame](3d_src.FModel.md#onframe)

#### Defined in

[packages/3d/src/model/FCube.ts:33](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FCube.ts#L33)

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

[FModel](3d_src.FModel.md).[setPosition](3d_src.FModel.md#setposition)

#### Defined in

[packages/3d/src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L49)

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

[FModel](3d_src.FModel.md).[setRotation](3d_src.FModel.md#setrotation)

#### Defined in

[packages/3d/src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L69)

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

[FModel](3d_src.FModel.md).[setRotationDegree](3d_src.FModel.md#setrotationdegree)

#### Defined in

[packages/3d/src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L78)

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

[FModel](3d_src.FModel.md).[setScale](3d_src.FModel.md#setscale)

#### Defined in

[packages/3d/src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L60)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](3d_src.FModel.md).[collider](3d_src.FModel.md#collider)

#### Defined in

[packages/3d/src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L22)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FModel](3d_src.FModel.md).[object3D](3d_src.FModel.md#object3d)

#### Defined in

[packages/3d/src/model/FCube.ts:23](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FCube.ts#L23)

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[position](3d_src.FModel.md#position)

#### Defined in

[packages/3d/src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L15)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](3d_src.FModel.md).[rigidBody](3d_src.FModel.md#rigidbody)

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L21)

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[rotation](3d_src.FModel.md#rotation)

#### Defined in

[packages/3d/src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L17)

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[scale](3d_src.FModel.md#scale)

#### Defined in

[packages/3d/src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L16)

___

### scene

• **scene**: [`FScene3d`](3d_src.FScene3d.md)

#### Inherited from

[FModel](3d_src.FModel.md).[scene](3d_src.FModel.md#scene)

#### Defined in

[packages/3d/src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/model/FModel.ts#L14)
