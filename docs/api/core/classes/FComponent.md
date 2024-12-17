[@fibbojs](/api/index) / [core](/api/core) / FComponent

# Class: `abstract` FComponent

The base class for all 2D and 3D components in Fibbo.

## Extended by

- [`FCamera`](FCamera.md)

## Constructors

### new FComponent()

> **new FComponent**(`scene`, `options`?): [`FComponent`](FComponent.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[core/src/FComponent.ts:66](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L66)

## Methods

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

[core/src/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L204)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Defined in

[core/src/FComponent.ts:126](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L126)

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

[core/src/FComponent.ts:96](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L96)

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

#### Defined in

[core/src/FComponent.ts:154](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L154)

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

[core/src/FComponent.ts:111](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L111)

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

[core/src/FComponent.ts:119](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L119)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Defined in

[core/src/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L54)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[] = `[]`

Callbacks for when a frame is rendered.

#### Defined in

[core/src/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L43)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Defined in

[core/src/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L48)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Defined in

[core/src/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L38)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L32)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[core/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L31)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Defined in

[core/src/FComponent.ts:64](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L64)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the component is attached to.

#### Defined in

[core/src/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/core/src/FComponent.ts#L59)
