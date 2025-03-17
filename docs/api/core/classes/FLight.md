[@fibbojs](/api/index) / [core](/api/core) / FLight

# Class: `abstract` FLight

The base class for lights in Fibbo.

## Constructors

### new FLight()

> **new FLight**(`options`?): [`FLight`](FLight.md)

#### Parameters

• **options?**: [`FLightOptions`](../interfaces/FLightOptions.md)

#### Returns

[`FLight`](FLight.md)

#### Defined in

[core/src/FLight.ts:23](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FLight.ts#L23)

## Methods

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Defined in

[core/src/FLight.ts:57](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FLight.ts#L57)

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

[core/src/FLight.ts:50](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FLight.ts#L50)

## Properties

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the light is loaded.

#### Defined in

[core/src/FLight.ts:16](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FLight.ts#L16)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the light is attached to.

#### Defined in

[core/src/FLight.ts:21](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FLight.ts#L21)
