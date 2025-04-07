[@fibbojs](/api/index) / [2d](/api/2d) / FTransform

# Class: FTransform

2D Transform

## Accessors

### position

> `get` **position**(): `object`

Get the position.

> `set` **position**(`position`): `void`

Set the position.

#### Parameters

• **position**

The new position.

• **position.x**: `number`

The new position on the x axis.

• **position.y**: `number`

The new position on the y axis.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FTransform.ts:140](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L140)

***

### rotation

> `get` **rotation**(): `number`

Get the rotation in radians.

> `set` **rotation**(`rotation`): `void`

Set the rotation in radians.

#### Parameters

• **rotation**: `number`

The new rotation in radians.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:187](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L187)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

Get the rotation in degrees.

> `set` **rotationDegree**(`rotationDegree`): `void`

Set the rotation in degrees.

#### Parameters

• **rotationDegree**: `number`

The new rotation in degrees.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:202](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L202)

***

### scale

> `get` **scale**(): `object`

Get the scale.

> `set` **scale**(`scale`): `void`

Set the scale.

#### Parameters

• **scale**

The new scale.

• **scale.x**: `number`

The new scale on the x axis.

• **scale.y**: `number`

The new scale on the y axis.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FTransform.ts:217](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L217)

***

### scaleX

> `get` **scaleX**(): `number`

Get the scale on the x axis.

> `set` **scaleX**(`x`): `void`

Set the x scale.

#### Parameters

• **x**: `number`

The new scale on the x axis.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:234](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L234)

***

### scaleY

> `get` **scaleY**(): `number`

Get the scale on the y axis.

> `set` **scaleY**(`y`): `void`

Set the y scale.

#### Parameters

• **y**: `number`

The new scale on the y axis.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:249](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L249)

***

### x

> `get` **x**(): `number`

Get the position on the x axis.

> `set` **x**(`x`): `void`

Set the x position.

#### Parameters

• **x**: `number`

The new position on the x axis.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:157](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L157)

***

### y

> `get` **y**(): `number`

Get the position on the y axis.

> `set` **y**(`y`): `void`

Set the y position.

#### Parameters

• **y**: `number`

The new position on the y axis.

#### Returns

`number`

#### Defined in

[2d/src/core/FTransform.ts:172](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L172)

## Constructors

### new FTransform()

> **new FTransform**(`options`?): [`FTransform`](FTransform.md)

Create a new FTransform.

#### Parameters

• **options?**: [`FTransformOptions`](../interfaces/FTransformOptions.md)

The options for the transform.

#### Returns

[`FTransform`](FTransform.md)

#### Example

```ts
import { FTransform } from '@fibbojs/2d'

const transform = new FTransform({
  position: { x: 0, y: 0 },
  rotation: 0,
  scale: { x: 1, y: 1 },
})
```

#### Defined in

[2d/src/core/FTransform.ts:61](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L61)

## Methods

### onPositionUpdated()

> **onPositionUpdated**(`callback`): `void`

Add a callback for when the position is updated.

#### Parameters

• **callback**

The callback to add.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:84](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L84)

***

### onRotationUpdated()

> **onRotationUpdated**(`callback`): `void`

Add a callback for when the rotation is updated.

#### Parameters

• **callback**

The callback to add.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:92](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L92)

***

### onScaleUpdated()

> **onScaleUpdated**(`callback`): `void`

Add a callback for when the scale is updated.

#### Parameters

• **callback**

The callback to add.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:100](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L100)

***

### setPosition()

> **setPosition**(`position`): `void`

Set a new position.

#### Parameters

• **position**

The new position.

• **position.x**: `number`

The new position on the x axis.

• **position.y**: `number`

The new position on the y axis.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:110](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L110)

***

### setRotation()

> **setRotation**(`rotation`): `void`

Set a new rotation in radians.

#### Parameters

• **rotation**: `number`

The new rotation in radians.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:119](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L119)

***

### setScale()

> **setScale**(`scale`): `void`

Set a new scale.

#### Parameters

• **scale**

The new scale.

• **scale.x**: `number`

The new scale on the x axis.

• **scale.y**: `number`

The new scale on the y axis.

#### Returns

`void`

#### Defined in

[2d/src/core/FTransform.ts:130](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L130)

## Properties

### \_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the position is updated.

#### Defined in

[2d/src/core/FTransform.ts:20](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L20)

***

### \_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the rotation is updated.

#### Defined in

[2d/src/core/FTransform.ts:24](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L24)

***

### \_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the scale is updated.

#### Defined in

[2d/src/core/FTransform.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L28)

***

### \_\_POSITION\_\_

> **\_\_POSITION\_\_**: `FVector2`

The position of the transform.

#### Defined in

[2d/src/core/FTransform.ts:33](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L33)

***

### \_\_ROTATION\_\_

> **\_\_ROTATION\_\_**: `number`

The rotation of the transform in radians.

#### Defined in

[2d/src/core/FTransform.ts:41](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L41)

***

### \_\_SCALE\_\_

> **\_\_SCALE\_\_**: `FVector2`

The scale of the transform.

#### Defined in

[2d/src/core/FTransform.ts:37](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FTransform.ts#L37)
