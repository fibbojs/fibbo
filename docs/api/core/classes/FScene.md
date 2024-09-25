[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

A scene which contains the components and the camera.
Also contains the Rapier world if physics is enabled.

## Constructors

### new FScene()

> **new FScene**(`options`?): [`FScene`](FScene.md)

#### Parameters

• **options?**: [`FSceneOptions`](../interfaces/FSceneOptions.md)

#### Returns

[`FScene`](FScene.md)

#### Defined in

[core/src/FScene.ts:75](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L75)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:128](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L128)

***

### addLight()

> **addLight**(`light`): `void`

Add a light to the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:147](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L147)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

Add a callback to be called when a component is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:173](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L173)

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

Add a callback to be called when a component is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:180](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L180)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called when a frame is rendered.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:166](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L166)

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

Add a callback to be called when a light is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:195](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L195)

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

Add a callback to be called when a light is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:202](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L202)

***

### onReady()

> **onReady**(`callback`): `void`

Add a callback to be called when the scene is ready.
The scene is ready when the `init` method has finished.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:188](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L188)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:136](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L136)

***

### removeLight()

> **removeLight**(`light`): `void`

Remove a light from the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:155](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L155)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[core/src/FScene.ts:54](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L54)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is remove from the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[core/src/FScene.ts:59](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L59)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Defined in

[core/src/FScene.ts:49](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L49)

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Defined in

[core/src/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L68)

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Defined in

[core/src/FScene.ts:73](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L73)

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[] = `[]`

Callbacks for when the scene is ready.

#### Defined in

[core/src/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L63)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[core/src/FScene.ts:26](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L26)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:21](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L21)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[core/src/FScene.ts:20](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L20)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[core/src/FScene.ts:42](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L42)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[core/src/FScene.ts:31](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L31)

***

### eventQueue

> **eventQueue**: `EventQueue` \| `EventQueue`

#### Defined in

[core/src/FScene.ts:41](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L41)

***

### gravity

> **gravity**: `object` \| `object`

#### Defined in

[core/src/FScene.ts:39](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L39)

***

### lights

> **lights**: [`FLight`](FLight.md)[] = `[]`

The lights in the scene.

#### Defined in

[core/src/FScene.ts:36](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L36)

***

### world

> **world**: `World` \| `World`

#### Defined in

[core/src/FScene.ts:40](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/core/src/FScene.ts#L40)
