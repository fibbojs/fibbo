# Mesh

Every [`FComponent`](/api/3d/classes/FComponent) in `@fibbojs/3d` has a [`__MESH__`](/api/3d/classes/FComponent#mesh) attribute that corresponds to the [Three.js Mesh](https://threejs.org/docs/#api/en/objects/Mesh) that will be used to render the component.

It will either be one of [classic polyhedrons](https://threejs.org/docs/#api/en/geometries/PolyhedronGeometry) (like a [BoxGeometry](https://threejs.org/docs/#api/en/geometries/BoxGeometry) or a [SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry)) or a [custom 3D model](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models).

Unless you have a good reason to do so, you should not modify the [`__MESH__`](/api/3d/classes/FComponent#mesh) attribute directly, but use the provided methods instead.

## What is a mesh ?

A [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) is a 3D object that is composed of vertices, edges, and faces. It is the basic building block of any 3D computer graphics.
