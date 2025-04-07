# Polyhedrons

Polyhedrons are 3D shapes that are made up of flat faces. Theoritically, almost any 3D objects can be represented as a polyhedron ; but in Fibbo, we will use the term to refer to basic shapes like cuboids, spheres, capsules...

## What is a polyhedron ?

A polyhedron is a 3D shape that is made up of flat faces. It is a type of [polytope](https://en.wikipedia.org/wiki/Polytope) in three dimensions.

The faces of a polyhedron are usually polygons, and the edges are the lines where two faces meet. The vertices are the points where three or more edges meet.

For now, only 3 types of polyhedrons are supported by Fibbo : cuboids, spheres and capsules.

## Cuboids

To create a cuboid, you can use the `FCuboid` class. Here is an example:

```typescript
import { FCuboid } from '@fibbojs/3d'

const cube = new FCuboid({
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  color: 0x00FF00,
})
```

This will create a cuboid with a size of `1` at the position `(0, 5, 0)`. As the scale is `(1, 1, 1)`, the cuboid will be a cube.

## Spheres

To create a sphere, you can use the `FSphere` class. Here is an example:

```typescript
import { FSphere } from '@fibbojs/3d'

const sphere = new FSphere({
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  color: 0x00FF00,
})
```

This will create a sphere with a radius of `1` at the position `(0, 5, 0)`.

## Capsules

To create a capsule, you can use the `FCapsule` class. Here is an example:

```typescript
import { FCapsule } from '@fibbojs/3d'

const capsule = new FCapsule({
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  color: 0x00FF00,
})
```

This will create a capsule with a radius of `1` and a height of `1` at the position `(0, 5, 0)`.
