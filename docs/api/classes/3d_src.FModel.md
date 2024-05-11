[@fibbojs](/api/index)  / [3d](/api/modules/3d_src) / FModel

# Class: FModel

[3d](/api/modules/3d_src).FModel

**`Description`**

The base class for all 3D objects in FibboJS.

## Hierarchy

- **`FModel`**

  ↳ [`FCube`](3d_src.FCube.md)

  ↳ [`FSphere`](3d_src.FSphere.md)

  ↳ [`FGLTF`](3d_src.FGLTF.md)

## Implements

- [`FComponent3d`](3d_src.FComponent3d.md)

## Table of contents

### Constructors

- [constructor](3d_src.FModel.md#constructor)

### Methods

- [initRigidBody](3d_src.FModel.md#initrigidbody)
- [onFrame](3d_src.FModel.md#onframe)
- [setPosition](3d_src.FModel.md#setposition)
- [setRotation](3d_src.FModel.md#setrotation)
- [setRotationDegree](3d_src.FModel.md#setrotationdegree)
- [setScale](3d_src.FModel.md#setscale)

### Properties

- [collider](3d_src.FModel.md#collider)
- [object3D](3d_src.FModel.md#object3d)
- [position](3d_src.FModel.md#position)
- [rigidBody](3d_src.FModel.md#rigidbody)
- [rotation](3d_src.FModel.md#rotation)
- [scale](3d_src.FModel.md#scale)
- [scene](3d_src.FModel.md#scene)

## Constructors

### constructor

• **new FModel**(`scene`): [`FModel`](3d_src.FModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FScene3d`](3d_src.FScene3d.md) | The 3D scene where the model will be added. |

#### Returns

[`FModel`](3d_src.FModel.md)

#### Defined in

[packages/3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L27)

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

#### Defined in

[packages/3d/src/model/FModel.ts:96](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L96)

___

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[FComponent3d](3d_src.FComponent3d.md).[onFrame](3d_src.FComponent3d.md#onframe)

#### Defined in

[packages/3d/src/model/FModel.ts:36](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L36)

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

#### Implementation of

[FComponent3d](3d_src.FComponent3d.md).[setPosition](3d_src.FComponent3d.md#setposition)

#### Defined in

[packages/3d/src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L49)

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

#### Implementation of

[FComponent3d](3d_src.FComponent3d.md).[setRotation](3d_src.FComponent3d.md#setrotation)

#### Defined in

[packages/3d/src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L69)

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

#### Defined in

[packages/3d/src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L78)

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

#### Implementation of

[FComponent3d](3d_src.FComponent3d.md).[setScale](3d_src.FComponent3d.md#setscale)

#### Defined in

[packages/3d/src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L60)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

[packages/3d/src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L22)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

[packages/3d/src/model/FModel.ts:19](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L19)

___

### position

• **position**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L15)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L21)

___

### rotation

• **rotation**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L17)

___

### scale

• **scale**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L16)

___

### scene

• **scene**: [`FScene3d`](3d_src.FScene3d.md)

#### Defined in

[packages/3d/src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/3d/src/model/FModel.ts#L14)
