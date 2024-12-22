[@fibbojs](/api/index) / [core](/api/core) / CustomWorker

# Class: CustomWorker

A custom worker that extends the Worker class.
It provides better type checking, and more control over the worker.

## Extends

- `Worker`

## Constructors

### new CustomWorker()

> **new CustomWorker**(`path`): [`CustomWorker`](CustomWorker.md)

#### Parameters

• **path**: `string`

#### Returns

[`CustomWorker`](CustomWorker.md)

#### Overrides

`Worker.constructor`

#### Defined in

[packages/core/src/pipeline/CustomWorker.ts:9](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/CustomWorker.ts#L9)

## Methods

### addEventListener()

#### addEventListener(type, listener, options)

> **addEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26343

#### addEventListener(type, listener, options)

> **addEventListener**(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26344

#### addEventListener(type, listener, options)

> **addEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8522

#### addEventListener(type, listener, options)

> **addEventListener**(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.addEventListener`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8523

***

### dispatchEvent()

#### dispatchEvent(event)

> **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

##### Parameters

• **event**: `Event`

##### Returns

`boolean`

##### Inherited from

`Worker.dispatchEvent`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8343

#### dispatchEvent(event)

> **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

##### Parameters

• **event**: `Event`

##### Returns

`boolean`

##### Inherited from

`Worker.dispatchEvent`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:2657

***

### postMessage()

#### postMessage(message, transfer)

> **postMessage**(`message`, `transfer`): `void`

Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)

##### Parameters

• **message**: `any`

• **transfer**: `Transferable`[]

##### Returns

`void`

##### Inherited from

`Worker.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26335

#### postMessage(message, options)

> **postMessage**(`message`, `options`?): `void`

##### Parameters

• **message**: `any`

• **options?**: `StructuredSerializeOptions`

##### Returns

`void`

##### Inherited from

`Worker.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26336

#### postMessage(message, transfer)

> **postMessage**(`message`, `transfer`): `void`

Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)

##### Parameters

• **message**: `any`

• **transfer**: `Transferable`[]

##### Returns

`void`

##### Inherited from

`Worker.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8514

#### postMessage(message, options)

> **postMessage**(`message`, `options`?): `void`

##### Parameters

• **message**: `any`

• **options?**: `StructuredSerializeOptions`

##### Returns

`void`

##### Inherited from

`Worker.postMessage`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8515

***

### removeEventListener()

#### removeEventListener(type, listener, options)

> **removeEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26345

#### removeEventListener(type, listener, options)

> **removeEventListener**(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26346

#### removeEventListener(type, listener, options)

> **removeEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

• **K** *extends* keyof `WorkerEventMap`

##### Parameters

• **type**: `K`

• **listener**

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8524

#### removeEventListener(type, listener, options)

> **removeEventListener**(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

• **type**: `string`

• **listener**: `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Worker.removeEventListener`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8525

***

### start()

> **start**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/pipeline/CustomWorker.ts:13](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/CustomWorker.ts#L13)

***

### stop()

> **stop**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/pipeline/CustomWorker.ts:17](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/CustomWorker.ts#L17)

***

### terminate()

#### terminate()

> **terminate**(): `void`

Aborts worker's associated global environment.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)

##### Returns

`void`

##### Inherited from

`Worker.terminate`

##### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26342

#### terminate()

> **terminate**(): `void`

Aborts worker's associated global environment.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)

##### Returns

`void`

##### Inherited from

`Worker.terminate`

##### Defined in

node\_modules/typescript/lib/lib.webworker.d.ts:8521

## Properties

### onerror

> **onerror**: `null` \| (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/error_event)

#### Inherited from

`Worker.onerror`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:2416

***

### onmessage

> **onmessage**: `null` \| (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/message_event)

#### Inherited from

`Worker.onmessage`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26327

***

### onmessageerror

> **onmessageerror**: `null` \| (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/messageerror_event)

#### Inherited from

`Worker.onmessageerror`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:26329
