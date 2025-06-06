[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerKP

# Class: FCharacterControllerKP

A pre-defined character controller based on a Kinematic Position RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerKP } from '@fibbojs/3d'

const capsule = new FCapsule()
capsule.addController(new FCharacterControllerKP())
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKP()

> **new FCharacterControllerKP**(`options`): [`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Parameters

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[3d/src/controllers/FCharacterControllerKP.ts:18](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerKP.ts#L18)

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

[3d/src/controllers/FCharacterControllerKP.ts:29](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerKP.ts#L29)

***

### getCorrectedMovements()

> **getCorrectedMovements**(`delta`): `FVector3`

Return the corrected movements for the current frame.

#### Parameters

• **delta**: `number`

#### Returns

`FVector3`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:66](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerK.ts#L66)

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

[3d/src/controllers/FCharacterController.ts:125](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterController.ts#L125)

## Properties

### \_\_LAST\_IS\_GROUNDED\_\_

> **\_\_LAST\_IS\_GROUNDED\_\_**: `boolean`

Tells if the character was grounded in the last frame.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`__LAST_IS_GROUNDED__`](FCharacterControllerK.md#__last_is_grounded__)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:30](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerK.ts#L30)

***

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`__RUN_IN_PHYSIC_PIPELINE__`](FCharacterControllerK.md#__run_in_physic_pipeline__)

#### Defined in

core/dist/index.d.ts:20

***

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`characterController`](FCharacterControllerK.md#charactercontroller)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:21](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerK.ts#L21)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FController.ts#L17)

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

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### isGrounded

> **isGrounded**: `boolean`

Tells if the character is grounded.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`isGrounded`](FCharacterControllerK.md#isgrounded)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:26](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerK.ts#L26)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterController.ts#L34)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[3d/src/controllers/FCharacterControllerK.ts:16](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/controllers/FCharacterControllerK.ts#L16)
