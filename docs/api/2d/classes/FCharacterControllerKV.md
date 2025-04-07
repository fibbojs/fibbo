[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterControllerKV

# Class: FCharacterControllerKV

A pre-defined character controller based on a Kinematic Velocity RigidBody.

## Example

```ts
import { FCharacterControllerKV, FRectangle } from '@fibbojs/2d'

const rectangle = new FRectangle()
rectangle.addController(new FCharacterControllerKV())
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKV()

> **new FCharacterControllerKV**(`options`): [`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Parameters

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[2d/src/controllers/FCharacterControllerKV.ts:17](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerKV.ts#L17)

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

[2d/src/controllers/FCharacterControllerKV.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerKV.ts#L28)

***

### getCorrectedMovements()

> **getCorrectedMovements**(`delta`): `object`

Return the corrected movements for the current frame.

#### Parameters

• **delta**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:64](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerK.ts#L64)

## Properties

### \_\_LAST\_IS\_GROUNDED\_\_

> **\_\_LAST\_IS\_GROUNDED\_\_**: `boolean`

Tells if the character was grounded in the last frame.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`__LAST_IS_GROUNDED__`](FCharacterControllerK.md#__last_is_grounded__)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerK.ts#L28)

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

[2d/src/controllers/FCharacterControllerK.ts:19](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerK.ts#L19)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FController.ts#L17)

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

[2d/src/controllers/FCharacterController.ts:21](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterController.ts#L21)

***

### isGrounded

> **isGrounded**: `boolean`

Tells if the character is grounded.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`isGrounded`](FCharacterControllerK.md#isgrounded)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:24](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerK.ts#L24)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[2d/src/controllers/FCharacterController.ts:36](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterController.ts#L36)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[2d/src/controllers/FCharacterController.ts:31](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterController.ts#L31)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to simulate gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:14](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/controllers/FCharacterControllerK.ts#L14)
