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

> **new FCharacterControllerK**(`options`): [`FCharacterControllerK`](FCharacterControllerK.md)

#### Parameters

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerK`](FCharacterControllerK.md)

#### Overrides

[`FCharacterController`](FCharacterController.md).[`constructor`](FCharacterController.md#constructors)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:32](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L32)

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

core/dist/index.d.ts:32

***

### getCorrectedMovements()

> **getCorrectedMovements**(`delta`): `FVector3`

Return the corrected movements for the current frame.

#### Parameters

• **delta**: `number`

#### Returns

`FVector3`

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:66](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L66)

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

[3d/src/controllers/FCharacterController.ts:125](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterController.ts#L125)

## Properties

### \_\_LAST\_IS\_GROUNDED\_\_

> **\_\_LAST\_IS\_GROUNDED\_\_**: `boolean`

Tells if the character was grounded in the last frame.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:30](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L30)

***

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`__RUN_IN_PHYSIC_PIPELINE__`](FCharacterController.md#__run_in_physic_pipeline__)

#### Defined in

core/dist/index.d.ts:20

***

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:21](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L21)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FController.ts#L17)

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

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### isGrounded

> **isGrounded**: `boolean`

Tells if the character is grounded.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:26](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L26)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterController.ts#L34)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:16](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/controllers/FCharacterControllerK.ts#L16)
