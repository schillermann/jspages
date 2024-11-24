import { pageInterface } from "./page-interface.js";

/**
 * @param {string} text - Page text.
 * @returns {pageInterface} Page object.
 */
export function simplePage(text) {
  return {
    withMetadata: function (name, value) {
      return this;
    },
    viaOutput: function (output) {
      return output
        .withMetadata("Content-Length", Buffer.byteLength(text))
        .withMetadata(pageInterface.BODY, text);
    },
  };
}
