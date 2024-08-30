# Sprites

Sprites are the most common way to display objects in a 2D game. They are essentially 2D images that can be moved, rotated, and scaled in the scene.

## Creating a sprite

To create a sprite, you can use the `FSprite` class. Here is an example:

```typescript
import { FSprite } from '@fibbojs/2d'

const sprite = new FSprite({
  path: 'path/to/image.png',
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
})
```

This will create a sprite with the image located at `path/to/image.png` at the position `(0, 5)`.
