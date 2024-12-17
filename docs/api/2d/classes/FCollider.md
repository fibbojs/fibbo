[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

# Class: FCollider

A 2d collider that can be attached to a component.

## Accessors

### component

> `get` **component**(): `undefined` \| [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: `undefined` \| [`FComponent`](FComponent.md)

#### Returns

`undefined` \| [`FComponent`](FComponent.md)

#### Defined in

[2d/src/core/FCollider.ts:280](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L280)

## Constructors

### new FCollider()

> **new FCollider**(`scene`, `options`?): [`FCollider`](FCollider.md)

Creates a collider for a given component.

#### Parameters

• **scene**: [`FScene`](FScene.md)

The scene the collider belongs to.

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

#### Example

```ts
const collider = new FCollider(scene, {
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  shape: FShapes.CIRCLE
})
```

#### Defined in

[2d/src/core/FCollider.ts:71](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L71)

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

[2d/src/core/FCollider.ts:243](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L243)

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

[2d/src/core/FCollider.ts:252](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L252)

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

[2d/src/core/FCollider.ts:261](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L261)

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

[2d/src/core/FCollider.ts:162](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L162)

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

[2d/src/core/FCollider.ts:191](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L191)

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

[2d/src/core/FCollider.ts:217](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L217)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:140](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L140)

## Properties

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:31](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L31)

***

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[2d/src/core/FCollider.ts:35](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L35)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the collider.

#### Defined in

[2d/src/core/FCollider.ts:43](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L43)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[2d/src/core/FCollider.ts:47](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L47)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the collider.

#### Defined in

[2d/src/core/FCollider.ts:39](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/2d/src/core/FCollider.ts#L39)
