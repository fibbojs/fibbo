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

[core/src/FController.ts:20](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FController.ts#L20)

## Methods

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

Update the controller. Should be called every frame.
The purpose of `onFrame` on FController is to update the component's transform in the desired way.
Any rendering process should be done on the component, not here.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Defined in

[core/src/FController.ts:30](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FController.ts#L30)

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.

#### Defined in

[core/src/FController.ts:14](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FController.ts#L14)
