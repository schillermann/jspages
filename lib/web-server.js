/** @typedef {import("./page/page.d.js").page} page */
import { simpleOutput } from "./output/simple-output.js";
import { process } from "./process.js";
import http from "http";

/**
 * @typedef {Object} webServer
 * @property {webServerStart} start - Start Web Server.
 *
 *   ```js
 *   webServer(simplePage("Hello World!")).start();
 *   ```
 */

/**
 * @callback webServerStart
 * @param {number} port - Web Server port. Default is 3000.
 * @returns {void}
 */

/**
 * @param {page} page
 * @returns {webServer}
 */
export function webServer(page) {
  return {
    start: function (port = 3000) {
      http
        .createServer(async (request, response) => {
          (
            await (
              await process(page).pageWithRequest(request)
            ).viaOutput(simpleOutput())
          ).writeTo(response);
        })
        .listen(port, () => {
          console.log(`Server running at http://localhost:${port}/`);
        });
    },
  };
}
