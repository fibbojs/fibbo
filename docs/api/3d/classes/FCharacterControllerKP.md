[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerKP

# Class: FCharacterControllerKP

A pre-defined character controller based on a Kinematic Position RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerKP, FScene } from '@fibbojs/3d'

const scene = new FScene()

const capsule = new FCapsule(scene)
capsule.controller = new FCharacterControllerKP(scene)
scene.addComponent(capsule)
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKP()

> **new FCharacterControllerKP**(`scene`, `options`): [`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[3d/src/controllers/FCharacterControllerKP.ts:22](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterControllerKP.ts#L22)

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

[3d/src/controllers/FCharacterControllerKP.ts:32](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterControllerKP.ts#L32)

***

### getCorrectedMovements()

> **getCorrectedMovements**(): [`FVector3`](../interfaces/FVector3.md)

Return the corrected movements for the current frame.

#### Returns

[`FVector3`](../interfaces/FVector3.md)

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:48](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterControllerK.ts#L48)

***

### getCorrectedRotation()

> **getCorrectedRotation**(): `Quaternion`

Return the corrected rotation for the current frame.
Uses the camera so the character nevers faces the camera.

#### Returns

`Quaternion`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedRotation`](FCharacterControllerK.md#getcorrectedrotation)

#### Defined in

[3d/src/controllers/FCharacterController.ts:122](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterController.ts#L122)

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`characterController`](FCharacterControllerK.md#charactercontroller)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:22](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterControllerK.ts#L22)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FController.ts#L17)

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

[`FCharacterControllerK`](FCharacterControllerK.md).[`inputs`](FCharacterControllerK.md#inputs)

#### Defined in

[3d/src/controllers/FCharacterController.ts:25](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterController.ts#L25)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:40](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterController.ts#L40)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:35](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterController.ts#L35)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:17](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/controllers/FCharacterControllerK.ts#L17)
