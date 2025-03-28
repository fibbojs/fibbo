[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

# Class: FRigidBody

A 2d rigidBody that can be attached to a component.

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[2d/src/core/FRigidBody.ts:319](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L319)

## Constructors

### new FRigidBody()

> **new FRigidBody**(`options`?): [`FRigidBody`](FRigidBody.md)

Creates a rigidBody for the given component.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FRigidBody`](FRigidBody.md)

#### Example

```ts
const rigidBody = new FRigidBody({
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  shape: 'CUBOID'
})
```

#### Defined in

[2d/src/core/FRigidBody.ts:83](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L83)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the rigidBody.

#### Parameters

• **position**: `FVector2`

The new position of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:292](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L292)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the rigidBody.

#### Parameters

• **rotation**: `number`

The new rotation of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:302](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L302)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the rigidBody.

#### Parameters

• **scale**: `FVector2`

The new scale of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:312](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L312)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(`initiator`): `void`

Update the position of the rigidBody according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the rigidBody won't be considered as the initiator of the position update.
This means the new position will be the position of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:211](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L211)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(`initiator`): `void`

Update the rotation of the rigidBody according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the rigidBody won't be considered as the initiator of the rotation update.
This means the new rotation will be the rotation of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:240](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L240)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(`initiator`): `void`

Update the scale of the rigidBody according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the rigidBody won't be considered as the initiator of the scale update.
This means the new scale will be the scale of the attached component, plus the offset.
Setting this to true will propagate the event to other objects (component, sensor,...).

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:266](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L266)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:173](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L173)

***

### setAngvel()

> **setAngvel**(`velocity`): `void`

Set the angular velocity of the rigidBody.

#### Parameters

• **velocity**: `number`

The new angular velocity of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:200](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L200)

***

### setLinvel()

> **setLinvel**(`velocity`): `void`

Set the linear velocity of the rigidBody.

#### Parameters

• **velocity**: `FVector2`

The new linear velocity of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:192](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L192)

## Properties

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Defined in

[2d/src/core/FRigidBody.ts:47](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L47)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Defined in

[2d/src/core/FRigidBody.ts:39](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L39)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[2d/src/core/FRigidBody.ts:43](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L43)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the rigidBody.

#### Defined in

[2d/src/core/FRigidBody.ts:55](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L55)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the rigidBody.

#### Defined in

[2d/src/core/FRigidBody.ts:51](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/2d/src/core/FRigidBody.ts#L51)
