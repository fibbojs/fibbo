[@fibbojs/fibbo](/api/index)  / FibboScene

# Class: FibboScene

**`Description`**

A scene which contains the models, the Three.js scene and the Rapier world.

## Table of contents

### Constructors

- [constructor](FibboScene.md#constructor)

### Properties

- [camera](FibboScene.md#camera)
- [controls](FibboScene.md#controls)
- [gravity](FibboScene.md#gravity)
- [models](FibboScene.md#models)
- [scene](FibboScene.md#scene)
- [world](FibboScene.md#world)

### Methods

- [addDebugPanel](FibboScene.md#adddebugpanel)
- [addModel](FibboScene.md#addmodel)
- [debug](FibboScene.md#debug)

## Constructors

### constructor

• **new FibboScene**(`debug?`): [`FibboScene`](FibboScene.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `debug` | `boolean` | `false` |

#### Returns

[`FibboScene`](FibboScene.md)

#### Defined in

[core/FibboScene.ts:21](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L21)

## Properties

### camera

• **camera**: `PerspectiveCamera`

#### Defined in

[core/FibboScene.ts:15](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L15)

___

### controls

• **controls**: `undefined` \| `OrbitControls`

#### Defined in

[core/FibboScene.ts:16](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L16)

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

[core/FibboScene.ts:18](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L18)

___

### models

• **models**: [`FibboModel`](FibboModel.md)[]

#### Defined in

[core/FibboScene.ts:12](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L12)

___

### scene

• **scene**: `Scene`

#### Defined in

[core/FibboScene.ts:14](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L14)

___

### world

• **world**: `World`

#### Defined in

[core/FibboScene.ts:19](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L19)

## Methods

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:139](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L139)

___

### addModel

▸ **addModel**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FibboModel`](FibboModel.md) |

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:123](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L123)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:178](https://github.com/fibbojs/fibbo/blob/39b31a0b731eac696fc5d788b95520a885d6af99/src/core/FibboScene.ts#L178)
