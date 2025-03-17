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

> **new FKeyboard**(`options`?): [`FKeyboard`](FKeyboard.md)

#### Parameters

• **options?**: `FKeyboardOptions`

#### Returns

[`FKeyboard`](FKeyboard.md)

#### Defined in

[event/src/FKeyboard.ts:42](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L42)

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

[event/src/FKeyboard.ts:208](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L208)

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

[event/src/FKeyboard.ts:116](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L116)

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

[event/src/FKeyboard.ts:150](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L150)

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

[event/src/FKeyboard.ts:184](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L184)

## Properties

### callback

> **callback**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being pressed

#### Defined in

[event/src/FKeyboard.ts:32](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L32)

***

### callbackKeyDown

> **callbackKeyDown**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:36](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L36)

***

### callbackKeyUp

> **callbackKeyUp**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:40](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L40)

***

### keys

> **keys**: `Record`\<`string`, `boolean`\>

A map of all the keys being pressed

#### Defined in

[event/src/FKeyboard.ts:28](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/event/src/FKeyboard.ts#L28)
