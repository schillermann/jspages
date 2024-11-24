import { expect, describe } from "@jest/globals";
import { textPage } from "./text-page.js";
import { pageInterface } from "./page-interface.js";
import { pageWithRoutes } from "./page-with-routes.js";

describe("pageWithRoutes", () => {
  test("should get right page", () => {
    const rightPage = textPage("Right page!");
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      rightPage,
      textPage("Wrong page!"),
    ).withMetadata(pageInterface.PATH, "http://localhost/right-page-path");

    expect(page).toBe(rightPage);
  });

  test("should get wrong page", () => {
    const wrongPage = textPage("Wrong page!");
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      textPage("Right page!"),
      wrongPage,
    ).withMetadata(pageInterface.PATH, "http://localhost/wrong-page-path");

    expect(page).toBe(wrongPage);
  });

  test("should not route", () => {
    const page = pageWithRoutes(
      "http://localhost/right-page-path",
      textPage("Right page!"),
      textPage("Wrong page!"),
    );

    expect(page.withMetadata(pageInterface.METHOD, "GET")).toBe(page);
  });
});
