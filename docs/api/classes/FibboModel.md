[@fibbojs/fibbo](/api/index)  / FibboModel

# Class: FibboModel

**`Description`**

The base class for all models in FibboJS.

## Hierarchy

- **`FibboModel`**

  ↳ [`FibboCube`](FibboCube.md)

  ↳ [`FibboGLTF`](FibboGLTF.md)

## Table of contents

### Constructors

- [constructor](FibboModel.md#constructor)

### Properties

- [collider](FibboModel.md#collider)
- [object3D](FibboModel.md#object3d)
- [rigidBody](FibboModel.md#rigidbody)
- [scene](FibboModel.md#scene)

### Methods

- [onFrame](FibboModel.md#onframe)

## Constructors

### constructor

• **new FibboModel**(`scene`): [`FibboModel`](FibboModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) | The FibboScene where the model will be added. |

#### Returns

[`FibboModel`](FibboModel.md)

#### Defined in

[core/model/FibboModel.ts:20](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L20)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

[core/model/FibboModel.ts:15](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L15)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

[core/model/FibboModel.ts:12](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L12)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

[core/model/FibboModel.ts:14](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L14)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L10)

## Methods

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Defined in

[core/model/FibboModel.ts:28](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/model/FibboModel.ts#L28)
