[@fibbojs](/api/index) / [3d](/api/3d) / FAmbientLight

# Class: FAmbientLight

An ambient light in 3d space.

## Extends

- [`FLight`](FLight.md)

## Accessors

### color

> `get` **color**(): `Color`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `ColorRepresentation`

#### Returns

`Color`

#### Inherited from

[`FLight`](FLight.md).[`color`](FLight.md#color)

#### Defined in

[3d/src/lights/FLight.ts:124](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L124)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Inherited from

[`FLight`](FLight.md).[`intensity`](FLight.md#intensity)

#### Defined in

[3d/src/lights/FLight.ts:132](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L132)

***

### lookAt

> `get` **lookAt**(): `FVector3`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**: `FVector3`

#### Returns

`FVector3`

#### Inherited from

[`FLight`](FLight.md).[`lookAt`](FLight.md#lookat)

#### Defined in

[3d/src/lights/FLight.ts:140](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L140)

***

### shadowQuality

> `get` **shadowQuality**(): `number`

> `set` **shadowQuality**(`quality`): `void`

#### Parameters

• **quality**: `number`

#### Returns

`number`

#### Inherited from

[`FLight`](FLight.md).[`shadowQuality`](FLight.md#shadowquality)

#### Defined in

[3d/src/lights/FLight.ts:151](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L151)

## Constructors

### new FAmbientLight()

> **new FAmbientLight**(`options`?): [`FAmbientLight`](FAmbientLight.md)

#### Parameters

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FAmbientLight`](FAmbientLight.md)

#### Overrides

[`FLight`](FLight.md).[`constructor`](FLight.md#constructors)

#### Defined in

[3d/src/lights/FAmbientLight.ts:10](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FAmbientLight.ts#L10)

## Methods

### \_\_UPDATE\_LOOK\_AT\_\_()

> **\_\_UPDATE\_LOOK\_AT\_\_**(): `void`

Update the look at target of the light.
This method should be called after updating the position, so the light can look at the target.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`__UPDATE_LOOK_AT__`](FLight.md#__update_look_at__)

#### Defined in

[3d/src/lights/FLight.ts:116](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L116)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`__UPDATE_POSITION__`](FLight.md#__update_position__)

#### Defined in

[3d/src/lights/FLight.ts:91](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L91)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`__UPDATE_ROTATION__`](FLight.md#__update_rotation__)

#### Defined in

[3d/src/lights/FLight.ts:100](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L100)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`__UPDATE_SCALE__`](FLight.md#__update_scale__)

#### Defined in

[3d/src/lights/FLight.ts:108](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L108)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`emitOnLoaded`](FLight.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:61

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the light is loaded.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`onLoaded`](FLight.md#onloaded)

#### Defined in

core/dist/index.d.ts:57

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

[`FLight`](FLight.md).[`__CALLBACKS_ON_COLLISION__`](FLight.md#__callbacks_on_collision__)

#### Defined in

[3d/src/lights/FLight.ts:30](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L30)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the light is loaded.

#### Inherited from

[`FLight`](FLight.md).[`__CALLBACKS_ON_LOADED__`](FLight.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:47

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Inherited from

[`FLight`](FLight.md).[`__ID__`](FLight.md#__id__)

#### Defined in

[3d/src/lights/FLight.ts:29](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L29)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FLight`](FLight.md).[`__IS_2D__`](FLight.md#__is_2d__)

#### Defined in

[3d/src/lights/FLight.ts:28](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L28)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FLight`](FLight.md).[`__IS_3D__`](FLight.md#__is_3d__)

#### Defined in

[3d/src/lights/FLight.ts:27](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L27)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Inherited from

[`FLight`](FLight.md).[`__LIGHT__`](FLight.md#__light__)

#### Defined in

[3d/src/lights/FLight.ts:35](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L35)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `FVector3`

Look at target of the light.

#### Inherited from

[`FLight`](FLight.md).[`__LOOK_AT__`](FLight.md#__look_at__)

#### Defined in

[3d/src/lights/FLight.ts:50](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L50)

***

### \_\_SHADOW\_QUALITY\_\_

> **\_\_SHADOW\_QUALITY\_\_**: `number`

Quality of the shadow. Default is 5.

#### Inherited from

[`FLight`](FLight.md).[`__SHADOW_QUALITY__`](FLight.md#__shadow_quality__)

#### Defined in

[3d/src/lights/FLight.ts:55](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L55)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Inherited from

[`FLight`](FLight.md).[`scene`](FLight.md#scene)

#### Defined in

[3d/src/lights/FLight.ts:40](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L40)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Inherited from

[`FLight`](FLight.md).[`transform`](FLight.md#transform)

#### Defined in

[3d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/3d/src/lights/FLight.ts#L45)
