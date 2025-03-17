import { CommonPage } from "./common.page";

export class SuperLoginPage extends CommonPage {
  constructor(page) {
    super(page);
    this.successRegisterNotice = page.locator("#flash_notice");
    this.loginInput = page.locator('input[id="username"]');
    this.passwordInput = page.locator("#password");
    this.loginSubmit = page.locator("#login-submit");
    this.loggedasMsg = page.locator('div[id="loggedas"]');
    this.registerLink = page.locator('a[class="register"]');
  }
  async url() {
    await this.page.goto(process.env.BASE_URL);
  }
  async clickSignInLink() {
    await super.signInLink.click();
    console.log(super.signInLink);
  }
}
