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

[2d/src/core/FTransform.ts:137](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L137)

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

[2d/src/core/FTransform.ts:184](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L184)

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

[2d/src/core/FTransform.ts:199](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L199)

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

[2d/src/core/FTransform.ts:214](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L214)

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

[2d/src/core/FTransform.ts:231](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L231)

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

[2d/src/core/FTransform.ts:246](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L246)

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

[2d/src/core/FTransform.ts:154](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L154)

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

[2d/src/core/FTransform.ts:169](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L169)

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
const transform = new FTransform({
  position: { x: 0, y: 0 },
  rotation: 0,
  scale: { x: 1, y: 1 },
})
```

#### Defined in

[2d/src/core/FTransform.ts:58](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L58)

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

[2d/src/core/FTransform.ts:81](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L81)

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

[2d/src/core/FTransform.ts:89](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L89)

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

[2d/src/core/FTransform.ts:97](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L97)

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

[2d/src/core/FTransform.ts:107](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L107)

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

[2d/src/core/FTransform.ts:116](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L116)

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

[2d/src/core/FTransform.ts:127](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L127)

## Properties

### \_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the position is updated.

#### Defined in

[2d/src/core/FTransform.ts:19](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L19)

***

### \_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the rotation is updated.

#### Defined in

[2d/src/core/FTransform.ts:23](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L23)

***

### \_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the scale is updated.

#### Defined in

[2d/src/core/FTransform.ts:27](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L27)

***

### \_\_POSITION\_\_

> **\_\_POSITION\_\_**: [`FVector2`](../interfaces/FVector2.md)

The position of the transform.

#### Defined in

[2d/src/core/FTransform.ts:32](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L32)

***

### \_\_ROTATION\_\_

> **\_\_ROTATION\_\_**: `number`

The rotation of the transform in radians.

#### Defined in

[2d/src/core/FTransform.ts:40](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L40)

***

### \_\_SCALE\_\_

> **\_\_SCALE\_\_**: [`FVector2`](../interfaces/FVector2.md)

The scale of the transform.

#### Defined in

[2d/src/core/FTransform.ts:36](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FTransform.ts#L36)
