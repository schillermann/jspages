import { ServerResponse } from "http";
/**
 * Represents a page output.
 * @typedef {Object} Output
 * @property {OutputWithMetadata} withMetadata - Build output with metadata.
 * ```js
 * output.withMetadata("JsPages-Status", "200")
 * output.withMetadata("Content-Type", "text/plain")
 * output.withMetadata("JsPages-Body", "Hello World!")
 * ```
 * @property {OutputWriteTo} writeTo - Write to output stream.
 */

/**
 * @callback OutputWithMetadata
 * @param {string} name - The name of the metadata.
 * @param {string} value - The value of the metadata.
 * @returns {Output} Output object with metadata.
 */

/**
 * @callback OutputWriteTo
 * @param {ServerResponse} output - Server response object
 * @returns {void}
 */