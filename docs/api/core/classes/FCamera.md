[@fibbojs](/api/index) / [core](/api/core) / FCamera

# Class: `abstract` FCamera

## Description

The base class for cameras in FibboJS.

## Extends

- [`FComponent`](FComponent.md)

## Constructors

### new FCamera()

> **new FCamera**(): [`FCamera`](FCamera.md)

#### Returns

[`FCamera`](FCamera.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[packages/core/src/FCamera.ts:7](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FCamera.ts#L7)

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

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

[packages/core/src/FComponent.ts:91](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FComponent.ts#L91)

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

#### Inherited from

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[packages/core/src/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FComponent.ts#L54)

***

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Inherited from

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

[packages/core/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FComponent.ts#L31)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent`](FComponent.md).[`CALLBACKS_ONCOLLISION`](FComponent.md#callbacks_oncollision)

#### Defined in

[packages/core/src/FComponent.ts:20](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FComponent.ts#L20)

***

### ID

> **ID**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`ID`](FComponent.md#id)

#### Defined in

[packages/core/src/FComponent.ts:14](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/core/src/FComponent.ts#L14)
