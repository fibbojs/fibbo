[@fibbojs](/api/index) / [3d](/api/3d) / FSensor

# Class: FSensor

A 3d sensor that can be attached to a component.

## Extends

- [`FRigidBody`](FRigidBody.md)

## Accessors

### component

> `get` **component**(): `undefined` \| [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: `undefined` \| [`FComponent`](FComponent.md)

#### Returns

`undefined` \| [`FComponent`](FComponent.md)

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`component`](FRigidBody.md#component)

#### Defined in

[3d/src/core/FRigidBody.ts:366](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L366)

## Constructors

### new FSensor()

> **new FSensor**(`scene`, `options`?): [`FSensor`](FSensor.md)

Creates a rigidBody for the given component.

#### Parameters

• **scene**: [`FScene`](FScene.md)

The scene the rigidBody belongs to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FSensor`](FSensor.md)

#### Example

```ts
const sensor = new FSensor(scene, {
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

#### Overrides

[`FRigidBody`](FRigidBody.md).[`constructor`](FRigidBody.md#constructors)

#### Defined in

[3d/src/core/FSensor.ts:40](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FSensor.ts#L40)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the rigidBody.

#### Parameters

• **position**: [`FVector3`](../interfaces/FVector3.md)

The new position of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_POSITION__`](FRigidBody.md#__set_position__)

#### Defined in

[3d/src/core/FRigidBody.ts:328](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L328)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the rigidBody.

#### Parameters

• **rotation**: [`FVector3`](../interfaces/FVector3.md)

The new rotation of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_ROTATION__`](FRigidBody.md#__set_rotation__)

#### Defined in

[3d/src/core/FRigidBody.ts:338](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L338)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the rigidBody.

#### Parameters

• **scale**: [`FVector3`](../interfaces/FVector3.md)

The new scale of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__SET_SCALE__`](FRigidBody.md#__set_scale__)

#### Defined in

[3d/src/core/FRigidBody.ts:348](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L348)

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

[3d/src/core/FRigidBody.ts:241](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L241)

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

[3d/src/core/FRigidBody.ts:271](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L271)

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

[3d/src/core/FRigidBody.ts:301](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L301)

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

[3d/src/core/FRigidBody.ts:203](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L203)

***

### setAngvel()

> **setAngvel**(`velocity`): `void`

Set the angular velocity of the rigidBody.

#### Parameters

• **velocity**: [`FVector3`](../interfaces/FVector3.md)

The new angular velocity of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`setAngvel`](FRigidBody.md#setangvel)

#### Defined in

[3d/src/core/FRigidBody.ts:230](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L230)

***

### setLinvel()

> **setLinvel**(`velocity`): `void`

Set the linear velocity of the rigidBody.

#### Parameters

• **velocity**: [`FVector3`](../interfaces/FVector3.md)

The new linear velocity of the rigidBody.

#### Returns

`void`

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`setLinvel`](FRigidBody.md#setlinvel)

#### Defined in

[3d/src/core/FRigidBody.ts:222](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L222)

## Properties

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__COMPONENT__`](FRigidBody.md#__component__)

#### Defined in

[3d/src/core/FRigidBody.ts:54](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L54)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`__RIGIDBODY__`](FRigidBody.md#__rigidbody__)

#### Defined in

[3d/src/core/FRigidBody.ts:46](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L46)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`collider`](FRigidBody.md#collider)

#### Defined in

[3d/src/core/FRigidBody.ts:50](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L50)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the rigidBody.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`offset`](FRigidBody.md#offset)

#### Defined in

[3d/src/core/FRigidBody.ts:62](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L62)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the rigidBody.

#### Inherited from

[`FRigidBody`](FRigidBody.md).[`transform`](FRigidBody.md#transform)

#### Defined in

[3d/src/core/FRigidBody.ts:58](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/core/FRigidBody.ts#L58)
