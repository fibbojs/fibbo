[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

# Class: FRigidBody

A 2d rigidBody that can be attached to a component.

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

[2d/src/core/FRigidBody.ts:223](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L223)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:247](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L247)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:255](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L255)

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

[2d/src/core/FRigidBody.ts:263](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L263)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:271](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L271)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:279](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L279)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:231](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L231)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FRigidBody.ts:239](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L239)

## Constructors

### new FRigidBody()

> **new FRigidBody**(`component`, `options`?): [`FRigidBody`](FRigidBody.md)

Creates a rigidBody for the given component.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the rigidBody will be attached to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FRigidBody`](FRigidBody.md)

#### Example

```ts
const rigidBody = new FRigidBody(component, {
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  rotation: 0,
  shape: FShapes.RECTANGLE
})
```

#### Defined in

[2d/src/core/FRigidBody.ts:79](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L79)

## Methods

### setPosition()

> **setPosition**(`position`): `void`

Set the position of the rigidBody.

#### Parameters

• **position**

The new position of the rigidBody.

• **position.x**: `number`

The new x position of the rigidBody.

• **position.y**: `number`

The new y position of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:156](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L156)

***

### setRotation()

> **setRotation**(`rotation`): `void`

Set the rotation of the rigidBody.

#### Parameters

• **rotation**: `number`

The new rotation of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:165](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L165)

***

### setRotationDegree()

> **setRotationDegree**(`rotation`): `void`

Set the rotation of the rigidBody in degrees.

#### Parameters

• **rotation**: `number`

The new rotation of the rigidBody in degrees.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:174](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L174)

***

### setScale()

> **setScale**(`scale`): `void`

Set the scale of the rigidBody.

#### Parameters

• **scale**

The new scale of the rigidBody.

• **scale.x**: `number`

The new x scale of the rigidBody.

• **scale.y**: `number`

The new y scale of the rigidBody.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:186](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L186)

***

### updatePosition()

> **updatePosition**(): `void`

Update the position of the rigidBody according to the component's position.
This takes into account the position offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:194](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L194)

***

### updateRotation()

> **updateRotation**(): `void`

Update the rotation of the rigidBody according to the component's rotation.
This takes into account the rotation offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:206](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L206)

***

### updateScale()

> **updateScale**(): `void`

Update the scale of the rigidBody's collider according to the component's scale.
This takes into account the scale offset.
As a rigidBody does not have a scale, this will only update the attached collider's scale.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:217](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L217)

## Properties

### \_\_RIGIDBODY\_POSITION\_OFFSET\_\_

> **\_\_RIGIDBODY\_POSITION\_OFFSET\_\_**: `object`

Position Offset for the rigidBody.
This is used to adjust the rigidBody position relative to the component.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FRigidBody.ts:39](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L39)

***

### \_\_RIGIDBODY\_ROTATION\_OFFSET\_\_

> **\_\_RIGIDBODY\_ROTATION\_OFFSET\_\_**: `number`

Rotation Offset for the rigidBody.
This is used to adjust the rigidBody position relative to the component.

#### Defined in

[2d/src/core/FRigidBody.ts:44](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L44)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Defined in

[2d/src/core/FRigidBody.ts:30](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L30)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[2d/src/core/FRigidBody.ts:34](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L34)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Defined in

[2d/src/core/FRigidBody.ts:48](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/core/FRigidBody.ts#L48)
