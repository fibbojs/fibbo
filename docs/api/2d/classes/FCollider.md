[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

# Class: FCollider

A 2d collider that can be attached to a component.

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[2d/src/core/FCollider.ts:282](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L282)

## Constructors

### new FCollider()

> **new FCollider**(`options`?): [`FCollider`](FCollider.md)

Creates a collider for a given component.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

#### Example

```ts
const collider = new FCollider({
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  shape: FShapes.CIRCLE
})
```

#### Defined in

[2d/src/core/FCollider.ts:72](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L72)

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

[2d/src/core/FCollider.ts:245](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L245)

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

[2d/src/core/FCollider.ts:254](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L254)

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

[2d/src/core/FCollider.ts:263](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L263)

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

[2d/src/core/FCollider.ts:164](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L164)

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

[2d/src/core/FCollider.ts:193](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L193)

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

[2d/src/core/FCollider.ts:219](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L219)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:142](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L142)

## Properties

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:32](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L32)

***

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[2d/src/core/FCollider.ts:36](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L36)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the collider.

#### Defined in

[2d/src/core/FCollider.ts:44](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L44)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[2d/src/core/FCollider.ts:48](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L48)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the collider.

#### Defined in

[2d/src/core/FCollider.ts:40](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FCollider.ts#L40)
