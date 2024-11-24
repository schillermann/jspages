import { expect, describe, test } from "@jest/globals";
import { textPage } from "./text-page.js";
import { pageMetadataNames } from "./page-metadata-names.js";
import { pageWithRoutes } from "./page-with-routes.js";

describe("pageWithRoutes", () => {
  test("should get right page", () => {
    const rightPage = textPage("Right page!");
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      rightPage,
      textPage("Wrong page!"),
    ).withMetadata(pageMetadataNames.PATH, "http://localhost/right-page-path");

    expect(page).toBe(rightPage);
  });

  test("should get wrong page", () => {
    const wrongPage = textPage("Wrong page!");
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      textPage("Right page!"),
      wrongPage,
    ).withMetadata(pageMetadataNames.PATH, "http://localhost/wrong-page-path");

    expect(page).toBe(wrongPage);
  });

  test("should not route", () => {
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      textPage("Right page!"),
      textPage("Wrong page!"),
    );

    expect(page.withMetadata(pageMetadataNames.METHOD, "GET")).toBe(page);
  });
});
