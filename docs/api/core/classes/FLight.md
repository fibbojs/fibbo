[@fibbojs](/api/index) / [core](/api/core) / FLight

# Class: `abstract` FLight

The base class for lights in Fibbo.

## Constructors

### new FLight()

> **new FLight**(`scene`, `options`): [`FLight`](FLight.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FLightOptions`](../interfaces/FLightOptions.md) = `{}`

#### Returns

[`FLight`](FLight.md)

#### Defined in

[core/src/FLight.ts:22](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FLight.ts#L22)

## Methods

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Defined in

[core/src/FLight.ts:55](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FLight.ts#L55)

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the light is loaded.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Defined in

[core/src/FLight.ts:48](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FLight.ts#L48)

## Properties

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the light is loaded.

#### Defined in

[core/src/FLight.ts:15](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FLight.ts#L15)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the light is attached to.

#### Defined in

[core/src/FLight.ts:20](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FLight.ts#L20)
