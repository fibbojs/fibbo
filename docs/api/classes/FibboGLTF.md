[@fibbojs/fibbo](/api/index)  / FibboGLTF

# Class: FibboGLTF

**`Description`**

A GLTF model in FibboJS.

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboGLTF`**

## Table of contents

### Constructors

- [constructor](FibboGLTF.md#constructor)

### Properties

- [collider](FibboGLTF.md#collider)
- [object3D](FibboGLTF.md#object3d)
- [onLoaded](FibboGLTF.md#onloaded)
- [rigidBody](FibboGLTF.md#rigidbody)
- [scene](FibboGLTF.md#scene)
- [type](FibboGLTF.md#type)

### Methods

- [onFrame](FibboGLTF.md#onframe)

## Constructors

### constructor

• **new FibboGLTF**(`scene`, `model`): [`FibboGLTF`](FibboGLTF.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) |
| `model` | `string` |

#### Returns

[`FibboGLTF`](FibboGLTF.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

[core/model/FibboGLTF.ts:27](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboGLTF.ts#L27)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

[core/model/FibboModel.ts:15](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L15)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

[core/model/FibboModel.ts:12](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L12)

___

### onLoaded

• **onLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/model/FibboGLTF.ts:25](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboGLTF.ts#L25)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FibboModel](FibboModel.md).[rigidBody](FibboModel.md#rigidbody)

#### Defined in

[core/model/FibboModel.ts:14](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L14)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Inherited from

[FibboModel](FibboModel.md).[scene](FibboModel.md#scene)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L10)

___

### type

• **type**: `string` = `'FibboGLTF'`

#### Defined in

[core/model/FibboGLTF.ts:24](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboGLTF.ts#L24)

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

[core/model/FibboGLTF.ts:58](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboGLTF.ts#L58)
