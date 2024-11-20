import { output } from "../output/output";
/**
 * Represents a page.
 * @typedef {Object} page
 * @property {PageWithMetadata} withMetadata - Adds metadata to the page.
 * @property {PageViaOutput} viaOutput - Processes the page via the given output.
 */

/**
 * @callback PageWithMetadata
 * @param {string} name - The name of the metadata.
 * @param {string} value - The value of the metadata.
 * @returns {page} The Page object.
 */

/**
 * @callback PageViaOutput
 * @param {output} output - The output to process the page with.
 * @returns {output} The processed output.
 */

export const page = {
  STATUS: "JsPages-Status",
  BODY: "JsPages-Body",
};
