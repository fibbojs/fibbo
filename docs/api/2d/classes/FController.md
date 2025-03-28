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

[2d/src/controllers/FController.ts:23](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/controllers/FController.ts#L23)

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

core/dist/index.d.ts:32

## Properties

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Inherited from

`FControllerCore.__RUN_IN_PHYSIC_PIPELINE__`

#### Defined in

core/dist/index.d.ts:20

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Overrides

`FControllerCore.component`

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/controllers/FController.ts#L17)
