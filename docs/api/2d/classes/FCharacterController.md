[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterController

# Class: `abstract` FCharacterController

An abstract pre-defined character controller.

## Extends

- [`FController`](FController.md)

## Extended by

- [`FCharacterControllerD`](FCharacterControllerD.md)
- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterController()

> **new FCharacterController**(`options`): [`FCharacterController`](FCharacterController.md)

#### Parameters

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterController`](FCharacterController.md)

#### Overrides

[`FController`](FController.md).[`constructor`](FController.md#constructors)

#### Defined in

[2d/src/controllers/FCharacterController.ts:38](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/controllers/FCharacterController.ts#L38)

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

[`FController`](FController.md).[`frame`](FController.md#frame)

#### Defined in

core/dist/index.d.ts:32

## Properties

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Inherited from

[`FController`](FController.md).[`__RUN_IN_PHYSIC_PIPELINE__`](FController.md#__run_in_physic_pipeline__)

#### Defined in

core/dist/index.d.ts:20

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FController`](FController.md).[`component`](FController.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/controllers/FController.ts#L17)

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

#### Defined in

[2d/src/controllers/FCharacterController.ts:21](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/controllers/FCharacterController.ts#L21)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Defined in

[2d/src/controllers/FCharacterController.ts:36](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/controllers/FCharacterController.ts#L36)

***

### speed

> **speed**: `number`

The speed of the character.

#### Defined in

[2d/src/controllers/FCharacterController.ts:31](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/controllers/FCharacterController.ts#L31)
