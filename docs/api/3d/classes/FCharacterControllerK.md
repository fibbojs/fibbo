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

[3d/src/controllers/FCharacterControllerK.ts:24](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterControllerK.ts#L24)

## Methods

### frame()

> `abstract` **frame**(`delta`): `void`

Update the controller. Should be called every frame.
The purpose of this method is to update the component transform based on the controller logic.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`frame`](FCharacterController.md#frame)

#### Defined in

core/dist/index.d.ts:26

***

### getCorrectedMovements()

> **getCorrectedMovements**(): [`FVector3`](../interfaces/FVector3.md)

Return the corrected movements for the current frame.

#### Returns

[`FVector3`](../interfaces/FVector3.md)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:48](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterControllerK.ts#L48)

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

[3d/src/controllers/FCharacterController.ts:121](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterController.ts#L121)

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:22](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterControllerK.ts#L22)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FController.ts#L17)

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

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterController.ts#L34)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:17](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/controllers/FCharacterControllerK.ts#L17)
