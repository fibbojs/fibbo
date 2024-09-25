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

[core/src/FController.ts:21](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FController.ts#L21)

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

[core/src/FController.ts:31](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FController.ts#L31)

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.

#### Defined in

[core/src/FController.ts:15](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FController.ts#L15)
