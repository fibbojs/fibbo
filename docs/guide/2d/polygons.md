# Polygons

Fibbo provides a simple way to create polygons in 2D.

For now, only 2 types of polygons are supported: rectangles and circles.

## Rectangles

To create a rectangle, you can use the `FRectangle` class. Here is an example:

```typescript
import { FRectangle } from '@fibbojs/2d'

const square = new FRectangle({
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
})
```

This will create a rectangles with a size of `1` at the position `(0, 5)`. As the scale is `(1, 1)`, the rectangle will be a square.

## Circles

To create a circle, you can use the `FCircle` class. Here is an example:

```typescript
import { FCircle } from '@fibbojs/2d'

const circle = new FCircle({
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
})
```

This will create a circle with a radius of `1` at the position `(0, 5)`.
