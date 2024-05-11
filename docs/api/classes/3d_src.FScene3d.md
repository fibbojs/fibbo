[fibbojs](../README.md) / [Modules](../modules.md) / [3d/src](../modules/3d_src.md) / FScene3d

# Class: FScene3d

[3d/src](../modules/3d_src.md).FScene3d

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

## Hierarchy

- `FScene`

  ↳ **`FScene3d`**

## Table of contents

### Constructors

- [constructor](3d_src.FScene3d.md#constructor)

### Methods

- [addComponent](3d_src.FScene3d.md#addcomponent)
- [addDebugPanel](3d_src.FScene3d.md#adddebugpanel)
- [debug](3d_src.FScene3d.md#debug)

### Properties

- [camera](3d_src.FScene3d.md#camera)
- [components](3d_src.FScene3d.md#components)
- [controls](3d_src.FScene3d.md#controls)
- [debugCamera](3d_src.FScene3d.md#debugcamera)
- [gravity](3d_src.FScene3d.md#gravity)
- [renderer](3d_src.FScene3d.md#renderer)
- [scene](3d_src.FScene3d.md#scene)
- [world](3d_src.FScene3d.md#world)

## Constructors

### constructor

• **new FScene3d**(`debug?`): [`FScene3d`](3d_src.FScene3d.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `debug` | `boolean` | `false` |

#### Returns

[`FScene3d`](3d_src.FScene3d.md)

#### Overrides

FScene.constructor

#### Defined in

packages/3d/src/FScene3d.ts:36

## Methods

### addComponent

▸ **addComponent**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FModel`](3d_src.FModel.md) |

#### Returns

`void`

#### Overrides

FScene.addComponent

#### Defined in

packages/3d/src/FScene3d.ts:150

___

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

packages/3d/src/FScene3d.ts:166

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

packages/3d/src/FScene3d.ts:296

## Properties

### camera

• **camera**: [`FCamera3d`](3d_src.FCamera3d.md)

#### Overrides

FScene.camera

#### Defined in

packages/3d/src/FScene3d.ts:29

___

### components

• **components**: [`FModel`](3d_src.FModel.md)[]

#### Overrides

FScene.components

#### Defined in

packages/3d/src/FScene3d.ts:25

___

### controls

• `Optional` **controls**: `OrbitControls`

#### Defined in

packages/3d/src/FScene3d.ts:31

___

### debugCamera

• **debugCamera**: [`FCamera3d`](3d_src.FCamera3d.md)

#### Defined in

packages/3d/src/FScene3d.ts:30

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Overrides

FScene.gravity

#### Defined in

packages/3d/src/FScene3d.ts:33

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

packages/3d/src/FScene3d.ts:28

___

### scene

• **scene**: `Scene`

#### Defined in

packages/3d/src/FScene3d.ts:27

___

### world

• **world**: `World`

#### Overrides

FScene.world

#### Defined in

packages/3d/src/FScene3d.ts:34
