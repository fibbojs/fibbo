[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

A scene which contains the components, lights and cameras.
Also contains the Rapier world if physics is enabled.

## Accessors

### camera

> `get` **camera**(): `undefined` \| [`FCamera`](FCamera.md)

The camera of the scene.

> `set` **camera**(`camera`): `void`

The camera of the scene.

#### Parameters

• **camera**: [`FCamera`](FCamera.md)

#### Returns

`undefined` \| [`FCamera`](FCamera.md)

#### Defined in

[core/src/FScene.ts:235](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L235)

## Constructors

### new FScene()

> **new FScene**(`options`?): [`FScene`](FScene.md)

#### Parameters

• **options?**: [`FSceneOptions`](../interfaces/FSceneOptions.md)

#### Returns

[`FScene`](FScene.md)

#### Defined in

[core/src/FScene.ts:96](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L96)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:161](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L161)

***

### addLight()

> **addLight**(`light`): `void`

Add a light to the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:194](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L194)

***

### frame()

> **frame**(`delta`): `void`

Compute a frame with the given delta time.
By default, it is called every frame in the main pipeline, but this behavior can be changed by giving the `autoLoop` option as `false` when creating the scene.

#### Parameters

• **delta**: `number`

The time in seconds since the last frame.

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:146](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L146)

***

### init()

> `abstract` **init**(): `void`

Initialize the scene.

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:134](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L134)

***

### initPhysics()

> `abstract` **initPhysics**(): `Promise`\<`void`\>

Initialize the physics world.

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/FScene.ts:139](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L139)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

Add a callback to be called when a component is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:180](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L180)

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

Add a callback to be called when a component is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:187](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L187)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called when a frame is rendered.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:154](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L154)

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

Add a callback to be called when a light is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:213](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L213)

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

Add a callback to be called when a light is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:220](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L220)

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

[core/src/FScene.ts:228](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L228)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:169](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L169)

***

### removeLight()

> **removeLight**(`light`): `void`

Remove a light from the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:202](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L202)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is added to the scene.

#### Defined in

[core/src/FScene.ts:78](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L78)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is removed from the scene.

#### Defined in

[core/src/FScene.ts:82](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L82)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

Callbacks for when a frame is rendered.

#### Defined in

[core/src/FScene.ts:74](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L74)

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is added to the scene.

#### Defined in

[core/src/FScene.ts:90](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L90)

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is removed from the scene.

#### Defined in

[core/src/FScene.ts:94](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L94)

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[] = `[]`

Callbacks for when the scene is ready.

#### Defined in

[core/src/FScene.ts:86](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L86)

***

### \_\_CAMERA\_\_?

> `optional` **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

The camera of the scene.

#### Defined in

[core/src/FScene.ts:57](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L57)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[core/src/FScene.ts:42](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L42)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:26](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:25](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L25)

***

### \_\_PHYSIC\_CONTROLLERS\_\_

> **\_\_PHYSIC\_CONTROLLERS\_\_**: [`FController`](FController.md)[] = `[]`

Controllers that will run in the physic pipeline.

#### Defined in

[core/src/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L62)

***

### \_\_PHYSIC\_FRAME\_RATE\_\_

> **\_\_PHYSIC\_FRAME\_RATE\_\_**: `number`

Physic frame rate.
It is stored here as the initialisation of the physics pipeline is handled by child classes.

#### Defined in

[core/src/FScene.ts:37](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L37)

***

### \_\_PIPELINE\_MANAGER\_\_

> **\_\_PIPELINE\_MANAGER\_\_**: [`PipelineManager`](PipelineManager.md)

Pipeline manager that manages the pipelines of the scene.
By default, it contains the main pipeline.

#### Defined in

[core/src/FScene.ts:32](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L32)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[core/src/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L68)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[core/src/FScene.ts:47](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L47)

***

### eventQueue

> **eventQueue**: `EventQueue` \| `EventQueue`

#### Defined in

[core/src/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L67)

***

### gravity

> **gravity**: `object` \| `object`

#### Defined in

[core/src/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L65)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Defined in

[core/src/FScene.ts:52](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L52)

***

### world

> **world**: `World` \| `World`

#### Defined in

[core/src/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FScene.ts#L66)
