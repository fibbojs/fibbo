[@fibbojs/fibbo](/api/index)  / FModel

# Class: FModel

**`Description`**

The base class for all models in FibboJS.

## Hierarchy

- **`FModel`**

  ↳ [`FCube`](FCube.md)

  ↳ [`FSphere`](FSphere.md)

  ↳ [`FGLTF`](FGLTF.md)

## Implements

- [`FComponent`](FComponent.md)

## Table of contents

### Constructors

- [constructor](FModel.md#constructor)

### Methods

- [initRigidBody](FModel.md#initrigidbody)
- [onFrame](FModel.md#onframe)
- [setPosition](FModel.md#setposition)
- [setRotation](FModel.md#setrotation)
- [setRotationDegree](FModel.md#setrotationdegree)
- [setScale](FModel.md#setscale)

### Properties

- [collider](FModel.md#collider)
- [object3D](FModel.md#object3d)
- [position](FModel.md#position)
- [rigidBody](FModel.md#rigidbody)
- [rotation](FModel.md#rotation)
- [scale](FModel.md#scale)
- [scene](FModel.md#scene)

## Constructors

### constructor

• **new FModel**(`scene`): [`FModel`](FModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FScene`](FScene.md) | The FScene where the model will be added. |

#### Returns

[`FModel`](FModel.md)

#### Defined in

[src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L27)

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

#### Implementation of

[FComponent](FComponent.md).[onFrame](FComponent.md#onframe)

#### Defined in

[src/model/FModel.ts:36](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L36)

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

[FComponent](FComponent.md).[setPosition](FComponent.md#setposition)

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

#### Implementation of

[FComponent](FComponent.md).[setRotation](FComponent.md#setrotation)

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

#### Implementation of

[FComponent](FComponent.md).[setScale](FComponent.md#setscale)

#### Defined in

[src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L60)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

[src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L22)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

[src/model/FModel.ts:19](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L19)

___

### position

• **position**: `Vector3`

#### Defined in

[src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L15)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

[src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L21)

___

### rotation

• **rotation**: `Vector3`

#### Defined in

[src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L17)

___

### scale

• **scale**: `Vector3`

#### Defined in

[src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L16)

___

### scene

• **scene**: [`FScene`](FScene.md)

#### Defined in

[src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L14)
