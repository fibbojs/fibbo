# Controllers

Every [`FComponent`](/api/core/classes/FComponent) in Fibbo can have a [`FController`](/api/core/classes/FController) attached to it. A controller is instanciated given its component and is responsible for updating the component's properties every frame.

## Why use controllers ?

Technically, controllers are not required to make a component move or animate (you could just override the `frame` method in your component most of the time), but they are a good way to separate the logic of a component from its rendering.

Also, this allows you to reuse the same controller for multiple components, which can be useful if you want to create multiple groups of objects that share the same behavior.

## How to use controllers ?

A controller's [`frame`](/api/core/classes/FController#onframe) method is where you should put your typical movement logic. By default, this method is called every frame by the attached component itself.

To help you get started, here is a simple example of a controller that makes a component rotate around its one axis :

::: code-group

```typescript [2d]
import { FController, FRectangle } from '@fibbojs/2d'
import type { FControllerOptions } from '@fibbojs/2d'

export class MyRotateController extends FController {
  constructor(options?: FControllerOptions) {
    super(options)
  }

  frame() {
    this.component.rotation += 0.01
  }
}

// Usage
const rectangle = new FRectangle()
rectangle.addController(new MyRotateController({
  component: cube
}))
```

```typescript [3d]
import { FController, FCuboid } from '@fibbojs/3d'
import type { FControllerOptions } from '@fibbojs/3d'

export class MyRotateController extends FController {
  constructor(options?: FControllerOptions) {
    super(options)
  }

  frame() {
    this.component.rotation.y += 0.01
  }
}

// Usage
const cube = new FCuboid()
cube.addController(new MyRotateController({
  component: cube
}))
```

:::

In this example, the `frame` method adds `0.01` to the component's rotation each frame.
If you want to learn more about controllers, Fibbo provides a default [character controller](/more/recipes/character-controller) and you can also create your own [custom controller](/more/recipes/custom-controller).
