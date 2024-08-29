# Fundamentals

Before we dive into any code, let's take a moment to understand the fundamentals concepts of Fibbo. This will help you understand how the engine works, so you can be more efficient when using it, and prevent common pitfalls.

## General structure

Almost everything in Fibbo is exposed as a class. This includes scenes, components, cameras, and more. This means that you can create and manipulate objects in a scene using a simple object-oriented API.
If you're not familiar with [object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming), Fibbo is a great way to learn it, as the API is fairly minimal and easy to understand.

Also, every class name in Fibbo is prefixed with `F`, to avoid conflicts with other libraries, but also to make it easier to identify Fibbo classes. If you ever want to use something from Fibbo, pressing `F` in your editor should show you all the available classes. Just press `F` !

## Unit system

Fibbo has its own unit system, to help you work with different environments in a consistent way. As Fibbo relies on other underlying libraries (such as Three.js or PixiJS) that have their own unit system, it is important to have a common unit system to work with.
So here is a quick overview of the unit system in Fibbo :

| Fibbo | Three.js | Rapier | PixiJS  |
| ----- | -------- | ------ | ------- |
| `1`   | `1`      | `0.5`  | `100px` |

When using Fibbo's classes and methods, you should always use the Fibbo unit system and all the conversions will be done automatically for you.
But if for some reason you need to use the underlying libraries directly, you should be aware of the unit system they use.