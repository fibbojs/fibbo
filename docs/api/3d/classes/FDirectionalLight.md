[@fibbojs](/api/index) / [3d](/api/3d) / FDirectionalLight

# Class: FDirectionalLight

A directional light in 3d space.

## Extends

- [`FLight`](FLight.md)

## Accessors

### color

> `get` **color**(): `Color`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `ColorRepresentation`

#### Returns

`Color`

#### Inherited from

[`FLight`](FLight.md).[`color`](FLight.md#color)

#### Defined in

[3d/src/lights/FLight.ts:93](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L93)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Inherited from

[`FLight`](FLight.md).[`intensity`](FLight.md#intensity)

#### Defined in

[3d/src/lights/FLight.ts:101](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L101)

***

### lookAt

> `get` **lookAt**(): `object`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**

• **lookAt.x**: `number`

• **lookAt.y**: `number`

• **lookAt.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FLight`](FLight.md).[`lookAt`](FLight.md#lookat)

#### Defined in

[3d/src/lights/FLight.ts:105](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L105)

## Constructors

### new FDirectionalLight()

> **new FDirectionalLight**(`scene`, `options`?): [`FDirectionalLight`](FDirectionalLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FDirectionalLight`](FDirectionalLight.md)

#### Overrides

[`FLight`](FLight.md).[`constructor`](FLight.md#constructors)

#### Defined in

[3d/src/lights/FDirectionalLight.ts:11](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FDirectionalLight.ts#L11)

## Methods

### applyTransform()

> **applyTransform**(): `void`

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`applyTransform`](FLight.md#applytransform)

#### Defined in

[3d/src/lights/FLight.ts:76](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L76)

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

[`FLight`](FLight.md).[`emitCollisionWith`](FLight.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:118

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

[`FLight`](FLight.md).[`onCollisionWith`](FLight.md#oncollisionwith)

#### Defined in

core/dist/index.d.ts:95

***

### onFrame()

> **onFrame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

[`FLight`](FLight.md).[`onFrame`](FLight.md#onframe)

#### Defined in

[3d/src/lights/FDirectionalLight.ts:46](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FDirectionalLight.ts#L46)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

[`FLight`](FLight.md).[`__CALLBACKS_ON_COLLISION__`](FLight.md#__callbacks_on_collision__)

#### Defined in

[3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FLight`](FLight.md).[`__ID__`](FLight.md#__id__)

#### Defined in

[3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FLight`](FLight.md).[`__IS_2D__`](FLight.md#__is_2d__)

#### Defined in

[3d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L22)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FLight`](FLight.md).[`__IS_3D__`](FLight.md#__is_3d__)

#### Defined in

[3d/src/lights/FLight.ts:21](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L21)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `object`

Look at target of the light.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Inherited from

[`FLight`](FLight.md).[`__LOOK_AT__`](FLight.md#__look_at__)

#### Defined in

[3d/src/lights/FLight.ts:44](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L44)

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

[`FLight`](FLight.md).[`controller`](FLight.md#controller)

#### Defined in

core/dist/index.d.ts:64

***

### light

> **light**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Inherited from

[`FLight`](FLight.md).[`light`](FLight.md#light)

#### Defined in

[3d/src/lights/FLight.ts:29](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L29)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Inherited from

[`FLight`](FLight.md).[`scene`](FLight.md#scene)

#### Defined in

[3d/src/lights/FLight.ts:34](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L34)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Inherited from

[`FLight`](FLight.md).[`transform`](FLight.md#transform)

#### Defined in

[3d/src/lights/FLight.ts:39](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/lights/FLight.ts#L39)
