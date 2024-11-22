# Scene

The `Scene` class represents the 2D or 3D scene that will be responsible for storing and rendering all the components.

## What is a scene ?

A scene is a class that extends the [`FScene`](/api/core/classes/FScene) core class. It represents a 2D or 3D environment where you can add components, cameras, lights, and more.

Its main purpose is to initialize the technical environment for your game, aswell as managing the lifecycle of the components and render them on the screen.

## Creating a scene

Creating a scene involves a few steps :

- Import the `FScene` class from the `@fibbojs/3d` or `@fibbojs/2d` library.
- Create a new instance of the `FScene` class.
- Calling the `init` method to initialize the scene.
- (optional) Calling the `initPhysics` method to initialize the physics engine.

So every Fibbo application should start with something like this :

::: code-group

```typescript [2d]
import { FScene } from '@fibbojs/2d'

// As the `init` and `initPhysics` methods are asynchronous, we need to use an async function.
// Not required if your environment supports top-level await.
(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()
})()
```

```typescript [3d]
import { FScene } from '@fibbojs/3d'

// As the `initPhysics` methods is asynchronous, we need to use an async function.
// Not required if your environment supports top-level await.
(async () => {
  const scene = new FScene()
  scene.init()
  await scene.initPhysics()
})()
```

:::

## Options

The `FScene` class accepts several options that you can pass to the constructor :

| Option | Type | Description |
| ------ | ---- | ----------- |
| `gravity` | `{ x: number, y: number, z: number }` or `{ x: number, y: number }` | The gravity of the scene if you are using the physics engine. |
| `domNode` | [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) | The [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) [node](https://developer.mozilla.org/en-US/docs/Web/API/Node) where the scene will be rendered. |
| `autoLoop` | `boolean` | Whether the scene should automatically be rendered every frame. Note that if you set this to `false`, you will have to call the [`frame`](/api/core/classes/FScene#frame) method manually. |

## Methods

### `removeComponent`

The `removeComponent` method allows you to remove a given component from the scene.

```typescript
scene.removeComponent(component)
```

## Hooks

The `Scene` class exposes hooks that you can use to interact with the scene and its components. This feature took inspiration from the [Vue Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html) system, but it is still very experimental.

Here is a list of the available hooks :
- [`onReady`](/api/core/classes/FScene#onready) : Called when the scene is ready to be used.
- [`onFrame`](/api/core/classes/FScene#onframe) : Called every frame by the scene. Delta time is passed as an argument.
- [`onComponentAdded`](/api/core/classes/FScene#oncomponentadded) : Called when a component is added to the scene.
- [`onComponentRemoved`](/api/core/classes/FScene#oncomponentremoved) : Called when a component is removed from the scene.
- [`onLightAdded`](/api/core/classes/FScene#onlightadded) : Called when a light is added to the scene.
- [`onLightRemoved`](/api/core/classes/FScene#onlightremoved) : Called when a light is removed from the scene.

```typescript
scene.onReady(() => {
  // Do something when the scene is ready
})
scene.onFrame((delta) => {
  // Do something on the scene every frame
})
scene.onComponentAdded((component: FComponent) => {
  // Do something on a component added to the scene
})
scene.onComponentRemoved((component: FComponent) => {
  // Do something on a component removed from the scene
})
scene.onLightAdded((light: FLight) => {
  // Do something on a light added to the scene
})
scene.onLightRemoved((light: FLight) => {
  // Do something on a light removed from the scene
})
```
