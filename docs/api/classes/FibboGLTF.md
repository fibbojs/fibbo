[@fibbojs/fibbo](/api/index)  / FibboGLTF

# Class: FibboGLTF

**`Description`**

A GLTF model in FibboJS.

**`Example`**

```ts
import { FibboGLTF } from './FibboGLTF'
import type { FibboScene } from '../FibboScene'

export class MyGltfModel extends FibboGLTF {
 constructor(scene: FibboScene) {
   super(scene, 'Cube.gltf')
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboGLTF`**

## Table of contents

### Constructors

- [constructor](FibboGLTF.md#constructor)

### Methods

- [emitOnLoaded](FibboGLTF.md#emitonloaded)
- [onFrame](FibboGLTF.md#onframe)
- [onLoaded](FibboGLTF.md#onloaded)

### Properties

- [collider](FibboGLTF.md#collider)
- [object3D](FibboGLTF.md#object3d)
- [onLoadedCallbacks](FibboGLTF.md#onloadedcallbacks)
- [position](FibboGLTF.md#position)
- [rigidBody](FibboGLTF.md#rigidbody)
- [rotation](FibboGLTF.md#rotation)
- [scale](FibboGLTF.md#scale)
- [scene](FibboGLTF.md#scene)
- [type](FibboGLTF.md#type)

## Constructors

### constructor

• **new FibboGLTF**(`scene`, `model`): [`FibboGLTF`](FibboGLTF.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) | The FibboScene where the model will be added. |
| `model` | `string` | The name of the model file to load. Should be a GLTF or GLB file. |

#### Returns

[`FibboGLTF`](FibboGLTF.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

src/model/FibboGLTF.ts:48

## Methods

### emitOnLoaded

▸ **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

src/model/FibboGLTF.ts:92

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

[FibboModel](FibboModel.md).[onFrame](FibboModel.md#onframe)

#### Defined in

src/model/FibboGLTF.ts:85

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

src/model/FibboGLTF.ts:88

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

src/model/FibboModel.ts:20

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

src/model/FibboModel.ts:17

___

### onLoadedCallbacks

• **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

src/model/FibboGLTF.ts:41

___

### position

• **position**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[position](FibboModel.md#position)

#### Defined in

src/model/FibboModel.ts:13

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FibboModel](FibboModel.md).[rigidBody](FibboModel.md#rigidbody)

#### Defined in

src/model/FibboModel.ts:19

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[rotation](FibboModel.md#rotation)

#### Defined in

src/model/FibboModel.ts:15

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[scale](FibboModel.md#scale)

#### Defined in

src/model/FibboModel.ts:14

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Inherited from

[FibboModel](FibboModel.md).[scene](FibboModel.md#scene)

#### Defined in

src/model/FibboModel.ts:12

___

### type

• **type**: `string` = `'FibboGLTF'`

#### Defined in

src/model/FibboGLTF.ts:40
