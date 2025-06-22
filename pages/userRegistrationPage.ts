import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class UserRegistrationPage extends BasePage {
  private firstNameField: Locator;
  private lastNameField: Locator;
  private addressField: Locator;
  private cityField: Locator;
  private stateField: Locator;
  private zipCodeField: Locator;
  private phoneNumberField: Locator;
  private ssnField: Locator;
  private userNameField: Locator;
  private passwordField: Locator;
  private repeatedPasswordField: Locator;
  private registerBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = page.locator('#customer\\.firstName');
    this.lastNameField = page.locator('#customer\\.lastName');
    this.addressField = page.locator('#customer\\.address\\.street');
    this.cityField = page.locator('#customer\\.address\\.city');
    this.stateField = page.locator('#customer\\.address\\.state');
    this.zipCodeField = page.locator('#customer\\.address\\.zipCode');
    this.phoneNumberField = page.locator('#customer\\.phoneNumber');
    this.ssnField = page.locator('#customer\\.ssn');
    this.userNameField = page.locator('#customer\\.username');
    this.passwordField = page.locator('#customer\\.password');
    this.repeatedPasswordField = page.locator('#repeatedPassword');
    this.registerBtn = page.locator('input[value="Register"]');
  }

  async registerUser(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    ssn: string,
    username: string,
    password: string
  ): Promise<void> {
    await this.setTextElementText(this.firstNameField, firstName);
    await this.setTextElementText(this.lastNameField, lastName);
    await this.setTextElementText(this.addressField, address);
    await this.setTextElementText(this.cityField, city);
    await this.setTextElementText(this.stateField, state);
    await this.setTextElementText(this.zipCodeField, zipCode);
    await this.setTextElementText(this.phoneNumberField, phone);
    await this.setTextElementText(this.ssnField, ssn);
    await this.setTextElementText(this.userNameField, username);
    await this.setTextElementText(this.passwordField, password);
    await this.setTextElementText(this.repeatedPasswordField, password);
    await this.clickButton(this.registerBtn);
  }
}