# Fundamentals

Before we dive into any code, let's take a moment to understand the fundamentals concepts of Fibbo. This will help you understand how the engine works, so you can be more efficient when using it, and prevent common pitfalls.

## General structure

Almost everything in Fibbo is exposed as a class. This includes scenes, components, cameras, and more. This means that you can create and manipulate objects in a scene using a simple object-oriented API.

If you're not familiar with [object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming), Fibbo is a great way to learn it, as the API is fairly minimal and easy to understand.

Also, every class name in Fibbo is prefixed with `F`, to avoid conflicts with other libraries, but also to make it easier to identify Fibbo classes. If you ever want to use something from Fibbo, pressing `F` in your editor might be a good start.

Just press `F` !

## Unit system

Fibbo has its own unit system, to help you work with different environments in a consistent way. This system is used to define the [position](/guide/core/transforms#position) and [scale](/guide/core/transforms#scale) of components in the scene.

As Fibbo relies on other underlying libraries (such as Three.js or PixiJS) that have their own unit system, it is important to have a common unit system to work with.
So here is a quick overview of the unit system in Fibbo :

| Fibbo | Three.js | Rapier | PixiJS  |
| ----- | -------- | ------ | ------- |
| `1`   | `1`      | `0.5`  | `100px` |

That means that if you create a component with a size of `1` in Fibbo, it will be `1` in Three.js, `0.5` in Rapier, and `100px` in PixiJS. You can consider `1` is equivalent to 1 meter in the real world.

When using Fibbo's classes and methods, you should always use the Fibbo unit system and all the conversions will be done automatically for you.
But if for some reason you need to use the underlying libraries directly, you should be aware of the unit system they use.

## About internals

Fibbo is built on top of other libraries and does a lot of work behind the scenes to make your life easier.

This means that Fibbo's classes have a lot of internal properties that you should not use directly, but are exposed for convenience (in edge cases or when [extending Fibbo](/more/extending-fibbo) for example). These properties are formatted with uppercase letters and double underscores at the beginning and end of their name (e.g. `__INTERNAL__`).

If you ever feel the need to use these properties, you are very likely to have found a bug or a feature missing in Fibbo. If you're not sure about it, feel free to [ask on the forum](https://github.com/orgs/fibbojs/discussions) !
