export class UserAccountPage {
  constructor(page) {
    this.page = page;
    this.changePswdLink = page.locator('a[href="/my/password"]');
    this.changeTimeZoneOption = page.getByLabel("Time zone");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.saveFlashNotice = page.locator('div[id="flash_notice"]');
    this.logoutButton = page.locator('a[class="logout"]');
  }

  async clickChangePasswordLink() {
    await this.changePswdLink.click();
  }

  async selectTimeZoneOption() {
    await this.changeTimeZoneOption.selectOption("Kyiv");
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}
