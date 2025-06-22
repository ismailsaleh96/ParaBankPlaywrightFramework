import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private forgotLoginLink: Locator;
  private userNameLoginField: Locator;
  private passwordLoginField: Locator;
  private loginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.forgotLoginLink = page.locator('text=Forgot login info?');
    this.userNameLoginField = page.locator('[name="username"]');
    this.passwordLoginField = page.locator('[name="password"]');
    this.loginBtn = page.locator('xpath=/html/body/div[1]/div[3]/div[1]/div/form/div[3]/input');
  }

  async userLogin(username: string, password: string): Promise<void> {
    await this.setTextElementText(this.userNameLoginField, username);
    await this.setTextElementText(this.passwordLoginField, password);
    await this.clickButton(this.loginBtn);
  }
}