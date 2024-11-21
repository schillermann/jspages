import { jest, expect, describe, beforeEach } from "@jest/globals";
import { simpleOutput } from "./simple-output.js";

describe("simpleOutput", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      statusCode: null,
      setHeader: jest.fn(),
      end: jest.fn(),
    };
  });

  test("should write to the output", () => {
    simpleOutput()
      .withMetadata("JsPages-StatusCode", "201")
      .withMetadata("Content-Type", "text/plain")
      .withMetadata("JsPages-Body", "Hello World!")
      .writeTo(mockOutput);

    expect(mockOutput.statusCode).toBe(201);
    expect(mockOutput.setHeader).toHaveBeenCalledWith(
      "Content-Type",
      "text/plain",
    );
    expect(mockOutput.end).toHaveBeenCalledWith("Hello World!");
  });

  test("should write to the output without metadata", () => {
    simpleOutput().writeTo(mockOutput);

    expect(mockOutput.statusCode).toBe(200);
    expect(mockOutput.setHeader).not.toBeCalled();
    expect(mockOutput.end).toHaveBeenCalledWith("");
  });
});
