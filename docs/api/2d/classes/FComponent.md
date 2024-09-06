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

[packages/2d/src/core/FComponent.ts:347](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L347)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:371](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L371)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:379](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L379)

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

[packages/2d/src/core/FComponent.ts:387](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L387)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:395](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L395)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:403](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L403)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:355](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L355)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/core/FComponent.ts:363](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L363)

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

[packages/2d/src/core/FComponent.ts:71](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L71)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class or object.

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

packages/core/dist/index.d.ts:115

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

[packages/2d/src/core/FComponent.ts:302](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L302)

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

[packages/2d/src/core/FComponent.ts:275](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L275)

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

[packages/2d/src/core/FComponent.ts:326](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L326)

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

[packages/2d/src/core/FComponent.ts:335](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L335)

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

[packages/2d/src/core/FComponent.ts:104](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L104)

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

[packages/2d/src/core/FComponent.ts:181](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L181)

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

[packages/2d/src/core/FComponent.ts:230](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L230)

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

[packages/2d/src/core/FComponent.ts:249](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L249)

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

[packages/2d/src/core/FComponent.ts:202](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L202)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:56

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[packages/2d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L28)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:45

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Defined in

[packages/2d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L57)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L42)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[packages/2d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L37)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Defined in

[packages/2d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[packages/2d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L61)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[packages/2d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FComponent.ts#L47)
