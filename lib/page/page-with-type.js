/** @typedef {import("./page.d.js").page} page */

/**
 * @param {page} originPage - Origin Page.
 * @param {string} pageType - Page type.
 * @returns {page} Page object.
 */
export function pageWithType(originPage, pageType) {
  return {
    withMetadata: function () {
      return this;
    },
    viaOutput: function (output) {
      return originPage.viaOutput(
        output.withMetadata("Content-Type", pageType),
      );
    },
  };
}
