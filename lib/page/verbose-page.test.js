import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { verbosePage } from "./verbose-page.js";

describe("verbosePage", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      withMetadata: jest.fn(function () {
        return mockOutput;
      }),
    };
  });

  test("should output keys with values", () => {
    verbosePage()
      .withMetadata("key1", "value1")
      .withMetadata("key2", "value2")
      .viaOutput(mockOutput);

    expect(mockOutput.withMetadata).toHaveBeenNthCalledWith(
      3,
      "JsPages-Body",
      "key1: value1\nkey2: value2",
    );
  });
});
