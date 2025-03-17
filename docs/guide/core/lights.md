# Lights <Badge type="warning" text="work in progress" />

For now, lights are only available in 3D.

The 3D starter includes a basic [AmbientLight](/api/3d/classes/FAmbientLight) and a [DirectionalLight](/api/3d/classes/FDirectionalLight) to light the scene.

## Configuration

Lights already work out of the box, but as shadows are disabled by default, you may want to enable them.

Fibbo provides a default shadow configuration which can be activated by setting the `shadows` option to `true` when creating a scene.

```ts
const scene = new FScene({
  shadows: true,
})
```

::: tip
Note that shadows do not cast on certain materials, such as the [MeshBasicMaterial](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial)
:::

## Usage

Lights can be created as follows (they will be automatically added to the scene) :

```ts
import { FAmbientLight, FDirectionalLight, FSpotLight } from '@fibbojs/3d'

// Add directional light to represent the sun
new FDirectionalLight({
  position: { x: 20, y: 20, z: 0 },
  color: 0xFFFFFF,
  intensity: 3,
  shadowQuality: 12,
})
// Add spot light
new FSpotLight({
  position: { x: 4, y: 4, z: 4 },
  angle: 1,
  distance: 8,
  color: 0xFFFFFF,
  intensity: 30,
  lookAt: { x: 8, y: 0, z: 8 },
  shadowQuality: 7,
})
// Add ambient light
new FAmbientLight({
  color: 0x404040,
  intensity: 20,
})
```

They can also be removed using the `removeLight` method.

```ts
scene.removeLight(light)
```

::: tip
The shadow quality is a very important parameter. The higher the quality, the better the shadows will look, but the more resources will be used.

It will be interpreted as a power of 2, so for example the default value of 5 will result in a shadow map of 32x32 pixels.
Generally, the farther the light is from the objects, the higher the quality should be.
:::

### Available lights

Here are the available lights in 3D :

| Camera            | Description                                                                                                                                                                                                                                                                                                                                        | Can cast shadows |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| FAmbientLight     | This light globally illuminates all objects in the scene equally. This light cannot be used to cast shadows as it does not have a direction.                                                                                                                                                                                                       | ❌               |
| FDirectionalLight | A light that gets emitted in a specific direction. This light will behave as though it is infinitely far away and the rays produced from it are all parallel. The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel. | ✅               |
| FHemisphereLight  | A light source positioned directly above the scene, with color fading from the sky color to the ground color. This light cannot be used to cast shadows.                                                                                                                                                                                           | ❌               |
| FLight            | `(abstract)` A light.                                                                                                                                                                                                                                                                                                                              | ❌               |
| FLightProbe       | See [Three.js LightProbe](https://threejs.org/docs/?q=light#api/en/lights/LightProbe)                                                                                                                                                                                                                                                              | ❌               |
| FPointLight       | A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.                                                                                                                                                                                               | ✅               |
| FSpotLight        | This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.                                                                                                                                                                                                              | ✅               |
