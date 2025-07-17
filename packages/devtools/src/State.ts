export class State {
	// Properties
	private static __HITBOXES__: boolean = false;
	private static __HELPERS__: boolean = true;
	private static __GLASSMORPHISM__: boolean = true;
	private static __COMPONENT_ROUND_TRANSFORM__: boolean = true;

	// Callbacks
	private static __CALLBACKS_ON_HITBOXES_CHANGE__: ((
		newState: boolean,
	) => void)[] = [];
	private static __CALLBACKS_ON_HELPERS_CHANGE__: ((
		newState: boolean,
	) => void)[] = [];
	private static __CALLBACKS_ON_GLASSMORPHISM_CHANGE__: ((
		newState: boolean,
	) => void)[] = [];
	private static __CALLBACKS_ON_COMPONENT_ROUND_TRANSFORM_CHANGE__: ((
		newState: boolean,
	) => void)[] = [];

	// Methods
	static load() {
		// Check if the state is stored in the local storage
		const state = localStorage.getItem("f-debug-state");
		if (state) {
			const parsedState = JSON.parse(state);
			State.hitboxes = parsedState.hitboxes ?? false;
			State.helpers = parsedState.helpers ?? true;
			State.glassmorphism = parsedState.glassmorphism ?? true;
			State.componentRoundTransform =
				parsedState.componentRoundTransform ?? true;
		}
	}

	static store() {
		// Store the state in the local storage
		localStorage.setItem(
			"f-debug-state",
			JSON.stringify({
				hitboxes: State.hitboxes,
				helpers: State.helpers,
				glassmorphism: State.glassmorphism,
				componentRoundTransform: State.componentRoundTransform,
			}),
		);
	}

	static onHitboxesChange(callback: (newState: boolean) => void) {
		State.__CALLBACKS_ON_HITBOXES_CHANGE__.push(callback);
	}

	static onHelpersChange(callback: (newState: boolean) => void) {
		State.__CALLBACKS_ON_HELPERS_CHANGE__.push(callback);
	}

	static onGlassmorphismChange(callback: (newState: boolean) => void) {
		State.__CALLBACKS_ON_GLASSMORPHISM_CHANGE__.push(callback);
	}

	static onComponentCropTransformChange(callback: (newState: boolean) => void) {
		State.__CALLBACKS_ON_COMPONENT_ROUND_TRANSFORM_CHANGE__.push(callback);
	}

	// Getters & setters
	static get hitboxes() {
		return State.__HITBOXES__;
	}

	static set hitboxes(newState: boolean) {
		State.__HITBOXES__ = newState;
		State.__CALLBACKS_ON_HITBOXES_CHANGE__.forEach((callback) =>
			callback(newState),
		);
		State.store();
	}

	static get helpers() {
		return State.__HELPERS__;
	}

	static set helpers(newState: boolean) {
		State.__HELPERS__ = newState;
		State.__CALLBACKS_ON_HELPERS_CHANGE__.forEach((callback) =>
			callback(newState),
		);
		State.store();
	}

	static get glassmorphism() {
		return State.__GLASSMORPHISM__;
	}

	static set glassmorphism(newState: boolean) {
		State.__GLASSMORPHISM__ = newState;
		State.__CALLBACKS_ON_GLASSMORPHISM_CHANGE__.forEach((callback) =>
			callback(newState),
		);
		State.store();
	}

	static get componentRoundTransform() {
		return State.__COMPONENT_ROUND_TRANSFORM__;
	}

	static set componentRoundTransform(newState: boolean) {
		State.__COMPONENT_ROUND_TRANSFORM__ = newState;
		State.__CALLBACKS_ON_COMPONENT_ROUND_TRANSFORM_CHANGE__.forEach(
			(callback) => callback(newState),
		);
		State.store();
	}
}
