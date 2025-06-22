import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  private registerLink: Locator;
  private paraBankIsOpenedLink: Locator;
  private transferFundsLink: Locator;
  private bankLogo: Locator;

  constructor(page: Page) {
    super(page);
    this.registerLink = page.locator('text=Register');
    this.paraBankIsOpenedLink = page.locator('text=ParaBank Is Now Re-Opened');
    this.transferFundsLink = page.locator('text=Transfer Funds');
    this.bankLogo = page.locator('xpath=//*[@id="topPanel"]/a[2]/img');
  }

  async openRegistrationPage(): Promise<void> {
    await this.clickButton(this.registerLink);
  }
}