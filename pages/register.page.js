import { faker } from "@faker-js/faker/locale/en";

const login = faker.internet.email();
const userPswd = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = login;
const takenEmail = "my.lanauno@gmail.com";

export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.userLogin = page.locator('input[id="user_login"]');
    this.userPassword = page.locator('input[id="user_password"]');
    this.confirmPassword = page.locator(
      'input[id="user_password_confirmation"]'
    );
    this.userFirstName = page.locator('input[id="user_firstname"]');
    this.userLastName = page.locator('input[id="user_lastname"]');
    this.userEmail = page.locator('input[id="user_mail"]');
    this.userTakenEmail = page.locator('input[id="user_mail"]');
    this.submitBtn = page.locator('input[name="commit"]');
  }

  async fillUserLogin() {
    await this.userLogin.fill(login);
  }

  async fillPassword() {
    await this.userPassword.fill(userPswd);
  }

  async fillConfirmPassword() {
    await this.confirmPassword.fill(userPswd);
  }

  async fillFirstName() {
    await this.userFirstName.fill(firstName);
  }

  async fillLastName() {
    await this.userLastName.fill(lastName);
  }

  async fillUserEmail() {
    await this.userEmail.fill(email);
  }

  async fillTakenEmail() {
    await this.userTakenEmail.fill(takenEmail);
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }
}
