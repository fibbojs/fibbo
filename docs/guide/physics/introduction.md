# Introduction

Most of the game needs physics to simulate collisions, forces, gravity, and more. These concepts can't be applied directly to your objects for performance reasons, so you need a physics engine to handle them.

This is often a complex and time-consuming task, as you'll need to understand the underlying physics engine to synchronize your rendering with the physics simulation.

Fibbo provides a simple and easy-to-use API that abstracts the complexity of the underlying physics engine ([Rapier](https://rapier.rs/)), so you can focus on your game logic.

# How to setup the physics engine

The [`FScene`](/api/core/classes/FScene) component (either in [2d](/api/2d/classes/FScene) or [3d](/api/3d/classes/FScene)) class exposes an `initPhysics` method that initializes the physics engine for you. This method is asynchronous, so you need to use an async function to call it.

Once the physics engine is initialized, you can start adding physics to the components in your scene.

::: tip
A fair amount of the documentation was inspired by the [Rapier documentation](https://rapier.rs/docs/user_guides/javascript/getting_started_js).
:::
