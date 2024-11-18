import { page } from "./page.js";

/**
 * Creates a simple page object.
 * @param {string} text - Page text.
 * @returns {import("./page.d").Page} Page object.
 */
export function simplePage(text) {
  return {
    withMetadata: function (name, value) {
      return this;
    },
    viaOutput: function (output) {
      return output
        .withMetadata("Content-Length", Buffer.byteLength(text))
        .withMetadata(page.BODY, text);
    },
  };
}
