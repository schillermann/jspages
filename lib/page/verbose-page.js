/** @typedef {import("./page.d.js").page} page */
import { textPage } from "./text-page.js";

/** @returns {page} Page object. */
export function verbosePage() {
  /** @type {Map<string, string>} */
  const args = new Map();
  return {
    withMetadata: function (name, value) {
      args.set(name, value);
      return this;
    },
    viaOutput: function (output) {
      return new textPage(
        Array.from(args, ([key, value]) => `${key}: ${value}`).join("\n"),
      ).viaOutput(output);
    },
  };
}
