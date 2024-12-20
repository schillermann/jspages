import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { simplePage } from "./simple-page.js";

describe("simplePage", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      withMetadata: jest.fn(function () {
        return mockOutput;
      }),
    };
  });

  test("should write page output with metadata", () => {
    simplePage("Hello World!").viaOutput(mockOutput);

    expect(mockOutput.withMetadata).toHaveBeenCalledWith("Content-Length", 12);
    expect(mockOutput.withMetadata).toHaveBeenCalledWith(
      "JsPages-Body",
      "Hello World!",
    );
  });
});
