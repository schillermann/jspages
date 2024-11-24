/** @typedef {import("./output.d.js").output} output */
import { pageMetadataNames } from "../page/page-metadata-names.js";

/**
 * @param {number} statusCode - Http response status code
 * @param {Map} headers - Http response headers
 * @param {string} body - Http response body
 * @returns {output} Output object.
 */
export function simpleOutput(statusCode = 200, headers = new Map(), body = "") {
  return {
    withMetadata: function (name, value) {
      if (pageMetadataNames.STATUS_CODE === name) {
        return simpleOutput(Number(value), headers, body);
      }
      if (pageMetadataNames.BODY === name) {
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
