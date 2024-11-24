import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { pageWithType } from "./page-with-type.js";
import { simplePage } from "./simple-page.js";

describe("pageWithType", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      withMetadata: jest.fn(function () {
        return mockOutput;
      }),
    };
  });

  test("should output page with text/plain type", () => {
    pageWithType(simplePage("Hello World!"), "text/plain").viaOutput(
      mockOutput,
    );

    expect(mockOutput.withMetadata).toHaveBeenCalledWith(
      "Content-Type",
      "text/plain",
    );
  });
});
