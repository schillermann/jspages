import { pageInterface } from "./page/page-interface.js";
import { simpleOutput } from "./output/simple-output.js";
import { process } from "./process.js";
import http from "http";

/**
 * @typedef {Object} webServer
 * @property {webServerStart} start - Start Web Server.
 */

/**
 * @callback webServerStart
 * @param {number} port - Web Server port. Default is 3000.
 * @returns {void}
 */

/**
 * @param {pageInterface} page
 * @returns {webServer}
 */
export function webServer(page) {
  return {
    start: function (port = 3000) {
      http
        .createServer(async (request, response) => {
          (await process(page).pageWithRequest(request))
            .viaOutput(simpleOutput())
            .writeTo(response);
        })
        .listen(port, () => {
          console.log(`Server running at http://localhost:${port}/`);
        });
    },
  };
}
