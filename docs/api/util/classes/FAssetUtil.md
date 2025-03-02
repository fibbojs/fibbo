[@fibbojs](/api/index) / [util](/api/util) / FAssetUtil

# Class: FAssetUtil

A class that provides asset management utilities.

## Constructors

### new FAssetUtil()

> **new FAssetUtil**(): [`FAssetUtil`](FAssetUtil.md)

#### Returns

[`FAssetUtil`](FAssetUtil.md)

## Methods

### interpretPath()

> `static` **interpretPath**(`path`): `string`

Smartly interpret a path to an asset.
- URL paths are returned as is.
- Absolute paths are interpreted as relative to the origin.
- Relative paths are interpreted as relative to the assets folder.
This method uses the current window location to determine the origin, so it should only be used in a browser environment.

#### Parameters

• **path**: `string`

The path to interpret.

#### Returns

`string`

The interpreted path.

#### Defined in

[util/src/FAssetUtil.ts:22](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/util/src/FAssetUtil.ts#L22)

## Properties

### \_\_ASSETS\_PATH\_\_

> `static` **\_\_ASSETS\_PATH\_\_**: `string` = `'assets'`

The path to the assets directory.

#### Default

```ts
'assets'
```

#### Defined in

[util/src/FAssetUtil.ts:11](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/util/src/FAssetUtil.ts#L11)
