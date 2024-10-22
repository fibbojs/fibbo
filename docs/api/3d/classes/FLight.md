[@fibbojs](/api/index) / [3d](/api/3d) / FLight

# Class: `abstract` FLight

The base class for 3d lights in Fibbo.

## Extends

- `FLight`

## Extended by

- [`FAmbientLight`](FAmbientLight.md)
- [`FDirectionalLight`](FDirectionalLight.md)
- [`FHemisphereLight`](FHemisphereLight.md)
- [`FLightProbe`](FLightProbe.md)
- [`FPointLight`](FPointLight.md)
- [`FSpotLight`](FSpotLight.md)

## Accessors

### color

> `get` **color**(): `Color`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `ColorRepresentation`

#### Returns

`Color`

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

#### Defined in

[3d/src/lights/FLight.ts:131](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L131)

## Constructors

### new FLight()

> **new FLight**(`scene`, `options`?): [`FLight`](FLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FLight`](FLight.md)

#### Overrides

`FLightCore.constructor`

#### Defined in

[3d/src/lights/FLight.ts:47](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L47)

## Methods

### \_\_UPDATE\_LOOK\_AT\_\_()

> **\_\_UPDATE\_LOOK\_AT\_\_**(): `void`

Update the look at target of the light.
This method should be called after updating the position, so the light can look at the target.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:107](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L107)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:82](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L82)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:91](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L91)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:99](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L99)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FLightCore.emitOnLoaded`

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

`FLightCore.onLoaded`

#### Defined in

core/dist/index.d.ts:50

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Defined in

[3d/src/lights/FLight.ts:25](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L25)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the light is loaded.

#### Inherited from

`FLightCore.__CALLBACKS_ON_LOADED__`

#### Defined in

core/dist/index.d.ts:40

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Defined in

[3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Defined in

[3d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L22)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Defined in

[3d/src/lights/FLight.ts:30](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L30)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `undefined` \| [`FVector3`](../interfaces/FVector3.md)

Look at target of the light.

#### Defined in

[3d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L45)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Overrides

`FLightCore.scene`

#### Defined in

[3d/src/lights/FLight.ts:35](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L35)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[3d/src/lights/FLight.ts:40](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/lights/FLight.ts#L40)
