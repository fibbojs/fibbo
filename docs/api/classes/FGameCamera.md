[@fibbojs/fibbo](/api/index)  / FGameCamera

# Class: FGameCamera

**`Description`**

A camera that can be attached to a FModel and orbits around it in a more game-like way.

**`Example`**

```ts
import { FGameCamera } from '@fibbojs/fibbo'
import type { FModel, FScene } from '@fibbojs/fibbo'

export default class MyGameCamera extends FGameCamera {
 constructor(attachedModel: FModel, scene: FScene) {
  super(attachedModel, scene)
 }

 onFrame(delta: number) {
  super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FOrbitCamera`](FOrbitCamera.md)

  ↳ **`FGameCamera`**

## Table of contents

### Constructors

- [constructor](FGameCamera.md#constructor)

### Methods

- [add](FGameCamera.md#add)
- [addEventListener](FGameCamera.md#addeventlistener)
- [applyMatrix4](FGameCamera.md#applymatrix4)
- [applyQuaternion](FGameCamera.md#applyquaternion)
- [attach](FGameCamera.md#attach)
- [clear](FGameCamera.md#clear)
- [clearViewOffset](FGameCamera.md#clearviewoffset)
- [clone](FGameCamera.md#clone)
- [copy](FGameCamera.md#copy)
- [dispatchEvent](FGameCamera.md#dispatchevent)
- [getEffectiveFOV](FGameCamera.md#geteffectivefov)
- [getFilmHeight](FGameCamera.md#getfilmheight)
- [getFilmWidth](FGameCamera.md#getfilmwidth)
- [getFocalLength](FGameCamera.md#getfocallength)
- [getObjectById](FGameCamera.md#getobjectbyid)
- [getObjectByName](FGameCamera.md#getobjectbyname)
- [getObjectByProperty](FGameCamera.md#getobjectbyproperty)
- [getObjectsByProperty](FGameCamera.md#getobjectsbyproperty)
- [getViewBounds](FGameCamera.md#getviewbounds)
- [getViewSize](FGameCamera.md#getviewsize)
- [getWorldDirection](FGameCamera.md#getworlddirection)
- [getWorldPosition](FGameCamera.md#getworldposition)
- [getWorldQuaternion](FGameCamera.md#getworldquaternion)
- [getWorldScale](FGameCamera.md#getworldscale)
- [hasEventListener](FGameCamera.md#haseventlistener)
- [localToWorld](FGameCamera.md#localtoworld)
- [lookAt](FGameCamera.md#lookat)
- [onAfterRender](FGameCamera.md#onafterrender)
- [onAfterShadow](FGameCamera.md#onaftershadow)
- [onBeforeRender](FGameCamera.md#onbeforerender)
- [onBeforeShadow](FGameCamera.md#onbeforeshadow)
- [onFrame](FGameCamera.md#onframe)
- [raycast](FGameCamera.md#raycast)
- [remove](FGameCamera.md#remove)
- [removeEventListener](FGameCamera.md#removeeventlistener)
- [removeFromParent](FGameCamera.md#removefromparent)
- [rotateOnAxis](FGameCamera.md#rotateonaxis)
- [rotateOnWorldAxis](FGameCamera.md#rotateonworldaxis)
- [rotateX](FGameCamera.md#rotatex)
- [rotateY](FGameCamera.md#rotatey)
- [rotateZ](FGameCamera.md#rotatez)
- [setFocalLength](FGameCamera.md#setfocallength)
- [setLens](FGameCamera.md#setlens)
- [setRotationFromAxisAngle](FGameCamera.md#setrotationfromaxisangle)
- [setRotationFromEuler](FGameCamera.md#setrotationfromeuler)
- [setRotationFromMatrix](FGameCamera.md#setrotationfrommatrix)
- [setRotationFromQuaternion](FGameCamera.md#setrotationfromquaternion)
- [setViewOffset](FGameCamera.md#setviewoffset)
- [toJSON](FGameCamera.md#tojson)
- [translateOnAxis](FGameCamera.md#translateonaxis)
- [translateX](FGameCamera.md#translatex)
- [translateY](FGameCamera.md#translatey)
- [translateZ](FGameCamera.md#translatez)
- [traverse](FGameCamera.md#traverse)
- [traverseAncestors](FGameCamera.md#traverseancestors)
- [traverseVisible](FGameCamera.md#traversevisible)
- [updateMatrix](FGameCamera.md#updatematrix)
- [updateMatrixWorld](FGameCamera.md#updatematrixworld)
- [updateProjectionMatrix](FGameCamera.md#updateprojectionmatrix)
- [updateWorldMatrix](FGameCamera.md#updateworldmatrix)
- [worldToLocal](FGameCamera.md#worldtolocal)

### Properties

- [animations](FGameCamera.md#animations)
- [aspect](FGameCamera.md#aspect)
- [attachedModel](FGameCamera.md#attachedmodel)
- [castShadow](FGameCamera.md#castshadow)
- [children](FGameCamera.md#children)
- [controls](FGameCamera.md#controls)
- [coordinateSystem](FGameCamera.md#coordinatesystem)
- [customDepthMaterial](FGameCamera.md#customdepthmaterial)
- [customDistanceMaterial](FGameCamera.md#customdistancematerial)
- [far](FGameCamera.md#far)
- [filmGauge](FGameCamera.md#filmgauge)
- [filmOffset](FGameCamera.md#filmoffset)
- [focus](FGameCamera.md#focus)
- [fov](FGameCamera.md#fov)
- [frustumCulled](FGameCamera.md#frustumculled)
- [id](FGameCamera.md#id)
- [isCamera](FGameCamera.md#iscamera)
- [isObject3D](FGameCamera.md#isobject3d)
- [isPerspectiveCamera](FGameCamera.md#isperspectivecamera)
- [layers](FGameCamera.md#layers)
- [matrix](FGameCamera.md#matrix)
- [matrixAutoUpdate](FGameCamera.md#matrixautoupdate)
- [matrixWorld](FGameCamera.md#matrixworld)
- [matrixWorldAutoUpdate](FGameCamera.md#matrixworldautoupdate)
- [matrixWorldInverse](FGameCamera.md#matrixworldinverse)
- [matrixWorldNeedsUpdate](FGameCamera.md#matrixworldneedsupdate)
- [modelViewMatrix](FGameCamera.md#modelviewmatrix)
- [name](FGameCamera.md#name)
- [near](FGameCamera.md#near)
- [normalMatrix](FGameCamera.md#normalmatrix)
- [parent](FGameCamera.md#parent)
- [position](FGameCamera.md#position)
- [previousModelPosition](FGameCamera.md#previousmodelposition)
- [projectionMatrix](FGameCamera.md#projectionmatrix)
- [projectionMatrixInverse](FGameCamera.md#projectionmatrixinverse)
- [quaternion](FGameCamera.md#quaternion)
- [receiveShadow](FGameCamera.md#receiveshadow)
- [renderOrder](FGameCamera.md#renderorder)
- [rotation](FGameCamera.md#rotation)
- [scale](FGameCamera.md#scale)
- [type](FGameCamera.md#type)
- [up](FGameCamera.md#up)
- [userData](FGameCamera.md#userdata)
- [uuid](FGameCamera.md#uuid)
- [view](FGameCamera.md#view)
- [viewport](FGameCamera.md#viewport)
- [visible](FGameCamera.md#visible)
- [zoom](FGameCamera.md#zoom)
- [DEFAULT\_MATRIX\_AUTO\_UPDATE](FGameCamera.md#default_matrix_auto_update)
- [DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE](FGameCamera.md#default_matrix_world_auto_update)
- [DEFAULT\_UP](FGameCamera.md#default_up)

## Constructors

### constructor

• **new FGameCamera**(`attachedModel`, `scene`): [`FGameCamera`](FGameCamera.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachedModel` | [`FModel`](FModel.md) | Model that the camera is attached to |
| `scene` | [`FScene`](FScene.md) | Scene that the camera is in |

#### Returns

[`FGameCamera`](FGameCamera.md)

#### Overrides

[FOrbitCamera](FOrbitCamera.md).[constructor](FOrbitCamera.md#constructor)

#### Defined in

src/cameras/FGameCamera.ts:33

## Methods

### add

▸ **add**(`...object`): `this`

Adds another Object3D as child of this Object3D.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...object` | `Object3D`\<`Object3DEventMap`\>[] |

#### Returns

`this`

**`Remarks`**

An arbitrary number of objects may be added
Any current parent on an object passed in here will be removed, since an Object3D can have at most one parent.

**`See`**

 - [attach](FGameCamera.md#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[add](FOrbitCamera.md#add)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:468

___

### addEventListener

▸ **addEventListener**\<`T`\>(`type`, `listener`): `void`

Adds a listener to an event type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Object3DEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of event to listen to. |
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FGameCamera`](FGameCamera.md)\> | The function that gets called when the event is fired. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[addEventListener](FOrbitCamera.md#addeventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:52

▸ **addEventListener**\<`T`\>(`type`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | `EventListener`\<{}, `T`, [`FGameCamera`](FGameCamera.md)\> |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[addEventListener](FOrbitCamera.md#addeventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:56

___

### applyMatrix4

▸ **applyMatrix4**(`matrix`): `void`

Applies the matrix transform to the object and updates the object's position, rotation and scale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | `Matrix4` |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[applyMatrix4](FOrbitCamera.md#applymatrix4)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:338

___

### applyQuaternion

▸ **applyQuaternion**(`quaternion`): `this`

Applies the rotation represented by the quaternion to the object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quaternion` | `Quaternion` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[applyQuaternion](FOrbitCamera.md#applyquaternion)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:344

___

### attach

▸ **attach**(`object`): `this`

Adds a Object3D as a child of this, while maintaining the object's world transform.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object3D`\<`Object3DEventMap`\> |

#### Returns

`this`

**`Remarks`**

Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).

**`See`**

[add](FGameCamera.md#add)

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[attach](FOrbitCamera.md#attach)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:494

___

### clear

▸ **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[clear](FOrbitCamera.md#clear)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:486

___

### clearViewOffset

▸ **clearViewOffset**(): `void`

Removes any offset set by the [.setViewOffset](FCamera.md#setviewoffset) method.

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[clearViewOffset](FOrbitCamera.md#clearviewoffset)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:211

___

### clone

▸ **clone**(`recursive?`): `this`

Returns a clone of `this` object and optionally all descendants.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recursive?` | `boolean` | If true, descendants of the object are also cloned. Default `true` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[clone](FOrbitCamera.md#clone)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:617

___

### copy

▸ **copy**(`object`, `recursive?`): `this`

Copies the given object into this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object3D`\<`Object3DEventMap`\> |  |
| `recursive?` | `boolean` | If set to `true`, descendants of the object are copied next to the existing ones. If set to `false`, descendants are left unchanged. Default is `true`. |

#### Returns

`this`

**`Remarks`**

Event listeners and user-defined callbacks (.onAfterRender and .onBeforeRender) are not copied.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[copy](FOrbitCamera.md#copy)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:626

___

### dispatchEvent

▸ **dispatchEvent**\<`T`\>(`event`): `void`

Fire an event type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Object3DEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `BaseEvent`\<`T`\> & `Object3DEventMap`[`T`] | The event that gets fired. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[dispatchEvent](FOrbitCamera.md#dispatchevent)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:84

___

### getEffectiveFOV

▸ **getEffectiveFOV**(): `number`

Returns the current vertical field of view angle in degrees considering [.zoom](FCamera.md#zoom).

#### Returns

`number`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getEffectiveFOV](FOrbitCamera.md#geteffectivefov)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:136

___

### getFilmHeight

▸ **getFilmHeight**(): `number`

Returns the height of the image on the film

#### Returns

`number`

**`Remarks`**

If [.aspect](FCamera.md#aspect). is less than or equal to one (portrait format), the result equals [.filmGauge](FCamera.md#filmgauge).

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getFilmHeight](FOrbitCamera.md#getfilmheight)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:150

___

### getFilmWidth

▸ **getFilmWidth**(): `number`

Returns the width of the image on the film

#### Returns

`number`

**`Remarks`**

If [.aspect](FCamera.md#aspect). is greater than or equal to one (landscape format), the result equals [.filmGauge](FCamera.md#filmgauge).

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getFilmWidth](FOrbitCamera.md#getfilmwidth)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:143

___

### getFocalLength

▸ **getFocalLength**(): `number`

Returns the focal length of the current .fov | fov in respect to [.filmGauge](FCamera.md#filmgauge).

#### Returns

`number`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getFocalLength](FOrbitCamera.md#getfocallength)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:124

___

### getObjectById

▸ **getObjectById**(`id`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Unique number of the object instance. Expects a `Integer` |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

**`Remarks`**

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.

**`See`**

id

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getObjectById](FOrbitCamera.md#getobjectbyid)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:502

___

### getObjectByName

▸ **getObjectByName**(`name`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself, and returns the first with a matching name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | String to match to the children's Object3D.name property. |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

**`Remarks`**

Note that for most objects the name is an empty string by default
You will have to set it manually to make use of this method.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getObjectByName](FOrbitCamera.md#getobjectbyname)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:510

___

### getObjectByProperty

▸ **getObjectByProperty**(`name`, `value`): `undefined` \| `Object3D`\<`Object3DEventMap`\>

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the property name to search for. |
| `value` | `any` | value of the given property. |

#### Returns

`undefined` \| `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getObjectByProperty](FOrbitCamera.md#getobjectbyproperty)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:519

___

### getObjectsByProperty

▸ **getObjectsByProperty**(`name`, `value`, `optionalTarget?`): `Object3D`\<`Object3DEventMap`\>[]

Searches through an object and its children, starting with the object itself,
and returns the first with a property that matches the value given.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The property name to search for. |
| `value` | `any` | Value of the given property. |
| `optionalTarget?` | `Object3D`\<`Object3DEventMap`\>[] | target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;). |

#### Returns

`Object3D`\<`Object3DEventMap`\>[]

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getObjectsByProperty](FOrbitCamera.md#getobjectsbyproperty)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:529

___

### getViewBounds

▸ **getViewBounds**(`distance`, `minTarget`, `maxTarget`): `void`

Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `minTarget` | `Vector2` |
| `maxTarget` | `Vector2` |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getViewBounds](FOrbitCamera.md#getviewbounds)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:156

___

### getViewSize

▸ **getViewSize**(`distance`, `target`): `Vector2`

Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
Copies the result into the target Vector2, where x is width and y is height.

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `target` | `Vector2` |

#### Returns

`Vector2`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getViewSize](FOrbitCamera.md#getviewsize)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:162

___

### getWorldDirection

▸ **getWorldDirection**(`target`): `Vector3`

Returns a THREE.Vector3 | Vector3 representing the world space direction in which the Camera is looking.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

**`Remarks`**

Note: A Camera looks down its local, negative z-axis.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getWorldDirection](FOrbitCamera.md#getworlddirection)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:73

___

### getWorldPosition

▸ **getWorldPosition**(`target`): `Vector3`

Returns a vector representing the position of the object in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getWorldPosition](FOrbitCamera.md#getworldposition)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:535

___

### getWorldQuaternion

▸ **getWorldQuaternion**(`target`): `Quaternion`

Returns a quaternion representing the rotation of the object in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Quaternion` | The result will be copied into this Quaternion. |

#### Returns

`Quaternion`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getWorldQuaternion](FOrbitCamera.md#getworldquaternion)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:541

___

### getWorldScale

▸ **getWorldScale**(`target`): `Vector3`

Returns a vector of the scaling factors applied to the object for each axis in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Vector3` | The result will be copied into this Vector3. |

#### Returns

`Vector3`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[getWorldScale](FOrbitCamera.md#getworldscale)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:547

___

### hasEventListener

▸ **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

Checks if listener is added to an event type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Object3DEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of event to listen to. |
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FGameCamera`](FGameCamera.md)\> | The function that gets called when the event is fired. |

#### Returns

`boolean`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[hasEventListener](FOrbitCamera.md#haseventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:63

▸ **hasEventListener**\<`T`\>(`type`, `listener`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | `EventListener`\<{}, `T`, [`FGameCamera`](FGameCamera.md)\> |

#### Returns

`boolean`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[hasEventListener](FOrbitCamera.md#haseventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:67

___

### localToWorld

▸ **localToWorld**(`vector`): `Vector3`

Converts the vector from this object's local space to world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `Vector3` | A vector representing a position in this object's local space. |

#### Returns

`Vector3`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[localToWorld](FOrbitCamera.md#localtoworld)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:437

___

### lookAt

▸ **lookAt**(`vector`): `void`

Rotates the object to face a point in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `Vector3` | A vector representing a position in world space to look at. |

#### Returns

`void`

**`Remarks`**

This method does not support objects having non-uniformly-scaled parent(s).

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[lookAt](FOrbitCamera.md#lookat)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:450

▸ **lookAt**(`x`, `y`, `z`): `void`

Rotates the object to face a point in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Expects a `Float` |
| `y` | `number` | Expects a `Float` |
| `z` | `number` | Expects a `Float` |

#### Returns

`void`

**`Remarks`**

This method does not support objects having non-uniformly-scaled parent(s).

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[lookAt](FOrbitCamera.md#lookat)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:458

___

### onAfterRender

▸ **onAfterRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> |
| `material` | `Material` |
| `group` | `Group`\<`Object3DEventMap`\> |

#### Returns

`void`

**`Remarks`**

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[onAfterRender](FOrbitCamera.md#onafterrender)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:306

___

### onAfterShadow

▸ **onAfterShadow**(`renderer`, `scene`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `shadowCamera` | `Camera` |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> |
| `depthMaterial` | `Material` |
| `group` | `Group`\<`Object3DEventMap`\> |

#### Returns

`void`

**`Remarks`**

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[onAfterShadow](FOrbitCamera.md#onaftershadow)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:272

___

### onBeforeRender

▸ **onBeforeRender**(`renderer`, `scene`, `camera`, `geometry`, `material`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `camera` | `Camera` |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> |
| `material` | `Material` |
| `group` | `Group`\<`Object3DEventMap`\> |

#### Returns

`void`

**`Remarks`**

This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[onBeforeRender](FOrbitCamera.md#onbeforerender)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:289

___

### onBeforeShadow

▸ **onBeforeShadow**(`renderer`, `scene`, `shadowCamera`, `geometry`, `depthMaterial`, `group`): `void`

An optional callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene` |
| `shadowCamera` | `Camera` |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> |
| `depthMaterial` | `Material` |
| `group` | `Group`\<`Object3DEventMap`\> |

#### Returns

`void`

**`Remarks`**

This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry,
depthMaterial, group.
Please notice that this callback is only executed for `renderable` 3D objects. Meaning 3D objects which
define their visual appearance with geometries and materials like instances of Mesh, Line,
Points or Sprite. Instances of Object3D, Group or Bone are not renderable
and thus this callback is not executed for such objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[onBeforeShadow](FOrbitCamera.md#onbeforeshadow)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:254

___

### onFrame

▸ **onFrame**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Overrides

[FOrbitCamera](FOrbitCamera.md).[onFrame](FOrbitCamera.md#onframe)

#### Defined in

src/cameras/FGameCamera.ts:38

___

### raycast

▸ **raycast**(`raycaster`, `intersects`): `void`

Abstract (empty) method to get intersections between a casted ray and this object

#### Parameters

| Name | Type |
| :------ | :------ |
| `raycaster` | `Raycaster` |
| `intersects` | `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>[] |

#### Returns

`void`

**`Remarks`**

Subclasses such as THREE.Mesh | Mesh, THREE.Line | Line, and THREE.Points | Points implement this method in order to use raycasting.

**`See`**

THREE.Raycaster | Raycaster

**`Default Value`**

`() => {}`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[raycast](FOrbitCamera.md#raycast)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:563

___

### remove

▸ **remove**(`...object`): `this`

Removes a Object3D as child of this Object3D.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...object` | `Object3D`\<`Object3DEventMap`\>[] |

#### Returns

`this`

**`Remarks`**

An arbitrary number of objects may be removed.

**`See`**

THREE.Group | Group for info on manually grouping objects.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[remove](FOrbitCamera.md#remove)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:476

___

### removeEventListener

▸ **removeEventListener**\<`T`\>(`type`, `listener`): `void`

Removes a listener from an event type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Object3DEventMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | The type of the listener that gets removed. |
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FGameCamera`](FGameCamera.md)\> | The listener function that gets removed. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[removeEventListener](FOrbitCamera.md#removeeventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:74

▸ **removeEventListener**\<`T`\>(`type`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | `EventListener`\<{}, `T`, [`FGameCamera`](FGameCamera.md)\> |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[removeEventListener](FOrbitCamera.md#removeeventlistener)

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:78

___

### removeFromParent

▸ **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[removeFromParent](FOrbitCamera.md#removefromparent)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:481

___

### rotateOnAxis

▸ **rotateOnAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in object space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | The angle in radians. Expects a `Float` |

#### Returns

`this`

**`Remarks`**

The axis is assumed to be normalized.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotateOnAxis](FOrbitCamera.md#rotateonaxis)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:378

___

### rotateOnWorldAxis

▸ **rotateOnWorldAxis**(`axis`, `angle`): `this`

Rotate an object along an axis in world space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in world space. |
| `angle` | `number` | The angle in radians. Expects a `Float` |

#### Returns

`this`

**`Remarks`**

The axis is assumed to be normalized
Method Assumes no rotated parent.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotateOnWorldAxis](FOrbitCamera.md#rotateonworldaxis)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:387

___

### rotateX

▸ **rotateX**(`angle`): `this`

Rotates the object around _x_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotateX](FOrbitCamera.md#rotatex)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:393

___

### rotateY

▸ **rotateY**(`angle`): `this`

Rotates the object around _y_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotateY](FOrbitCamera.md#rotatey)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:399

___

### rotateZ

▸ **rotateZ**(`angle`): `this`

Rotates the object around _z_ axis in local space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotateZ](FOrbitCamera.md#rotatez)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:405

___

### setFocalLength

▸ **setFocalLength**(`focalLength`): `void`

Sets the FOV by focal length in respect to the current [.filmGauge](FCamera.md#filmgauge).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `focalLength` | `number` | Expects a `Float` |

#### Returns

`void`

**`Remarks`**

By default, the focal length is specified for a `35mm` (full frame) camera.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setFocalLength](FOrbitCamera.md#setfocallength)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:131

___

### setLens

▸ **setLens**(`focalLength`, `frameHeight?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focalLength` | `number` |
| `frameHeight?` | `number` |

#### Returns

`void`

**`Deprecated`**

Use [.setFocalLength()](FCamera.md#setfocallength) and [.filmGauge](FCamera.md#filmgauge) instead.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setLens](FOrbitCamera.md#setlens)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:222

___

### setRotationFromAxisAngle

▸ **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Calls THREE.Quaternion.setFromAxisAngle | setFromAxisAngle(axis, angle) on the [.quaternion](FCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | Angle in radians. Expects a `Float` |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setRotationFromAxisAngle](FOrbitCamera.md#setrotationfromaxisangle)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:351

___

### setRotationFromEuler

▸ **setRotationFromEuler**(`euler`): `void`

Calls THREE.Quaternion.setFromEuler | setFromEuler(euler) on the [.quaternion](FCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | `Euler` | Euler angle specifying rotation amount. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setRotationFromEuler](FOrbitCamera.md#setrotationfromeuler)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:357

___

### setRotationFromMatrix

▸ **setRotationFromMatrix**(`m`): `void`

Calls THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix(m) on the [.quaternion](FCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Matrix4` | Rotate the quaternion by the rotation component of the matrix. |

#### Returns

`void`

**`Remarks`**

Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setRotationFromMatrix](FOrbitCamera.md#setrotationfrommatrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:364

___

### setRotationFromQuaternion

▸ **setRotationFromQuaternion**(`q`): `void`

Copy the given THREE.Quaternion | Quaternion into [.quaternion](FCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `Quaternion` | Normalized Quaternion. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setRotationFromQuaternion](FOrbitCamera.md#setrotationfromquaternion)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:370

___

### setViewOffset

▸ **setViewOffset**(`fullWidth`, `fullHeight`, `x`, `y`, `width`, `height`): `void`

Sets an offset in a larger frustum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullWidth` | `number` | Full width of multiview setup Expects a `Float`. |
| `fullHeight` | `number` | Full height of multiview setup Expects a `Float`. |
| `x` | `number` | Horizontal offset of subcamera Expects a `Float`. |
| `y` | `number` | Vertical offset of subcamera Expects a `Float`. |
| `width` | `number` | Width of subcamera Expects a `Float`. |
| `height` | `number` | Height of subcamera Expects a `Float`. |

#### Returns

`void`

**`Remarks`**

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
  const w = 1920;
  const h = 1080;
  const fullWidth = w * 3;
  const fullHeight = h * 2;

  // Monitor - A
  camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
  // Monitor - B
  camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
  // Monitor - C
  camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
  // Monitor - D
  camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
  // Monitor - E
  camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
  // Monitor - F
  camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
```
Note there is no reason monitors have to be the same size or in a grid.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[setViewOffset](FOrbitCamera.md#setviewoffset)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:206

___

### toJSON

▸ **toJSON**(`meta?`): `any`

Convert the object to three.js [JSON Object/Scene format](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meta?` | `Object` | Object containing metadata such as materials, textures or images for the object. |
| `meta.geometries` | `any` | - |
| `meta.images` | `any` | - |
| `meta.materials` | `any` | - |
| `meta.textures` | `any` | - |

#### Returns

`any`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[toJSON](FOrbitCamera.md#tojson)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:611

___

### translateOnAxis

▸ **translateOnAxis**(`axis`, `distance`): `this`

Translate an object by distance along an axis in object space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `distance` | `number` | The distance to translate. Expects a `Float` |

#### Returns

`this`

**`Remarks`**

The axis is assumed to be normalized.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[translateOnAxis](FOrbitCamera.md#translateonaxis)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:413

___

### translateX

▸ **translateX**(`distance`): `this`

Translates object along x axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[translateX](FOrbitCamera.md#translatex)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:419

___

### translateY

▸ **translateY**(`distance`): `this`

Translates object along _y_ axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[translateY](FOrbitCamera.md#translatey)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:425

___

### translateZ

▸ **translateZ**(`distance`): `this`

Translates object along _z_ axis in object space by distance units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | Expects a `Float` |

#### Returns

`this`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[translateZ](FOrbitCamera.md#translatez)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:431

___

### traverse

▸ **traverse**(`callback`): `void`

Executes the callback on this object and all descendants.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: `Object3D`\<`Object3DEventMap`\>) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

**`Remarks`**

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[traverse](FOrbitCamera.md#traverse)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:570

___

### traverseAncestors

▸ **traverseAncestors**(`callback`): `void`

Executes the callback on all ancestors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: `Object3D`\<`Object3DEventMap`\>) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

**`Remarks`**

Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[traverseAncestors](FOrbitCamera.md#traverseancestors)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:585

___

### traverseVisible

▸ **traverseVisible**(`callback`): `void`

Like traverse, but the callback will only be executed for visible objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: `Object3D`\<`Object3DEventMap`\>) => `any` | A function with as first argument an Object3D object. |

#### Returns

`void`

**`Remarks`**

Descendants of invisible objects are not traversed.
Note: Modifying the scene graph inside the callback is discouraged.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[traverseVisible](FOrbitCamera.md#traversevisible)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:578

___

### updateMatrix

▸ **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[updateMatrix](FOrbitCamera.md#updatematrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:590

___

### updateMatrixWorld

▸ **updateMatrixWorld**(`force?`): `void`

Updates the global transform of the object.
And will update the object descendants if [.matrixWorldNeedsUpdate](FCamera.md#matrixworldneedsupdate) is set to true or if the force parameter is set to `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | A boolean that can be used to bypass [.matrixWorldAutoUpdate](FCamera.md#matrixworldautoupdate), to recalculate the world matrix of the object and descendants on the current frame. Useful if you cannot wait for the renderer to update it on the next frame, assuming [.matrixWorldAutoUpdate](FCamera.md#matrixworldautoupdate) set to `true`. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[updateMatrixWorld](FOrbitCamera.md#updatematrixworld)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:598

___

### updateProjectionMatrix

▸ **updateProjectionMatrix**(): `void`

Updates the camera projection matrix

#### Returns

`void`

**`Remarks`**

Must be called after any change of parameters.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[updateProjectionMatrix](FOrbitCamera.md#updateprojectionmatrix)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:217

___

### updateWorldMatrix

▸ **updateWorldMatrix**(`updateParents`, `updateChildren`): `void`

Updates the global transform of the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateParents` | `boolean` | Recursively updates global transform of ancestors. |
| `updateChildren` | `boolean` | Recursively updates global transform of descendants. |

#### Returns

`void`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[updateWorldMatrix](FOrbitCamera.md#updateworldmatrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:605

___

### worldToLocal

▸ **worldToLocal**(`vector`): `Vector3`

Converts the vector from world space to this object's local space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `Vector3` | A vector representing a position in world space. |

#### Returns

`Vector3`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[worldToLocal](FOrbitCamera.md#worldtolocal)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:443

## Properties

### animations

• **animations**: `AnimationClip`[]

Array with object's animation clips.

**`Default Value`**

`[]`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[animations](FOrbitCamera.md#animations)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:221

___

### aspect

• **aspect**: `number`

Camera frustum aspect ratio, usually the canvas width / canvas height.

**`Remarks`**

Expects a `Float`

**`Default Value`**

`1`, _(square canvas)_.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[aspect](FOrbitCamera.md#aspect)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:64

___

### attachedModel

• **attachedModel**: [`FModel`](FModel.md)

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[attachedModel](FOrbitCamera.md#attachedmodel)

#### Defined in

src/cameras/FOrbitCamera.ts:27

___

### castShadow

• **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

**`Default Value`**

`false`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[castShadow](FOrbitCamera.md#castshadow)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:193

___

### children

• **children**: `Object3D`\<`Object3DEventMap`\>[]

Array with object's children.

**`See`**

THREE.Object3DGroup | Group for info on manually grouping objects.

**`Default Value`**

`[]`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[children](FOrbitCamera.md#children)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:100

___

### controls

• **controls**: `OrbitControls`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[controls](FOrbitCamera.md#controls)

#### Defined in

src/cameras/FOrbitCamera.ts:29

___

### coordinateSystem

• **coordinateSystem**: `CoordinateSystem`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[coordinateSystem](FOrbitCamera.md#coordinatesystem)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:64

___

### customDepthMaterial

• `Optional` **customDepthMaterial**: `Material`

Custom depth material to be used when rendering to the depth map.

**`Remarks`**

Can only be used in context of meshes.
When shadow-casting with a THREE.DirectionalLight | DirectionalLight or THREE.SpotLight | SpotLight,
if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.

**`Default Value`**

`undefined`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[customDepthMaterial](FOrbitCamera.md#customdepthmaterial)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:237

___

### customDistanceMaterial

• `Optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](FCamera.md#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

**`Default Value`**

`undefined`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[customDistanceMaterial](FOrbitCamera.md#customdistancematerial)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:243

___

### far

• **far**: `number`

Camera frustum far plane.

**`Remarks`**

Must be greater than the current value of [.near](FCamera.md#near) plane.

**`Default Value`**

`2000`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[far](FOrbitCamera.md#far)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:81

___

### filmGauge

• **filmGauge**: `number`

Film size used for the larger axis.
This parameter does not influence the projection matrix unless [.filmOffset](FCamera.md#filmoffset) is set to a nonzero value.

**`Remarks`**

Expects a `Float`

**`Default Value`**

`35`, _millimeters_.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[filmGauge](FOrbitCamera.md#filmgauge)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:112

___

### filmOffset

• **filmOffset**: `number`

Horizontal off-center offset in the same unit as [.filmGauge](FCamera.md#filmgauge).

**`Remarks`**

Expects a `Float`

**`Default Value`**

`0`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[filmOffset](FOrbitCamera.md#filmoffset)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:119

___

### focus

• **focus**: `number`

Object distance used for stereoscopy and depth-of-field effects.

**`Remarks`**

This parameter does not influence the projection matrix unless a THREE.StereoCamera | StereoCamera is being used.

**`Default Value`**

`10`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[focus](FOrbitCamera.md#focus)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:89

___

### fov

• **fov**: `number`

Camera frustum vertical field of view, from bottom to top of view, in degrees.

**`Remarks`**

Expects a `Float`

**`Default Value`**

`50`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[fov](FOrbitCamera.md#fov)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:57

___

### frustumCulled

• **frustumCulled**: `boolean`

When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[frustumCulled](FOrbitCamera.md#frustumculled)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:206

___

### id

• `Readonly` **id**: `number`

Unique number for this Object3D instance.

**`Remarks`**

Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
Expects a `Integer`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[id](FOrbitCamera.md#id)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:64

___

### isCamera

• `Readonly` **isCamera**: ``true``

Read-only flag to check if a given object is of type Camera.

**`Remarks`**

This is a _constant_ value

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[isCamera](FOrbitCamera.md#iscamera)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:29

___

### isObject3D

• `Readonly` **isObject3D**: ``true``

Flag to check if a given object is of type Object3D.

**`Remarks`**

This is a _constant_ value

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[isObject3D](FOrbitCamera.md#isobject3d)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:57

___

### isPerspectiveCamera

• `Readonly` **isPerspectiveCamera**: ``true``

Read-only flag to check if a given object is of type Camera.

**`Remarks`**

This is a _constant_ value

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[isPerspectiveCamera](FOrbitCamera.md#isperspectivecamera)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:38

___

### layers

• **layers**: `Layers`

The THREE.Layers | layers that the Camera is a member of.

**`Remarks`**

Objects must share at least one layer with the Camera to be n when the camera's viewpoint is rendered.

**`Default Value`**

`new THREE.Layers()`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[layers](FOrbitCamera.md#layers)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:43

___

### matrix

• **matrix**: `Matrix4`

The local transform matrix.

**`Default Value`**

`new THREE.Matrix4()`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrix](FOrbitCamera.md#matrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:146

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

When this is set, it calculates the matrix of position, (rotation or quaternion) and
scale every frame and also recalculates the matrixWorld property.

**`Default Value`**

[DEFAULT_MATRIX_AUTO_UPDATE](FCamera.md#default_matrix_auto_update) - that is `(true)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrixAutoUpdate](FOrbitCamera.md#matrixautoupdate)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:160

___

### matrixWorld

• **matrixWorld**: `Matrix4`

The global transform of the object.

**`Remarks`**

If the Object3D has no parent, then it's identical to the local transform THREE.Object3D.matrix | .matrix.

**`Default Value`**

`new THREE.Matrix4()`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrixWorld](FOrbitCamera.md#matrixworld)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:153

___

### matrixWorldAutoUpdate

• **matrixWorldAutoUpdate**: `boolean`

If set, then the renderer checks every frame if the object and its children need matrix updates.
When it isn't, then you have to maintain all matrices in the object and its children yourself.

**`Default Value`**

[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](FCamera.md#default_matrix_world_auto_update) - that is `(true)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrixWorldAutoUpdate](FOrbitCamera.md#matrixworldautoupdate)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:167

___

### matrixWorldInverse

• **matrixWorldInverse**: `Matrix4`

This is the inverse of matrixWorld.

**`Remarks`**

MatrixWorld contains the Matrix which has the world transform of the Camera .

**`Default Value`**

```ts
{@link THREE.Matrix4 | `new THREE.Matrix4()`}
```

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrixWorldInverse](FOrbitCamera.md#matrixworldinverse)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:50

___

### matrixWorldNeedsUpdate

• **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

**`Default Value`**

`false`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[matrixWorldNeedsUpdate](FOrbitCamera.md#matrixworldneedsupdate)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:173

___

### modelViewMatrix

• `Readonly` **modelViewMatrix**: `Matrix4`

**`Default Value`**

`new THREE.Matrix4()`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[modelViewMatrix](FOrbitCamera.md#modelviewmatrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:135

___

### name

• **name**: `string`

Optional name of the object

**`Remarks`**

_(doesn't need to be unique)_.

**`Default Value`**

`""`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[name](FOrbitCamera.md#name)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:77

___

### near

• **near**: `number`

Camera frustum near plane.

**`Remarks`**

The valid range is greater than `0` and less than the current value of the [.far](FCamera.md#far) plane.

**`Default Value`**

`0.1`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[near](FOrbitCamera.md#near)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:73

___

### normalMatrix

• `Readonly` **normalMatrix**: `Matrix3`

**`Default Value`**

`new THREE.Matrix3()`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[normalMatrix](FOrbitCamera.md#normalmatrix)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:140

___

### parent

• **parent**: ``null`` \| `Object3D`\<`Object3DEventMap`\>

Object's parent in the [scene graph](https://en.wikipedia.org/wiki/Scene_graph).

**`Remarks`**

An object can have at most one parent.

**`Default Value`**

`null`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[parent](FOrbitCamera.md#parent)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:92

___

### position

• `Readonly` **position**: `Vector3`

Object's local position.

**`Default Value`**

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[position](FOrbitCamera.md#position)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:112

___

### previousModelPosition

• `Private` **previousModelPosition**: `Vector3`

#### Defined in

src/cameras/FGameCamera.ts:27

___

### projectionMatrix

• **projectionMatrix**: `Matrix4`

This is the matrix which contains the projection.

**`Default Value`**

```ts
{@link THREE.Matrix4 | `new THREE.Matrix4()`}
```

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[projectionMatrix](FOrbitCamera.md#projectionmatrix)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:56

___

### projectionMatrixInverse

• **projectionMatrixInverse**: `Matrix4`

This is the inverse of projectionMatrix.

**`Default Value`**

```ts
{@link THREE.Matrix4 | `new THREE.Matrix4()`}
```

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[projectionMatrixInverse](FOrbitCamera.md#projectionmatrixinverse)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:62

___

### quaternion

• `Readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

**`Default Value`**

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[quaternion](FOrbitCamera.md#quaternion)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:124

___

### receiveShadow

• **receiveShadow**: `boolean`

Whether the material receives shadows.

**`Default Value`**

`false`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[receiveShadow](FOrbitCamera.md#receiveshadow)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:199

___

### renderOrder

• **renderOrder**: `number`

This value allows the default rendering order of [scene graph](https://en.wikipedia.org/wiki/Scene_graph)
objects to be overridden although opaque and transparent objects remain sorted independently.

**`Remarks`**

When this property is set for an instance of Group | Group, all descendants objects will be sorted and rendered together.
Sorting is from lowest to highest renderOrder.

**`Default Value`**

`0`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[renderOrder](FOrbitCamera.md#renderorder)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:215

___

### rotation

• `Readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

**`Default Value`**

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[rotation](FOrbitCamera.md#rotation)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:118

___

### scale

• `Readonly` **scale**: `Vector3`

The object's local scale.

**`Default Value`**

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[scale](FOrbitCamera.md#scale)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:130

___

### type

• `Readonly` **type**: `string`

**`Default Value`**

`PerspectiveCamera`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[type](FOrbitCamera.md#type)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:44

___

### up

• **up**: `Vector3`

This is used by the [lookAt](FGameCamera.md#lookat) method, for example, to determine the orientation of the result.

**`Default Value`**

[Object3D.DEFAULT_UP](FCamera.md#default_up) - that is `(0, 1, 0)`.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[up](FOrbitCamera.md#up)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:106

___

### userData

• **userData**: `Record`\<`string`, `any`\>

An object that can be used to store custom data about the Object3D.

**`Remarks`**

It should not hold references to _functions_ as these **will not** be cloned.

**`Default`**

`{}`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[userData](FOrbitCamera.md#userdata)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:228

___

### uuid

• **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

**`Remarks`**

This gets automatically assigned and shouldn't be edited.

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[uuid](FOrbitCamera.md#uuid)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:70

___

### view

• **view**: ``null`` \| \{ `enabled`: `boolean` ; `fullHeight`: `number` ; `fullWidth`: `number` ; `height`: `number` ; `offsetX`: `number` ; `offsetY`: `number` ; `width`: `number`  }

Frustum window specification or null.
This is set using the [.setViewOffset](FCamera.md#setviewoffset) method and cleared using [.clearViewOffset](FCamera.md#clearviewoffset).

**`Default Value`**

`null`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[view](FOrbitCamera.md#view)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:96

___

### viewport

• `Optional` **viewport**: `Vector4`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[viewport](FOrbitCamera.md#viewport)

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:66

___

### visible

• **visible**: `boolean`

Object gets rendered if `true`.

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[visible](FOrbitCamera.md#visible)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:187

___

### zoom

• **zoom**: `number`

Gets or sets the zoom factor of the camera.

**`Default Value`**

`1`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[zoom](FOrbitCamera.md#zoom)

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:50

___

### DEFAULT\_MATRIX\_AUTO\_UPDATE

▪ `Static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](FCamera.md#matrixautoupdate) for newly created Object3Ds.

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[DEFAULT_MATRIX_AUTO_UPDATE](FOrbitCamera.md#default_matrix_auto_update)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:326

___

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

▪ `Static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](FCamera.md#matrixworldautoupdate) for newly created Object3Ds.

**`Default Value`**

`true`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](FOrbitCamera.md#default_matrix_world_auto_update)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:332

___

### DEFAULT\_UP

▪ `Static` **DEFAULT\_UP**: `Vector3`

The default [up](FCamera.md#up) direction for objects, also used as the default position for THREE.DirectionalLight | DirectionalLight,
THREE.HemisphereLight | HemisphereLight and THREE.Spotlight | Spotlight (which creates lights shining from the top down).

**`Default Value`**

`new THREE.Vector3( 0, 1, 0)`

#### Inherited from

[FOrbitCamera](FOrbitCamera.md).[DEFAULT_UP](FOrbitCamera.md#default_up)

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:320
