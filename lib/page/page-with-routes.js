import { pageInterface } from "./page-interface.js";

/**
 * @param {string} rightPagePath - Path for right Page.
 * @param {pageInterface} rightPage - Should take page if path is correct.
 * @param {pageInterface} wrongPage - Should take page if path is not correct
 * @returns {pageInterface} Page object.
 */
export function pageWithRoutes(rightPagePath, rightPage, wrongPage) {
  return {
    withMetadata: function (name, value) {
      if (pageInterface.PATH === name) {
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
