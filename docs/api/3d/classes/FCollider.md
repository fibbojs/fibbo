[@fibbojs](/api/index) / [3d](/api/3d) / FCollider

# Class: FCollider

A 3d collider that can be attached to a component.

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[3d/src/core/FCollider.ts:329](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L329)

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
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

#### Defined in

[3d/src/core/FCollider.ts:78](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L78)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the collider.

#### Parameters

• **position**: `FVector3`

The new position of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:282](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L282)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the collider.

#### Parameters

• **rotation**: `FVector3`

The new rotation of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:291](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L291)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the collider.

#### Parameters

• **scale**: `FVector3`

The new scale of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:300](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L300)

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

[3d/src/core/FCollider.ts:195](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L195)

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

[3d/src/core/FCollider.ts:225](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L225)

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

[3d/src/core/FCollider.ts:255](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L255)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:173](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L173)

## Properties

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[3d/src/core/FCollider.ts:35](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L35)

***

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[3d/src/core/FCollider.ts:39](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L39)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the collider.

#### Defined in

[3d/src/core/FCollider.ts:47](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L47)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[3d/src/core/FCollider.ts:51](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L51)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the collider.

#### Defined in

[3d/src/core/FCollider.ts:43](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/core/FCollider.ts#L43)
