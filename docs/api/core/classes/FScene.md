[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

## Description

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

[core/src/FScene.ts:74](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L74)

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

[core/src/FScene.ts:127](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L127)

***

### addLight()

> **addLight**(`light`): `void`

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Description

Add a light to the scene.

#### Defined in

[core/src/FScene.ts:146](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L146)

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

[core/src/FScene.ts:172](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L172)

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a component is removed from the scene.

#### Defined in

[core/src/FScene.ts:179](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L179)

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

[core/src/FScene.ts:165](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L165)

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a light is added to the scene.

#### Defined in

[core/src/FScene.ts:194](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L194)

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a light is removed from the scene.

#### Defined in

[core/src/FScene.ts:201](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L201)

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when the scene is ready.
The scene is ready when the `init` method has finished.

#### Defined in

[core/src/FScene.ts:187](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L187)

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

[core/src/FScene.ts:135](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L135)

***

### removeLight()

> **removeLight**(`light`): `void`

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Description

Remove a light from the scene.

#### Defined in

[core/src/FScene.ts:154](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L154)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[core/src/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L53)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is remove from the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[core/src/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L58)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Defined in

[core/src/FScene.ts:48](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L48)

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[] = `[]`

#### Description

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Defined in

[core/src/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L67)

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[] = `[]`

#### Description

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Defined in

[core/src/FScene.ts:72](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L72)

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[] = `[]`

#### Description

Callbacks for when the scene is ready.

#### Defined in

[core/src/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L62)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[core/src/FScene.ts:25](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L25)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:20](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L20)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Defined in

[core/src/FScene.ts:19](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L19)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[core/src/FScene.ts:41](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L41)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[core/src/FScene.ts:30](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L30)

***

### eventQueue

> **eventQueue**: `EventQueue` \| `EventQueue`

#### Defined in

[core/src/FScene.ts:40](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L40)

***

### gravity

> **gravity**: `object` \| `object`

#### Defined in

[core/src/FScene.ts:38](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L38)

***

### lights

> **lights**: [`FLight`](FLight.md)[] = `[]`

The lights in the scene.

#### Defined in

[core/src/FScene.ts:35](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L35)

***

### world

> **world**: `World` \| `World`

#### Defined in

[core/src/FScene.ts:39](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/core/src/FScene.ts#L39)
