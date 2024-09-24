[@fibbojs](/api/index) / [2d](/api/2d) / FController

# Class: `abstract` FController

The base class for 2D controllers in Fibbo.

## Extends

- `FController`

## Extended by

- [`FCharacterController`](FCharacterController.md)

## Constructors

### new FController()

> **new FController**(`options`): [`FController`](FController.md)

#### Parameters

• **options**: [`FControllerOptions`](../interfaces/FControllerOptions.md)

The options for the controller.

#### Returns

[`FController`](FController.md)

#### Overrides

`FControllerCore.constructor`

#### Defined in

[2d/src/controllers/FController.ts:23](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/2d/src/controllers/FController.ts#L23)

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

`FControllerCore.onFrame`

#### Defined in

core/dist/index.d.ts:26

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Overrides

`FControllerCore.component`

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/2d/src/controllers/FController.ts#L17)
