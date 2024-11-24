import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { process } from "./process.js";
import { EventEmitter } from "events";

class MockRequest extends EventEmitter {
  constructor() {
    super();
    this.method = "GET";
    this.url = "http://localhost/test?key1=value1&key2=value2";
    this.httpVersion = "1.1";
    this.rawHeaders = ["HOST", "localhost", "Connection", "keep-alive"];
  }
}

describe("process", () => {
  let mockPage;
  let mockRequest;

  beforeEach(() => {
    mockPage = {
      withMetadata: jest.fn(function () {
        return mockPage;
      }),
    };
    mockRequest = new MockRequest();
  });

  test("should build up a page", async () => {
    setImmediate(() => {
      mockRequest.emit("data", Buffer.from("body content"));
      mockRequest.emit("end");
    });
    const page = await process(mockPage).pageWithRequest(mockRequest);

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
    expect(mockPage.withMetadata).toHaveBeenCalledWith(
      "JsPages-Body",
      "body content",
    );
    expect(page).toBe(mockPage);
  });
});
