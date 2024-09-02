[@fibbojs](/api/index) / [3d](/api/3d) / FController

# Class: `abstract` FController

## Description

The base class for 3D controllers in Fibbo.

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

[packages/3d/src/controllers/FController.ts:23](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FController.ts#L23)

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

packages/core/dist/index.d.ts:26

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Overrides

`FControllerCore.component`

#### Defined in

[packages/3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FController.ts#L17)
