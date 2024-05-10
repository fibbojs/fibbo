[@fibbojs/fibbo](/api/index)  / FGLTF

# Class: FGLTF

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

- [`FModel`](FModel.md)

  ↳ **`FGLTF`**

## Table of contents

### Constructors

- [constructor](FGLTF.md#constructor)

### Methods

- [emitOnLoaded](FGLTF.md#emitonloaded)
- [onFrame](FGLTF.md#onframe)
- [onLoaded](FGLTF.md#onloaded)

### Properties

- [collider](FGLTF.md#collider)
- [object3D](FGLTF.md#object3d)
- [onLoadedCallbacks](FGLTF.md#onloadedcallbacks)
- [position](FGLTF.md#position)
- [rigidBody](FGLTF.md#rigidbody)
- [rotation](FGLTF.md#rotation)
- [scale](FGLTF.md#scale)
- [scene](FGLTF.md#scene)
- [type](FGLTF.md#type)

## Constructors

### constructor

• **new FGLTF**(`scene`, `model`): [`FGLTF`](FGLTF.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FScene`](FScene.md) | The FScene where the model will be added. |
| `model` | `string` | The name of the model file to load. Should be a GLTF or GLB file. |

#### Returns

[`FGLTF`](FGLTF.md)

#### Overrides

[FModel](FModel.md).[constructor](FModel.md#constructor)

#### Defined in

src/model/FGLTF.ts:48

## Methods

### emitOnLoaded

▸ **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

src/model/FGLTF.ts:93

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

src/model/FGLTF.ts:86

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

src/model/FGLTF.ts:89

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](FModel.md).[collider](FModel.md#collider)

#### Defined in

src/model/FModel.ts:20

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FModel](FModel.md).[object3D](FModel.md#object3d)

#### Defined in

src/model/FModel.ts:17

___

### onLoadedCallbacks

• **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

src/model/FGLTF.ts:41

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](FModel.md).[position](FModel.md#position)

#### Defined in

src/model/FModel.ts:13

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](FModel.md).[rigidBody](FModel.md#rigidbody)

#### Defined in

src/model/FModel.ts:19

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](FModel.md).[rotation](FModel.md#rotation)

#### Defined in

src/model/FModel.ts:15

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](FModel.md).[scale](FModel.md#scale)

#### Defined in

src/model/FModel.ts:14

___

### scene

• **scene**: [`FScene`](FScene.md)

#### Inherited from

[FModel](FModel.md).[scene](FModel.md#scene)

#### Defined in

src/model/FModel.ts:12

___

### type

• **type**: `string` = `'FGLTF'`

#### Defined in

src/model/FGLTF.ts:40
