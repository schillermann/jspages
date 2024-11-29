import "../output/output.d.js";

/**
 * @typedef {Object} page
 * @property {PageWithMetadata} withMetadata - Adds metadata to the page.
 *
 *   ```js
 *   page.withMetadata(pageMetadataNames.METHOD, "GET");
 *   page.withMetadata(pageMetadataNames.PATH, "http://localhost");
 *   page.withMetadata(pageMetadataNames.QUERY, "key1=value1&key2=value2");
 *   page.withMetadata(pageMetadataNames.HTTP_VERSION, "1.1");
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
 * @returns {page} The Page object.
 */

/**
 * @callback PageViaOutput
 * @param {output} output - The output to process the page.
 * @returns {Promise<output>} The processed output.
 */

export {};
