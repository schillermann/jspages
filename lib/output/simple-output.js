import { outputInterface } from "./outputInterface.js";
import { pageInterface } from "../page/pageInterface.js";

/**
 * @param {number} statusCode - Http response status code
 * @param {Map} headers - Http response headers
 * @param {string} body - Http response body
 * @returns {outputInterface} Output object.
 */
export function simpleOutput(statusCode = 200, headers = new Map(), body = "") {
  const outputHeaders = new Map(headers);
  return {
    withMetadata: function (name, value) {
      if (pageInterface.STATUS === name) {
        return simpleOutput(Number(value), outputHeaders, body);
      }
      if (pageInterface.BODY === name) {
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
