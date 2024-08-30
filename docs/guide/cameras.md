# Cameras

Cameras are used to render a scene from a specific point of view. They are attached to a scene and are used to render the scene to the screen.

However, they're technically very different in 2D and 3D scenes, so we'll cover them separately.

## 3D Cameras

In 3D scenes, cameras technically exist the same way you would think of a camera in real life. They have a position, a rotation, and a field of view.

Every camera in `@fibbojs/3d` extends the [PerspectiveCamera](https://threejs.org/docs/?q=Persp#api/en/cameras/PerspectiveCamera) class from Three.js.

To learn more about cameras in Three.js, you can check the [Three.js documentation](https://threejs.org/manual/#en/cameras).

## 2D Cameras

In 2D scenes, cameras are a bit different as 2D environments don't have a concept of perspective. Instead, they have a position and a zoom level.

But as the concept of camera is still useful to think about how the scene is rendered, we still have camera classes in `@fibbojs/2d`.

Under the hood, they're just cleverly managing the scene's viewport based on [pixi-viewport](https://github.com/davidfig/pixi-viewport?tab=readme-ov-file).

## Changing the camera of a scene

You can change the camera used to render the scene by setting the `camera` property of the scene.

```typescript
// Attach a camera to the character
scene.camera = new FGameCamera({
  target: character,
})
```

## Available cameras

Here are the available cameras in Fibbo :

| Camera             | Available in 2D | Available in 3D | Description                                                                                            |
| ------------------ | --------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| FGameCamera        | ❌              | ✅              | A camera that follows a target and can be rotated. Enables a third-person view and locking the cursor. |
| FOrbitCamera       | ❌              | ✅              | More raw version of the game camera.                                                                   |
| FAttachedCamera    | ✅              | ✅              | A camera attached to a given target.                                                                   |
| FFixedCamera       | ✅              | ✅              | A fixed camera that doesn't move.                                                                      |
| FPointerLockCamera | ❌              | ✅              | Similar to the game camera but behaves like a first-person shooter.                                    |
| FFreeCamera        | ✅              | ❌              | A camera that can be moved freely in the scene.                                                        |
| FCamera            | ✅              | ✅              | The base class for all cameras.                                                                        |
