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

[packages/3d/src/lights/FLight.ts:123](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L123)

***

### intensity

> `get` **intensity**(): `number`

> `set` **intensity**(`intensity`): `void`

#### Parameters

• **intensity**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/lights/FLight.ts:131](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L131)

***

### lookAt

> `get` **lookAt**(): `undefined` \| `FVector3`

> `set` **lookAt**(`lookAt`): `void`

#### Parameters

• **lookAt**: `FVector3`

#### Returns

`undefined` \| `FVector3`

#### Defined in

[packages/3d/src/lights/FLight.ts:139](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L139)

***

### shadowQuality

> `get` **shadowQuality**(): `number`

> `set` **shadowQuality**(`quality`): `void`

#### Parameters

• **quality**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/lights/FLight.ts:150](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L150)

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

[packages/3d/src/lights/FLight.ts:53](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L53)

## Methods

### \_\_UPDATE\_LOOK\_AT\_\_()

> **\_\_UPDATE\_LOOK\_AT\_\_**(): `void`

Update the look at target of the light.
This method should be called after updating the position, so the light can look at the target.

#### Returns

`void`

#### Defined in

[packages/3d/src/lights/FLight.ts:115](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L115)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/3d/src/lights/FLight.ts:90](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L90)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/3d/src/lights/FLight.ts:99](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L99)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the light according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Defined in

[packages/3d/src/lights/FLight.ts:107](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L107)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FLightCore.emitOnLoaded`

#### Defined in

packages/core/dist/index.d.ts:54

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

packages/core/dist/index.d.ts:50

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Defined in

[packages/3d/src/lights/FLight.ts:26](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L26)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the light is loaded.

#### Inherited from

`FLightCore.__CALLBACKS_ON_LOADED__`

#### Defined in

packages/core/dist/index.d.ts:40

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Defined in

[packages/3d/src/lights/FLight.ts:25](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L25)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[packages/3d/src/lights/FLight.ts:24](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L24)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Defined in

[packages/3d/src/lights/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L23)

***

### \_\_LIGHT\_\_

> **\_\_LIGHT\_\_**: `Light`\<`undefined` \| `LightShadow`\<`Camera`\>\>

The original light object from Three.js.

#### Defined in

[packages/3d/src/lights/FLight.ts:31](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L31)

***

### \_\_LOOK\_AT\_\_

> **\_\_LOOK\_AT\_\_**: `undefined` \| `FVector3`

Look at target of the light.

#### Defined in

[packages/3d/src/lights/FLight.ts:46](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L46)

***

### \_\_SHADOW\_QUALITY\_\_

> **\_\_SHADOW\_QUALITY\_\_**: `number`

Quality of the shadow. Default is 5.

#### Defined in

[packages/3d/src/lights/FLight.ts:51](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L51)

***

### scene

> **scene**: [`FScene`](FScene.md)

Scene the light is in.

#### Overrides

`FLightCore.scene`

#### Defined in

[packages/3d/src/lights/FLight.ts:36](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L36)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the light.

#### Defined in

[packages/3d/src/lights/FLight.ts:41](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/lights/FLight.ts#L41)
