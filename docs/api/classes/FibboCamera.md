[@fibbojs/fibbo](/api/index)  / FibboCamera

# Class: FibboCamera

**`Description`**

The base class for cameras in FibboJS.

## Hierarchy

- `PerspectiveCamera`

  ↳ **`FibboCamera`**

  ↳↳ [`FibboFixedCamera`](FibboFixedCamera.md)

  ↳↳ [`FibboAttachedCamera`](FibboAttachedCamera.md)

  ↳↳ [`FibboOrbitCamera`](FibboOrbitCamera.md)

## Implements

- [`FibboComponent`](FibboComponent.md)

## Table of contents

### Constructors

- [constructor](FibboCamera.md#constructor)

### Methods

- [add](FibboCamera.md#add)
- [addEventListener](FibboCamera.md#addeventlistener)
- [applyMatrix4](FibboCamera.md#applymatrix4)
- [applyQuaternion](FibboCamera.md#applyquaternion)
- [attach](FibboCamera.md#attach)
- [clear](FibboCamera.md#clear)
- [clearViewOffset](FibboCamera.md#clearviewoffset)
- [clone](FibboCamera.md#clone)
- [copy](FibboCamera.md#copy)
- [dispatchEvent](FibboCamera.md#dispatchevent)
- [getEffectiveFOV](FibboCamera.md#geteffectivefov)
- [getFilmHeight](FibboCamera.md#getfilmheight)
- [getFilmWidth](FibboCamera.md#getfilmwidth)
- [getFocalLength](FibboCamera.md#getfocallength)
- [getObjectById](FibboCamera.md#getobjectbyid)
- [getObjectByName](FibboCamera.md#getobjectbyname)
- [getObjectByProperty](FibboCamera.md#getobjectbyproperty)
- [getObjectsByProperty](FibboCamera.md#getobjectsbyproperty)
- [getViewBounds](FibboCamera.md#getviewbounds)
- [getViewSize](FibboCamera.md#getviewsize)
- [getWorldDirection](FibboCamera.md#getworlddirection)
- [getWorldPosition](FibboCamera.md#getworldposition)
- [getWorldQuaternion](FibboCamera.md#getworldquaternion)
- [getWorldScale](FibboCamera.md#getworldscale)
- [hasEventListener](FibboCamera.md#haseventlistener)
- [localToWorld](FibboCamera.md#localtoworld)
- [lookAt](FibboCamera.md#lookat)
- [onAfterRender](FibboCamera.md#onafterrender)
- [onAfterShadow](FibboCamera.md#onaftershadow)
- [onBeforeRender](FibboCamera.md#onbeforerender)
- [onBeforeShadow](FibboCamera.md#onbeforeshadow)
- [onFrame](FibboCamera.md#onframe)
- [raycast](FibboCamera.md#raycast)
- [remove](FibboCamera.md#remove)
- [removeEventListener](FibboCamera.md#removeeventlistener)
- [removeFromParent](FibboCamera.md#removefromparent)
- [rotateOnAxis](FibboCamera.md#rotateonaxis)
- [rotateOnWorldAxis](FibboCamera.md#rotateonworldaxis)
- [rotateX](FibboCamera.md#rotatex)
- [rotateY](FibboCamera.md#rotatey)
- [rotateZ](FibboCamera.md#rotatez)
- [setFocalLength](FibboCamera.md#setfocallength)
- [setLens](FibboCamera.md#setlens)
- [setRotationFromAxisAngle](FibboCamera.md#setrotationfromaxisangle)
- [setRotationFromEuler](FibboCamera.md#setrotationfromeuler)
- [setRotationFromMatrix](FibboCamera.md#setrotationfrommatrix)
- [setRotationFromQuaternion](FibboCamera.md#setrotationfromquaternion)
- [setViewOffset](FibboCamera.md#setviewoffset)
- [toJSON](FibboCamera.md#tojson)
- [translateOnAxis](FibboCamera.md#translateonaxis)
- [translateX](FibboCamera.md#translatex)
- [translateY](FibboCamera.md#translatey)
- [translateZ](FibboCamera.md#translatez)
- [traverse](FibboCamera.md#traverse)
- [traverseAncestors](FibboCamera.md#traverseancestors)
- [traverseVisible](FibboCamera.md#traversevisible)
- [updateMatrix](FibboCamera.md#updatematrix)
- [updateMatrixWorld](FibboCamera.md#updatematrixworld)
- [updateProjectionMatrix](FibboCamera.md#updateprojectionmatrix)
- [updateWorldMatrix](FibboCamera.md#updateworldmatrix)
- [worldToLocal](FibboCamera.md#worldtolocal)

### Properties

- [animations](FibboCamera.md#animations)
- [aspect](FibboCamera.md#aspect)
- [castShadow](FibboCamera.md#castshadow)
- [children](FibboCamera.md#children)
- [coordinateSystem](FibboCamera.md#coordinatesystem)
- [customDepthMaterial](FibboCamera.md#customdepthmaterial)
- [customDistanceMaterial](FibboCamera.md#customdistancematerial)
- [far](FibboCamera.md#far)
- [filmGauge](FibboCamera.md#filmgauge)
- [filmOffset](FibboCamera.md#filmoffset)
- [focus](FibboCamera.md#focus)
- [fov](FibboCamera.md#fov)
- [frustumCulled](FibboCamera.md#frustumculled)
- [id](FibboCamera.md#id)
- [isCamera](FibboCamera.md#iscamera)
- [isObject3D](FibboCamera.md#isobject3d)
- [isPerspectiveCamera](FibboCamera.md#isperspectivecamera)
- [layers](FibboCamera.md#layers)
- [matrix](FibboCamera.md#matrix)
- [matrixAutoUpdate](FibboCamera.md#matrixautoupdate)
- [matrixWorld](FibboCamera.md#matrixworld)
- [matrixWorldAutoUpdate](FibboCamera.md#matrixworldautoupdate)
- [matrixWorldInverse](FibboCamera.md#matrixworldinverse)
- [matrixWorldNeedsUpdate](FibboCamera.md#matrixworldneedsupdate)
- [modelViewMatrix](FibboCamera.md#modelviewmatrix)
- [name](FibboCamera.md#name)
- [near](FibboCamera.md#near)
- [normalMatrix](FibboCamera.md#normalmatrix)
- [parent](FibboCamera.md#parent)
- [position](FibboCamera.md#position)
- [projectionMatrix](FibboCamera.md#projectionmatrix)
- [projectionMatrixInverse](FibboCamera.md#projectionmatrixinverse)
- [quaternion](FibboCamera.md#quaternion)
- [receiveShadow](FibboCamera.md#receiveshadow)
- [renderOrder](FibboCamera.md#renderorder)
- [rotation](FibboCamera.md#rotation)
- [scale](FibboCamera.md#scale)
- [type](FibboCamera.md#type)
- [up](FibboCamera.md#up)
- [userData](FibboCamera.md#userdata)
- [uuid](FibboCamera.md#uuid)
- [view](FibboCamera.md#view)
- [viewport](FibboCamera.md#viewport)
- [visible](FibboCamera.md#visible)
- [zoom](FibboCamera.md#zoom)
- [DEFAULT\_MATRIX\_AUTO\_UPDATE](FibboCamera.md#default_matrix_auto_update)
- [DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE](FibboCamera.md#default_matrix_world_auto_update)
- [DEFAULT\_UP](FibboCamera.md#default_up)

## Constructors

### constructor

• **new FibboCamera**(): [`FibboCamera`](FibboCamera.md)

#### Returns

[`FibboCamera`](FibboCamera.md)

#### Overrides

THREE.PerspectiveCamera.constructor

#### Defined in

src/cameras/FibboCamera.ts:9

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

 - [attach](FibboCamera.md#attach)
 - THREE.Group | Group for info on manually grouping objects.

#### Inherited from

THREE.PerspectiveCamera.add

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
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FibboCamera`](FibboCamera.md)\> | The function that gets called when the event is fired. |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.addEventListener

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
| `listener` | `EventListener`\<{}, `T`, [`FibboCamera`](FibboCamera.md)\> |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.addEventListener

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

THREE.PerspectiveCamera.applyMatrix4

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

THREE.PerspectiveCamera.applyQuaternion

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

[add](FibboCamera.md#add)

#### Inherited from

THREE.PerspectiveCamera.attach

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:494

___

### clear

▸ **clear**(): `this`

Removes all child objects.

#### Returns

`this`

#### Inherited from

THREE.PerspectiveCamera.clear

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:486

___

### clearViewOffset

▸ **clearViewOffset**(): `void`

Removes any offset set by the [.setViewOffset](FibboCamera.md#setviewoffset) method.

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.clearViewOffset

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

THREE.PerspectiveCamera.clone

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

THREE.PerspectiveCamera.copy

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

THREE.PerspectiveCamera.dispatchEvent

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:84

___

### getEffectiveFOV

▸ **getEffectiveFOV**(): `number`

Returns the current vertical field of view angle in degrees considering [.zoom](FibboCamera.md#zoom).

#### Returns

`number`

#### Inherited from

THREE.PerspectiveCamera.getEffectiveFOV

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:136

___

### getFilmHeight

▸ **getFilmHeight**(): `number`

Returns the height of the image on the film

#### Returns

`number`

**`Remarks`**

If [.aspect](FibboCamera.md#aspect). is less than or equal to one (portrait format), the result equals [.filmGauge](FibboCamera.md#filmgauge).

#### Inherited from

THREE.PerspectiveCamera.getFilmHeight

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:150

___

### getFilmWidth

▸ **getFilmWidth**(): `number`

Returns the width of the image on the film

#### Returns

`number`

**`Remarks`**

If [.aspect](FibboCamera.md#aspect). is greater than or equal to one (landscape format), the result equals [.filmGauge](FibboCamera.md#filmgauge).

#### Inherited from

THREE.PerspectiveCamera.getFilmWidth

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:143

___

### getFocalLength

▸ **getFocalLength**(): `number`

Returns the focal length of the current .fov | fov in respect to [.filmGauge](FibboCamera.md#filmgauge).

#### Returns

`number`

#### Inherited from

THREE.PerspectiveCamera.getFocalLength

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

THREE.PerspectiveCamera.getObjectById

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

THREE.PerspectiveCamera.getObjectByName

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

THREE.PerspectiveCamera.getObjectByProperty

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

THREE.PerspectiveCamera.getObjectsByProperty

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

THREE.PerspectiveCamera.getViewBounds

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

THREE.PerspectiveCamera.getViewSize

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

THREE.PerspectiveCamera.getWorldDirection

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

THREE.PerspectiveCamera.getWorldPosition

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

THREE.PerspectiveCamera.getWorldQuaternion

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

THREE.PerspectiveCamera.getWorldScale

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
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FibboCamera`](FibboCamera.md)\> | The function that gets called when the event is fired. |

#### Returns

`boolean`

#### Inherited from

THREE.PerspectiveCamera.hasEventListener

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
| `listener` | `EventListener`\<{}, `T`, [`FibboCamera`](FibboCamera.md)\> |

#### Returns

`boolean`

#### Inherited from

THREE.PerspectiveCamera.hasEventListener

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

THREE.PerspectiveCamera.localToWorld

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

THREE.PerspectiveCamera.lookAt

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

THREE.PerspectiveCamera.lookAt

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

THREE.PerspectiveCamera.onAfterRender

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

THREE.PerspectiveCamera.onAfterShadow

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

THREE.PerspectiveCamera.onBeforeRender

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

THREE.PerspectiveCamera.onBeforeShadow

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:254

___

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[FibboComponent](FibboComponent.md).[onFrame](FibboComponent.md#onframe)

#### Defined in

src/cameras/FibboCamera.ts:13

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

THREE.PerspectiveCamera.raycast

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

THREE.PerspectiveCamera.remove

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
| `listener` | `EventListener`\<`Object3DEventMap`[`T`], `T`, [`FibboCamera`](FibboCamera.md)\> | The listener function that gets removed. |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.removeEventListener

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
| `listener` | `EventListener`\<{}, `T`, [`FibboCamera`](FibboCamera.md)\> |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.removeEventListener

#### Defined in

node_modules/@types/three/src/core/EventDispatcher.d.ts:78

___

### removeFromParent

▸ **removeFromParent**(): `this`

Removes this object from its current parent.

#### Returns

`this`

#### Inherited from

THREE.PerspectiveCamera.removeFromParent

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

THREE.PerspectiveCamera.rotateOnAxis

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

THREE.PerspectiveCamera.rotateOnWorldAxis

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

THREE.PerspectiveCamera.rotateX

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

THREE.PerspectiveCamera.rotateY

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

THREE.PerspectiveCamera.rotateZ

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:405

___

### setFocalLength

▸ **setFocalLength**(`focalLength`): `void`

Sets the FOV by focal length in respect to the current [.filmGauge](FibboCamera.md#filmgauge).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `focalLength` | `number` | Expects a `Float` |

#### Returns

`void`

**`Remarks`**

By default, the focal length is specified for a `35mm` (full frame) camera.

#### Inherited from

THREE.PerspectiveCamera.setFocalLength

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

Use [.setFocalLength()](FibboCamera.md#setfocallength) and [.filmGauge](FibboCamera.md#filmgauge) instead.

#### Inherited from

THREE.PerspectiveCamera.setLens

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:222

___

### setRotationFromAxisAngle

▸ **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Calls THREE.Quaternion.setFromAxisAngle | setFromAxisAngle(axis, angle) on the [.quaternion](FibboCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vector3` | A normalized vector in object space. |
| `angle` | `number` | Angle in radians. Expects a `Float` |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.setRotationFromAxisAngle

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:351

___

### setRotationFromEuler

▸ **setRotationFromEuler**(`euler`): `void`

Calls THREE.Quaternion.setFromEuler | setFromEuler(euler) on the [.quaternion](FibboCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | `Euler` | Euler angle specifying rotation amount. |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.setRotationFromEuler

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:357

___

### setRotationFromMatrix

▸ **setRotationFromMatrix**(`m`): `void`

Calls THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix(m) on the [.quaternion](FibboCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Matrix4` | Rotate the quaternion by the rotation component of the matrix. |

#### Returns

`void`

**`Remarks`**

Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).

#### Inherited from

THREE.PerspectiveCamera.setRotationFromMatrix

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:364

___

### setRotationFromQuaternion

▸ **setRotationFromQuaternion**(`q`): `void`

Copy the given THREE.Quaternion | Quaternion into [.quaternion](FibboCamera.md#quaternion).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `Quaternion` | Normalized Quaternion. |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.setRotationFromQuaternion

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

THREE.PerspectiveCamera.setViewOffset

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

THREE.PerspectiveCamera.toJSON

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

THREE.PerspectiveCamera.translateOnAxis

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

THREE.PerspectiveCamera.translateX

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

THREE.PerspectiveCamera.translateY

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

THREE.PerspectiveCamera.translateZ

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

THREE.PerspectiveCamera.traverse

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

THREE.PerspectiveCamera.traverseAncestors

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

THREE.PerspectiveCamera.traverseVisible

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:578

___

### updateMatrix

▸ **updateMatrix**(): `void`

Updates local transform.

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.updateMatrix

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:590

___

### updateMatrixWorld

▸ **updateMatrixWorld**(`force?`): `void`

Updates the global transform of the object.
And will update the object descendants if [.matrixWorldNeedsUpdate](FibboCamera.md#matrixworldneedsupdate) is set to true or if the force parameter is set to `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | A boolean that can be used to bypass [.matrixWorldAutoUpdate](FibboCamera.md#matrixworldautoupdate), to recalculate the world matrix of the object and descendants on the current frame. Useful if you cannot wait for the renderer to update it on the next frame, assuming [.matrixWorldAutoUpdate](FibboCamera.md#matrixworldautoupdate) set to `true`. |

#### Returns

`void`

#### Inherited from

THREE.PerspectiveCamera.updateMatrixWorld

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

THREE.PerspectiveCamera.updateProjectionMatrix

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

THREE.PerspectiveCamera.updateWorldMatrix

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

THREE.PerspectiveCamera.worldToLocal

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:443

## Properties

### animations

• **animations**: `AnimationClip`[]

Array with object's animation clips.

**`Default Value`**

`[]`

#### Inherited from

THREE.PerspectiveCamera.animations

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

THREE.PerspectiveCamera.aspect

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:64

___

### castShadow

• **castShadow**: `boolean`

Whether the object gets rendered into shadow map.

**`Default Value`**

`false`

#### Inherited from

THREE.PerspectiveCamera.castShadow

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

THREE.PerspectiveCamera.children

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:100

___

### coordinateSystem

• **coordinateSystem**: `CoordinateSystem`

#### Inherited from

THREE.PerspectiveCamera.coordinateSystem

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

THREE.PerspectiveCamera.customDepthMaterial

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:237

___

### customDistanceMaterial

• `Optional` **customDistanceMaterial**: `Material`

Same as [customDepthMaterial](FibboCamera.md#customdepthmaterial), but used with THREE.Object3DPointLight | PointLight.

**`Default Value`**

`undefined`

#### Inherited from

THREE.PerspectiveCamera.customDistanceMaterial

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:243

___

### far

• **far**: `number`

Camera frustum far plane.

**`Remarks`**

Must be greater than the current value of [.near](FibboCamera.md#near) plane.

**`Default Value`**

`2000`

#### Inherited from

THREE.PerspectiveCamera.far

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:81

___

### filmGauge

• **filmGauge**: `number`

Film size used for the larger axis.
This parameter does not influence the projection matrix unless [.filmOffset](FibboCamera.md#filmoffset) is set to a nonzero value.

**`Remarks`**

Expects a `Float`

**`Default Value`**

`35`, _millimeters_.

#### Inherited from

THREE.PerspectiveCamera.filmGauge

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:112

___

### filmOffset

• **filmOffset**: `number`

Horizontal off-center offset in the same unit as [.filmGauge](FibboCamera.md#filmgauge).

**`Remarks`**

Expects a `Float`

**`Default Value`**

`0`

#### Inherited from

THREE.PerspectiveCamera.filmOffset

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

THREE.PerspectiveCamera.focus

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

THREE.PerspectiveCamera.fov

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

THREE.PerspectiveCamera.frustumCulled

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

THREE.PerspectiveCamera.id

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

THREE.PerspectiveCamera.isCamera

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

THREE.PerspectiveCamera.isObject3D

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

THREE.PerspectiveCamera.isPerspectiveCamera

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

THREE.PerspectiveCamera.layers

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:43

___

### matrix

• **matrix**: `Matrix4`

The local transform matrix.

**`Default Value`**

`new THREE.Matrix4()`

#### Inherited from

THREE.PerspectiveCamera.matrix

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:146

___

### matrixAutoUpdate

• **matrixAutoUpdate**: `boolean`

When this is set, it calculates the matrix of position, (rotation or quaternion) and
scale every frame and also recalculates the matrixWorld property.

**`Default Value`**

[DEFAULT_MATRIX_AUTO_UPDATE](FibboCamera.md#default_matrix_auto_update) - that is `(true)`.

#### Inherited from

THREE.PerspectiveCamera.matrixAutoUpdate

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

THREE.PerspectiveCamera.matrixWorld

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:153

___

### matrixWorldAutoUpdate

• **matrixWorldAutoUpdate**: `boolean`

If set, then the renderer checks every frame if the object and its children need matrix updates.
When it isn't, then you have to maintain all matrices in the object and its children yourself.

**`Default Value`**

[DEFAULT_MATRIX_WORLD_AUTO_UPDATE](FibboCamera.md#default_matrix_world_auto_update) - that is `(true)`.

#### Inherited from

THREE.PerspectiveCamera.matrixWorldAutoUpdate

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

THREE.PerspectiveCamera.matrixWorldInverse

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:50

___

### matrixWorldNeedsUpdate

• **matrixWorldNeedsUpdate**: `boolean`

When this is set, it calculates the matrixWorld in that frame and resets this property to false.

**`Default Value`**

`false`

#### Inherited from

THREE.PerspectiveCamera.matrixWorldNeedsUpdate

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:173

___

### modelViewMatrix

• `Readonly` **modelViewMatrix**: `Matrix4`

**`Default Value`**

`new THREE.Matrix4()`

#### Inherited from

THREE.PerspectiveCamera.modelViewMatrix

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

THREE.PerspectiveCamera.name

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:77

___

### near

• **near**: `number`

Camera frustum near plane.

**`Remarks`**

The valid range is greater than `0` and less than the current value of the [.far](FibboCamera.md#far) plane.

**`Default Value`**

`0.1`

#### Inherited from

THREE.PerspectiveCamera.near

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:73

___

### normalMatrix

• `Readonly` **normalMatrix**: `Matrix3`

**`Default Value`**

`new THREE.Matrix3()`

#### Inherited from

THREE.PerspectiveCamera.normalMatrix

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

THREE.PerspectiveCamera.parent

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:92

___

### position

• `Readonly` **position**: `Vector3`

Object's local position.

**`Default Value`**

`new THREE.Vector3()` - that is `(0, 0, 0)`.

#### Inherited from

THREE.PerspectiveCamera.position

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:112

___

### projectionMatrix

• **projectionMatrix**: `Matrix4`

This is the matrix which contains the projection.

**`Default Value`**

```ts
{@link THREE.Matrix4 | `new THREE.Matrix4()`}
```

#### Inherited from

THREE.PerspectiveCamera.projectionMatrix

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

THREE.PerspectiveCamera.projectionMatrixInverse

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:62

___

### quaternion

• `Readonly` **quaternion**: `Quaternion`

Object's local rotation as a THREE.Quaternion | Quaternion.

**`Default Value`**

`new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.

#### Inherited from

THREE.PerspectiveCamera.quaternion

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:124

___

### receiveShadow

• **receiveShadow**: `boolean`

Whether the material receives shadows.

**`Default Value`**

`false`

#### Inherited from

THREE.PerspectiveCamera.receiveShadow

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

THREE.PerspectiveCamera.renderOrder

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:215

___

### rotation

• `Readonly` **rotation**: `Euler`

Object's local rotation ([Euler angles](https://en.wikipedia.org/wiki/Euler_angles)), in radians.

**`Default Value`**

`new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.

#### Inherited from

THREE.PerspectiveCamera.rotation

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:118

___

### scale

• `Readonly` **scale**: `Vector3`

The object's local scale.

**`Default Value`**

`new THREE.Vector3( 1, 1, 1 )`

#### Inherited from

THREE.PerspectiveCamera.scale

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:130

___

### type

• `Readonly` **type**: `string`

**`Default Value`**

`PerspectiveCamera`

#### Inherited from

THREE.PerspectiveCamera.type

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:44

___

### up

• **up**: `Vector3`

This is used by the [lookAt](FibboCamera.md#lookat) method, for example, to determine the orientation of the result.

**`Default Value`**

[Object3D.DEFAULT_UP](FibboCamera.md#default_up) - that is `(0, 1, 0)`.

#### Inherited from

THREE.PerspectiveCamera.up

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

THREE.PerspectiveCamera.userData

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:228

___

### uuid

• **uuid**: `string`

[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier) of this object instance.

**`Remarks`**

This gets automatically assigned and shouldn't be edited.

#### Inherited from

THREE.PerspectiveCamera.uuid

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:70

___

### view

• **view**: ``null`` \| \{ `enabled`: `boolean` ; `fullHeight`: `number` ; `fullWidth`: `number` ; `height`: `number` ; `offsetX`: `number` ; `offsetY`: `number` ; `width`: `number`  }

Frustum window specification or null.
This is set using the [.setViewOffset](FibboCamera.md#setviewoffset) method and cleared using [.clearViewOffset](FibboCamera.md#clearviewoffset).

**`Default Value`**

`null`

#### Inherited from

THREE.PerspectiveCamera.view

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:96

___

### viewport

• `Optional` **viewport**: `Vector4`

#### Inherited from

THREE.PerspectiveCamera.viewport

#### Defined in

node_modules/@types/three/src/cameras/Camera.d.ts:66

___

### visible

• **visible**: `boolean`

Object gets rendered if `true`.

**`Default Value`**

`true`

#### Inherited from

THREE.PerspectiveCamera.visible

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:187

___

### zoom

• **zoom**: `number`

Gets or sets the zoom factor of the camera.

**`Default Value`**

`1`

#### Inherited from

THREE.PerspectiveCamera.zoom

#### Defined in

node_modules/@types/three/src/cameras/PerspectiveCamera.d.ts:50

___

### DEFAULT\_MATRIX\_AUTO\_UPDATE

▪ `Static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixAutoUpdate](FibboCamera.md#matrixautoupdate) for newly created Object3Ds.

**`Default Value`**

`true`

#### Inherited from

THREE.PerspectiveCamera.DEFAULT\_MATRIX\_AUTO\_UPDATE

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:326

___

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

▪ `Static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

The default setting for [matrixWorldAutoUpdate](FibboCamera.md#matrixworldautoupdate) for newly created Object3Ds.

**`Default Value`**

`true`

#### Inherited from

THREE.PerspectiveCamera.DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:332

___

### DEFAULT\_UP

▪ `Static` **DEFAULT\_UP**: `Vector3`

The default [up](FibboCamera.md#up) direction for objects, also used as the default position for THREE.DirectionalLight | DirectionalLight,
THREE.HemisphereLight | HemisphereLight and THREE.Spotlight | Spotlight (which creates lights shining from the top down).

**`Default Value`**

`new THREE.Vector3( 0, 1, 0)`

#### Inherited from

THREE.PerspectiveCamera.DEFAULT\_UP

#### Defined in

node_modules/@types/three/src/core/Object3D.d.ts:320
