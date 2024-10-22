[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterControllerKV

# Class: FCharacterControllerKV

A pre-defined character controller based on a Kinematic Velocity RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerKV, FScene } from '@fibbojs/2d'

const scene = new FScene()

const capsule = new FCapsule(scene)
capsule.controller = new FCharacterControllerKV(scene)
scene.addComponent(capsule)
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKV()

> **new FCharacterControllerKV**(`scene`, `options`): [`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[2d/src/controllers/FCharacterControllerKV.ts:21](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterControllerKV.ts#L21)

## Methods

### frame()

> **frame**(`delta`): `void`

Update the controller. Should be called every frame.
The purpose of this method is to update the component transform based on the controller logic.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`frame`](FCharacterControllerK.md#frame)

#### Defined in

[2d/src/controllers/FCharacterControllerKV.ts:32](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterControllerKV.ts#L32)

***

### getCorrectedMovements()

> **getCorrectedMovements**(): `object`

Return the corrected movements for the current frame.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:44](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterControllerK.ts#L44)

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`characterController`](FCharacterControllerK.md#charactercontroller)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:20](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterControllerK.ts#L20)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FController.ts#L17)

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

[`FCharacterControllerK`](FCharacterControllerK.md).[`inputs`](FCharacterControllerK.md#inputs)

#### Defined in

[2d/src/controllers/FCharacterController.ts:21](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterController.ts#L21)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[2d/src/controllers/FCharacterController.ts:36](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterController.ts#L36)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[2d/src/controllers/FCharacterController.ts:31](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterController.ts#L31)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to simulate gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:15](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/controllers/FCharacterControllerK.ts#L15)
