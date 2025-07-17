import * as PIXI from "pixi.js";
import type { FColliderOptions } from "../core/FCollider";
import type { FRigidBodyOptions } from "../core/FRigidBody";
import { FShapes } from "../types/FShapes";
import type { FPolygonOptions } from "./FPolygon";
import { FPolygon } from "./FPolygon";

/**
 * A simple circle in Fibbo.
 * @category Polygons
 * @example
 * ```ts
 * import { FCircle } from '@fibbojs/2d'
 *
 * const circle = new FCircle()
 * ```
 */
export class FCircle extends FPolygon {
	constructor(options?: FPolygonOptions) {
		super(options);
		// Create the circle
		this.__CONTAINER__ = new PIXI.Graphics().circle(
			this.transform.position.x,
			this.transform.position.y,
			(this.transform.scale.x * 100) / 2,
		);

		// If a gradient was provided, use it to fill the circle
		if (this.__GRADIENT__ !== undefined) {
			const gradient = new PIXI.FillGradient(
				0,
				0,
				this.transform.scale.x * 10,
				this.transform.scale.y * 10,
			);
			this.__GRADIENT__.forEach((step) =>
				gradient.addColorStop(step.position, step.color),
			);
			this.__CONTAINER__.fill(gradient);
		}
		// Else if a color was provided, use it to fill the circle
		else if (this.__COLOR__ !== undefined) {
			this.__CONTAINER__.fill(this.__COLOR__);
		}

		// Reset transform
		this.__SET_POSITION__(this.transform.position);
		this.__SET_ROTATION__(this.transform.rotation);
		this.__SET_SCALE__(this.transform.scale);
		// Emit the onLoaded event
		this.emitOnLoaded();
	}

	__DRAW_SHAPE__(graphics: PIXI.Graphics): void {
		graphics.circle(
			this.transform.position.x,
			this.transform.position.y,
			(this.transform.scale.x * 100) / 2,
		);
	}

	initCollider(options?: FColliderOptions): void {
		super.initCollider({
			...options,
			shape: FShapes.CIRCLE,
		});
	}

	initRigidBody(options?: FRigidBodyOptions): void {
		super.initRigidBody({
			...options,
			shape: FShapes.CIRCLE,
		});
	}

	initSensor(options?: FRigidBodyOptions): void {
		super.initSensor({
			...options,
			shape: FShapes.CIRCLE,
		});
	}
}
