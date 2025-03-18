export class LoginPage {
  constructor(page) {
    this.page = page;
    this.successRegisterNotice = page.locator("#flash_notice");
    this.loginInput = page.locator('input[id="username"]');
    this.passwordInput = page.locator("#password");
    this.loginSubmit = page.locator("#login-submit");
    this.loggedasMsg = page.locator('div[id="loggedas"]');
  }

  async login(validLogin, validPassword) {
    await this.loginInput.fill(validLogin);
    await this.passwordInput.fill(validPassword);
    await this.loginSubmit.click();
  }
}
