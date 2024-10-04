[@fibbojs](/api/index) / [2d](/api/2d) / FCamera

# Class: `abstract` FCamera

The base class for 2D cameras in Fibbo.

## Extends

- `FCamera`

## Extended by

- [`FAttachedCamera`](FAttachedCamera.md)
- [`FFixedCamera`](FFixedCamera.md)
- [`FFreeCamera`](FFreeCamera.md)

## Constructors

### new FCamera()

> **new FCamera**(`scene`, `options`?): [`FCamera`](FCamera.md)

Create a new 2D camera.

#### Parameters

• **scene**: [`FScene`](FScene.md)

The scene the camera is in.

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

The options for the camera.

#### Returns

[`FCamera`](FCamera.md)

#### Overrides

`FCameraCore.constructor`

#### Defined in

[2d/src/cameras/FCamera.ts:34](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L34)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> `abstract` **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Defined in

[2d/src/cameras/FCamera.ts:55](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L55)

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

`FCameraCore.emitCollisionWith`

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

`FCameraCore.onCollisionWith`

#### Defined in

core/dist/index.d.ts:95

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

`FCameraCore.onFrame`

#### Defined in

[2d/src/cameras/FCamera.ts:53](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L53)

***

### setZoom()

> **setZoom**(`zoom`): `void`

Set the zoom of the camera.

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Overrides

`FCameraCore.setZoom`

#### Defined in

[2d/src/cameras/FCamera.ts:57](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L57)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

`FCameraCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

core/dist/index.d.ts:58

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FCameraCore.__ID__`

#### Defined in

core/dist/index.d.ts:53

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FCameraCore.__IS_2D__`

#### Defined in

[2d/src/cameras/FCamera.ts:16](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L16)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FCameraCore.__IS_3D__`

#### Defined in

core/dist/index.d.ts:47

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

`FCameraCore.controller`

#### Defined in

core/dist/index.d.ts:64

***

### position

> **position**: `object`

Position of the camera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/cameras/FCamera.ts:27](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L27)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the camera is in.

#### Defined in

[2d/src/cameras/FCamera.ts:21](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/2d/src/cameras/FCamera.ts#L21)
