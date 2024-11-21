import { pageInterface } from "./pageInterface.js";

/**
 * @param {string} text - Page text.
 * @returns {pageInterface} Page object.
 */
export function textPage(text) {
  return {
    withMetadata: function (name, value) {
      return this;
    },
    viaOutput: function (output) {
      return output
        .withMetadata("Content-Type", "text/plain")
        .withMetadata("Content-Length", Buffer.byteLength(text))
        .withMetadata(pageInterface.BODY, text);
    },
  };
}
