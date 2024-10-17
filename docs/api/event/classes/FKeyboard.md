[@fibbojs](/api/index) / [event](/api/event) / FKeyboard

# Class: FKeyboard

A helper class to manage keyboard events.
Events will be triggered on each frame.

## Example

```ts
// Static usage
FKeyboard.on('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
// Instance usage
const keyboard = new FKeyboard()
keyboard.on('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
```

## Constructors

### new FKeyboard()

> **new FKeyboard**(`scene`): [`FKeyboard`](FKeyboard.md)

#### Parameters

• **scene**: `FScene`

#### Returns

[`FKeyboard`](FKeyboard.md)

#### Defined in

[event/src/FKeyboard.ts:38](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L38)

## Methods

### clear()

> **clear**(): `void`

Remove all the listeners

#### Returns

`void`

#### Example

```ts
const keyboard = new FKeyboard(scene)
keyboard.on('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
keyboard.clear()
```

#### Defined in

[event/src/FKeyboard.ts:194](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L194)

***

### on()

> **on**(`key`, `callback`): () => `void`

Add a listener to a given key event.
This is a small wrapper around the native `addEventListener` method, which helps listen to key events continuously.
Basically, this prevents keyboard "debounce" delay by firing the given callback on each frame if the key is pressed.

#### Parameters

• **key**: `string`

The key to listen to

• **callback**

The callback to call when the key is pressed

#### Returns

`Function`

The callback function that removes the listener

##### Returns

`void`

#### Examples

```ts
const keyboard = new FKeyboard()
keyboard.on('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
```

```ts
const keyboard = new FKeyboard()
const removeListener = keyboard.on('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
removeListener()
```

#### Defined in

[event/src/FKeyboard.ts:102](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L102)

***

### onKeyDown()

> **onKeyDown**(`key`, `callback`): () => `void`

Add a listener to a given key event when the key is pressed

#### Parameters

• **key**: `string`

The key to listen to

• **callback**

The callback to call when the key is pressed

#### Returns

`Function`

The callback function that removes the listener

##### Returns

`void`

#### Examples

```ts
const keyboard = new FKeyboard()
keyboard.onKeyDown('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
```

```ts
const keyboard = new FKeyboard()
const removeListener = keyboard.onKeyDown('ArrowUp', () => {
  console.log('ArrowUp key pressed!')
})
removeListener()
```

#### Defined in

[event/src/FKeyboard.ts:136](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L136)

***

### onKeyUp()

> **onKeyUp**(`key`, `callback`): () => `void`

Add a listener to a given key event when the key is released

#### Parameters

• **key**: `string`

The key to listen to

• **callback**

The callback to call when the key is released

#### Returns

`Function`

The callback function that removes the listener

##### Returns

`void`

#### Examples

```ts
const keyboard = new FKeyboard()
keyboard.onKeyUp('ArrowUp', () => {
  console.log('ArrowUp key released!')
})
```

```ts
const keyboard = new FKeyboard()
const removeListener = keyboard.onKeyUp('ArrowUp', () => {
  console.log('ArrowUp key released!')
})
removeListener()
```

#### Defined in

[event/src/FKeyboard.ts:170](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L170)

## Properties

### callback

> **callback**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being pressed

#### Defined in

[event/src/FKeyboard.ts:28](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L28)

***

### callbackKeyDown

> **callbackKeyDown**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:32](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L32)

***

### callbackKeyUp

> **callbackKeyUp**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:36](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L36)

***

### keys

> **keys**: `Record`\<`string`, `boolean`\>

A map of all the keys being pressed

#### Defined in

[event/src/FKeyboard.ts:24](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/event/src/FKeyboard.ts#L24)
