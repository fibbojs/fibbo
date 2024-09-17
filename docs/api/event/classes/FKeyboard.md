[@fibbojs](/api/index) / [event](/api/event) / FKeyboard

# Class: FKeyboard

## Description

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

[event/src/FKeyboard.ts:37](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L37)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Description

Remove all the listeners

#### Example

```ts
const keyboard = new FKeyboard(scene)
keyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
keyboard.clear()
```

#### Defined in

[event/src/FKeyboard.ts:193](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L193)

***

### on()

> **on**(`key`, `callback`): () => `void`

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

#### Description

Add a listener to a given key event.
This is a small wrapper around the native `addEventListener` method, which helps listen to key events continuously.
Basically, this prevents keyboard "debounce" delay by firing the given callback on each frame if the key is pressed.

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

[event/src/FKeyboard.ts:101](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L101)

***

### onKeyDown()

> **onKeyDown**(`key`, `callback`): () => `void`

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

#### Description

Add a listener to a given key event when the key is pressed

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

[event/src/FKeyboard.ts:135](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L135)

***

### onKeyUp()

> **onKeyUp**(`key`, `callback`): () => `void`

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

#### Description

Add a listener to a given key event when the key is released

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

[event/src/FKeyboard.ts:169](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L169)

## Properties

### callback

> **callback**: `Record`\<`string`, () => `void`[]\>

#### Description

An map of all the callbacks for each key being pressed

#### Defined in

[event/src/FKeyboard.ts:27](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L27)

***

### callbackKeyDown

> **callbackKeyDown**: `Record`\<`string`, () => `void`[]\>

#### Description

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:31](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L31)

***

### callbackKeyUp

> **callbackKeyUp**: `Record`\<`string`, () => `void`[]\>

#### Description

An map of all the callbacks for each key being released

#### Defined in

[event/src/FKeyboard.ts:35](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L35)

***

### keys

> **keys**: `Record`\<`string`, `boolean`\>

#### Description

A map of all the keys being pressed

#### Defined in

[event/src/FKeyboard.ts:23](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/event/src/FKeyboard.ts#L23)
