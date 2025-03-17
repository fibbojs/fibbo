[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

A scene which contains the components, lights and cameras.
Also contains the Rapier world if physics is enabled.

## Accessors

### camera

> `get` **camera**(): [`FCamera`](FCamera.md)

The camera of the scene.

> `set` **camera**(`camera`): `void`

The camera of the scene.

#### Parameters

• **camera**: [`FCamera`](FCamera.md)

#### Returns

[`FCamera`](FCamera.md)

#### Defined in

[core/src/FScene.ts:240](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L240)

## Constructors

### new FScene()

> **new FScene**(`options`?): [`FScene`](FScene.md)

#### Parameters

• **options?**: [`FSceneOptions`](../interfaces/FSceneOptions.md)

#### Returns

[`FScene`](FScene.md)

#### Defined in

[core/src/FScene.ts:96](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L96)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:166](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L166)

***

### addLight()

> **addLight**(`light`): `void`

Add a light to the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:199](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L199)

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

[core/src/FScene.ts:151](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L151)

***

### init()

> `abstract` **init**(): `void`

Initialize the scene.

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:139](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L139)

***

### initPhysics()

> `abstract` **initPhysics**(): `Promise`\<`void`\>

Initialize the physics world.

#### Returns

`Promise`\<`void`\>

#### Defined in

[core/src/FScene.ts:144](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L144)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

Add a callback to be called when a component is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:185](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L185)

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

Add a callback to be called when a component is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:192](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L192)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called when a frame is rendered.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:159](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L159)

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

Add a callback to be called when a light is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:218](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L218)

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

Add a callback to be called when a light is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:225](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L225)

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

[core/src/FScene.ts:233](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L233)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:174](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L174)

***

### removeLight()

> **removeLight**(`light`): `void`

Remove a light from the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Defined in

[core/src/FScene.ts:207](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L207)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is added to the scene.

#### Defined in

[core/src/FScene.ts:78](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L78)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[] = `[]`

Callbacks for when a component is removed from the scene.

#### Defined in

[core/src/FScene.ts:82](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L82)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

Callbacks for when a frame is rendered.

#### Defined in

[core/src/FScene.ts:74](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L74)

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is added to the scene.

#### Defined in

[core/src/FScene.ts:90](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L90)

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[] = `[]`

Callbacks for when a light is removed from the scene.

#### Defined in

[core/src/FScene.ts:94](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L94)

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[] = `[]`

Callbacks for when the scene is ready.

#### Defined in

[core/src/FScene.ts:86](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L86)

***

### \_\_CAMERA\_\_?

> `optional` **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

The camera of the scene.

#### Defined in

[core/src/FScene.ts:57](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L57)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[core/src/FScene.ts:42](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L42)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:26](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

#### Defined in

[core/src/FScene.ts:25](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L25)

***

### \_\_PHYSIC\_CONTROLLERS\_\_

> **\_\_PHYSIC\_CONTROLLERS\_\_**: [`FController`](FController.md)[] = `[]`

Controllers that will run in the physic pipeline.

#### Defined in

[core/src/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L62)

***

### \_\_PHYSIC\_FRAME\_RATE\_\_

> **\_\_PHYSIC\_FRAME\_RATE\_\_**: `number`

Physic frame rate.
It is stored here as the initialisation of the physics pipeline is handled by child classes.

#### Defined in

[core/src/FScene.ts:37](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L37)

***

### \_\_PIPELINE\_MANAGER\_\_

> **\_\_PIPELINE\_MANAGER\_\_**: [`PipelineManager`](PipelineManager.md)

Pipeline manager that manages the pipelines of the scene.
By default, it contains the main pipeline.

#### Defined in

[core/src/FScene.ts:32](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L32)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[core/src/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L68)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[core/src/FScene.ts:47](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L47)

***

### eventQueue

> **eventQueue**: `EventQueue` \| `EventQueue`

#### Defined in

[core/src/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L67)

***

### gravity

> **gravity**: `object` \| `object`

#### Defined in

[core/src/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L65)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Defined in

[core/src/FScene.ts:52](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L52)

***

### world

> **world**: `World` \| `World`

#### Defined in

[core/src/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FScene.ts#L66)
