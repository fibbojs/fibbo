[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterController

# Class: `abstract` FCharacterController

An abstract pre-defined character controller.

## Extends

- [`FController`](FController.md)

## Extended by

- [`FCharacterControllerD`](FCharacterControllerD.md)
- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterController()

> **new FCharacterController**(`scene`, `options`): [`FCharacterController`](FCharacterController.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterController`](FCharacterController.md)

#### Overrides

[`FController`](FController.md).[`constructor`](FController.md#constructors)

#### Defined in

[3d/src/controllers/FCharacterController.ts:41](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FCharacterController.ts#L41)

## Methods

### getCorrectedRotation()

> **getCorrectedRotation**(): `Quaternion`

Return the corrected rotation for the current frame.
Uses the camera so the character nevers faces the camera.

#### Returns

`Quaternion`

#### Defined in

[3d/src/controllers/FCharacterController.ts:122](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FCharacterController.ts#L122)

***

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

Update the controller. Should be called every frame.
The purpose of `onFrame` on FController is to update the component's transform in the desired way.
Any rendering process should be done on the component, not here.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

[`FController`](FController.md).[`onFrame`](FController.md#onframe)

#### Defined in

core/dist/index.d.ts:26

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FController`](FController.md).[`component`](FController.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FController.ts#L17)

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### backward

> **backward**: `boolean`

#### forward

> **forward**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### Defined in

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/controllers/FCharacterController.ts#L34)
