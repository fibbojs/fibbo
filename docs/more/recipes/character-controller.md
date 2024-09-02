# Character controller

Fibbo provides default character controller that can be used to control the character in the game. The character controller extends the [`FController`](/api/core/classes/FController) class and provides the following features :
- Gravity
- Movement
- Jumping

## Available character controllers

Here are the available character controllers in Fibbo :

| Controller            | Description                                                                                               | Common usage |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ------------ |
| FCharacterControllerD | The "D" stands for dynamic. It it based on a dynamic rigid-body so it is affected by the scene's gravity. | Not recommended as movements do not feel game-like. |
| FCharacterControllerK | The "K" stands for kinematic. It is an abstract controller used for `FCharacterControllerKP` and `FCharacterControllerKV`. | |
| FCharacterControllerKP | The "KP" stands for kinematic position-based. It is based on a kinematic position-based rigid-body, and has its own gravity. | Recommended for most use cases. |
| FCharacterControllerKV | The "KV" stands for kinematic velocity-based. It is based on a kinematic velocity-based rigid-body, and has its own gravity. | Less recommended but very similar to `FCharacterControllerKP`. |

## Using a character controller

Character controllers should be used the same way as any other controller. Here is an example of how to use the `FCharacterControllerKP` :

```typescript
import { FCapsule, FCharacterControllerKP } from '@fibbojs/3d'

const character = new FCapsule(scene, {
  position: { x: 0, y: 10, z: 0 },
})
character.controller = new FCharacterControllerKP(scene, {
  component: character,
})
```

## Creating your own character controller

If you want to create your own character controller, the source code for [`FCharacterControllerKP`](https://github.com/fibbojs/fibbo/blob/main/packages/3d/src/controllers/FCharacterControllerKP.ts) might be a good starting point. It extends many important classes so make sure to check them out as well.
