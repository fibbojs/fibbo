[@fibbojs](/api/index) / [event](/api/event) / FKeyboard

# Class: FKeyboard

## Description

A helper class to manage keyboard events.
Can be instantiated or used statically.
Instantiate this class will let you manage the keyboard events for a specific instance.
Using this class statically will let you manage the keyboard events globally.

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

> **new FKeyboard**(): [`FKeyboard`](FKeyboard.md)

#### Returns

[`FKeyboard`](FKeyboard.md)

#### Defined in

[packages/event/src/FKeyboard.ts:29](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L29)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Description

Remove all the listeners

#### Example

```ts
const keyboard = new FKeyboard()
keyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
keyboard.clear()
```

#### Defined in

[packages/event/src/FKeyboard.ts:143](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L143)

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

Add a listener to a given key event

#### Examples

```ts
const keyboard = new FKeyboard()
keyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
```

```ts
const keyboard = new FKeyboard()
// Get the remove listener function from the on method
const removeListener = keyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
// Remove the listener
removeListener()
```

#### Defined in

[packages/event/src/FKeyboard.ts:97](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L97)

***

### clear()

> `static` **clear**(): `void`

#### Returns

`void`

#### Description

Remove all the listeners

#### Example

```ts
Keyboard.clear()
```

#### Defined in

[packages/event/src/FKeyboard.ts:123](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L123)

***

### on()

> `static` **on**(`key`, `callback`): () => `void`

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

Add a listener to a given key event

#### Examples

```ts
FKeyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
```

```ts
// Get the remove listener function from the on method
const removeListener = FKeyboard.on('ArrowUp', () => {
 console.log('ArrowUp key pressed!')
})
// Remove the listener
removeListener()
```

#### Defined in

[packages/event/src/FKeyboard.ts:55](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L55)

## Properties

### listeners

> **listeners**: (`event`) => `void`[] = `[]`

#### Description

An array of all the keys among the current instance of FKeyboard

#### Defined in

[packages/event/src/FKeyboard.ts:27](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L27)

***

### STATIC\_LISTENERS

> `static` **STATIC\_LISTENERS**: (`event`) => `void`[] = `[]`

#### Description

An array of all the listeners among all the instances of FKeyboard

#### Defined in

[packages/event/src/FKeyboard.ts:23](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/event/src/FKeyboard.ts#L23)
