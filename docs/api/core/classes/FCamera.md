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

[packages/core/src/FCamera.ts:7](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FCamera.ts#L7)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`class_`): `void`

#### Parameters

• **class\_**: `any`

The class to emit the

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
console.log('Player collided with enemy!')
})
player.emitCollisionWith(Enemy)
```

#### Inherited from

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

[packages/core/src/FComponent.ts:56](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L56)

***

### onCollisionWith()

> **onCollisionWith**(`class_`, `callback`): `void`

#### Parameters

• **class\_**: `any`

The class to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
 console.log('Player collided with enemy!')
})

#### Inherited from

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[packages/core/src/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L33)

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

[packages/core/src/FComponent.ts:19](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L19)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object` = `{}`

Callbacks for when a collision occurs with a given class.
It is a dictionary where the key is the class name and the value is the callback.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

[`FComponent`](FComponent.md).[`CALLBACKS_ONCOLLISION`](FComponent.md#callbacks_oncollision)

#### Defined in

[packages/core/src/FComponent.ts:9](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L9)
