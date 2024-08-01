[@fibbojs](/api/index) / [core](/api/core) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 2D and 3D components in FibboJS.

## Extended by

- [`FCamera`](FCamera.md)

## Constructors

### new FComponent()

> **new FComponent**(): [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[packages/core/src/FComponent.ts:11](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L11)

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

#### Defined in

[packages/core/src/FComponent.ts:19](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L19)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object` = `{}`

Callbacks for when a collision occurs with a given class.
It is a dictionary where the key is the class name and the value is the callback.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Defined in

[packages/core/src/FComponent.ts:9](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/core/src/FComponent.ts#L9)
