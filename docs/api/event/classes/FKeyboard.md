[@fibbojs](/api/index) / [event](/api/event) / FKeyboard

# Class: FKeyboard

A helper class to manage keyboard events.
Events will be triggered on each frame.

## Example

```ts
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

[event/src/FKeyboard.ts:37](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L37)

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

[event/src/FKeyboard.ts:203](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L203)

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

[event/src/FKeyboard.ts:111](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L111)

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

[event/src/FKeyboard.ts:145](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L145)

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

[event/src/FKeyboard.ts:179](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L179)

## Properties

### callback

> **callback**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being pressed

#### Defined in

[event/src/FKeyboard.ts:27](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L27)

***

### callbackKeyDown

> **callbackKeyDown**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:31](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L31)

***

### callbackKeyUp

> **callbackKeyUp**: `Record`\<`string`, () => `void`[]\>

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:35](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L35)

***

### keys

> **keys**: `Record`\<`string`, `boolean`\>

A map of all the keys being pressed

#### Defined in

[event/src/FKeyboard.ts:23](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/event/src/FKeyboard.ts#L23)
