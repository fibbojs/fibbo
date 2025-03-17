[@fibbojs](/api/index) / [3d](/api/3d) / FRigidBody

# Class: FRigidBody

A 3d rigidBody that can be attached to a component.

## Extended by

- [`FSensor`](FSensor.md)

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[3d/src/core/FRigidBody.ts:370](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L370)

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
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

#### Defined in

[3d/src/core/FRigidBody.ts:100](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L100)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the rigidBody.

#### Parameters

• **position**: `FVector3`

The new position of the rigidBody.

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:332](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L332)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the rigidBody.

#### Parameters

• **rotation**: `FVector3`

The new rotation of the rigidBody.

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:342](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L342)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the rigidBody.

#### Parameters

• **scale**: `FVector3`

The new scale of the rigidBody.

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:352](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L352)

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

[3d/src/core/FRigidBody.ts:245](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L245)

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

[3d/src/core/FRigidBody.ts:275](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L275)

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

[3d/src/core/FRigidBody.ts:305](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L305)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:207](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L207)

***

### setAngvel()

> **setAngvel**(`velocity`): `void`

Set the angular velocity of the rigidBody.

#### Parameters

• **velocity**: `FVector3`

The new angular velocity of the rigidBody.

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:234](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L234)

***

### setLinvel()

> **setLinvel**(`velocity`): `void`

Set the linear velocity of the rigidBody.

#### Parameters

• **velocity**: `FVector3`

The new linear velocity of the rigidBody.

#### Returns

`void`

#### Defined in

[3d/src/core/FRigidBody.ts:226](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L226)

## Properties

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Defined in

[3d/src/core/FRigidBody.ts:56](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L56)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Defined in

[3d/src/core/FRigidBody.ts:48](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L48)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[3d/src/core/FRigidBody.ts:52](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L52)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the rigidBody.

#### Defined in

[3d/src/core/FRigidBody.ts:64](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L64)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the rigidBody.

#### Defined in

[3d/src/core/FRigidBody.ts:60](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FRigidBody.ts#L60)
