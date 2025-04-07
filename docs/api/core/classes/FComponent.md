[@fibbojs](/api/index) / [core](/api/core) / FComponent

# Class: `abstract` FComponent

The base class for all 2D and 3D components in Fibbo.

## Extended by

- [`FCamera`](FCamera.md)

## Constructors

### new FComponent()

> **new FComponent**(`options`?): [`FComponent`](FComponent.md)

#### Parameters

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[core/src/FComponent.ts:67](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L67)

## Methods

### addController()

> **addController**(`controller`): `void`

Add a controller to the component.

#### Parameters

• **controller**: [`FController`](FController.md)

The controller to add.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:100](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L100)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: [`FComponent`](FComponent.md)

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

#### Defined in

[core/src/FComponent.ts:252](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L252)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:164](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L164)

***

### frame()

> **frame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:131](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L131)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

#### Parameters

• **classOrObject**: `any`

The class or object to observe for collisions. Should inherit from FComponent.

• **callback**

The callback to add to the collision event.

#### Returns

`Function`

A function to remove the callback.

##### Returns

`void`

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, ({ component }) => {
  console.log('Player collided with an Enemy!')
  console.log('The enemy is:', component)
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(enemy, () => {
  console.log('Player collided with the enemy!')
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
const removeThisCallback = player.onCollisionWith(enemy, () => {
 console.log('Player collided with the enemy!')
})
// To remove the callback, call the function returned by onCollisionWith
removeThisCallback()

#### Defined in

[core/src/FComponent.ts:202](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L202)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called every frame.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:149](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L149)

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the component is loaded (could be a texture, a 3D model, etc).

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:157](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L157)

***

### removeController()

> **removeController**(`controller`): `void`

Remove a controller from the component.

#### Parameters

• **controller**: [`FController`](FController.md)

The controller to remove.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:112](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L112)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Defined in

[core/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L55)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[] = `[]`

Callbacks for when a frame is rendered.

#### Defined in

[core/src/FComponent.ts:44](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L44)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Defined in

[core/src/FComponent.ts:49](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L49)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Defined in

[core/src/FComponent.ts:39](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L39)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L33)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[core/src/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L32)

***

### controllers

> **controllers**: [`FController`](FController.md)[]

The controllers attached to the component.

#### Defined in

[core/src/FComponent.ts:65](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L65)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the component is attached to.

#### Defined in

[core/src/FComponent.ts:60](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/FComponent.ts#L60)
