[@fibbojs](/api/index) / [2d](/api/2d) / FComponent

# Class: `abstract` FComponent

The base class for all 2D components in Fibbo.

## Extends

- `FComponent`

## Extended by

- [`FComponentEmpty`](FComponentEmpty.md)
- [`FPolygon`](FPolygon.md)
- [`FSprite`](FSprite.md)

## Accessors

### position

> `get` **position**(): `object`

Setters & getters for transform properties

> `set` **position**(`p`): `void`

#### Parameters

• **p**

• **p.x**: `number`

• **p.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FComponent.ts:354](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L354)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:378](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L378)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:386](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L386)

***

### scale

> `get` **scale**(): `object`

> `set` **scale**(`s`): `void`

#### Parameters

• **s**

• **s.x**: `number`

• **s.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L394)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:402](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L402)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:410](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L410)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:362](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L362)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[2d/src/core/FComponent.ts:370](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L370)

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

[2d/src/core/FComponent.ts:71](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L71)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
  class: Enemy
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
  object: enemy
})
```

#### Inherited from

`FComponentCore.emitCollisionWith`

#### Defined in

core/dist/index.d.ts:118

***

### initCollider()

> **initCollider**(`options`?): `void`

Only init a collider for the component, without a rigidBody.
This is useful for static objects.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[2d/src/core/FComponent.ts:308](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L308)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

Init a rigidBody for the model.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

`void`

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

[2d/src/core/FComponent.ts:281](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L281)

***

### initSensor()

> **initSensor**(`options`?): `void`

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[2d/src/core/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L332)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`Function`

A function to remove the callback.

##### Returns

`void`

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

[2d/src/core/FComponent.ts:341](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L341)

***

### onFrame()

> **onFrame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

`FComponentCore.onFrame`

#### Defined in

[2d/src/core/FComponent.ts:104](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L104)

***

### setPosition()

> **setPosition**(`options`): `void`

Set the position of the component.

#### Parameters

• **options**

The options for the position.

• **options.x**: `number`

The x position.

• **options.y**: `number`

The y position.

#### Returns

`void`

#### Example

```ts
component.setPosition({ x: 0, y: 0 })
```

#### Defined in

[2d/src/core/FComponent.ts:186](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L186)

***

### setRotation()

> **setRotation**(`r`): `void`

Set the rotation of the component in radians.

#### Parameters

• **r**: `number`

The rotation in radians.

#### Returns

`void`

#### Example

```ts
component.setRotation(Math.PI / 2)
```

#### Defined in

[2d/src/core/FComponent.ts:233](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L233)

***

### setRotationDegree()

> **setRotationDegree**(`r`): `void`

Set the rotation of the component in degrees.

#### Parameters

• **r**: `number`

The rotation in degrees.

#### Returns

`void`

#### Example

```ts
component.setRotationDegree(90)
```

#### Defined in

[2d/src/core/FComponent.ts:255](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L255)

***

### setScale()

> **setScale**(`options`): `void`

Set the scale of the component.

#### Parameters

• **options**

The options for the scale.

• **options.x**: `number`

The x scale.

• **options.y**: `number`

The y scale.

#### Returns

`void`

#### Example

```ts
component.setScale({ x: 1, y: 1 })
```

#### Defined in

[2d/src/core/FComponent.ts:210](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L210)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

core/dist/index.d.ts:58

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

core/dist/index.d.ts:53

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[2d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L28)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

core/dist/index.d.ts:47

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Defined in

[2d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L57)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[2d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L42)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[2d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L37)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Defined in

[2d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[2d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[2d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L61)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[2d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/2d/src/core/FComponent.ts#L47)
