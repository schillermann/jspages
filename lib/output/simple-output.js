/** @typedef {import("./output.d.js").output} output */
import { pageMetadataNames } from "../page/page-metadata-names.js";

/**
 * @param {number} statusCode - Http response status code
 * @param {{ key: string; value: string }[]} headers - Http response headers
 * @param {string} body - Http response body
 * @returns {output} Output object.
 */
export function simpleOutput(statusCode = 200, headers, body = "") {
  const _headers = headers.slice();
  return {
    withMetadata: function (name, value) {
      if (pageMetadataNames.STATUS_CODE === name) {
        return simpleOutput(Number(value), _headers, body);
      }
      if (pageMetadataNames.BODY === name) {
        return simpleOutput(statusCode, _headers, value);
      }
      _headers.push(name, value);
      return simpleOutput(statusCode, _headers, body);
    },
    writeTo: function (output) {
      output.statusCode = statusCode;

      for (let [name, value] of _headers) {
        output.setHeader(name, value);
      }

      output.end(body);
    },
  };
}
