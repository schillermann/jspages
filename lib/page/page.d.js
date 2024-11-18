/**
 * Represents a page.
 * @typedef {Object} Page
 * @property {PageWithMetadata} withMetadata - Adds metadata to the page.
 * @property {PageViaOutput} viaOutput - Processes the page via the given output.
 */

/**
 * @callback PageWithMetadata
 * @param {string} name - The name of the metadata.
 * @param {string} value - The value of the metadata.
 * @returns {Page} The Page object.
 */

/**
 * @callback PageViaOutput
 * @param {import("../output/output.d").Output} output - The output to process the page with.
 * @returns {import("../output/output.d").Output} The processed output.
 */
