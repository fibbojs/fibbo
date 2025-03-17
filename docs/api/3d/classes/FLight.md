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

[3d/src/lights/FLight.ts:124](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L124)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Defined in

[3d/src/lights/FLight.ts:132](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L132)

***

### lookAt

> `get` **lookAt**(): `FVector3`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**: `FVector3`

#### Returns

`FVector3`

#### Defined in

[3d/src/lights/FLight.ts:140](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L140)

***

### shadowQuality

> `get` **shadowQuality**(): `number`

> `set` **shadowQuality**(`quality`): `void`

#### Parameters

• **quality**: `number`

#### Returns

`number`

#### Defined in

[3d/src/lights/FLight.ts:151](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L151)

## Constructors

### new FLight()

> **new FLight**(`options`?): [`FLight`](FLight.md)

#### Parameters

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FLight`](FLight.md)

#### Overrides

`FLightCore.constructor`

#### Defined in

[3d/src/lights/FLight.ts:57](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L57)

## Methods

### \_\_UPDATE\_LOOK\_AT\_\_()

> **\_\_UPDATE\_LOOK\_AT\_\_**(): `void`

Update the look at target of the light.
This method should be called after updating the position, so the light can look at the target.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:116](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L116)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:91](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L91)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:100](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L100)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[3d/src/lights/FLight.ts:108](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L108)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FLightCore.emitOnLoaded`

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

`FLightCore.onLoaded`

#### Defined in

core/dist/index.d.ts:57

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Defined in

[3d/src/lights/FLight.ts:30](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L30)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the light is loaded.

#### Inherited from

`FLightCore.__CALLBACKS_ON_LOADED__`

#### Defined in

core/dist/index.d.ts:47

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Defined in

[3d/src/lights/FLight.ts:29](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L29)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[3d/src/lights/FLight.ts:28](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L28)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Defined in

[3d/src/lights/FLight.ts:27](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L27)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Defined in

[3d/src/lights/FLight.ts:35](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L35)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `FVector3`

Look at target of the light.

#### Defined in

[3d/src/lights/FLight.ts:50](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L50)

***

### \_\_SHADOW\_QUALITY\_\_

> **\_\_SHADOW\_QUALITY\_\_**: `number`

Quality of the shadow. Default is 5.

#### Defined in

[3d/src/lights/FLight.ts:55](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L55)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Overrides

`FLightCore.scene`

#### Defined in

[3d/src/lights/FLight.ts:40](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L40)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[3d/src/lights/FLight.ts:45](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/lights/FLight.ts#L45)
