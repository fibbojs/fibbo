# Polygons

Polygons are a fundamental part of 2D graphics. They are used to create shapes like rectangles, circles, and more complex shapes.

## What is a polygon ?

A polygon is a 2D shape that is made up of straight lines. It is a type of [polytope](https://en.wikipedia.org/wiki/Polytope) in two dimensions.

For now, only 2 types of polygons are supported by Fibbo : rectangles and circles.

## Rectangles

To create a rectangle, you can use the `FRectangle` class. Here is an example:

```typescript
import { FRectangle } from '@fibbojs/2d'

const square = new FRectangle(scene, {
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
  color: 0xFF0000,
})
```

This will create a rectangles with a size of `1` at the position `(0, 5)`. As the scale is `(1, 1)`, the rectangle will be a square.

## Circles

To create a circle, you can use the `FCircle` class. Here is an example:

```typescript
import { FCircle } from '@fibbojs/2d'

const circle = new FCircle(scene, {
  position: { x: 0, y: 5 },
  scale: { x: 1, y: 1 },
  color: 0xFF0000,
})
```

This will create a circle with a radius of `1` at the position `(0, 5)`.
