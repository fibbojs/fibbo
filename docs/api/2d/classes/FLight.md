[@fibbojs](/api/index) / [2d](/api/2d) / FLight

# Class: `abstract` FLight

The base class for 2d lights in Fibbo.

## Extends

- `FLight`

## Accessors

### color

> `get` **color**(): `number`

> `set` **color**(`color`): `void`

#### Parameters

• **color**: `number`

#### Returns

`number`

#### Defined in

[2d/src/lights/FLight.ts:107](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L107)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Defined in

[2d/src/lights/FLight.ts:115](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L115)

***

### lookAt

> `get` **lookAt**(): `object`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**

• **lookAt.x**: `number`

• **lookAt.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[2d/src/lights/FLight.ts:119](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L119)

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

[2d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L45)

## Methods

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[2d/src/lights/FLight.ts:81](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L81)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[2d/src/lights/FLight.ts:89](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L89)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[2d/src/lights/FLight.ts:97](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L97)

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

[2d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L23)

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

[2d/src/lights/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L22)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

#### Defined in

[2d/src/lights/FLight.ts:21](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L21)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[2d/src/lights/FLight.ts:20](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L20)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `any`

The original light object from PIXI.js.

#### Defined in

[2d/src/lights/FLight.ts:28](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L28)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `object`

Look at target of the light.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[2d/src/lights/FLight.ts:43](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L43)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Overrides

`FLightCore.scene`

#### Defined in

[2d/src/lights/FLight.ts:33](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L33)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[2d/src/lights/FLight.ts:38](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/lights/FLight.ts#L38)
