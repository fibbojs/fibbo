[@fibbojs](/api/index) / [2d](/api/2d) / FComponent

# Class: `abstract` FComponent

## Description

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

[packages/2d/src/core/FComponent.ts:346](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L346)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:370](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L370)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:378](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L378)

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

[packages/2d/src/core/FComponent.ts:386](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L386)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L394)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:402](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L402)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:354](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L354)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:362](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L362)

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

[packages/2d/src/core/FComponent.ts:70](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L70)

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

packages/core/dist/index.d.ts:100

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

[packages/2d/src/core/FComponent.ts:301](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L301)

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

[packages/2d/src/core/FComponent.ts:274](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L274)

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

[packages/2d/src/core/FComponent.ts:325](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L325)

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

[packages/2d/src/core/FComponent.ts:334](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L334)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Overrides

`FComponentCore.onFrame`

#### Defined in

[packages/2d/src/core/FComponent.ts:103](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L103)

***

### setPosition()

> **setPosition**(`options`): `void`

#### Parameters

• **options**

The options for the position.

• **options.x**: `number`

The x position.

• **options.y**: `number`

The y position.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition({ x: 0, y: 0 })
```

#### Defined in

[packages/2d/src/core/FComponent.ts:180](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L180)

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

[packages/2d/src/core/FComponent.ts:229](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L229)

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

[packages/2d/src/core/FComponent.ts:248](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L248)

***

### setScale()

> **setScale**(`options`): `void`

#### Parameters

• **options**

The options for the scale.

• **options.x**: `number`

The x scale.

• **options.y**: `number`

The y scale.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale({ x: 1, y: 1 })
```

#### Defined in

[packages/2d/src/core/FComponent.ts:201](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L201)

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

packages/core/dist/index.d.ts:47

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:42

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[packages/2d/src/core/FComponent.ts:27](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L27)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:36

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Defined in

[packages/2d/src/core/FComponent.ts:56](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L56)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/core/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L41)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[packages/2d/src/core/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L36)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Defined in

[packages/2d/src/core/FComponent.ts:52](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L52)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/core/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L32)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[packages/2d/src/core/FComponent.ts:60](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L60)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[packages/2d/src/core/FComponent.ts:46](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/2d/src/core/FComponent.ts#L46)
