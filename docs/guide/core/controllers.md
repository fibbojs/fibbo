# Controllers

Every [`FComponent`](/api/core/classes/FComponent) in Fibbo can have a [`FController`](/api/core/classes/FController) attached to it. A controller is instanciated given its component and is responsible for updating the component's properties every frame.

A controller's [`onFrame`](/api/core/classes/FController#onframe) method is where you should put your typical movement logic. This method is called every frame by the attached component itself. To help you get started, here is a simple example of a controller that makes a cube rotate around its Y axis :

```typescript
import { FController, FCuboid } from '@fibbojs/core'
import type { FControllerOptions } from '@fibbojs/core'

export class MyRotateController extends FController {
  constructor(options?: FControllerOptions) {
    super(options)
  }

  onFrame() {
    this.component.rotation.y += 0.01
  }
}

// Usage
const cube = new FCuboid()
cube.controller = new MyRotateController({
  component: cube
})
```

In this example, the `onFrame` method is called every frame by the cube itself, and it updates the cube's rotation around the Y axis.
If you want to learn more about controllers, Fibbo provides a default [character controller](/more/recipes/character-controller) and you can also create your own [custom controller](/more/recipes/custom-controller).
