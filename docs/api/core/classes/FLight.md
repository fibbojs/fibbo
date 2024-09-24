[@fibbojs](/api/index) / [core](/api/core) / FLight

# Class: `abstract` FLight

The base class for lights in Fibbo.

## Extends

- [`FComponent`](FComponent.md)

## Constructors

### new FLight()

> **new FLight**(): [`FLight`](FLight.md)

#### Returns

[`FLight`](FLight.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[core/src/FLight.ts:7](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FLight.ts#L7)

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

#### Inherited from

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

[core/src/FComponent.ts:134](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L134)

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

#### Inherited from

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[core/src/FComponent.ts:84](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L84)

***

### onFrame()

> **onFrame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

[core/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L55)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

[core/src/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L38)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

[core/src/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L32)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

[core/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

[core/src/FComponent.ts:25](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L25)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FComponent`](FComponent.md).[`controller`](FComponent.md#controller)

#### Defined in

[core/src/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FComponent.ts#L43)
