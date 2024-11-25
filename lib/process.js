/** @typedef {import("./page/page.d.js").page} page */
import { pageMetadataNames } from "./page/page-metadata-names.js";
import { once } from "events";
import { Buffer } from "node:buffer";

/**
 * @typedef {Object} process
 * @property {ProcessPageWithRequest} pageWithRequest - Build page with request
 *
 *   ```js
 *   await process(simplePage("Hello World!")).pageWithRequest(request);
 *   ```
 * @property {ProcessRequestBody} requestBody - Get body from request
 */

/**
 * @callback ProcessPageWithRequest
 * @param {import("http").IncomingMessage} request - Incoming message from
 *   webserver
 * @returns {Promise<page>} The Page object.
 */

/**
 * @callback ProcessRequestBody
 * @param {import("http").IncomingMessage} request - Incoming message from
 *   webserver
 * @returns {Promise<string>} Request body.
 */

/**
 * @param {page} page
 * @returns {process}
 */
export function process(page) {
  return {
    pageWithRequest: async function (request) {
      const urlParts = request.url.split("?");
      page = page
        .withMetadata(pageMetadataNames.METHOD, request.method)
        .withMetadata(pageMetadataNames.PATH, urlParts[0])
        .withMetadata(pageMetadataNames.QUERY, urlParts[1])
        .withMetadata(pageMetadataNames.HTTP_VERSION, request.httpVersion);

      for (let i = 0; i < request.rawHeaders.length; i++) {
        page = page.withMetadata(
          request.rawHeaders[i],
          request.rawHeaders[++i],
        );
      }

      return page.withMetadata(
        pageMetadataNames.BODY,
        await this.requestBody(request),
      );
    },
    requestBody: async function (request) {
      let body = [];
      request.on("data", function (chunk) {
        body.push(chunk);
      });
      await once(request, "end");
      return Buffer.concat(body).toString();
    },
  };
}
