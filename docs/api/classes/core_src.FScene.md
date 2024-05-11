[@fibbojs](/api/index)  / [core](/api/modules/core_src) / FScene

# Class: FScene

[core](/api/modules/core_src).FScene

**`Description`**

A scene which contains the components and the camera.
Also contains the Rapier world if physics is enabled.

## Table of contents

### Constructors

- [constructor](core_src.FScene.md#constructor)

### Methods

- [addComponent](core_src.FScene.md#addcomponent)

### Properties

- [camera](core_src.FScene.md#camera)
- [components](core_src.FScene.md#components)
- [gravity](core_src.FScene.md#gravity)
- [world](core_src.FScene.md#world)

## Constructors

### constructor

• **new FScene**(): [`FScene`](core_src.FScene.md)

#### Returns

[`FScene`](core_src.FScene.md)

#### Defined in

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L17)

## Methods

### addComponent

▸ **addComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`FComponent`](core_src.FComponent.md) |

#### Returns

`void`

**`Description`**

Add a component to the scene.

#### Defined in

[packages/core/src/FScene.ts:23](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L23)

## Properties

### camera

• `Optional` **camera**: [`FCamera`](core_src.FCamera.md)

#### Defined in

[packages/core/src/FScene.ts:12](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L12)

___

### components

• `Optional` **components**: [`FComponent`](core_src.FComponent.md)[]

#### Defined in

[packages/core/src/FScene.ts:11](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L11)

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

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L14)

___

### world

• `Optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:15](https://github.com/fibbojs/fibbo/blob/ccc6e3847dd911058d63a251d216974de127e8af/packages/core/src/FScene.ts#L15)
