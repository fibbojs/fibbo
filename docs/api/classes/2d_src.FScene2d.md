[@fibbojs](/api/index)  / [2d](/api/modules/2d_src) / FScene2d

# Class: FScene2d

[2d](/api/modules/2d_src).FScene2d

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

  ↳ **`FScene2d`**

## Table of contents

### Constructors

- [constructor](2d_src.FScene2d.md#constructor)

### Methods

- [addComponent](2d_src.FScene2d.md#addcomponent)

### Properties

- [camera](2d_src.FScene2d.md#camera)
- [components](2d_src.FScene2d.md#components)
- [gravity](2d_src.FScene2d.md#gravity)
- [world](2d_src.FScene2d.md#world)

## Constructors

### constructor

• **new FScene2d**(): [`FScene2d`](2d_src.FScene2d.md)

#### Returns

[`FScene2d`](2d_src.FScene2d.md)

#### Overrides

FScene.constructor

#### Defined in

[packages/2d/src/FScene2d.ts:22](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/2d/src/FScene2d.ts#L22)

## Methods

### addComponent

▸ **addComponent**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FComponent2d`](2d_src.FComponent2d.md) |

#### Returns

`void`

#### Overrides

FScene.addComponent

#### Defined in

[packages/2d/src/FScene2d.ts:27](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/2d/src/FScene2d.ts#L27)

## Properties

### camera

• `Optional` **camera**: `FCamera`

#### Inherited from

FScene.camera

#### Defined in

packages/core/dist/index.d.ts:25

___

### components

• **components**: [`FComponent2d`](2d_src.FComponent2d.md)[]

#### Overrides

FScene.components

#### Defined in

[packages/2d/src/FScene2d.ts:19](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/2d/src/FScene2d.ts#L19)

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Inherited from

FScene.gravity

#### Defined in

packages/core/dist/index.d.ts:26

___

### world

• `Optional` **world**: `World`

#### Overrides

FScene.world

#### Defined in

[packages/2d/src/FScene2d.ts:20](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/2d/src/FScene2d.ts#L20)
