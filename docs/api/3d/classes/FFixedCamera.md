[@fibbojs](/api/index) / [3d](/api/3d) / FFixedCamera

# Class: FFixedCamera

A fixed camera that does not move.

## Example

```ts
import { FFixedCamera, FScene } from '@fibbojs/3d'

const scene = new FScene()

scene.camera = new FFixedCamera()
scene.camera.setPosition(0, 5, 5)
scene.camera.lookAt(0, 0, 0)
```

## Extends

- [`FCamera`](FCamera.md)

## Constructors

### new FFixedCamera()

> **new FFixedCamera**(`options`?): [`FFixedCamera`](FFixedCamera.md)

#### Parameters

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

#### Returns

[`FFixedCamera`](FFixedCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[3d/src/cameras/FFixedCamera.ts:19](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FFixedCamera.ts#L19)

## Methods

### add()

> **add**(...`object`): `this`

Adds another Object3D as child of this Object3D.

#### Parameters

• ...**object**: `Object3D`\<`Object3DEventMap`\>[]

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be added
Any current parent on an object passed in here will be removed, since an Object3D can have at most one parent.

#### See

 - [attach](FFixedCamera.md#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

[`FCamera`](FCamera.md).[`add`](FCamera.md#add)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:515

***

### addEventListener()

> **addEventListener**\<`T`\>(`type`, `listener`): `void`

Adds a listener to an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`FFixedCamera`](FFixedCamera.md)\>

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`addEventListener`](FCamera.md#addeventlistener)

#### Defined in

3d/node\_modules/@types/three/src/core/EventDispatcher.d.ts:52

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `void`

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

• **matrix**: `Matrix4`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`applyMatrix4`](FCamera.md#applymatrix4)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:385

***

### applyQuaternion()

> **applyQuaternion**(`quaternion`): `this`

Applies the rotation represented by the quaternion to the object.

#### Parameters

• **quaternion**: `Quaternion`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`applyQuaternion`](FCamera.md#applyquaternion)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:391

***

### attach()

> **attach**(`object`): `this`

Adds a Object3D as a child of this, while maintaining the object's world transform.

#### Parameters

• **object**: `Object3D`\<`Object3DEventMap`\>

#### Returns

`this`

#### Remarks

Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### See

[add](FFixedCamera.md#add)

#### Inherited from

[`FCamera`](FCamera.md).[`attach`](FCamera.md#attach)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:541

***

### clear()

> **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`clear`](FCamera.md#clear)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:533

***

### clearViewOffset()

> **clearViewOffset**(): `void`

Removes any offset set by the [.setViewOffset](FAttachedCamera.md#setviewoffset) method.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`clearViewOffset`](FCamera.md#clearviewoffset)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:240

***

### clone()

> **clone**(`recursive`?): `this`

Returns a clone of `this` object and optionally all descendants.

#### Parameters

• **recursive?**: `boolean`

If true, descendants of the object are also cloned. Default `true`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`clone`](FCamera.md#clone)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:664

***

### copy()

> **copy**(`object`, `recursive`?): `this`

Copies the given object into this object.

#### Parameters

• **object**: `Object3D`\<`Object3DEventMap`\>

• **recursive?**: `boolean`

If set to `true`, descendants of the object are copied next to the existing ones. If set to
`false`, descendants are left unchanged. Default is `true`.

#### Returns

`this`

#### Remarks

Event listeners and user-defined callbacks (.onAfterRender and .onBeforeRender) are not copied.

#### Inherited from

[`FCamera`](FCamera.md).[`copy`](FCamera.md#copy)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:673

***

### dispatchEvent()

> **dispatchEvent**\<`T`\>(`event`): `void`

Fire an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **event**: `BaseEvent`\<`T`\> & `Object3DEventMap`\[`T`\]

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`dispatchEvent`](FCamera.md#dispatchevent)

#### Defined in

3d/node\_modules/@types/three/src/core/EventDispatcher.d.ts:81

***

### emitCollisionWith()

> **emitCollisionWith**(`classOrObject`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **classOrObject**: `any`

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

[3d/src/cameras/FCamera.ts:88](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L88)

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

[3d/src/cameras/FCamera.ts:97](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L97)

***

### getEffectiveFOV()

> **getEffectiveFOV**(): `number`

Returns the current vertical field of view angle in degrees considering [.zoom](FAttachedCamera.md#zoom).

#### Returns

`number`

#### Inherited from

[`FCamera`](FCamera.md).[`getEffectiveFOV`](FCamera.md#geteffectivefov)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:165

***

### getFilmHeight()

> **getFilmHeight**(): `number`

Returns the height of the image on the film

#### Returns

`number`

#### Remarks

If [.aspect](FAttachedCamera.md#aspect). is less than or equal to one (portrait format), the result equals [.filmGauge](FAttachedCamera.md#filmgauge).

#### Inherited from

[`FCamera`](FCamera.md).[`getFilmHeight`](FCamera.md#getfilmheight)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:179

***

### getFilmWidth()

> **getFilmWidth**(): `number`

Returns the width of the image on the film

#### Returns

`number`

#### Remarks

If [.aspect](FAttachedCamera.md#aspect). is greater than or equal to one (landscape format), the result equals [.filmGauge](FAttachedCamera.md#filmgauge).

#### Inherited from

[`FCamera`](FCamera.md).[`getFilmWidth`](FCamera.md#getfilmwidth)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:172

***

### getFocalLength()

> **getFocalLength**(): `number`

Returns the focal length of the current .fov | fov in respect to [.filmGauge](FAttachedCamera.md#filmgauge).

#### Returns

`number`

#### Inherited from

[`FCamera`](FCamera.md).[`getFocalLength`](FCamera.md#getfocallength)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:153

***

### getObjectById()

> **getObjectById**(`id`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching id.

#### Parameters

• **id**: `number`

Unique number of the object instance. Expects a `Integer`

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.

#### See

id

#### Inherited from

[`FCamera`](FCamera.md).[`getObjectById`](FCamera.md#getobjectbyid)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:549

***

### getObjectByName()

> **getObjectByName**(`name`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching name.

#### Parameters

• **name**: `string`

String to match to the children's Object3D.name property.

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Remarks

Note that for most objects the name is an empty string by default
You will have to set it manually to make use of this method.

#### Inherited from

[`FCamera`](FCamera.md).[`getObjectByName`](FCamera.md#getobjectbyname)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:557

***

### getObjectByProperty()

> **getObjectByProperty**(`name`, `value`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

• **name**: `string`

the property name to search for.

• **value**: `any`

value of the given property.

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[`FCamera`](FCamera.md).[`getObjectByProperty`](FCamera.md#getobjectbyproperty)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:566

***

### getObjectsByProperty()

> **getObjectsByProperty**(`name`, `value`, `optionalTarget`?): `Object3D`\<`Object3DEventMap`\>[]

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

• **name**: `string`

The property name to search for.

• **value**: `any`

Value of the given property.

• **optionalTarget?**: `Object3D`\<`Object3DEventMap`\>[]

target to set the result. Otherwise a new Array is instantiated. If set, you must clear
this array prior to each call (i.e., array.length = 0;).

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

#### Inherited from

[`FCamera`](FCamera.md).[`getObjectsByProperty`](FCamera.md#getobjectsbyproperty)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:576

***

### getViewBounds()

> **getViewBounds**(`distance`, `minTarget`, `maxTarget`): `void`

Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.

#### Parameters

• **distance**: `number`

• **minTarget**: `Vector2`

• **maxTarget**: `Vector2`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`getViewBounds`](FCamera.md#getviewbounds)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:185

***

### getViewSize()

> **getViewSize**(`distance`, `target`): `Vector2`

Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
Copies the result into the target Vector2, where x is width and y is height.

#### Parameters

• **distance**: `number`

• **target**: `Vector2`

#### Returns

`Vector2`

#### Inherited from

[`FCamera`](FCamera.md).[`getViewSize`](FCamera.md#getviewsize)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:191

***

### getWorldDirection()

> **getWorldDirection**(`target`): `Vector3`

Returns a THREE.Vector3 | Vector3 representing the world space direction in which the Camera is looking.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Remarks

Note: A Camera looks down its local, negative z-axis.

#### Inherited from

[`FCamera`](FCamera.md).[`getWorldDirection`](FCamera.md#getworlddirection)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:73

***

### getWorldPosition()

> **getWorldPosition**(`target`): `Vector3`

Returns a vector representing the position of the object in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

[`FCamera`](FCamera.md).[`getWorldPosition`](FCamera.md#getworldposition)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:582

***

### getWorldQuaternion()

> **getWorldQuaternion**(`target`): `Quaternion`

Returns a quaternion representing the rotation of the object in world space.

#### Parameters

• **target**: `Quaternion`

The result will be copied into this Quaternion.

#### Returns

`Quaternion`

#### Inherited from

[`FCamera`](FCamera.md).[`getWorldQuaternion`](FCamera.md#getworldquaternion)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:588

***

### getWorldScale()

> **getWorldScale**(`target`): `Vector3`

Returns a vector of the scaling factors applied to the object for each axis in world space.

#### Parameters

• **target**: `Vector3`

The result will be copied into this Vector3.

#### Returns

`Vector3`

#### Inherited from

[`FCamera`](FCamera.md).[`getWorldScale`](FCamera.md#getworldscale)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:594

***

### hasEventListener()

> **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Checks if listener is added to an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of event to listen to.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`FFixedCamera`](FFixedCamera.md)\>

The function that gets called when the event is fired.

#### Returns

`boolean`

#### Inherited from

[`FCamera`](FCamera.md).[`hasEventListener`](FCamera.md#haseventlistener)

#### Defined in

3d/node\_modules/@types/three/src/core/EventDispatcher.d.ts:62

***

### localToWorld()

> **localToWorld**(`vector`): `Vector3`

Converts the vector from this object's local space to world space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in this object's local space.

#### Returns

`Vector3`

#### Inherited from

[`FCamera`](FCamera.md).[`localToWorld`](FCamera.md#localtoworld)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:484

***

### lookAt()

#### lookAt(vector)

> **lookAt**(`vector`): `void`

Rotates the object to face a point in world space.

##### Parameters

• **vector**: `Vector3`

A vector representing a position in world space to look at.

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

[`FCamera`](FCamera.md).[`lookAt`](FCamera.md#lookat)

##### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:497

#### lookAt(x, y, z)

> **lookAt**(`x`, `y`, `z`): `void`

Rotates the object to face a point in world space.

##### Parameters

• **x**: `number`

Expects a `Float`

• **y**: `number`

Expects a `Float`

• **z**: `number`

Expects a `Float`

##### Returns

`void`

##### Remarks

This method does not support objects having non-uniformly-scaled parent(s).

##### Inherited from

[`FCamera`](FCamera.md).[`lookAt`](FCamera.md#lookat)

##### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:505

***

### onAfterRender()

> **onAfterRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **material**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[`FCamera`](FCamera.md).[`onAfterRender`](FCamera.md#onafterrender)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:353

***

### onAfterShadow()

> **onAfterShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **shadowCamera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **depthMaterial**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[`FCamera`](FCamera.md).[`onAfterShadow`](FCamera.md#onaftershadow)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:318

***

### onBeforeRender()

> **onBeforeRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **material**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[`FCamera`](FCamera.md).[`onBeforeRender`](FCamera.md#onbeforerender)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:336

***

### onBeforeShadow()

> **onBeforeShadow**(`renderer`, `scene`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Parameters

• **renderer**: `WebGLRenderer`

• **scene**: `Scene`

• **camera**: `Camera`

• **shadowCamera**: `Camera`

• **geometry**: `BufferGeometry`\<`NormalBufferAttributes`\>

• **depthMaterial**: `Material`

• **group**: `Group`\<`Object3DEventMap`\>

#### Returns

`void`

#### Remarks

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[`FCamera`](FCamera.md).[`onBeforeShadow`](FCamera.md#onbeforeshadow)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:299

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

[3d/src/cameras/FCamera.ts:81](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L81)

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

[`FCamera`](FCamera.md).[`onFrame`](FCamera.md#onframe)

#### Defined in

[3d/src/cameras/FFixedCamera.ts:23](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FFixedCamera.ts#L23)

***

### raycast()

> **raycast**(`raycaster`, `intersects`): `void`

Abstract (empty) method to get intersections between a casted ray and this object

#### Parameters

• **raycaster**: `Raycaster`

• **intersects**: `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>[]

#### Returns

`void`

#### Remarks

Subclasses such as THREE.Mesh | Mesh, THREE.Line | Line, and THREE.Points | Points implement this method in order to use raycasting.

#### See

THREE.Raycaster | Raycaster

#### Default Value

`() => {}`

#### Inherited from

[`FCamera`](FCamera.md).[`raycast`](FCamera.md#raycast)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:610

***

### remove()

> **remove**(...`object`): `this`

Removes a Object3D as child of this Object3D.

#### Parameters

• ...**object**: `Object3D`\<`Object3DEventMap`\>[]

#### Returns

`this`

#### Remarks

An arbitrary number of objects may be removed.

#### See

THREE.Group | Group for info on manually grouping objects.

#### Inherited from

[`FCamera`](FCamera.md).[`remove`](FCamera.md#remove)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:523

***

### removeEventListener()

> **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Removes a listener from an event type.

#### Type Parameters

• **T** *extends* keyof `Object3DEventMap`

#### Parameters

• **type**: `T`

The type of the listener that gets removed.

• **listener**: `EventListener`\<`Object3DEventMap`\[`T`\], `T`, [`FFixedCamera`](FFixedCamera.md)\>

The listener function that gets removed.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`removeEventListener`](FCamera.md#removeeventlistener)

#### Defined in

3d/node\_modules/@types/three/src/core/EventDispatcher.d.ts:72

***

### removeFromParent()

> **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`removeFromParent`](FCamera.md#removefromparent)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:528

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in object space.

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **angle**: `number`

The angle in radians. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

[`FCamera`](FCamera.md).[`rotateOnAxis`](FCamera.md#rotateonaxis)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:425

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in world space.

#### Parameters

• **axis**: `Vector3`

A normalized vector in world space.

• **angle**: `number`

The angle in radians. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized
Method Assumes no rotated parent.

#### Inherited from

[`FCamera`](FCamera.md).[`rotateOnWorldAxis`](FCamera.md#rotateonworldaxis)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:434

***

### rotateX()

> **rotateX**(`angle`): `this`

Rotates the object around _x_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`rotateX`](FCamera.md#rotatex)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:440

***

### rotateY()

> **rotateY**(`angle`): `this`

Rotates the object around _y_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`rotateY`](FCamera.md#rotatey)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:446

***

### rotateZ()

> **rotateZ**(`angle`): `this`

Rotates the object around _z_ axis in local space.

#### Parameters

• **angle**: `number`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`rotateZ`](FCamera.md#rotatez)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:452

***

### setFocalLength()

> **setFocalLength**(`focalLength`): `void`

Sets the FOV by focal length in respect to the current [.filmGauge](FAttachedCamera.md#filmgauge).

#### Parameters

• **focalLength**: `number`

Expects a `Float`

#### Returns

`void`

#### Remarks

By default, the focal length is specified for a `35mm` (full frame) camera.

#### Inherited from

[`FCamera`](FCamera.md).[`setFocalLength`](FCamera.md#setfocallength)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:160

***

### ~~setLens()~~

> **setLens**(`focalLength`, `frameHeight`?): `void`

#### Parameters

• **focalLength**: `number`

• **frameHeight?**: `number`

#### Returns

`void`

#### Deprecated

Use [.setFocalLength()](FAttachedCamera.md#setfocallength) and [.filmGauge](FAttachedCamera.md#filmgauge) instead.

#### Inherited from

[`FCamera`](FCamera.md).[`setLens`](FCamera.md#setlens)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:251

***

### setPosition()

> **setPosition**(`x`, `y`, `z`): `void`

Set the position of the camera.

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setPosition`](FCamera.md#setposition)

#### Defined in

[3d/src/cameras/FCamera.ts:58](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L58)

***

### setRotation()

> **setRotation**(`x`, `y`, `z`): `void`

Set the rotation of the camera.

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setRotation`](FCamera.md#setrotation)

#### Defined in

[3d/src/cameras/FCamera.ts:72](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L72)

***

### setRotationFromAxisAngle()

> **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Calls THREE.Quaternion.setFromAxisAngle | setFromAxisAngle(axis, angle) on the [.quaternion](FAttachedCamera.md#quaternion).

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **angle**: `number`

Angle in radians. Expects a `Float`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setRotationFromAxisAngle`](FCamera.md#setrotationfromaxisangle)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:398

***

### setRotationFromEuler()

> **setRotationFromEuler**(`euler`): `void`

Calls THREE.Quaternion.setFromEuler | setFromEuler(euler) on the [.quaternion](FAttachedCamera.md#quaternion).

#### Parameters

• **euler**: `Euler`

Euler angle specifying rotation amount.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setRotationFromEuler`](FCamera.md#setrotationfromeuler)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:404

***

### setRotationFromMatrix()

> **setRotationFromMatrix**(`m`): `void`

Calls THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix(m) on the [.quaternion](FAttachedCamera.md#quaternion).

#### Parameters

• **m**: `Matrix4`

Rotate the quaternion by the rotation component of the matrix.

#### Returns

`void`

#### Remarks

Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).

#### Inherited from

[`FCamera`](FCamera.md).[`setRotationFromMatrix`](FCamera.md#setrotationfrommatrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:411

***

### setRotationFromQuaternion()

> **setRotationFromQuaternion**(`q`): `void`

Copy the given THREE.Quaternion | Quaternion into [.quaternion](FAttachedCamera.md#quaternion).

#### Parameters

• **q**: `Quaternion`

Normalized Quaternion.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setRotationFromQuaternion`](FCamera.md#setrotationfromquaternion)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:417

***

### setScale()

> **setScale**(`x`, `y`, `z`): `void`

Set the scale of the camera.

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setScale`](FCamera.md#setscale)

#### Defined in

[3d/src/cameras/FCamera.ts:65](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L65)

***

### setViewOffset()

> **setViewOffset**(`fullWidth`, `fullHeight`, `x`, `y`, `width`, `height`): `void`

Sets an offset in a larger frustum.

#### Parameters

• **fullWidth**: `number`

Full width of multiview setup Expects a `Float`.

• **fullHeight**: `number`

Full height of multiview setup Expects a `Float`.

• **x**: `number`

Horizontal offset of subcamera Expects a `Float`.

• **y**: `number`

Vertical offset of subcamera Expects a `Float`.

• **width**: `number`

Width of subcamera Expects a `Float`.

• **height**: `number`

Height of subcamera Expects a `Float`.

#### Returns

`void`

#### Remarks

This is useful for multi-window or multi-monitor/multi-machine setups.

For example, if you have 3x2 monitors and each monitor is _1920x1080_ and
the monitors are in grid like this
```
┌───┬───┬───┐
│ A │ B │ C │
├───┼───┼───┤
│ D │ E │ F │
└───┴───┴───┘
```
then for each monitor you would call it like this
```typescript
const w = 1920
const h = 1080
const fullWidth = w * 3
const fullHeight = h * 2

// Monitor - A
camera.setViewOffset(fullWidth, fullHeight, w * 0, h * 0, w, h)
// Monitor - B
camera.setViewOffset(fullWidth, fullHeight, w * 1, h * 0, w, h)
// Monitor - C
camera.setViewOffset(fullWidth, fullHeight, w * 2, h * 0, w, h)
// Monitor - D
camera.setViewOffset(fullWidth, fullHeight, w * 0, h * 1, w, h)
// Monitor - E
camera.setViewOffset(fullWidth, fullHeight, w * 1, h * 1, w, h)
// Monitor - F
camera.setViewOffset(fullWidth, fullHeight, w * 2, h * 1, w, h)
```
Note there is no reason monitors have to be the same size or in a grid.

#### Inherited from

[`FCamera`](FCamera.md).[`setViewOffset`](FCamera.md#setviewoffset)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:235

***

### setZoom()

> **setZoom**(`zoom`): `void`

Set the zoom of the camera.

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setZoom`](FCamera.md#setzoom)

#### Defined in

[3d/src/cameras/FCamera.ts:76](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L76)

***

### toJSON()

> **toJSON**(`meta`?): `PerspectiveCameraJSON`

Convert the object to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).

#### Parameters

• **meta?**: `JSONMeta`

Object containing metadata such as materials, textures or images for the object.

#### Returns

`PerspectiveCameraJSON`

#### Inherited from

[`FCamera`](FCamera.md).[`toJSON`](FCamera.md#tojson)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:253

***

### translateOnAxis()

> **translateOnAxis**(`axis`, `distance`): `this`

Translate an object by distance along an axis in object space

#### Parameters

• **axis**: `Vector3`

A normalized vector in object space.

• **distance**: `number`

The distance to translate. Expects a `Float`

#### Returns

`this`

#### Remarks

The axis is assumed to be normalized.

#### Inherited from

[`FCamera`](FCamera.md).[`translateOnAxis`](FCamera.md#translateonaxis)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:460

***

### translateX()

> **translateX**(`distance`): `this`

Translates object along x axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`translateX`](FCamera.md#translatex)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:466

***

### translateY()

> **translateY**(`distance`): `this`

Translates object along _y_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`translateY`](FCamera.md#translatey)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:472

***

### translateZ()

> **translateZ**(`distance`): `this`

Translates object along _z_ axis in object space by distance units.

#### Parameters

• **distance**: `number`

Expects a `Float`

#### Returns

`this`

#### Inherited from

[`FCamera`](FCamera.md).[`translateZ`](FCamera.md#translatez)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:478

***

### traverse()

> **traverse**(`callback`): `void`

Executes the callback on this object and all descendants.

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[`FCamera`](FCamera.md).[`traverse`](FCamera.md#traverse)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:617

***

### traverseAncestors()

> **traverseAncestors**(`callback`): `void`

Executes the callback on all ancestors.

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[`FCamera`](FCamera.md).[`traverseAncestors`](FCamera.md#traverseancestors)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:632

***

### traverseVisible()

> **traverseVisible**(`callback`): `void`

Like traverse, but the callback will only be executed for visible objects

#### Parameters

• **callback**

A function with as first argument an Object3D object.

#### Returns

`void`

#### Remarks

Descendants of invisible objects are not traversed.
Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[`FCamera`](FCamera.md).[`traverseVisible`](FCamera.md#traversevisible)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:625

***

### updateMatrix()

> **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`updateMatrix`](FCamera.md#updatematrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:637

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Updates the global transform of the object.
And will update the object descendants if [.matrixWorldNeedsUpdate](FAttachedCamera.md#matrixworldneedsupdate) is set to true or if the force parameter is set to `true`.

#### Parameters

• **force?**: `boolean`

A boolean that can be used to bypass [.matrixWorldAutoUpdate](FAttachedCamera.md#matrixworldautoupdate), to recalculate the world matrix of the object and descendants on the current frame.
Useful if you cannot wait for the renderer to update it on the next frame, assuming [.matrixWorldAutoUpdate](FAttachedCamera.md#matrixworldautoupdate) set to `true`.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`updateMatrixWorld`](FCamera.md#updatematrixworld)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:645

***

### updateProjectionMatrix()

> **updateProjectionMatrix**(): `void`

Updates the camera projection matrix

#### Returns

`void`

#### Remarks

Must be called after any change of parameters.

#### Inherited from

[`FCamera`](FCamera.md).[`updateProjectionMatrix`](FCamera.md#updateprojectionmatrix)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:246

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`, `updateChildren`): `void`

Updates the global transform of the object.

#### Parameters

• **updateParents**: `boolean`

Recursively updates global transform of ancestors.

• **updateChildren**: `boolean`

Recursively updates global transform of descendants.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`updateWorldMatrix`](FCamera.md#updateworldmatrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:652

***

### worldToLocal()

> **worldToLocal**(`vector`): `Vector3`

Converts the vector from world space to this object's local space.

#### Parameters

• **vector**: `Vector3`

A vector representing a position in world space.

#### Returns

`Vector3`

#### Inherited from

[`FCamera`](FCamera.md).[`worldToLocal`](FCamera.md#worldtolocal)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:490

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_COLLISION__`](FCamera.md#__callbacks_on_collision__)

#### Defined in

[3d/src/cameras/FCamera.ts:19](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L19)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

[3d/src/cameras/FCamera.ts:18](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L18)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

[3d/src/cameras/FCamera.ts:17](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L17)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

[3d/src/cameras/FCamera.ts:16](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L16)

***

### animations

> **animations**: `AnimationClip`[]

Array with object's animation clips.

#### Default Value

`[]`

#### Inherited from

[`FCamera`](FCamera.md).[`animations`](FCamera.md#animations)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:266

***

### aspect

> **aspect**: `number`

Camera frustum aspect ratio, usually the canvas width / canvas height.

#### Remarks

Expects a `Float`

#### Default Value

`1`, _(square canvas)_.

#### Inherited from

[`FCamera`](FCamera.md).[`aspect`](FCamera.md#aspect)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:93

***

### castShadow

> **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

#### Default Value

`false`

#### Inherited from

[`FCamera`](FCamera.md).[`castShadow`](FCamera.md#castshadow)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:238

***

### children

> **children**: `Object3D`\<`Object3DEventMap`\>[]

Array with object's children.

#### See

THREE.Object3DGroup | Group for info on manually grouping objects.

#### Default Value

`[]`

#### Inherited from

[`FCamera`](FCamera.md).[`children`](FCamera.md#children)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:145

***

### coordinateSystem

> **coordinateSystem**: `CoordinateSystem`

#### Inherited from

[`FCamera`](FCamera.md).[`coordinateSystem`](FCamera.md#coordinatesystem)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:64

***

### customDepthMaterial?

> `optional` **customDepthMaterial**: `Material`

Custom depth material to be used when rendering to the depth map.

#### Remarks

Can only be used in context of meshes.
When shadow-casting with a THREE.DirectionalLight | DirectionalLight or THREE.SpotLight | SpotLight,
if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.

#### Default Value

`undefined`

#### Inherited from

[`FCamera`](FCamera.md).[`customDepthMaterial`](FCamera.md#customdepthmaterial)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:282

***

### customDistanceMaterial?

> `optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](FAttachedCamera.md#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

#### Default Value

`undefined`

#### Inherited from

[`FCamera`](FCamera.md).[`customDistanceMaterial`](FCamera.md#customdistancematerial)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:288

***

### far

> **far**: `number`

Camera frustum far plane.

#### Remarks

Must be greater than the current value of [.near](FAttachedCamera.md#near) plane.

#### Default Value

`2000`

#### Inherited from

[`FCamera`](FCamera.md).[`far`](FCamera.md#far)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:110

***

### filmGauge

> **filmGauge**: `number`

Film size used for the larger axis.
This parameter does not influence the projection matrix unless [.filmOffset](FAttachedCamera.md#filmoffset) is set to a nonzero value.

#### Remarks

Expects a `Float`

#### Default Value

`35`, _millimeters_.

#### Inherited from

[`FCamera`](FCamera.md).[`filmGauge`](FCamera.md#filmgauge)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:141

***

### filmOffset

> **filmOffset**: `number`

Horizontal off-center offset in the same unit as [.filmGauge](FAttachedCamera.md#filmgauge).

#### Remarks

Expects a `Float`

#### Default Value

`0`

#### Inherited from

[`FCamera`](FCamera.md).[`filmOffset`](FCamera.md#filmoffset)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:148

***

### focus

> **focus**: `number`

Object distance used for stereoscopy and depth-of-field effects.

#### Remarks

This parameter does not influence the projection matrix unless a THREE.StereoCamera | StereoCamera is being used.

#### Default Value

`10`

#### Inherited from

[`FCamera`](FCamera.md).[`focus`](FCamera.md#focus)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:118

***

### fov

> **fov**: `number`

Camera frustum vertical field of view, from bottom to top of view, in degrees.

#### Remarks

Expects a `Float`

#### Default Value

`50`

#### Inherited from

[`FCamera`](FCamera.md).[`fov`](FCamera.md#fov)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:86

***

### frustumCulled

> **frustumCulled**: `boolean`

When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`frustumCulled`](FCamera.md#frustumculled)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:251

***

### id

> `readonly` **id**: `number`

Unique number for this Object3D instance.

#### Remarks

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
Expects a `Integer`

#### Inherited from

[`FCamera`](FCamera.md).[`id`](FCamera.md#id)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:109

***

### isCamera

> `readonly` **isCamera**: `true`

Read-only flag to check if a given object is of type Camera.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`isCamera`](FCamera.md#iscamera)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:29

***

### isObject3D

> `readonly` **isObject3D**: `true`

Flag to check if a given object is of type Object3D.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`isObject3D`](FCamera.md#isobject3d)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:102

***

### isPerspectiveCamera

> `readonly` **isPerspectiveCamera**: `true`

Read-only flag to check if a given object is of type Camera.

#### Remarks

This is a _constant_ value

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`isPerspectiveCamera`](FCamera.md#isperspectivecamera)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:67

***

### layers

> **layers**: `Layers`

The THREE.Layers | layers that the Camera is a member of.

#### Remarks

Objects must share at least one layer with the Camera to be n when the camera's viewpoint is rendered.

#### Default Value

`new THREE.Layers()`

#### Inherited from

[`FCamera`](FCamera.md).[`layers`](FCamera.md#layers)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:43

***

### matrix

> **matrix**: `Matrix4`

The local transform matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`matrix`](FCamera.md#matrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:191

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

When this is set, it calculates the matrix of position, (rotation or quaternion) and
scale every frame and also recalculates the matrixWorld property.

#### Default Value

[DEFAULT_MATRIX_AUTO_UPDATE](FAttachedCamera.md#default_matrix_auto_update) - that is `(true)`.

#### Inherited from

[`FCamera`](FCamera.md).[`matrixAutoUpdate`](FCamera.md#matrixautoupdate)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:205

***

### matrixWorld

> **matrixWorld**: `Matrix4`

The global transform of the object.

#### Remarks

If the Object3D has no parent, then it's identical to the local transform THREE.Object3D.matrix | .matrix.

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`matrixWorld`](FCamera.md#matrixworld)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:198

***

### matrixWorldAutoUpdate

> **matrixWorldAutoUpdate**: `boolean`

If set, then the renderer checks every frame if the object and its children need matrix updates.
When it isn't, then you have to maintain all matrices in the object and its children yourself.

#### Default Value

[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](FAttachedCamera.md#default_matrix_world_auto_update) - that is `(true)`.

#### Inherited from

[`FCamera`](FCamera.md).[`matrixWorldAutoUpdate`](FCamera.md#matrixworldautoupdate)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:212

***

### matrixWorldInverse

> **matrixWorldInverse**: `Matrix4`

This is the inverse of matrixWorld.

#### Remarks

MatrixWorld contains the Matrix which has the world transform of the Camera .

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`matrixWorldInverse`](FCamera.md#matrixworldinverse)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:50

***

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

#### Default Value

`false`

#### Inherited from

[`FCamera`](FCamera.md).[`matrixWorldNeedsUpdate`](FCamera.md#matrixworldneedsupdate)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:218

***

### modelViewMatrix

> `readonly` **modelViewMatrix**: `Matrix4`

#### Default Value

`new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`modelViewMatrix`](FCamera.md#modelviewmatrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:180

***

### name

> **name**: `string`

Optional name of the object

#### Remarks

_(doesn't need to be unique)_.

#### Default Value

`""`

#### Inherited from

[`FCamera`](FCamera.md).[`name`](FCamera.md#name)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:122

***

### near

> **near**: `number`

Camera frustum near plane.

#### Remarks

The valid range is greater than `0` and less than the current value of the [.far](FAttachedCamera.md#far) plane.

#### Default Value

`0.1`

#### Inherited from

[`FCamera`](FCamera.md).[`near`](FCamera.md#near)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:102

***

### normalMatrix

> `readonly` **normalMatrix**: `Matrix3`

#### Default Value

`new THREE.Matrix3()`

#### Inherited from

[`FCamera`](FCamera.md).[`normalMatrix`](FCamera.md#normalmatrix)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:185

***

### parent

> **parent**: `null` \| `Object3D`\<`Object3DEventMap`\>

Object's parent in the [scene graph](https://en.wikipedia.org/wiki/Scene_graph).

#### Remarks

An object can have at most one parent.

#### Default Value

`null`

#### Inherited from

[`FCamera`](FCamera.md).[`parent`](FCamera.md#parent)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:137

***

### position

> `readonly` **position**: `Vector3`

Object's local position.

#### Default Value

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

[`FCamera`](FCamera.md).[`position`](FCamera.md#position)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:157

***

### projectionMatrix

> **projectionMatrix**: `Matrix4`

This is the matrix which contains the projection.

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`projectionMatrix`](FCamera.md#projectionmatrix)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:56

***

### projectionMatrixInverse

> **projectionMatrixInverse**: `Matrix4`

This is the inverse of projectionMatrix.

#### Default Value

THREE.Matrix4 | `new THREE.Matrix4()`

#### Inherited from

[`FCamera`](FCamera.md).[`projectionMatrixInverse`](FCamera.md#projectionmatrixinverse)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:62

***

### quaternion

> `readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

#### Default Value

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

[`FCamera`](FCamera.md).[`quaternion`](FCamera.md#quaternion)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:169

***

### receiveShadow

> **receiveShadow**: `boolean`

Whether the material receives shadows.

#### Default Value

`false`

#### Inherited from

[`FCamera`](FCamera.md).[`receiveShadow`](FCamera.md#receiveshadow)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:244

***

### renderOrder

> **renderOrder**: `number`

This value allows the default rendering order of [scene graph](https://en.wikipedia.org/wiki/Scene_graph)
objects to be overridden although opaque and transparent objects remain sorted independently.

#### Remarks

When this property is set for an instance of Group | Group, all descendants objects will be sorted and rendered together.
Sorting is from lowest to highest renderOrder.

#### Default Value

`0`

#### Inherited from

[`FCamera`](FCamera.md).[`renderOrder`](FCamera.md#renderorder)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:260

***

### rotation

> `readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

#### Default Value

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

[`FCamera`](FCamera.md).[`rotation`](FCamera.md#rotation)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:163

***

### scale

> `readonly` **scale**: `Vector3`

The object's local scale.

#### Default Value

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

[`FCamera`](FCamera.md).[`scale`](FCamera.md#scale)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:175

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.

#### Inherited from

[`FCamera`](FCamera.md).[`transform`](FCamera.md#transform)

#### Defined in

[3d/src/cameras/FCamera.ts:24](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/cameras/FCamera.ts#L24)

***

### type

> `readonly` **type**: `string`

#### Default Value

`PerspectiveCamera`

#### Inherited from

[`FCamera`](FCamera.md).[`type`](FCamera.md#type)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:73

***

### up

> **up**: `Vector3`

This is used by the [lookAt](FFixedCamera.md#lookat) method, for example, to determine the orientation of the result.

#### Default Value

[Object3D.DEFAULT_UP](FAttachedCamera.md#default_up) - that is `(0, 1, 0)`.

#### Inherited from

[`FCamera`](FCamera.md).[`up`](FCamera.md#up)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:151

***

### userData

> **userData**: `Record`\<`string`, `any`\>

An object that can be used to store custom data about the Object3D.

#### Remarks

It should not hold references to _functions_ as these **will not** be cloned.

#### Default

`{}`

#### Inherited from

[`FCamera`](FCamera.md).[`userData`](FCamera.md#userdata)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:273

***

### uuid

> **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

#### Remarks

This gets automatically assigned and shouldn't be edited.

#### Inherited from

[`FCamera`](FCamera.md).[`uuid`](FCamera.md#uuid)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:115

***

### view

> **view**: `null` \| `object`

Frustum window specification or null.
This is set using the [.setViewOffset](FAttachedCamera.md#setviewoffset) method and cleared using [.clearViewOffset](FAttachedCamera.md#clearviewoffset).

#### Default Value

`null`

#### Inherited from

[`FCamera`](FCamera.md).[`view`](FCamera.md#view)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:125

***

### viewport?

> `optional` **viewport**: `Vector4`

#### Inherited from

[`FCamera`](FCamera.md).[`viewport`](FCamera.md#viewport)

#### Defined in

3d/node\_modules/@types/three/src/cameras/Camera.d.ts:66

***

### visible

> **visible**: `boolean`

Object gets rendered if `true`.

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`visible`](FCamera.md#visible)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:232

***

### zoom

> **zoom**: `number`

Gets or sets the zoom factor of the camera.

#### Default Value

`1`

#### Inherited from

[`FCamera`](FCamera.md).[`zoom`](FCamera.md#zoom)

#### Defined in

3d/node\_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:79

***

### DEFAULT\_MATRIX\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](FAttachedCamera.md#matrixautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`DEFAULT_MATRIX_AUTO_UPDATE`](FCamera.md#default_matrix_auto_update)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:373

***

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](FAttachedCamera.md#matrixworldautoupdate) for newly created Object3Ds.

#### Default Value

`true`

#### Inherited from

[`FCamera`](FCamera.md).[`DEFAULT_MATRIX_WORLD_AUTO_UPDATE`](FCamera.md#default_matrix_world_auto_update)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:379

***

### DEFAULT\_UP

> `static` **DEFAULT\_UP**: `Vector3`

The default [up](FAttachedCamera.md#up) direction for objects, also used as the default position for THREE.DirectionalLight | DirectionalLight,
THREE.HemisphereLight | HemisphereLight and THREE.Spotlight | Spotlight (which creates lights shining from the top down).

#### Default Value

`new THREE.Vector3( 0, 1, 0)`

#### Inherited from

[`FCamera`](FCamera.md).[`DEFAULT_UP`](FCamera.md#default_up)

#### Defined in

3d/node\_modules/@types/three/src/core/Object3D.d.ts:367
