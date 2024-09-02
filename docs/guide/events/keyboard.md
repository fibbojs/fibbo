# Keyboard

The `@fibbojs/event` package provides a convenient way to listen to keyboard events in a game-like way.

## Initialization

You can create a new `FKeyboard` instance and start listening to keyboard events. The [`FScene`](/guide/core/scene) must be passed as a parameter to the constructor.

```typescript
import { FKeyboard } from '@fibbojs/event'

const keyboard = new FKeyboard(scene)
keyboard.on('a', () => {
  console.log('The "a" key was pressed')
})
```

## Listening to keys

There are 3 types of events you can listen to :

- [`on`](/api/event/classes/FKeyboard#on) : Triggered each frame if the key is pressed.
- [`onKeyDown`](/api/event/classes/FKeyboard#onkeydown) : Triggered once when the key is pressed.
- [`onKeyUp`](/api/event/classes/FKeyboard#onkeyup) : Triggered once when the key is released.

```typescript
keyboard.on('a', () => {
  console.log('The "a" key is being pressed the current frame')
})
keyboard.onKeyDown('a', () => {
  console.log('The "a" key was pressed')
})
keyboard.onKeyUp('a', () => {
  console.log('The "a" key was released')
})
```

## Clearing events

You can clear all the events on a keyboard instance using the [`clear`](/api/event/classes/FKeyboard#clear) method.

```typescript
keyboard.clear()
```
