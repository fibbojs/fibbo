[@fibbojs](/api/index) / [3d](/api/3d) / FController

# Class: `abstract` FController

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

[packages/3d/src/controllers/FController.ts:23](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/controllers/FController.ts#L23)

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

`FControllerCore.frame`

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

[packages/3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/controllers/FController.ts#L17)
