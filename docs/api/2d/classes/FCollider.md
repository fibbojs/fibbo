[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

# Class: FCollider

A 3d collider.

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
  shape: FShapes.CUBE
})
```

#### Defined in

[2d/src/core/FCollider.ts:65](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L65)

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

[2d/src/core/FCollider.ts:149](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L149)

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

[2d/src/core/FCollider.ts:157](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L157)

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

[2d/src/core/FCollider.ts:165](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L165)

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

[2d/src/core/FCollider.ts:175](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L175)

***

### updatePosition()

> **updatePosition**(): `void`

Update the position of the collider according to the component's position.
This takes into account the position offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:193](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L193)

***

### updateRotation()

> **updateRotation**(): `void`

Update the rotation of the collider according to the component's rotation.
This takes into account the rotation offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:204](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L204)

***

### updateScale()

> **updateScale**(): `void`

Update the scale of the collider according to the component's scale.
This takes into account the scale offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FCollider.ts:212](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L212)

## Properties

### \_\_COLLIDER\_POSITION\_OFFSET\_\_

> **\_\_COLLIDER\_POSITION\_OFFSET\_\_**: `object`

Position Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:28](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L28)

***

### \_\_COLLIDER\_ROTATION\_OFFSET\_\_

> **\_\_COLLIDER\_ROTATION\_OFFSET\_\_**: `number`

Rotation Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### Defined in

[2d/src/core/FCollider.ts:33](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L33)

***

### \_\_COLLIDER\_SCALE\_OFFSET\_\_

> **\_\_COLLIDER\_SCALE\_OFFSET\_\_**: `object`

Scale Offset for the collider.
This is used to adjust the collider scale relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FCollider.ts:38](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L38)

***

### \_\_COLLIDER\_\_

> **\_\_COLLIDER\_\_**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:23](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L23)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component the collider is attached to.

#### Defined in

[2d/src/core/FCollider.ts:42](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FCollider.ts#L42)
