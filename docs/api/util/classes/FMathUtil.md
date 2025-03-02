[@fibbojs](/api/index) / [util](/api/util) / FMathUtil

# Class: FMathUtil

A class that provides math utilities.

## Constructors

### new FMathUtil()

> **new FMathUtil**(): [`FMathUtil`](FMathUtil.md)

#### Returns

[`FMathUtil`](FMathUtil.md)

## Methods

### degreeToRad()

> `static` **degreeToRad**(`degree`): `number`

Convert an euler angle to a radian angle.

#### Parameters

• **degree**: `number`

The euler angle to convert.

#### Returns

`number`

The radian angle.

#### Defined in

[util/src/FMathUtil.ts:22](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/util/src/FMathUtil.ts#L22)

***

### quaternionToRad()

> `static` **quaternionToRad**(`quaternion`): `FVector3`

Convert a value from quaternion to a radian angle.

#### Parameters

• **quaternion**: `FVector4`

The quaternion value to convert.

#### Returns

`FVector3`

The radian angle.

#### Defined in

[util/src/FMathUtil.ts:31](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/util/src/FMathUtil.ts#L31)

***

### radToDegree()

> `static` **radToDegree**(`radian`): `number`

Convert a radian angle to a euler angle.

#### Parameters

• **radian**: `number`

The radian angle to convert.

#### Returns

`number`

The euler angle.

#### Defined in

[util/src/FMathUtil.ts:13](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/util/src/FMathUtil.ts#L13)
