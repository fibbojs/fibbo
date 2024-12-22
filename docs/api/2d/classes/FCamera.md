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

[packages/2d/src/cameras/FCamera.ts:36](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L36)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> `abstract` **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:57](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L57)

***

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**

• **position.x**: `number`

• **position.y**: `number`

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:88](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L88)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:67](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L67)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:75](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L75)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the camera according to the transform.
This method should be called after updating the transform properties.
This method does not make sense for cameras, but it is implemented for consistency.

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:84](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L84)

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

packages/core/dist/index.d.ts:298

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FCameraCore.emitOnLoaded`

#### Defined in

packages/core/dist/index.d.ts:252

***

### frame()

> **frame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

`FCameraCore.frame`

#### Defined in

packages/core/dist/index.d.ts:238

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

packages/core/dist/index.d.ts:275

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called every frame.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

`FCameraCore.onFrame`

#### Defined in

packages/core/dist/index.d.ts:243

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the component is loaded (could be a texture, a 3D model, etc).

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

`FCameraCore.onLoaded`

#### Defined in

packages/core/dist/index.d.ts:248

***

### setZoom()

> **setZoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:59](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L59)

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

packages/core/dist/index.d.ts:221

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FCameraCore.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:212

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

`FCameraCore.__CALLBACKS_ON_LOADED__`

#### Defined in

packages/core/dist/index.d.ts:216

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FCameraCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:208

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FCameraCore.__IS_2D__`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:17](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L17)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FCameraCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:202

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

`FCameraCore.controller`

#### Defined in

packages/core/dist/index.d.ts:231

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the camera is in.

#### Overrides

`FCameraCore.scene`

#### Defined in

[packages/2d/src/cameras/FCamera.ts:22](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L22)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.
It is used to store the position of the camera.
The scale and rotation of the transform are not used.

#### Defined in

[packages/2d/src/cameras/FCamera.ts:29](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/cameras/FCamera.ts#L29)
