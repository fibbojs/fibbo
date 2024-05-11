[fibbojs](../README.md) / [Modules](../modules.md) / [3d/src](../modules/3d_src.md) / FGLTF

# Class: FGLTF

[3d/src](../modules/3d_src.md).FGLTF

**`Description`**

A GLTF model in FibboJS.

**`Example`**

```ts
import { FGLTF } from './FGLTF'
import type { FScene } from '../FScene'

export class MyGltfModel extends FGLTF {
 constructor(scene: FScene) {
   super(scene, 'Cube.gltf')
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FModel`](3d_src.FModel.md)

  ↳ **`FGLTF`**

## Table of contents

### Constructors

- [constructor](3d_src.FGLTF.md#constructor)

### Methods

- [emitOnLoaded](3d_src.FGLTF.md#emitonloaded)
- [initRigidBody](3d_src.FGLTF.md#initrigidbody)
- [onFrame](3d_src.FGLTF.md#onframe)
- [onLoaded](3d_src.FGLTF.md#onloaded)
- [setPosition](3d_src.FGLTF.md#setposition)
- [setRotation](3d_src.FGLTF.md#setrotation)
- [setRotationDegree](3d_src.FGLTF.md#setrotationdegree)
- [setScale](3d_src.FGLTF.md#setscale)

### Properties

- [collider](3d_src.FGLTF.md#collider)
- [object3D](3d_src.FGLTF.md#object3d)
- [onLoadedCallbacks](3d_src.FGLTF.md#onloadedcallbacks)
- [position](3d_src.FGLTF.md#position)
- [rigidBody](3d_src.FGLTF.md#rigidbody)
- [rotation](3d_src.FGLTF.md#rotation)
- [scale](3d_src.FGLTF.md#scale)
- [scene](3d_src.FGLTF.md#scene)
- [type](3d_src.FGLTF.md#type)

## Constructors

### constructor

• **new FGLTF**(`scene`, `model`): [`FGLTF`](3d_src.FGLTF.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FScene3d`](3d_src.FScene3d.md) | The 3D scene where the model will be added. |
| `model` | `string` | The name of the model file to load. Should be a GLTF or GLB file. |

#### Returns

[`FGLTF`](3d_src.FGLTF.md)

#### Overrides

[FModel](3d_src.FModel.md).[constructor](3d_src.FModel.md#constructor)

#### Defined in

packages/3d/src/model/FGLTF.ts:48

## Methods

### emitOnLoaded

▸ **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

packages/3d/src/model/FGLTF.ts:102

___

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

packages/3d/src/model/FModel.ts:96

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

packages/3d/src/model/FGLTF.ts:94

___

### onLoaded

▸ **onLoaded**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` |

#### Returns

`void`

#### Defined in

packages/3d/src/model/FGLTF.ts:98

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

packages/3d/src/model/FModel.ts:49

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

packages/3d/src/model/FModel.ts:69

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

packages/3d/src/model/FModel.ts:78

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

packages/3d/src/model/FModel.ts:60

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](3d_src.FModel.md).[collider](3d_src.FModel.md#collider)

#### Defined in

packages/3d/src/model/FModel.ts:22

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FModel](3d_src.FModel.md).[object3D](3d_src.FModel.md#object3d)

#### Defined in

packages/3d/src/model/FModel.ts:19

___

### onLoadedCallbacks

• **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

packages/3d/src/model/FGLTF.ts:41

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[position](3d_src.FModel.md#position)

#### Defined in

packages/3d/src/model/FModel.ts:15

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](3d_src.FModel.md).[rigidBody](3d_src.FModel.md#rigidbody)

#### Defined in

packages/3d/src/model/FModel.ts:21

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[rotation](3d_src.FModel.md#rotation)

#### Defined in

packages/3d/src/model/FModel.ts:17

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[scale](3d_src.FModel.md#scale)

#### Defined in

packages/3d/src/model/FModel.ts:16

___

### scene

• **scene**: [`FScene3d`](3d_src.FScene3d.md)

#### Inherited from

[FModel](3d_src.FModel.md).[scene](3d_src.FModel.md#scene)

#### Defined in

packages/3d/src/model/FModel.ts:14

___

### type

• **type**: `string` = `'FGLTF'`

#### Defined in

packages/3d/src/model/FGLTF.ts:40
