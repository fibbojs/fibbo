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

[packages/2d/src/core/FTransform.ts:138](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L138)

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

[packages/2d/src/core/FTransform.ts:185](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L185)

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

[packages/2d/src/core/FTransform.ts:200](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L200)

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

[packages/2d/src/core/FTransform.ts:215](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L215)

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

[packages/2d/src/core/FTransform.ts:232](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L232)

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

[packages/2d/src/core/FTransform.ts:247](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L247)

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

[packages/2d/src/core/FTransform.ts:155](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L155)

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

[packages/2d/src/core/FTransform.ts:170](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L170)

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

[packages/2d/src/core/FTransform.ts:59](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L59)

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

[packages/2d/src/core/FTransform.ts:82](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L82)

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

[packages/2d/src/core/FTransform.ts:90](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L90)

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

[packages/2d/src/core/FTransform.ts:98](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L98)

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

[packages/2d/src/core/FTransform.ts:108](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L108)

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

[packages/2d/src/core/FTransform.ts:117](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L117)

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

[packages/2d/src/core/FTransform.ts:128](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L128)

## Properties

### \_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_POSITION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the position is updated.

#### Defined in

[packages/2d/src/core/FTransform.ts:20](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L20)

***

### \_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_ROTATION\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the rotation is updated.

#### Defined in

[packages/2d/src/core/FTransform.ts:24](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L24)

***

### \_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_

> **\_\_CALLBACKS\_ON\_SCALE\_UPDATED\_\_**: () => `void`[] = `[]`

Callback for when the scale is updated.

#### Defined in

[packages/2d/src/core/FTransform.ts:28](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L28)

***

### \_\_POSITION\_\_

> **\_\_POSITION\_\_**: `FVector2`

The position of the transform.

#### Defined in

[packages/2d/src/core/FTransform.ts:33](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L33)

***

### \_\_ROTATION\_\_

> **\_\_ROTATION\_\_**: `number`

The rotation of the transform in radians.

#### Defined in

[packages/2d/src/core/FTransform.ts:41](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L41)

***

### \_\_SCALE\_\_

> **\_\_SCALE\_\_**: `FVector2`

The scale of the transform.

#### Defined in

[packages/2d/src/core/FTransform.ts:37](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FTransform.ts#L37)
