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

[src/core/FScene.ts:34](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L34)

## Methods

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/core/FScene.ts:164](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L164)

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

[src/core/FScene.ts:148](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L148)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/core/FScene.ts:294](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L294)

## Properties

### camera

• **camera**: `Camera`

#### Defined in

[src/core/FScene.ts:27](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L27)

___

### controls

• **controls**: `undefined` \| `OrbitControls`

#### Defined in

[src/core/FScene.ts:29](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L29)

___

### debugCamera

• **debugCamera**: `PerspectiveCamera`

#### Defined in

[src/core/FScene.ts:28](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L28)

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

[src/core/FScene.ts:31](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L31)

___

### models

• **models**: [`FModel`](FModel.md)[]

#### Defined in

[src/core/FScene.ts:23](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L23)

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[src/core/FScene.ts:26](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L26)

___

### scene

• **scene**: `Scene`

#### Defined in

[src/core/FScene.ts:25](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L25)

___

### world

• **world**: `World`

#### Defined in

[src/core/FScene.ts:32](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FScene.ts#L32)
