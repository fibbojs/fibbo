[@fibbojs](/api/index) / [3d](/api/3d) / FCollider

# Class: FCollider

A 3d collider that can be attached to a component.

## Accessors

### component

> `get` **component**(): `undefined` \| [`FComponent`](FComponent.md)

> `set` **component**(`component`): `void`

#### Parameters

• **component**: `undefined` \| [`FComponent`](FComponent.md)

#### Returns

`undefined` \| [`FComponent`](FComponent.md)

#### Defined in

[3d/src/core/FCollider.ts:314](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L314)

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
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  shape: FShapes.CUBOID
})
```

#### Defined in

[3d/src/core/FCollider.ts:76](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L76)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

Set the position of the collider.

#### Parameters

• **position**: [`FVector3`](../interfaces/FVector3.md)

The new position of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:267](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L267)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

Set the rotation of the collider.

#### Parameters

• **rotation**: [`FVector3`](../interfaces/FVector3.md)

The new rotation of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:276](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L276)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

Set the scale of the collider.

#### Parameters

• **scale**: [`FVector3`](../interfaces/FVector3.md)

The new scale of the collider.

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:285](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L285)

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

[3d/src/core/FCollider.ts:180](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L180)

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

[3d/src/core/FCollider.ts:210](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L210)

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

[3d/src/core/FCollider.ts:240](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L240)

***

### frame()

> **frame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FCollider.ts:167](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L167)

## Properties

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[3d/src/core/FCollider.ts:33](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L33)

***

### \_\_COMPONENT\_\_?

> `optional` **\_\_COMPONENT\_\_**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[3d/src/core/FCollider.ts:37](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L37)

***

### offset

> **offset**: [`FTransform`](FTransform.md)

The transform offset of the collider.

#### Defined in

[3d/src/core/FCollider.ts:45](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L45)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[3d/src/core/FCollider.ts:49](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L49)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

The transform of the collider.

#### Defined in

[3d/src/core/FCollider.ts:41](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FCollider.ts#L41)
