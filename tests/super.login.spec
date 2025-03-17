import { test, expect } from "@playwright/test";
import { CommonPage } from "../pages/common.page";
import { SuperLoginPage } from "../pages/super.login.page";

test.describe("Login", async () => {
  test("Valid login", async ({ page }) => {
    const superLoginPage = new SuperLoginPage(page);

    await superLoginPage.url();
    await superLoginPage.clickSignInLink();
  });
});
