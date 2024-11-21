[@fibbojs](/api/index) / [3d](/api/3d) / FAttachedCamera

# Class: FAttachedCamera

A camera that can be attached to a FComponent.

## Example

```ts
import { FAttachedCamera, FCuboid, FScene } from '@fibbojs/3d'

const scene = new FScene()

const cube = new FCuboid(scene)
scene.addComponent(cube)

scene.camera = new FAttachedCamera(cube)
```

## Extends

- [`FCamera`](FCamera.md)

## Accessors

### zoom

> `get` **zoom**(): `number`

> `set` **zoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`number`

#### Inherited from

[`FCamera`](FCamera.md).[`zoom`](FCamera.md#zoom)

#### Defined in

[3d/src/cameras/FCamera.ts:114](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L114)

## Constructors

### new FAttachedCamera()

> **new FAttachedCamera**(`scene`, `attachedComponent`): [`FAttachedCamera`](FAttachedCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

Scene that the camera is in

• **attachedComponent**: [`FComponent`](FComponent.md)

Component that the camera is attached to

#### Returns

[`FAttachedCamera`](FAttachedCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:36](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FAttachedCamera.ts#L36)

## Methods

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_POSITION__`](FCamera.md#__update_position__)

#### Defined in

[3d/src/cameras/FCamera.ts:68](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L68)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_ROTATION__`](FCamera.md#__update_rotation__)

#### Defined in

[3d/src/cameras/FCamera.ts:76](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L76)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the camera according to the transform.
This method should be called after updating the transform properties.
This method does not make sense for cameras, but it is implemented for consistency.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_SCALE__`](FCamera.md#__update_scale__)

#### Defined in

[3d/src/cameras/FCamera.ts:85](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L85)

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

[`FCamera`](FCamera.md).[`emitCollisionWith`](FCamera.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:293

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`emitOnLoaded`](FCamera.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:247

***

### frame()

> **frame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

[`FCamera`](FCamera.md).[`frame`](FCamera.md#frame)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:41](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FAttachedCamera.ts#L41)

***

### getCameraDirection()

> **getCameraDirection**(): `Vector3`

Get the direction of the camera.
This method is useful to get the direction of the camera to apply forces in the direction of the camera.

#### Returns

`Vector3`

The direction of the camera. It is a normalized vector.

#### Inherited from

[`FCamera`](FCamera.md).[`getCameraDirection`](FCamera.md#getcameradirection)

#### Defined in

[3d/src/cameras/FCamera.ts:105](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L105)

***

### lookAt()

> **lookAt**(`target`): `void`

Make the camera look at a target.

#### Parameters

• **target**: [`FVector3`](../interfaces/FVector3.md)

The target to look at.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`lookAt`](FCamera.md#lookat)

#### Defined in

[3d/src/cameras/FCamera.ts:96](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L96)

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

[`FCamera`](FCamera.md).[`onCollisionWith`](FCamera.md#oncollisionwith)

#### Defined in

core/dist/index.d.ts:270

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

[`FCamera`](FCamera.md).[`onFrame`](FCamera.md#onframe)

#### Defined in

core/dist/index.d.ts:238

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

[`FCamera`](FCamera.md).[`onLoaded`](FCamera.md#onloaded)

#### Defined in

core/dist/index.d.ts:243

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_COLLISION__`](FCamera.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:216

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_FRAME__`](FCamera.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:207

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_LOADED__`](FCamera.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:211

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: `PerspectiveCamera`

Three.js camera object.

#### Inherited from

[`FCamera`](FCamera.md).[`__CAMERA__`](FCamera.md#__camera__)

#### Defined in

[3d/src/cameras/FCamera.ts:24](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L24)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

core/dist/index.d.ts:203

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

[3d/src/cameras/FCamera.ts:19](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L19)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

[3d/src/cameras/FCamera.ts:18](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L18)

***

### attachedComponent

> **attachedComponent**: [`FComponent`](FComponent.md)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:28](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FAttachedCamera.ts#L28)

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

[`FCamera`](FCamera.md).[`controller`](FCamera.md#controller)

#### Defined in

core/dist/index.d.ts:226

***

### offset

> **offset**: [`FVector3`](../interfaces/FVector3.md)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:30](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FAttachedCamera.ts#L30)

***

### scene

> **scene**: `FScene`

The scene the component is attached to.

#### Inherited from

[`FCamera`](FCamera.md).[`scene`](FCamera.md#scene)

#### Defined in

core/dist/index.d.ts:222

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.

#### Inherited from

[`FCamera`](FCamera.md).[`transform`](FCamera.md#transform)

#### Defined in

[3d/src/cameras/FCamera.ts:29](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/cameras/FCamera.ts#L29)
