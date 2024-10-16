[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterControllerK

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

[2d/src/controllers/FCharacterControllerK.ts:22](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterControllerK.ts#L22)

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

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:44](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterControllerK.ts#L44)

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

[`FCharacterController`](FCharacterController.md).[`onFrame`](FCharacterController.md#onframe)

#### Defined in

core/dist/index.d.ts:26

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:20](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterControllerK.ts#L20)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FController.ts#L17)

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### down

> **down**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### up

> **up**: `boolean`

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`inputs`](FCharacterController.md#inputs)

#### Defined in

[2d/src/controllers/FCharacterController.ts:21](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterController.ts#L21)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[2d/src/controllers/FCharacterController.ts:36](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterController.ts#L36)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[2d/src/controllers/FCharacterController.ts:31](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterController.ts#L31)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to simulate gravity.

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:15](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/controllers/FCharacterControllerK.ts#L15)
