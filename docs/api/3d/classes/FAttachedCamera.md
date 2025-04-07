[@fibbojs](/api/index) / [3d](/api/3d) / FAttachedCamera

# Class: FAttachedCamera

A camera that can be attached to a FComponent.

## Example

```ts
import { FAttachedCamera, FCuboid, FScene } from '@fibbojs/3d'

const scene = new FScene()

const cube = new FCuboid()

scene.camera = new FAttachedCamera({
  target: cube
})
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

[3d/src/cameras/FCamera.ts:118](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L118)

## Constructors

### new FAttachedCamera()

> **new FAttachedCamera**(`options`): [`FAttachedCamera`](FAttachedCamera.md)

#### Parameters

• **options**: [`FAttachedCameraOptions`](../interfaces/FAttachedCameraOptions.md)

Options for the camera

#### Returns

[`FAttachedCamera`](FAttachedCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:36](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FAttachedCamera.ts#L36)

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

[3d/src/cameras/FCamera.ts:72](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L72)

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

[3d/src/cameras/FCamera.ts:80](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L80)

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

[3d/src/cameras/FCamera.ts:89](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L89)

***

### addController()

> **addController**(`controller`): `void`

Add a controller to the component.

#### Parameters

• **controller**: `FController`

The controller to add.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`addController`](FCamera.md#addcontroller)

#### Defined in

core/dist/index.d.ts:418

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

core/dist/index.d.ts:499

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`emitOnLoaded`](FCamera.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:443

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

[3d/src/cameras/FAttachedCamera.ts:41](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FAttachedCamera.ts#L41)

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

[3d/src/cameras/FCamera.ts:109](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L109)

***

### lookAt()

> **lookAt**(`target`): `void`

Make the camera look at a target.

#### Parameters

• **target**: `FVector3`

The target to look at.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`lookAt`](FCamera.md#lookat)

#### Defined in

[3d/src/cameras/FCamera.ts:100](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L100)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

#### Parameters

• **classOrObject**: `any`

The class or object to observe for collisions. Should inherit from FComponent.

• **callback**

The callback to add to the collision event.

#### Returns

`Function`

A function to remove the callback.

##### Returns

`void`

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, ({ component }) => {
  console.log('Player collided with an Enemy!')
  console.log('The enemy is:', component)
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(enemy, () => {
  console.log('Player collided with the enemy!')
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
const removeThisCallback = player.onCollisionWith(enemy, () => {
 console.log('Player collided with the enemy!')
})
// To remove the callback, call the function returned by onCollisionWith
removeThisCallback()

#### Inherited from

[`FCamera`](FCamera.md).[`onCollisionWith`](FCamera.md#oncollisionwith)

#### Defined in

core/dist/index.d.ts:476

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

core/dist/index.d.ts:434

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

core/dist/index.d.ts:439

***

### removeController()

> **removeController**(`controller`): `void`

Remove a controller from the component.

#### Parameters

• **controller**: `FController`

The controller to remove.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`removeController`](FCamera.md#removecontroller)

#### Defined in

core/dist/index.d.ts:423

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

core/dist/index.d.ts:402

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_FRAME__`](FCamera.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:393

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_LOADED__`](FCamera.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:397

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: `PerspectiveCamera`

Three.js camera object.

#### Inherited from

[`FCamera`](FCamera.md).[`__CAMERA__`](FCamera.md#__camera__)

#### Defined in

[3d/src/cameras/FCamera.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L28)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

core/dist/index.d.ts:389

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

[3d/src/cameras/FCamera.ts:23](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L23)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

[3d/src/cameras/FCamera.ts:22](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L22)

***

### attachedComponent

> **attachedComponent**: [`FComponent`](FComponent.md)

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FAttachedCamera.ts#L28)

***

### controllers

> **controllers**: `FController`[]

The controllers attached to the component.

#### Inherited from

[`FCamera`](FCamera.md).[`controllers`](FCamera.md#controllers)

#### Defined in

core/dist/index.d.ts:412

***

### offset

> **offset**: `FVector3`

#### Defined in

[3d/src/cameras/FAttachedCamera.ts:30](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FAttachedCamera.ts#L30)

***

### scene

> **scene**: `FScene`

The scene the component is attached to.

#### Inherited from

[`FCamera`](FCamera.md).[`scene`](FCamera.md#scene)

#### Defined in

core/dist/index.d.ts:408

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.

#### Inherited from

[`FCamera`](FCamera.md).[`transform`](FCamera.md#transform)

#### Defined in

[3d/src/cameras/FCamera.ts:33](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/cameras/FCamera.ts#L33)
