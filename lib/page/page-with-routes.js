/** @typedef {import("./page.d.js").page} page */
import { pageMetadataNames } from "./page-metadata-names.js";

/**
 * @param {string} rightPagePath - Path for right Page.
 * @param {page} rightPage - Should take page if path is correct.
 * @param {page} wrongPage - Should take page if path is not correct
 * @returns {page} Page object.
 */
export function pageWithRoutes(rightPagePath, rightPage, wrongPage) {
  return {
    withMetadata: function (name, value) {
      if (pageMetadataNames.PATH === name) {
        if (rightPagePath === value) {
          return rightPage.withMetadata(name, value);
        }
        return wrongPage.withMetadata(name, value);
      }
      return this;
    },
    viaOutput: function (output) {
      return output;
    },
  };
}
