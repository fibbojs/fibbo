[@fibbojs](/api/index) / [3d](/api/3d) / FLight

# Class: `abstract` FLight

The base class for 3d lights in Fibbo.

## Extends

- `FLight`

## Extended by

- [`FAmbientLight`](FAmbientLight.md)
- [`FDirectionalLight`](FDirectionalLight.md)
- [`FHemisphereLight`](FHemisphereLight.md)
- [`FLightProbe`](FLightProbe.md)
- [`FPointLight`](FPointLight.md)
- [`FSpotLight`](FSpotLight.md)

## Accessors

### color

> `get` **color**(): `Color`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `ColorRepresentation`

#### Returns

`Color`

#### Defined in

[3d/src/lights/FLight.ts:93](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L93)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Defined in

[3d/src/lights/FLight.ts:101](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L101)

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

#### Defined in

[3d/src/lights/FLight.ts:105](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L105)

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

[3d/src/lights/FLight.ts:46](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L46)

## Methods

### applyTransform()

> **applyTransform**(): `void`

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:76](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L76)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

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

#### Inherited from

`FLightCore.emitCollisionWith`

#### Defined in

core/dist/index.d.ts:116

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

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

`FLightCore.onCollisionWith`

#### Defined in

core/dist/index.d.ts:93

***

### onFrame()

> `abstract` **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Overrides

`FLightCore.onFrame`

#### Defined in

[3d/src/lights/FLight.ts:74](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L74)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Overrides

`FLightCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

[3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Overrides

`FLightCore.__ID__`

#### Defined in

[3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Overrides

`FLightCore.__IS_2D__`

#### Defined in

[3d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L22)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FLightCore.__IS_3D__`

#### Defined in

[3d/src/lights/FLight.ts:21](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L21)

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

#### Defined in

[3d/src/lights/FLight.ts:44](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L44)

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

> **light**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Defined in

[3d/src/lights/FLight.ts:29](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L29)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Defined in

[3d/src/lights/FLight.ts:34](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L34)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[3d/src/lights/FLight.ts:39](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/3d/src/lights/FLight.ts#L39)
