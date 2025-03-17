import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { RegisterPage } from "../pages/register.page";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";

let basePage;
let loginPage;
let registerPage;
let mainPage;

test.describe("Redmine testing", async () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    mainPage = new MainPage(page);
  });
  test("Register account", async () => {
    await basePage.url();
    await basePage.clickRegisterLink();
    await registerPage.fillUserLogin();
    await registerPage.fillPassword();
    await registerPage.fillConfirmPassword();
    await registerPage.fillFirstName();
    await registerPage.fillLastName();
    await registerPage.fillUserEmail();
    await registerPage.clickSubmitBtn();
    await expect(loginPage.successRegisterNotice).toHaveText(
      /Account was successfully created./
    );
  });

  test("Register with email that is already taken", async () => {
    await basePage.url();
    await basePage.clickRegisterLink();
    await registerPage.fillUserLogin();
    await registerPage.fillPassword();
    await registerPage.fillConfirmPassword();
    await registerPage.fillFirstName();
    await registerPage.fillLastName();
    await registerPage.fillTakenEmail();
    await registerPage.clickSubmitBtn();
    await expect(mainPage.registerMessage).toHaveText(
      "Email has already been taken"
    );
  });

  test("Login with valid credentials", async () => {
    await basePage.url();
    await basePage.clickSignInLink();
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    await expect(loginPage.loggedasMsg).toHaveText(/Logged in as/);
  });
});
