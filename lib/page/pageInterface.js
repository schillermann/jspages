import { outputInterface } from "../output/outputInterface.js";
/**
 * Represents a page.
 *
 * @typedef {Object} pageInterface
 * @property {PageWithMetadata} withMetadata - Adds metadata to the page.
 * @property {PageViaOutput} viaOutput - Processes the page via the given
 *   output.
 */

/**
 * @callback PageWithMetadata
 * @param {string} name - The name of the metadata.
 * @param {string} value - The value of the metadata.
 * @returns {pageInterface} The Page object.
 */

/**
 * @callback PageViaOutput
 * @param {outputInterface} output - The output to process the page with.
 * @returns {outputInterface} The processed output.
 */

export const pageInterface = {
  BODY: "JsPages-Body",
  HTTP_VERSION: "JsPages-HttpVersion",
  METHOD: "JsPages-Method",
  PATH: "JsPages-Path",
  QUERY: "JsPages-Query",
  STATUS: "JsPages-Status",
};
