[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

# Class: FCollider

A 2d collider that can be attached to a component.

## Example

```ts
import { FCollider } from '@fibbojs/2d'

const collider = new FCollider({
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  shape: FShapes.CIRCLE
})
```

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[2d/src/core/FCollider.ts:284](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L284)

## Constructors

### new FCollider()

> **new FCollider**(`options`?): [`FCollider`](FCollider.md)

Creates a collider for a given component.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

#### Defined in

[2d/src/core/FCollider.ts:74](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L74)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the collider.

#### Parameters

• **position**: `FVector2`

The new position of the collider.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:247](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L247)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the collider.

#### Parameters

• **rotation**: `number`

The new rotation of the collider in degrees.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:256](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L256)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the collider.

#### Parameters

• **scale**: `FVector2`

The new scale of the collider.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:265](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L265)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(`initiator`): `void`

Update the position of the collider according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the collider won't be considered as the initiator of the position update.
This means the new position will be the position of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:166](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L166)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(`initiator`): `void`

Update the rotation of the collider according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the collider won't be considered as the initiator of the rotation update.
This means the new rotation will be the rotation of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:195](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L195)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(`initiator`): `void`

Update the scale of the collider according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the collider won't be considered as the initiator of the scale update.
This means the new scale will be the scale of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:221](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L221)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:144](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L144)

## Properties

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:42](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L42)

***

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[2d/src/core/FCollider.ts:46](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L46)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the collider.

#### Defined in

[2d/src/core/FCollider.ts:54](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L54)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[2d/src/core/FCollider.ts:58](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L58)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the collider.

#### Defined in

[2d/src/core/FCollider.ts:50](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FCollider.ts#L50)
