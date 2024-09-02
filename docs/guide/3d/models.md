# Models

## Introduction

Models are the core of any 3D application. They are the objects that are rendered in the scene.

They can be simple shapes like cubes or spheres ; but in Fibbo, we will use the term to refer to complex 3D models that are created in a 3D modeling software like [Blender](https://www.blender.org/).

Here is a brief overview of the most common 3D models file formats :
- [.fbx](https://en.wikipedia.org/wiki/FBX) : A proprietary file format developed by Autodesk. It is widely used in the game industry.
- [.obj](https://en.wikipedia.org/wiki/Wavefront_.obj_file) : A simple text-based file format, one of the most basic formats. It often comes with a [`.mtl`](https://en.wikipedia.org/wiki/Wavefront_.obj_file#Material_template_library) file that contains the materials of the model.
- [.gltf](https://en.wikipedia.org/wiki/GlTF) : Often defined as [the JPEG for 3D](https://www.khronos.org/gltf/), it is a very extensible format that is widely supported by 3D engines.
- [.glb](https://fr.wikipedia.org/wiki/GlTF) : Based on the `GlTF` format, but it is a binary format that can contain all the assets of a 3D model (like textures, animations...).

## Loading a model

To load a model in Fibbo, you can use the appropriate class from the `@fibbojs/3d` library, depending on the format of the model.

All the classes share the same options for the constructor :
- `name` : The name of the model, if provided, the path will be computed as `/assets/${name}/${name}.${fileExtension || 'obj'}`. e.g. `cube` will load `/assets/cube/cube.obj`.
- `path` : The path to the model file.
- `fileExtension` : The extension of the model file. If not provided, it will default depending on the class used (`.obj` for `FOBJ`, `.fbx` for `FFBX`...).
- `texture` : If the model file indicates there are textures, you can provide a path to the texture file for each material. By default, the texture URL will be considered `/assets/${name}/Textures/colormap.png`. It can be useful if the texture referenced in the file are not named as expected or if you want to use a different texture. e.g. :
  ```json
  {
    "default": "/assets/cube/Textures/colormap.png"
  }
  ```
  Here the `default` material will use the texture `/assets/cube/Textures/colormap.png`.

### FBX

To load a `.fbx` model, you can use the `FFBX` class. Here is an example :

```typescript
import { FFBX } from '@fibbojs/3d'

const fbx = new FFBX({
  path: 'path/to/your/model.fbx',
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
})
```

### OBJ

To load a `.obj` model, you can use the `FOBJ` class. Here is an example :

```typescript
import { FOBJ } from '@fibbojs/3d'

const obj = new FOBJ({
  path: 'path/to/your/model.obj',
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
})
```

### GLB

To load a `.glb` model, you can use the `FGLB` class. Here is an example :

```typescript
import { FGLB } from '@fibbojs/3d'

const glb = new FGLB({
  path: 'path/to/your/model.glb',
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
})
```

::: tip
For now, `FLGB` is just a wrapper around `FGLTF`, but it could be extended in the future to support the specific features of the `.glb` format, so it is recommended to use `FGLB` for `.glb` files.
:::

### GLTF

To load a `.gltf` model, you can use the `FGLTF` class. Here is an example :

```typescript
import { FGLTF } from '@fibbojs/3d'

const gltf = new FGLTF({
  path: 'path/to/your/model.gltf',
  position: { x: 0, y: 5, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
})
```
