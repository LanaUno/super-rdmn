export class ChangePasswordPage {
  constructor(page) {
    this.page = page;
    this.password = page.locator("#password");
    this.newPassword = page.locator("#new_password");
    this.comfirmPassword = page.locator("#new_password_confirmation");
    this.applyBtn = page.locator('input[name="commit"]');
    this.flashError = page.locator("#flash_error");
  }

  async fillPassword() {
    await this.password.fill(process.env.PASSWORD);
  }

  async fillNewPassword() {
    await this.newPassword.fill(process.env.PASSWORD);
  }

  async fillConfirmPassword() {
    await this.comfirmPassword.fill(process.env.PASSWORD);
  }
  async clickApplyBtn() {
    await this.applyBtn.click();
  }
}
