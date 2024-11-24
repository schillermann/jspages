import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { process } from "./process.js";

describe("process", () => {
  let mockPage;

  beforeEach(() => {
    mockPage = {
      withMetadata: jest.fn(function () {
        return mockPage;
      }),
    };
  });

  test("should build up a page", () => {
    const request = {
      method: "GET",
      url: "http://localhost/test?key1=value1&key2=value2",
      httpVersion: "1.1",
      rawHeaders: ["HOST", "localhost", "Connection", "keep-alive"],
    };
    const page = process(mockPage).pageWithRequest(request);

    expect(mockPage.withMetadata).toHaveBeenCalledWith("JsPages-Method", "GET");
    expect(mockPage.withMetadata).toHaveBeenCalledWith(
      "JsPages-Path",
      "http://localhost/test",
    );
    expect(mockPage.withMetadata).toHaveBeenCalledWith(
      "JsPages-Query",
      "key1=value1&key2=value2",
    );

    expect(mockPage.withMetadata).toHaveBeenCalledWith(
      "JsPages-HttpVersion",
      "1.1",
    );
    expect(mockPage.withMetadata).toHaveBeenCalledWith("HOST", "localhost");
    expect(mockPage.withMetadata).toHaveBeenCalledWith(
      "Connection",
      "keep-alive",
    );
    expect(page).toBe(mockPage);
  });
});
