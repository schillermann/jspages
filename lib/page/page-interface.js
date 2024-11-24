import { outputInterface } from "../output/output-interface.js";
/**
 * @typedef {Object} pageInterface
 * @property {PageWithMetadata} withMetadata - Adds metadata to the page.
 *
 *   ```js
 *   page.withMetadata(pageInterface.METHOD, "GET");
 *   page.withMetadata(pageInterface.PATH, "http://localhost");
 *   page.withMetadata(pageInterface.QUERY, "key1=value1&key2=value2");
 *   page.withMetadata(pageInterface.HTTP_VERSION, "1.1");
 *   ```
 * @property {PageViaOutput} viaOutput - Processes the page via the given
 *   output.
 *
 *   ```js
 *   page.viaOutput(simpleOutput());
 *   ```
 */

/**
 * @callback PageWithMetadata
 * @param {string} name - The name of the metadata.
 * @param {string} value - The value of the metadata.
 * @returns {pageInterface} The Page object.
 */

/**
 * @callback PageViaOutput
 * @param {outputInterface} output - The output to process the page.
 * @returns {Promise<outputInterface>} The processed output.
 */

export const pageInterface = {
  BODY: "JsPages-Body",
  HTTP_VERSION: "JsPages-HttpVersion",
  METHOD: "JsPages-Method",
  PATH: "JsPages-Path",
  QUERY: "JsPages-Query",
  STATUS_CODE: "JsPages-StatusCode",
};
