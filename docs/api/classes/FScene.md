[@fibbojs/fibbo](/api/index)  / FScene

# Class: FScene

**`Description`**

A scene which contains the models, the Three.js scene and the Rapier world.

**`Example`**

```ts
import { FScene } from './FScene'
import { MyCube } from './model/MyCube'

const scene = new FScene()
const cube = new MyCube(scene)
scene.addModel(cube)
```

## Table of contents

### Constructors

- [constructor](FScene.md#constructor)

### Methods

- [addDebugPanel](FScene.md#adddebugpanel)
- [addModel](FScene.md#addmodel)
- [debug](FScene.md#debug)

### Properties

- [camera](FScene.md#camera)
- [cameraOffset](FScene.md#cameraoffset)
- [controls](FScene.md#controls)
- [debugCamera](FScene.md#debugcamera)
- [gravity](FScene.md#gravity)
- [models](FScene.md#models)
- [renderer](FScene.md#renderer)
- [scene](FScene.md#scene)
- [world](FScene.md#world)

## Constructors

### constructor

• **new FScene**(`debug?`): [`FScene`](FScene.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `debug` | `boolean` | `false` |

#### Returns

[`FScene`](FScene.md)

#### Defined in

src/core/FScene.ts:36

## Methods

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

src/core/FScene.ts:166

___

### addModel

▸ **addModel**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FModel`](FModel.md) |

#### Returns

`void`

#### Defined in

src/core/FScene.ts:150

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

src/core/FScene.ts:294

## Properties

### camera

• **camera**: `Camera`

#### Defined in

src/core/FScene.ts:28

___

### cameraOffset

• **cameraOffset**: [`FVector3`](../interfaces/FVector3.md)

#### Defined in

src/core/FScene.ts:29

___

### controls

• **controls**: `undefined` \| `OrbitControls`

#### Defined in

src/core/FScene.ts:31

___

### debugCamera

• **debugCamera**: `PerspectiveCamera`

#### Defined in

src/core/FScene.ts:30

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

src/core/FScene.ts:33

___

### models

• **models**: [`FModel`](FModel.md)[]

#### Defined in

src/core/FScene.ts:24

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

src/core/FScene.ts:27

___

### scene

• **scene**: `Scene`

#### Defined in

src/core/FScene.ts:26

___

### world

• **world**: `World`

#### Defined in

src/core/FScene.ts:34
