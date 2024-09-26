[@fibbojs](/api/index) / [2d](/api/2d) / FLight

# Class: `abstract` FLight

The base class for 2d lights in Fibbo.

## Extends

- `FLight`

## Accessors

### color

> `get` **color**(): `number`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `number`

#### Returns

`number`

#### Defined in

[2d/src/lights/FLight.ts:88](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L88)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Defined in

[2d/src/lights/FLight.ts:96](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L96)

***

### lookAt

> `get` **lookAt**(): `object`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**

• **lookAt.x**: `number`

• **lookAt.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/lights/FLight.ts:100](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L100)

## Constructors

### new FLight()

> **new FLight**(`scene`, `options`?): [`FLight`](FLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FLight`](FLight.md)

#### Overrides

`FLightCore.constructor`

#### Defined in

[2d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L45)

## Methods

### applyTransform()

> **applyTransform**(): `void`

#### Returns

`void`

#### Defined in

[2d/src/lights/FLight.ts:75](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L75)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

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

`FLightCore.emitCollisionWith`

#### Defined in

core/dist/index.d.ts:116

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

`FLightCore.onCollisionWith`

#### Defined in

core/dist/index.d.ts:93

***

### onFrame()

> `abstract` **onFrame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

`FLightCore.onFrame`

#### Defined in

[2d/src/lights/FLight.ts:73](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L73)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Overrides

`FLightCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

[2d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L23)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Overrides

`FLightCore.__ID__`

#### Defined in

[2d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L22)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Overrides

`FLightCore.__IS_2D__`

#### Defined in

[2d/src/lights/FLight.ts:21](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L21)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FLightCore.__IS_3D__`

#### Defined in

[2d/src/lights/FLight.ts:20](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L20)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `object`

Look at target of the light.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/lights/FLight.ts:43](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L43)

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

`FLightCore.controller`

#### Defined in

core/dist/index.d.ts:62

***

### light

> **light**: `any`

The original light object from PIXI.js.

#### Defined in

[2d/src/lights/FLight.ts:28](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L28)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Defined in

[2d/src/lights/FLight.ts:33](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L33)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[2d/src/lights/FLight.ts:38](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/lights/FLight.ts#L38)
