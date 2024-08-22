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

[packages/core/src/FCamera.ts:7](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FCamera.ts#L7)

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

[packages/core/src/FComponent.ts:91](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FComponent.ts#L91)

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

[packages/core/src/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FComponent.ts#L54)

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

[packages/core/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FComponent.ts#L31)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

[packages/core/src/FComponent.ts:20](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FComponent.ts#L20)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

[packages/core/src/FComponent.ts:14](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FComponent.ts#L14)
