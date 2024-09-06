[@fibbojs](/api/index) / [core](/api/core) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 2D and 3D components in Fibbo.

## Extended by

- [`FCamera`](FCamera.md)

## Constructors

### new FComponent()

> **new FComponent**(): [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[packages/core/src/FComponent.ts:45](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L45)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: [`FComponent`](FComponent.md)

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

#### Defined in

[packages/core/src/FComponent.ts:126](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L126)

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

#### Defined in

[packages/core/src/FComponent.ts:83](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L83)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Defined in

[packages/core/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L55)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Defined in

[packages/core/src/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L38)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Defined in

[packages/core/src/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L32)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[packages/core/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[packages/core/src/FComponent.ts:25](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L25)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Defined in

[packages/core/src/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FComponent.ts#L43)
