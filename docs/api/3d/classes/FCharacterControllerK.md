[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerK

# Class: `abstract` FCharacterControllerK

An abstract pre-defined character controller based on Kinematic rigidbodies.

## Extends

- [`FCharacterController`](FCharacterController.md)

## Extended by

- [`FCharacterControllerKP`](FCharacterControllerKP.md)
- [`FCharacterControllerKV`](FCharacterControllerKV.md)

## Constructors

### new FCharacterControllerK()

> **new FCharacterControllerK**(`scene`, `options`): [`FCharacterControllerK`](FCharacterControllerK.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerK`](FCharacterControllerK.md)

#### Overrides

[`FCharacterController`](FCharacterController.md).[`constructor`](FCharacterController.md#constructors)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:23](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterControllerK.ts#L23)

## Methods

### getCorrectedMovements()

> **getCorrectedMovements**(): `object`

Return the corrected movements for the current frame.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:47](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterControllerK.ts#L47)

***

### getCorrectedRotation()

> **getCorrectedRotation**(): `Quaternion`

Return the corrected rotation for the current frame.
Uses the camera so the character nevers faces the camera.

#### Returns

`Quaternion`

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`getCorrectedRotation`](FCharacterController.md#getcorrectedrotation)

#### Defined in

[3d/src/controllers/FCharacterController.ts:122](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterController.ts#L122)

***

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update the controller. Should be called every frame.
The purpose of `onFrame` on FController is to update the component's transform in the desired way.
Any rendering process should be done on the component, not here.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`onFrame`](FCharacterController.md#onframe)

#### Defined in

core/dist/index.d.ts:26

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:21](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterControllerK.ts#L21)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FController.ts#L17)

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

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`inputs`](FCharacterController.md#inputs)

#### Defined in

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterController.ts#L34)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:16](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/controllers/FCharacterControllerK.ts#L16)
