import { outputInterface } from "./outputInterface.js";
import { pageInterface } from "../page/pageInterface.js";

/**
 * @param {number} statusCode - Http response status code
 * @param {Map} headers - Http response headers
 * @param {string} body - Http response body
 * @returns {outputInterface} Output object.
 */
export function simpleOutput(statusCode = 200, headers = new Map(), body = "") {
  return {
    withMetadata: function (name, value) {
      if (pageInterface.STATUS_CODE === name) {
        return simpleOutput(Number(value), headers, body);
      }
      if (pageInterface.BODY === name) {
        return simpleOutput(statusCode, headers, value);
      }
      return simpleOutput(statusCode, new Map(headers).set(name, value), body);
    },
    writeTo: function (output) {
      output.statusCode = statusCode;

      for (let [name, value] of headers) {
        output.setHeader(name, value);
      }

      output.end(body);
    },
  };
}
