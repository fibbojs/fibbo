# Polygons

Fibbo provides a simple way to create polygons in 2D.

For now, only 2 types of polygons are supported: squares and circles.

## Squares

To create a square, you can use the `FSquare` class. Here is an example:

```typescript
import { FSquare } from '@fibbojs/2d'

const square = new FSquare({
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
})
```

This will create a square with a size of `1` at the position `(0, 5)`.

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
