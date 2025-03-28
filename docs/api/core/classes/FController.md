[@fibbojs](/api/index) / [core](/api/core) / FController

# Class: `abstract` FController

The base class for all 2D and 3D controllers in Fibbo.

## Constructors

### new FController()

> **new FController**(`options`): [`FController`](FController.md)

#### Parameters

• **options**: [`FControllerOptions`](../interfaces/FControllerOptions.md)

The options for the controller.

#### Returns

[`FController`](FController.md)

#### Defined in

[core/src/FController.ts:27](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/FController.ts#L27)

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

#### Defined in

[core/src/FController.ts:37](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/FController.ts#L37)

## Properties

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Defined in

[core/src/FController.ts:20](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/FController.ts#L20)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.

#### Defined in

[core/src/FController.ts:16](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/FController.ts#L16)
