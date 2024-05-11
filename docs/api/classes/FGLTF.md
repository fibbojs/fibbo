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
- [initRigidBody](FGLTF.md#initrigidbody)
- [onFrame](FGLTF.md#onframe)
- [onLoaded](FGLTF.md#onloaded)
- [setPosition](FGLTF.md#setposition)
- [setRotation](FGLTF.md#setrotation)
- [setRotationDegree](FGLTF.md#setrotationdegree)
- [setScale](FGLTF.md#setscale)

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

[src/model/FGLTF.ts:48](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L48)

## Methods

### emitOnLoaded

▸ **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

[src/model/FGLTF.ts:102](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L102)

___

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

#### Inherited from

[FModel](FModel.md).[initRigidBody](FModel.md#initrigidbody)

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

#### Overrides

[FModel](FModel.md).[onFrame](FModel.md#onframe)

#### Defined in

[src/model/FGLTF.ts:94](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L94)

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

[src/model/FGLTF.ts:98](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L98)

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

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FModel](FModel.md).[object3D](FModel.md#object3d)

#### Defined in

[src/model/FModel.ts:19](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FModel.ts#L19)

___

### onLoadedCallbacks

• **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

[src/model/FGLTF.ts:41](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L41)

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

___

### type

• **type**: `string` = `'FGLTF'`

#### Defined in

[src/model/FGLTF.ts:40](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/model/FGLTF.ts#L40)
