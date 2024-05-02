[@fibbojs/fibbo](/api/index)  / FibboModel

# Class: FibboModel

**`Description`**

The base class for all models in FibboJS.

## Hierarchy

- **`FibboModel`**

  ↳ [`FibboCube`](FibboCube.md)

  ↳ [`FibboSphere`](FibboSphere.md)

  ↳ [`FibboGLTF`](FibboGLTF.md)

## Table of contents

### Constructors

- [constructor](FibboModel.md#constructor)

### Methods

- [onFrame](FibboModel.md#onframe)

### Properties

- [collider](FibboModel.md#collider)
- [object3D](FibboModel.md#object3d)
- [position](FibboModel.md#position)
- [rigidBody](FibboModel.md#rigidbody)
- [rotation](FibboModel.md#rotation)
- [scale](FibboModel.md#scale)
- [scene](FibboModel.md#scene)

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

[core/model/FibboModel.ts:23](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L23)

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

[core/model/FibboModel.ts:36](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L36)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

[core/model/FibboModel.ts:18](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L18)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

[core/model/FibboModel.ts:15](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L15)

___

### position

• **position**: `Vector3`

#### Defined in

[core/model/FibboModel.ts:11](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L11)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

[core/model/FibboModel.ts:17](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L17)

___

### rotation

• **rotation**: `Vector3`

#### Defined in

[core/model/FibboModel.ts:13](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L13)

___

### scale

• **scale**: `Vector3`

#### Defined in

[core/model/FibboModel.ts:12](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L12)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L10)
