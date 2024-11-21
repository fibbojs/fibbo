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

[core/src/FController.ts:21](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/core/src/FController.ts#L21)

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

[core/src/FController.ts:30](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/core/src/FController.ts#L30)

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.

#### Defined in

[core/src/FController.ts:15](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/core/src/FController.ts#L15)
