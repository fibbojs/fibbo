import { describe, expect, it } from "vitest";
import { FAssetUtil } from "../../src";

describe("@fibbojs/util/FAssetUtil should", () => {
	it("interprete a given path", () => {
		expect(
			FAssetUtil.interpretPath("http://localhost:5173/custom/my-asset.png"),
		).toEqual("http://localhost:5173/custom/my-asset.png");
		// For href based tests, the URL isn't predictable as Vitest will create a random ID for the test.
		// We use a more flexible regex to match the URL.
		// It should match: http://localhost:<port>/<any_vitest_path>/my-asset.png
		expect(FAssetUtil.interpretPath("/my-asset.png")).toMatch(
			/^http:\/\/localhost:\d+\/.*\/my-asset\.png$/,
		);
		// It should match: http://localhost:<port>/<any_vitest_path>/assets/my-asset.png
		expect(FAssetUtil.interpretPath("my-asset.png")).toMatch(
			/^http:\/\/localhost:\d+\/.*\/assets\/my-asset\.png$/,
		);
	});
});
