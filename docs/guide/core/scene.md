# Scene

The `Scene` class represents the 2D or 3D scene that will be responsible for storing and rendering all the components.

## What is a scene ?

A scene is a class that extends the [`FScene`](/api/core/classes/FScene) core class. It represents a 2D or 3D environment where you can add components, cameras, lights, and more.

Its main purpose is to initialize the technical environment for your game, aswell as managing the lifecycle of the components and render them on the screen.

## Creating a scene

Creating a scene involves several steps :

- Import the `FScene` class from the `@fibbojs/3d` or `@fibbojs/2d` library.
- Create a new instance of the `FScene` class.
- Calling the `init` method to initialize the scene.
- (optional) Calling the `initPhysics` method to initialize the physics engine.

So every Fibbo application should start with something like this :

```typescript
import { FScene } from '@fibbojs/3d'

// As the `init` and `initPhysics` methods are asynchronous, we need to use an async function.
// Not required if your environment supports top-level await.
(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()
})()
```

## Adding components to the scene

Once the scene is created, you can add components to it using the `addComponent` method.

```typescript
const cube = new FCuboid()
scene.addComponent(cube)
```

As soon as you add a component to the scene, it will be rendered on the screen each frame.

## Removing components from the scene

You can remove a component from the scene using the `removeComponent` method.

```typescript
scene.removeComponent(cube)
```

## Hooks

The `Scene` class exposes several hooks that you can use to interact with the scene and its components. This feature took inspiration from the [Vue Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html) system, but it is still very experimental.

Here is a list of the available hooks :
- `onFrame` : Called every frame by the scene. Delta time is passed as an argument.
- `onReady` : Called when the scene is ready to be used.
- `onComponentAdded` : Called when a component is added to the scene.
- `onComponentRemoved` : Called when a component is removed from the scene.

```typescript
scene.onFrame((delta) => {
  // Do something on the scene every frame
})
scene.onReady(() => {
  // Do something when the scene is ready
})
scene.onComponentAdded((component: FComponent) => {
  // Do something on a component added to the scene
})
scene.onComponentRemoved((component: FComponent) => {
  // Do something on a component removed from the scene
})
```

::: warning
The `onFrame` method on a scene is used to add a callback that will be called every frame by the scene itself. You can add as many callbacks as you want, and they will be called in the order they were added.

The `onFrame` method on a component is a method that will be called every frame by the scene, to update its components. You should not call this method directly : if you want to change the behavior of a component, you should extend it and override the `onFrame` method.
:::
