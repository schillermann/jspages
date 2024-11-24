import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { textPage } from "./text-page.js";

describe("textPage", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      withMetadata: jest.fn(function () {
        return mockOutput;
      }),
    };
  });

  test("should write page output with metadata", () => {
    textPage("Hello World!").viaOutput(mockOutput);

    expect(mockOutput.withMetadata).toHaveBeenCalledWith(
      "Content-Type",
      "text/plain",
    );
    expect(mockOutput.withMetadata).toHaveBeenCalledWith("Content-Length", 12);
    expect(mockOutput.withMetadata).toHaveBeenCalledWith(
      "JsPages-Body",
      "Hello World!",
    );
  });
});
