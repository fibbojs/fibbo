[@fibbojs](/api/index) / [3d](/api/3d) / FSensor

# Class: FSensor

A 3d sensor that can be attached to a component.

## Example

```ts
import { FSensor } from '@fibbojs/3d'

const sensor = new FSensor({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

## Extends

- [`FRigidBody`](FRigidBody.md)

## Accessors

### component

> `get` **component**(): [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`component`](FRigidBody.md#component)

#### Defined in

[3d/src/core/FRigidBody.ts:372](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L372)

## Constructors

### new FSensor()

> **new FSensor**(`options`?): [`FSensor`](FSensor.md)

Creates a rigidBody for the given component.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FSensor`](FSensor.md)

#### Overrides

[`FRigidBody`](FRigidBody.md).[`constructor`](FRigidBody.md#constructors)

#### Defined in

[3d/src/core/FSensor.ts:42](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FSensor.ts#L42)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the rigidBody.

#### Parameters

• **position**: `FVector3`

The new position of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_POSITION__`](FRigidBody.md#__set_position__)

#### Defined in

[3d/src/core/FRigidBody.ts:334](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L334)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the rigidBody.

#### Parameters

• **rotation**: `FVector3`

The new rotation of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_ROTATION__`](FRigidBody.md#__set_rotation__)

#### Defined in

[3d/src/core/FRigidBody.ts:344](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L344)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the rigidBody.

#### Parameters

• **scale**: `FVector3`

The new scale of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_SCALE__`](FRigidBody.md#__set_scale__)

#### Defined in

[3d/src/core/FRigidBody.ts:354](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L354)

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

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__UPDATE_POSITION__`](FRigidBody.md#__update_position__)

#### Defined in

[3d/src/core/FRigidBody.ts:247](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L247)

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

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__UPDATE_ROTATION__`](FRigidBody.md#__update_rotation__)

#### Defined in

[3d/src/core/FRigidBody.ts:277](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L277)

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

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__UPDATE_SCALE__`](FRigidBody.md#__update_scale__)

#### Defined in

[3d/src/core/FRigidBody.ts:307](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L307)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`frame`](FRigidBody.md#frame)

#### Defined in

[3d/src/core/FRigidBody.ts:209](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L209)

***

### setAngvel()

> **setAngvel**(`velocity`): `void`

Set the angular velocity of the rigidBody.

#### Parameters

• **velocity**: `FVector3`

The new angular velocity of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`setAngvel`](FRigidBody.md#setangvel)

#### Defined in

[3d/src/core/FRigidBody.ts:236](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L236)

***

### setLinvel()

> **setLinvel**(`velocity`): `void`

Set the linear velocity of the rigidBody.

#### Parameters

• **velocity**: `FVector3`

The new linear velocity of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`setLinvel`](FRigidBody.md#setlinvel)

#### Defined in

[3d/src/core/FRigidBody.ts:228](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L228)

## Properties

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__COMPONENT__`](FRigidBody.md#__component__)

#### Defined in

[3d/src/core/FRigidBody.ts:67](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L67)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__RIGIDBODY__`](FRigidBody.md#__rigidbody__)

#### Defined in

[3d/src/core/FRigidBody.ts:59](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L59)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`collider`](FRigidBody.md#collider)

#### Defined in

[3d/src/core/FRigidBody.ts:63](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L63)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the rigidBody.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`offset`](FRigidBody.md#offset)

#### Defined in

[3d/src/core/FRigidBody.ts:75](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L75)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the rigidBody.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`transform`](FRigidBody.md#transform)

#### Defined in

[3d/src/core/FRigidBody.ts:71](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FRigidBody.ts#L71)
