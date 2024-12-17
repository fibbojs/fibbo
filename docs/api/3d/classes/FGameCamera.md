[@fibbojs](/api/index) / [3d](/api/3d) / FGameCamera

# Class: FGameCamera

A camera that can be attached to a FComponent and orbits around it in a more game-like way.

## Example

```ts
import { FCuboid, FGameCamera, FScene } from '@fibbojs/3d'

const scene = new FScene()

const cube = new FCuboid(scene)
scene.addComponent(cube)

scene.camera = new FGameCamera(cube)
```

## Extends

- [`FOrbitCamera`](FOrbitCamera.md)

## Accessors

### zoom

> `get` **zoom**(): `number`

> `set` **zoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`number`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`zoom`](FOrbitCamera.md#zoom)

#### Defined in

[3d/src/cameras/FCamera.ts:114](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L114)

## Constructors

### new FGameCamera()

> **new FGameCamera**(`scene`, `options`): [`FGameCamera`](FGameCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FAttachedCameraOptions`](../interfaces/FAttachedCameraOptions.md)

#### Returns

[`FGameCamera`](FGameCamera.md)

#### Overrides

[`FOrbitCamera`](FOrbitCamera.md).[`constructor`](FOrbitCamera.md#constructors)

#### Defined in

[3d/src/cameras/FGameCamera.ts:29](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FGameCamera.ts#L29)

## Methods

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__UPDATE_POSITION__`](FOrbitCamera.md#__update_position__)

#### Defined in

[3d/src/cameras/FCamera.ts:68](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L68)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__UPDATE_ROTATION__`](FOrbitCamera.md#__update_rotation__)

#### Defined in

[3d/src/cameras/FCamera.ts:76](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L76)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the camera according to the transform.
This method should be called after updating the transform properties.
This method does not make sense for cameras, but it is implemented for consistency.

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__UPDATE_SCALE__`](FOrbitCamera.md#__update_scale__)

#### Defined in

[3d/src/cameras/FCamera.ts:85](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L85)

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

[`FOrbitCamera`](FOrbitCamera.md).[`emitCollisionWith`](FOrbitCamera.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:293

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`emitOnLoaded`](FOrbitCamera.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:247

***

### frame()

> **frame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Overrides

[`FOrbitCamera`](FOrbitCamera.md).[`frame`](FOrbitCamera.md#frame)

#### Defined in

[3d/src/cameras/FGameCamera.ts:56](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FGameCamera.ts#L56)

***

### getCameraDirection()

> **getCameraDirection**(): `Vector3`

Get the direction of the camera.
This method is useful to get the direction of the camera to apply forces in the direction of the camera.

#### Returns

`Vector3`

The direction of the camera. It is a normalized vector.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`getCameraDirection`](FOrbitCamera.md#getcameradirection)

#### Defined in

[3d/src/cameras/FCamera.ts:105](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L105)

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

[`FOrbitCamera`](FOrbitCamera.md).[`lookAt`](FOrbitCamera.md#lookat)

#### Defined in

[3d/src/cameras/FCamera.ts:96](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L96)

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

[`FOrbitCamera`](FOrbitCamera.md).[`onCollisionWith`](FOrbitCamera.md#oncollisionwith)

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

[`FOrbitCamera`](FOrbitCamera.md).[`onFrame`](FOrbitCamera.md#onframe)

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

[`FOrbitCamera`](FOrbitCamera.md).[`onLoaded`](FOrbitCamera.md#onloaded)

#### Defined in

core/dist/index.d.ts:243

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

• **position**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`setPosition`](FOrbitCamera.md#setposition)

#### Defined in

[3d/src/cameras/FOrbitCamera.ts:47](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FOrbitCamera.ts#L47)

***

### setZoom()

> **setZoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`setZoom`](FOrbitCamera.md#setzoom)

#### Defined in

[3d/src/cameras/FOrbitCamera.ts:57](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FOrbitCamera.ts#L57)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__CALLBACKS_ON_COLLISION__`](FOrbitCamera.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:216

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__CALLBACKS_ON_FRAME__`](FOrbitCamera.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:207

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__CALLBACKS_ON_LOADED__`](FOrbitCamera.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:211

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: `PerspectiveCamera`

Three.js camera object.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__CAMERA__`](FOrbitCamera.md#__camera__)

#### Defined in

[3d/src/cameras/FCamera.ts:24](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L24)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__ID__`](FOrbitCamera.md#__id__)

#### Defined in

core/dist/index.d.ts:203

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__IS_2D__`](FOrbitCamera.md#__is_2d__)

#### Defined in

[3d/src/cameras/FCamera.ts:19](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L19)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`__IS_3D__`](FOrbitCamera.md#__is_3d__)

#### Defined in

[3d/src/cameras/FCamera.ts:18](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L18)

***

### attachedComponent

> **attachedComponent**: [`FComponent`](FComponent.md)

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`attachedComponent`](FOrbitCamera.md#attachedcomponent)

#### Defined in

[3d/src/cameras/FOrbitCamera.ts:26](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FOrbitCamera.ts#L26)

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`controller`](FOrbitCamera.md#controller)

#### Defined in

core/dist/index.d.ts:226

***

### controls

> **controls**: `OrbitControls`

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`controls`](FOrbitCamera.md#controls)

#### Defined in

[3d/src/cameras/FOrbitCamera.ts:28](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FOrbitCamera.ts#L28)

***

### isPointerLocked

> **isPointerLocked**: `boolean` = `false`

#### Defined in

[3d/src/cameras/FGameCamera.ts:25](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FGameCamera.ts#L25)

***

### lastMouseMoveEvent

> **lastMouseMoveEvent**: `undefined` \| `MouseEvent`

#### Defined in

[3d/src/cameras/FGameCamera.ts:27](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FGameCamera.ts#L27)

***

### scene

> **scene**: `FScene`

The scene the component is attached to.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`scene`](FOrbitCamera.md#scene)

#### Defined in

core/dist/index.d.ts:222

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.

#### Inherited from

[`FOrbitCamera`](FOrbitCamera.md).[`transform`](FOrbitCamera.md#transform)

#### Defined in

[3d/src/cameras/FCamera.ts:29](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/cameras/FCamera.ts#L29)
