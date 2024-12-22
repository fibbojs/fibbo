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

[packages/core/src/FController.ts:21](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/FController.ts#L21)

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

[packages/core/src/FController.ts:30](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/FController.ts#L30)

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.

#### Defined in

[packages/core/src/FController.ts:15](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/FController.ts#L15)
