[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

## Description

A scene which contains the components and the camera.
Also contains the Rapier world if physics is enabled.

## Constructors

### new FScene()

> **new FScene**(): [`FScene`](FScene.md)

#### Returns

[`FScene`](FScene.md)

#### Defined in

[packages/core/src/FScene.ts:40](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L40)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Defined in

[packages/core/src/FScene.ts:72](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L72)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a component is added to the scene.

#### Defined in

[packages/core/src/FScene.ts:98](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L98)

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a frame is rendered.

#### Defined in

[packages/core/src/FScene.ts:91](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L91)

***

### removeComponent()

> **removeComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Remove a component from the scene.

#### Defined in

[packages/core/src/FScene.ts:80](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L80)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[packages/core/src/FScene.ts:33](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L33)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is remove from the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[packages/core/src/FScene.ts:38](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L38)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Defined in

[packages/core/src/FScene.ts:28](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L28)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L14)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[packages/core/src/FScene.ts:13](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L13)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[packages/core/src/FScene.ts:19](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L19)

***

### gravity

> **gravity**: `object`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Defined in

[packages/core/src/FScene.ts:21](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L21)

***

### world?

> `optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:22](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/core/src/FScene.ts#L22)
