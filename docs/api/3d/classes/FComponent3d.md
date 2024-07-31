[@fibbojs](/api/index) / [3d](/api/3d) / FComponent3d

# Class: `abstract` FComponent3d

## Description

The base class for all 3D components in FibboJS.

## Implements

- `FComponent`

## Constructors

### new FComponent3d()

> **new FComponent3d**(): [`FComponent3d`](FComponent3d.md)

#### Returns

[`FComponent3d`](FComponent3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:8](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/FComponent3d.ts#L8)

## Methods

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Implementation of

`FComponent.onFrame`

#### Defined in

[packages/3d/src/FComponent3d.ts:11](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/FComponent3d.ts#L11)

***

### setPosition()

> `abstract` **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the position of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/FComponent3d.ts#L16)

***

### setRotation()

> `abstract` **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the rotation of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:26](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/FComponent3d.ts#L26)

***

### setScale()

> `abstract` **setScale**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the scale of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/FComponent3d.ts#L21)
