export class MainPage {
  constructor(page) {
    this.page = page;
    this.registerMessage = page.locator(
      'div[id="errorExplanation"] > ul >li:first-child'
    );
    this.myAccountLink = page.locator('a[class="my-account"]');
    this.myPageLink = page.locator('a[href="/my/page"]');
  }

  async clickMyAccountLink() {
    await this.myAccountLink.click();
  }
  async clickMyPageLink() {
    await this.myPageLink.click();
  }
}
