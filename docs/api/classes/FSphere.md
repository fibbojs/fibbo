[@fibbojs/fibbo](/api/index)  / FSphere

# Class: FSphere

**`Description`**

A simple sphere model in FibboJS.

**`Example`**

```ts
import { FSphere } from './FSphere'
import type { FScene } from '../FScene'

export class MySphere extends FSphere {
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

  ↳ **`FSphere`**

## Table of contents

### Constructors

- [constructor](FSphere.md#constructor)

### Methods

- [initRigidBody](FSphere.md#initrigidbody)
- [onFrame](FSphere.md#onframe)
- [setPosition](FSphere.md#setposition)
- [setRotation](FSphere.md#setrotation)
- [setRotationDegree](FSphere.md#setrotationdegree)
- [setScale](FSphere.md#setscale)

### Properties

- [collider](FSphere.md#collider)
- [object3D](FSphere.md#object3d)
- [position](FSphere.md#position)
- [rigidBody](FSphere.md#rigidbody)
- [rotation](FSphere.md#rotation)
- [scale](FSphere.md#scale)
- [scene](FSphere.md#scene)

## Constructors

### constructor

• **new FSphere**(`scene`): [`FSphere`](FSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene`](FScene.md) |

#### Returns

[`FSphere`](FSphere.md)

#### Overrides

[FModel](FModel.md).[constructor](FModel.md#constructor)

#### Defined in

[src/model/FSphere.ts:32](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FSphere.ts#L32)

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

#### Overrides

[FModel](FModel.md).[initRigidBody](FModel.md#initrigidbody)

#### Defined in

[src/model/FSphere.ts:44](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FSphere.ts#L44)

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

[src/model/FSphere.ts:40](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FSphere.ts#L40)

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

[src/model/FSphere.ts:30](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FSphere.ts#L30)

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
