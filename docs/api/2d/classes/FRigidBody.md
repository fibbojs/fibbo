[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

# Class: FRigidBody

A 2d rigidBody that can be attached to a component.

## Accessors

### component

> `get` **component**(): `undefined` \| [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: `undefined` \| [`FComponent`](FComponent.md)

#### Returns

`undefined` \| [`FComponent`](FComponent.md)

#### Defined in

[2d/src/core/FRigidBody.ts:318](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L318)

## Constructors

### new FRigidBody()

> **new FRigidBody**(`scene`, `options`?): [`FRigidBody`](FRigidBody.md)

Creates a rigidBody for the given component.

#### Parameters

• **scene**: [`FScene`](FScene.md)

The scene the rigidBody belongs to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FRigidBody`](FRigidBody.md)

#### Example

```ts
const rigidBody = new FRigidBody(scene, {
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  shape: 'CUBOID'
})
```

#### Defined in

[2d/src/core/FRigidBody.ts:82](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L82)

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

[2d/src/core/FRigidBody.ts:291](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L291)

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

[2d/src/core/FRigidBody.ts:301](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L301)

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

[2d/src/core/FRigidBody.ts:311](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L311)

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

[2d/src/core/FRigidBody.ts:210](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L210)

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

[2d/src/core/FRigidBody.ts:239](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L239)

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

[2d/src/core/FRigidBody.ts:265](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L265)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:172](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L172)

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

[2d/src/core/FRigidBody.ts:199](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L199)

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

[2d/src/core/FRigidBody.ts:191](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L191)

## Properties

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Defined in

[2d/src/core/FRigidBody.ts:46](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L46)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Defined in

[2d/src/core/FRigidBody.ts:38](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L38)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[2d/src/core/FRigidBody.ts:42](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L42)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the rigidBody.

#### Defined in

[2d/src/core/FRigidBody.ts:54](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L54)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the rigidBody.

#### Defined in

[2d/src/core/FRigidBody.ts:50](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FRigidBody.ts#L50)
