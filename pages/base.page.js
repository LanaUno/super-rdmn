export class BasePage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.locator('a[class="register"]');
    this.signInLink = page.locator('a[class="login"]');
  }

  async url() {
    await this.page.goto(process.env.BASE_URL);
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }
}
