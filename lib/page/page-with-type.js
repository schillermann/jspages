import { pageInterface } from "./page-interface.js";

/**
 * @param {pageInterface} originPage - Origin Page.
 * @param {string} pageType - Page type.
 * @returns {pageInterface} Page object.
 */
export function pageWithType(originPage, pageType) {
  return {
    withMetadata: function (name, value) {
      return this;
    },
    viaOutput: function (output) {
      return originPage.viaOutput(
        output.withMetadata("Content-Type", pageType),
      );
    },
  };
}
