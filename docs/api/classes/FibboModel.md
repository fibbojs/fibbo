[@fibbojs/fibbo](/api/index)  / FibboModel

# Class: FibboModel

**`Description`**

The base class for all models in FibboJS.

## Hierarchy

- **`FibboModel`**

  ↳ [`FibboCube`](FibboCube.md)

  ↳ [`FibboSphere`](FibboSphere.md)

  ↳ [`FibboGLTF`](FibboGLTF.md)

## Implements

- [`FibboComponent`](FibboComponent.md)

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

src/model/FibboModel.ts:25

## Methods

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[FibboComponent](FibboComponent.md).[onFrame](FibboComponent.md#onframe)

#### Defined in

src/model/FibboModel.ts:38

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

src/model/FibboModel.ts:20

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

src/model/FibboModel.ts:17

___

### position

• **position**: `Vector3`

#### Defined in

src/model/FibboModel.ts:13

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

src/model/FibboModel.ts:19

___

### rotation

• **rotation**: `Vector3`

#### Defined in

src/model/FibboModel.ts:15

___

### scale

• **scale**: `Vector3`

#### Defined in

src/model/FibboModel.ts:14

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Defined in

src/model/FibboModel.ts:12
