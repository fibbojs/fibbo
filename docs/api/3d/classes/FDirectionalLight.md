[@fibbojs](/api/index) / [3d](/api/3d) / FDirectionalLight

# Class: FDirectionalLight

A directional light in 3d space.

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

[3d/src/lights/FLight.ts:115](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L115)

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

[3d/src/lights/FLight.ts:123](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L123)

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

[3d/src/lights/FLight.ts:131](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L131)

## Constructors

### new FDirectionalLight()

> **new FDirectionalLight**(`scene`, `options`?): [`FDirectionalLight`](FDirectionalLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FDirectionalLight`](FDirectionalLight.md)

#### Overrides

[`FLight`](FLight.md).[`constructor`](FLight.md#constructors)

#### Defined in

[3d/src/lights/FDirectionalLight.ts:11](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FDirectionalLight.ts#L11)

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

[3d/src/lights/FLight.ts:107](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L107)

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

[3d/src/lights/FLight.ts:82](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L82)

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

[3d/src/lights/FLight.ts:91](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L91)

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

[3d/src/lights/FLight.ts:99](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L99)

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

[3d/src/lights/FLight.ts:25](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L25)

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

[3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FLight`](FLight.md).[`__IS_2D__`](FLight.md#__is_2d__)

#### Defined in

[3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FLight`](FLight.md).[`__IS_3D__`](FLight.md#__is_3d__)

#### Defined in

[3d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L22)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Inherited from

[`FLight`](FLight.md).[`__LIGHT__`](FLight.md#__light__)

#### Defined in

[3d/src/lights/FLight.ts:30](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L30)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `undefined` \| [`FVector3`](../interfaces/FVector3.md)

Look at target of the light.

#### Inherited from

[`FLight`](FLight.md).[`__LOOK_AT__`](FLight.md#__look_at__)

#### Defined in

[3d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L45)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Inherited from

[`FLight`](FLight.md).[`scene`](FLight.md#scene)

#### Defined in

[3d/src/lights/FLight.ts:35](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L35)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Inherited from

[`FLight`](FLight.md).[`transform`](FLight.md#transform)

#### Defined in

[3d/src/lights/FLight.ts:40](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L40)
