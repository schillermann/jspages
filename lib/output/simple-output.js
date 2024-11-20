import { output } from "./output";
import { page } from "../page/page";

/**
 * Creates a simple output object.
 * @param {number} statusCode - http response status code
 * @param {Map} headers - http response headers
 * @param {string} body - http response body
 * @returns {output} Output object.
 */
export function simpleOutput(statusCode = 200, headers = new Map(), body = "") {
  const outputHeaders = new Map(headers);
  return {
    withMetadata: function (name, value) {
      if (page.STATUS === name) {
        return simpleOutput(Number(value), outputHeaders, body);
      }
      if (page.BODY === name) {
        return simpleOutput(statusCode, outputHeaders, value);
      }
      outputHeaders.set(name, value);
      return simpleOutput(statusCode, outputHeaders, body);
    },
    writeTo: function (output) {
      output.statusCode = statusCode;

      for (let [name, value] of outputHeaders) {
        output.setHeader(name, value);
      }

      output.end(body);
    },
  };
}
