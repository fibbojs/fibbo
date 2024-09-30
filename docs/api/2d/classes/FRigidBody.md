[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

# Class: FRigidBody

A 3d RigidBody.

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
const rigidBody = new FRigidBody({
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  rotation: 0,
  shape: FShapes.CUBE
})
```

#### Defined in

[2d/src/core/FRigidBody.ts:79](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L79)

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

[2d/src/core/FRigidBody.ts:157](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L157)

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

[2d/src/core/FRigidBody.ts:166](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L166)

***

### updatePosition()

> **updatePosition**(): `void`

Update the position of the rigidBody according to the component's position.
This takes into account the position offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:175](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L175)

***

### updateRotation()

> **updateRotation**(): `void`

Update the rotation of the rigidBody according to the component's rotation.
This takes into account the rotation offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:187](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L187)

***

### updateScale()

> **updateScale**(): `void`

Update the scale of the rigidBody's collider according to the component's scale.
This takes into account the scale offset.

#### Returns

`void`

#### Defined in

[2d/src/core/FRigidBody.ts:197](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L197)

## Properties

### \_\_RIGIDBODY\_POSITION\_OFFSET\_\_

> **\_\_RIGIDBODY\_POSITION\_OFFSET\_\_**: `object`

Position Offset for the rigidBody.
This is used to adjust the rigidBody position relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/core/FRigidBody.ts:39](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L39)

***

### \_\_RIGIDBODY\_ROTATION\_OFFSET\_\_

> **\_\_RIGIDBODY\_ROTATION\_OFFSET\_\_**: `number`

Rotation Offset for the rigidBody.
This is used to adjust the rigidBody position relative to the mesh.

#### Defined in

[2d/src/core/FRigidBody.ts:44](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L44)

***

### \_\_RIGIDBODY\_\_

> **\_\_RIGIDBODY\_\_**: `RigidBody`

RAPIER RigidBody

#### Defined in

[2d/src/core/FRigidBody.ts:30](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L30)

***

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[2d/src/core/FRigidBody.ts:34](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L34)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component the rigidBody is attached to.

#### Defined in

[2d/src/core/FRigidBody.ts:48](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FRigidBody.ts#L48)
