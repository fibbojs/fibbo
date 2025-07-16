import { describe, expect, it } from "vitest";
import { FAssetUtil } from "../../src";

describe("@fibbojs/util/FAssetUtil should", () => {
	it("interprete a given path", () => {
		expect(
			FAssetUtil.interpretPath("http://localhost:5173/custom/my-asset.png"),
		).toEqual("http://localhost:5173/custom/my-asset.png");
		// for href based tests, the url isn't predictable as vitest will create a random id for the test, so we use regex to match the url
		expect(FAssetUtil.interpretPath("/my-asset.png")).toMatch(
			/http:\/\/localhost:5173\/.*\/my-asset.png/,
		);
		expect(FAssetUtil.interpretPath("my-asset.png")).toMatch(
			/http:\/\/localhost:5173\/.*\/assets\/my-asset.png/,
		);
	});
});
