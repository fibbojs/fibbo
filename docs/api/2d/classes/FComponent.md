[@fibbojs](/api/index) / [2d](/api/2d) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 2D components in Fibbo.

## Extends

- `FComponent`

## Extended by

- [`FComponentEmpty`](FComponentEmpty.md)
- [`FCharacter`](FCharacter.md)
- [`FSquare`](FSquare.md)
- [`FCircle`](FCircle.md)
- [`FSprite`](FSprite.md)

## Accessors

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent.ts:348](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L348)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent.ts:356](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L356)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent.ts:364](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L364)

***

### x

> `get` **x**(): `number`

Setters & getters for transform properties

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L332)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent.ts:340](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L340)

## Constructors

### new FComponent()

> **new FComponent**(`scene`, `options`?): [`FComponent`](FComponent.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

The 2D scene where the component will be added.

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

The options for the component.

#### Returns

[`FComponent`](FComponent.md)

#### Overrides

`FComponentCore.constructor`

#### Defined in

[packages/2d/src/FComponent.ts:74](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L74)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`classOrObject`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(Enemy)
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(enemy)
```

#### Inherited from

`FComponentCore.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:70

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.SQUARE
})
```

#### Defined in

[packages/2d/src/FComponent.ts:288](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L288)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Example

```ts
component.initRigidBody({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.SQUARE
})
```

#### Defined in

[packages/2d/src/FComponent.ts:261](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L261)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Example

```ts
component.initSensor({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: { x: 0, y: 0 },
 shape: FShapes.SQUARE
})
```

#### Defined in

[packages/2d/src/FComponent.ts:312](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L312)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
 console.log('Player collided with an Enemy!')
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(enemy, () => {
 console.log('Player collided with the enemy!')
})
```

#### Overrides

`FComponentCore.onCollisionWith`

#### Defined in

[packages/2d/src/FComponent.ts:320](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L320)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Overrides

`FComponentCore.onFrame`

#### Defined in

[packages/2d/src/FComponent.ts:104](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L104)

***

### setPosition()

> **setPosition**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x position.

• **y**: `number`

The y position.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition(0, 0)
```

#### Defined in

[packages/2d/src/FComponent.ts:168](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L168)

***

### setRotation()

> **setRotation**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in radians.

#### Returns

`void`

#### Description

Set the rotation of the component in radians.

#### Example

```ts
component.setRotation(Math.PI / 2)
```

#### Defined in

[packages/2d/src/FComponent.ts:216](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L216)

***

### setRotationDegree()

> **setRotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in degrees.

#### Returns

`void`

#### Description

Set the rotation of the component in degrees.

#### Example

```ts
component.setRotationDegree(90)
```

#### Defined in

[packages/2d/src/FComponent.ts:235](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L235)

***

### setScale()

> **setScale**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x scale.

• **y**: `number`

The y scale.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale(1, 1)
```

#### Defined in

[packages/2d/src/FComponent.ts:188](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L188)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[packages/2d/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:11

***

### collider?

> `optional` **collider**: `FCollider`

RAPIER Collider

#### Defined in

[packages/2d/src/FComponent.ts:60](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L60)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L36)

***

### position

> **position**: `PointData`

Position of the component.

#### Defined in

[packages/2d/src/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L42)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/FComponent.ts:56](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L56)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/FComponent.ts:50](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L50)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Defined in

[packages/2d/src/FComponent.ts:46](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L46)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L31)

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[packages/2d/src/FComponent.ts:64](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/2d/src/FComponent.ts#L64)
