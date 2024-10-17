[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

# Class: FCollider

A 2d collider that can be attached to a component.

## Accessors

### position

> `get` **position**(): `object`

> `set` **position**(`position`): `void`

#### Parameters

• **position**

• **position.x**: `number`

• **position.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:223](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L223)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:247](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L247)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:255](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L255)

***

### scale

> `get` **scale**(): `object`

> `set` **scale**(`scale`): `void`

#### Parameters

• **scale**

• **scale.x**: `number`

• **scale.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:263](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L263)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:285](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L285)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:293](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L293)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:231](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L231)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FCollider.ts:239](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L239)

## Constructors

### new FCollider()

> **new FCollider**(`component`, `options`?): [`FCollider`](FCollider.md)

Creates a collider for a given component.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

#### Example

```ts
const collider = new FCollider(component, {
  position: { x: 0, y: 1 },
  scale: { x: 1, y: 1 },
  rotation: 0,
  shape: FShapes.RECTANGLE
})
```

#### Defined in

[2d/src/core/FCollider.ts:70](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L70)

## Methods

### setPosition()

> **setPosition**(`position`): `void`

Set the position of the collider.

#### Parameters

• **position**

The new position of the collider.

• **position.x**: `number`

The new x position of the collider.

• **position.y**: `number`

The new y position of the collider.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:154](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L154)

***

### setRotation()

> **setRotation**(`rotation`): `void`

Set the rotation of the collider.

#### Parameters

• **rotation**: `number`

The new rotation of the collider.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:162](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L162)

***

### setRotationDegree()

> **setRotationDegree**(`rotation`): `void`

Set the rotation of the collider in degrees.

#### Parameters

• **rotation**: `number`

The new rotation of the collider in degrees.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:170](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L170)

***

### setScale()

> **setScale**(`scale`): `void`

Set the scale of the collider.

#### Parameters

• **scale**

The new scale of the collider.

• **scale.x**: `number`

The new x scale of the collider.

• **scale.y**: `number`

The new y scale of the collider.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:180](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L180)

***

### updatePosition()

> **updatePosition**(): `void`

Update the position of the collider according to its component's position.
This takes into account the position offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:195](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L195)

***

### updateRotation()

> **updateRotation**(): `void`

Update the rotation of the collider according to its component's rotation.
This takes into account the rotation offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:206](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L206)

***

### updateScale()

> **updateScale**(): `void`

Update the scale of the collider according to its component's scale.
This takes into account the scale offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:214](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L214)

## Properties

### \_\_COLLIDER\_POSITION\_OFFSET\_\_

> **\_\_COLLIDER\_POSITION\_OFFSET\_\_**: `object`

Position Offset for the collider.
This is used to adjust the collider position relative to the component.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:29](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L29)

***

### \_\_COLLIDER\_ROTATION\_OFFSET\_\_

> **\_\_COLLIDER\_ROTATION\_OFFSET\_\_**: `number`

Rotation Offset for the collider.
This is used to adjust the collider position relative to the component.

#### Defined in

[2d/src/core/FCollider.ts:34](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L34)

***

### \_\_COLLIDER\_SCALE\_OFFSET\_\_

> **\_\_COLLIDER\_SCALE\_OFFSET\_\_**: `object`

Scale Offset for the collider.
This is used to adjust the collider scale relative to the component.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:39](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L39)

***

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:24](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L24)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[2d/src/core/FCollider.ts:43](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L43)

***

### shape

> **shape**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

#### Defined in

[2d/src/core/FCollider.ts:47](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FCollider.ts#L47)
