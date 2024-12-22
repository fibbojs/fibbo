[@fibbojs](/api/index) / [3d](/api/3d) / FCamera

# Class: `abstract` FCamera

The base class for 3d cameras in Fibbo.

## Extends

- `FCamera`

## Extended by

- [`FAttachedCamera`](FAttachedCamera.md)
- [`FFixedCamera`](FFixedCamera.md)
- [`FOrbitCamera`](FOrbitCamera.md)
- [`FPointerLockCamera`](FPointerLockCamera.md)

## Accessors

### zoom

> `get` **zoom**(): `number`

> `set` **zoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:114](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L114)

## Constructors

### new FCamera()

> **new FCamera**(`scene`, `options`?): [`FCamera`](FCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

#### Returns

[`FCamera`](FCamera.md)

#### Overrides

`FCameraCore.constructor`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:31](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L31)

## Methods

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:68](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L68)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:76](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L76)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the camera according to the transform.
This method should be called after updating the transform properties.
This method does not make sense for cameras, but it is implemented for consistency.

#### Returns

`void`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:85](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L85)

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

### getCameraDirection()

> **getCameraDirection**(): `Vector3`

Get the direction of the camera.
This method is useful to get the direction of the camera to apply forces in the direction of the camera.

#### Returns

`Vector3`

The direction of the camera. It is a normalized vector.

#### Defined in

[packages/3d/src/cameras/FCamera.ts:105](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L105)

***

### lookAt()

> **lookAt**(`target`): `void`

Make the camera look at a target.

#### Parameters

• **target**: `FVector3`

The target to look at.

#### Returns

`void`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:96](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L96)

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

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: `PerspectiveCamera`

Three.js camera object.

#### Defined in

[packages/3d/src/cameras/FCamera.ts:24](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L24)

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

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Overrides

`FCameraCore.__IS_2D__`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:19](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L19)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FCameraCore.__IS_3D__`

#### Defined in

[packages/3d/src/cameras/FCamera.ts:18](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L18)

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

> **scene**: `FScene`

The scene the component is attached to.

#### Inherited from

`FCameraCore.scene`

#### Defined in

packages/core/dist/index.d.ts:227

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.

#### Defined in

[packages/3d/src/cameras/FCamera.ts:29](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/cameras/FCamera.ts#L29)
