import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { UserAccountPage } from "../pages/userAccount.page";
import { ChangePasswordPage } from "../pages/changePassword.page";

test.describe("Redmine testing", async () => {
  test("Current password cannot be saved as new one", async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const userAccountPage = new UserAccountPage(page);
    const changePasswordPage = new ChangePasswordPage(page);

    await basePage.url();
    await basePage.clickSignInLink();
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    await mainPage.clickMyAccountLink();
    await userAccountPage.clickChangePasswordLink();
    await changePasswordPage.fillPassword();
    await changePasswordPage.fillNewPassword();
    await changePasswordPage.fillConfirmPassword();
    await changePasswordPage.clickApplyBtn();
    await expect(changePasswordPage.flashError).toHaveText(
      /The new password must be different from the current password/
    );
  });
  test("User can change time zone", async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const userAccountPage = new UserAccountPage(page);

    await basePage.url();
    await basePage.clickSignInLink();
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    await mainPage.clickMyAccountLink();
    await userAccountPage.selectTimeZoneOption();
    await userAccountPage.clickSaveButton();
    await expect(userAccountPage.saveFlashNotice).toHaveText(
      "Account was successfully updated."
    );
    await userAccountPage.clickLogoutButton();
    await basePage.clickSignInLink();
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    await mainPage.clickMyAccountLink();
    await expect(userAccountPage.changeTimeZoneOption).toHaveText(/Kyiv/);
  });
});
