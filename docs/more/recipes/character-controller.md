# Character controller

Fibbo provides default character controller that can be used to control the character in the game. The character controller extends the [`FController`](/api/core/classes/FController) class and provides the following features :
- Gravity
- Movement
- Jumping

## Available character controllers

Here are the available character controllers in Fibbo :

| Controller            | Description                                                                                               | Common usage |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ------------ |
| FCharacterControllerD | The "D" stands for dynamic. It it based on a dynamic rigidBody so it is affected by the scene's gravity. | Not recommended as movements do not feel game-like. |
| FCharacterControllerK | The "K" stands for kinematic. It is an abstract controller used for `FCharacterControllerKP` and `FCharacterControllerKV`. | |
| FCharacterControllerKP | The "KP" stands for kinematic position-based. It is based on a kinematic position-based rigidBody, and has its own gravity. | Recommended for most use cases as position-based behavior generally feel more natural to think about. It is also the only controller including rotation movements by default in 3D. |
| FCharacterControllerKV | The "KV" stands for kinematic velocity-based. It is based on a kinematic velocity-based rigidBody, and has its own gravity. | Less recommended but very similar to `FCharacterControllerKP`. |

## Using a character controller

Character controllers should be used the same way as any other controller. Here is an example of how to use the `FCharacterControllerKP` :

```typescript
import { FCapsule, FCharacterControllerKP } from '@fibbojs/3d'

const character = new FCapsule({
  position: { x: 0, y: 10, z: 0 },
})
character.controller = new FCharacterControllerKP({
  component: character,
})
```
