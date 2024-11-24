/** @typedef {import("./page.d.js").page} page */
import { pageMetadataNames } from "./page-metadata-names.js";
import { Buffer } from "node:buffer";

/**
 * @param {string} text - Page text.
 * @returns {page} Page object.
 */
export function simplePage(text) {
  return {
    withMetadata: function () {
      return this;
    },
    viaOutput: function (output) {
      return output
        .withMetadata("Content-Length", Buffer.byteLength(text))
        .withMetadata(pageMetadataNames.BODY, text);
    },
  };
}
