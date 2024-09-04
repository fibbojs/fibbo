[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterController

# Class: `abstract` FCharacterController

## Description

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

[packages/2d/src/controllers/FCharacterController.ts:42](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/controllers/FCharacterController.ts#L42)

## Methods

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

[`FController`](FController.md).[`onFrame`](FController.md#onframe)

#### Defined in

packages/core/dist/index.d.ts:26

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FController`](FController.md).[`component`](FController.md#component)

#### Defined in

[packages/2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/controllers/FController.ts#L17)

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

[packages/2d/src/controllers/FCharacterController.ts:25](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/controllers/FCharacterController.ts#L25)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Defined in

[packages/2d/src/controllers/FCharacterController.ts:40](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/controllers/FCharacterController.ts#L40)

***

### speed

> **speed**: `number`

The speed of the character.

#### Defined in

[packages/2d/src/controllers/FCharacterController.ts:35](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/controllers/FCharacterController.ts#L35)
