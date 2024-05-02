[@fibbojs/fibbo](/api/index)  / FibboCube

# Class: FibboCube

**`Description`**

A simple cube model in FibboJS.

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboCube`**

## Table of contents

### Constructors

- [constructor](FibboCube.md#constructor)

### Properties

- [collider](FibboCube.md#collider)
- [object3D](FibboCube.md#object3d)
- [rigidBody](FibboCube.md#rigidbody)
- [scene](FibboCube.md#scene)

### Methods

- [onFrame](FibboCube.md#onframe)

## Constructors

### constructor

• **new FibboCube**(`scene`): [`FibboCube`](FibboCube.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) |

#### Returns

[`FibboCube`](FibboCube.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

[core/model/FibboCube.ts:21](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboCube.ts#L21)

## Properties

### collider

• **collider**: `Collider`

#### Overrides

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

[core/model/FibboCube.ts:19](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboCube.ts#L19)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D, RigidBody and Collider are redefined from FibboModel without the ? because
they're directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

[core/model/FibboCube.ts:15](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboCube.ts#L15)

___

### rigidBody

• **rigidBody**: `RigidBody`

#### Overrides

[FibboModel](FibboModel.md).[rigidBody](FibboModel.md#rigidbody)

#### Defined in

[core/model/FibboCube.ts:17](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboCube.ts#L17)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Inherited from

[FibboModel](FibboModel.md).[scene](FibboModel.md#scene)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboModel.ts#L10)

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

[core/model/FibboCube.ts:39](https://github.com/fibbojs/fibbo/blob/b30ea0e5c1962f99e47c4a8ee65926227b100fe9/src/core/model/FibboCube.ts#L39)
