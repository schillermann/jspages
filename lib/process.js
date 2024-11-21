import { pageInterface } from "./page/pageInterface.js";

/**
 * @typedef {Object} process
 * @property {ProcessPageWithRequest} pageWithRequest - Build page with request
 */

/**
 * @callback ProcessPageWithRequest
 * @param {import("http").IncomingMessage} request - Incoming message from
 *   webserver
 * @returns {pageInterface} The Page object.
 */

/**
 * @param {pageInterface} page
 * @returns {process}
 */
export function process(page) {
  return {
    pageWithRequest: function (request) {
      const urlParts = request.url.split("?");
      const pageClone = page
        .withMetadata(pageInterface.METHOD, request.method)
        .withMetadata(pageInterface.PATH, urlParts[0])
        .withMetadata(pageInterface.QUERY, urlParts[1])
        .withMetadata(pageInterface.HTTP_VERSION, request.httpVersion);

      for (let i = 0; i < request.rawHeaders.length; i++) {
        pageClone.withMetadata(request.rawHeaders[i], request.rawHeaders[++i]);
      }

      return pageClone;
    },
  };
}
