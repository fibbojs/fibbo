[@fibbojs](/api/index) / [3d](/api/3d) / FHemisphereLight

# Class: FHemisphereLight

An hemisphere light in 3d space.

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

[3d/src/lights/FLight.ts:123](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L123)

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

[3d/src/lights/FLight.ts:131](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L131)

***

### lookAt

> `get` **lookAt**(): `undefined` \| [`FVector3`](../interfaces/FVector3.md)

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**: [`FVector3`](../interfaces/FVector3.md)

#### Returns

`undefined` \| [`FVector3`](../interfaces/FVector3.md)

#### Inherited from

[`FLight`](FLight.md).[`lookAt`](FLight.md#lookat)

#### Defined in

[3d/src/lights/FLight.ts:139](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L139)

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

[3d/src/lights/FLight.ts:150](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L150)

## Constructors

### new FHemisphereLight()

> **new FHemisphereLight**(`scene`, `options`?): [`FHemisphereLight`](FHemisphereLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FHemisphereLightOptions`](../interfaces/FHemisphereLightOptions.md)

#### Returns

[`FHemisphereLight`](FHemisphereLight.md)

#### Overrides

[`FLight`](FLight.md).[`constructor`](FLight.md#constructors)

#### Defined in

[3d/src/lights/FHemisphereLight.ts:16](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FHemisphereLight.ts#L16)

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

[3d/src/lights/FLight.ts:115](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L115)

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

[3d/src/lights/FLight.ts:90](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L90)

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

[3d/src/lights/FLight.ts:99](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L99)

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

[3d/src/lights/FLight.ts:107](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L107)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FLight`](FLight.md).[`emitOnLoaded`](FLight.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:54

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

core/dist/index.d.ts:50

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

[`FLight`](FLight.md).[`__CALLBACKS_ON_COLLISION__`](FLight.md#__callbacks_on_collision__)

#### Defined in

[3d/src/lights/FLight.ts:26](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L26)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the light is loaded.

#### Inherited from

[`FLight`](FLight.md).[`__CALLBACKS_ON_LOADED__`](FLight.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:40

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Inherited from

[`FLight`](FLight.md).[`__ID__`](FLight.md#__id__)

#### Defined in

[3d/src/lights/FLight.ts:25](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L25)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FLight`](FLight.md).[`__IS_2D__`](FLight.md#__is_2d__)

#### Defined in

[3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FLight`](FLight.md).[`__IS_3D__`](FLight.md#__is_3d__)

#### Defined in

[3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Inherited from

[`FLight`](FLight.md).[`__LIGHT__`](FLight.md#__light__)

#### Defined in

[3d/src/lights/FLight.ts:31](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L31)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `undefined` \| [`FVector3`](../interfaces/FVector3.md)

Look at target of the light.

#### Inherited from

[`FLight`](FLight.md).[`__LOOK_AT__`](FLight.md#__look_at__)

#### Defined in

[3d/src/lights/FLight.ts:46](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L46)

***

### \_\_SHADOW\_QUALITY\_\_

> **\_\_SHADOW\_QUALITY\_\_**: `number`

Quality of the shadow. Default is 5.

#### Inherited from

[`FLight`](FLight.md).[`__SHADOW_QUALITY__`](FLight.md#__shadow_quality__)

#### Defined in

[3d/src/lights/FLight.ts:51](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L51)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Inherited from

[`FLight`](FLight.md).[`scene`](FLight.md#scene)

#### Defined in

[3d/src/lights/FLight.ts:36](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L36)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Inherited from

[`FLight`](FLight.md).[`transform`](FLight.md#transform)

#### Defined in

[3d/src/lights/FLight.ts:41](https://github.com/fibbojs/fibbo/blob/b496854a6f37e79caf42562bf7512dfda8184f7a/packages/3d/src/lights/FLight.ts#L41)
