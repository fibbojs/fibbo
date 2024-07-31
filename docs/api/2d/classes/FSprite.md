[@fibbojs](/api/index) / [2d](/api/2d) / FSprite

# Class: FSprite

## Description

A simple sprite in FibboJS.

## Example

```ts
import { FScene2d, FSprite } from '@fibbojs/2d'

const scene = new FScene2d()

const sprite = new FSprite(scene)
scene.addComponent(sprite)
```

## Extends

- [`FComponent2d`](FComponent2d.md)

## Constructors

### new FSprite()

> **new FSprite**(`scene`, `texture`): [`FSprite`](FSprite.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **texture**: `string`

#### Returns

[`FSprite`](FSprite.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:25](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L25)

## Methods

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:68](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L68)

***

### initCollider()

> **initCollider**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

The position of the collider.

• **scale?**: `PointData`

The scale of the collider.

• **rotation?**: `number`

The rotation of the collider.

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

The shape of the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider(
 new PIXI.Point(0, 0),
 new PIXI.Point(1, 1),
 0,
 F2dShapes.SQUARE
)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/FComponent2d.ts:217](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L217)

***

### initRigidBody()

> **initRigidBody**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

The position of the rigid body.

• **scale?**: `PointData`

The scale of the rigid body.

• **rotation?**: `number`

The rotation of the rigid body.

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

The shape of the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Example

```ts
component.initRigidBody(
 new PIXI.Point(0, 0),
 new PIXI.Point(1, 1),
 0,
 F2dShapes.SQUARE
)

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:142](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L142)

***

### loadTexture()

> **loadTexture**(`texture`): `Promise`\<`void`\>

#### Parameters

• **texture**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/sprite/FSprite.ts:39](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L39)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Overrides

[`FComponent2d`](FComponent2d.md).[`onFrame`](FComponent2d.md#onframe)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:60](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L60)

***

### onLoaded()

> **onLoaded**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:64](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L64)

***

### setPosition()

> **setPosition**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x position.

• **y**: `number`

The y position.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition(0, 0)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setPosition`](FComponent2d.md#setposition)

#### Defined in

[packages/2d/src/FComponent2d.ts:78](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L78)

***

### setRotation()

> **setRotation**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in radians.

#### Returns

`void`

#### Description

Set the rotation of the component in radians.

#### Example

```ts
component.setRotation(Math.PI / 2)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setRotation`](FComponent2d.md#setrotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:109](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L109)

***

### setRotationDegree()

> **setRotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in degrees.

#### Returns

`void`

#### Description

Set the rotation of the component in degrees.

#### Example

```ts
component.setRotationDegree(90)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setRotationDegree`](FComponent2d.md#setrotationdegree)

#### Defined in

[packages/2d/src/FComponent2d.ts:122](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L122)

***

### setScale()

> **setScale**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x scale.

• **y**: `number`

The y scale.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale(1, 1)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setScale`](FComponent2d.md#setscale)

#### Defined in

[packages/2d/src/FComponent2d.ts:92](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L92)

***

### setScaleHeight()

> **setScaleHeight**(`height`): `void`

#### Parameters

• **height**: `number`

#### Returns

`void`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:56](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L56)

***

### setScaleWidth()

> **setScaleWidth**(`width`): `void`

#### Parameters

• **width**: `number`

#### Returns

`void`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:52](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L52)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`collider`](FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L25)

***

### container

> **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the component (can be a square or circle for exemple).

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L19)

***

### onLoadedCallbacks

> **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:23](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L23)

***

### position

> **position**: `PointData`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L20)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L24)

***

### rotation

> **rotation**: `number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L22)

***

### scale

> **scale**: `PointData`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L21)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L15)

***

### texture

> **texture**: `Texture`

#### Defined in

[packages/2d/src/sprite/FSprite.ts:21](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/sprite/FSprite.ts#L21)
