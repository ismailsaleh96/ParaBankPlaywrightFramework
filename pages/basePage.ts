import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async clickButton(element: Locator) {
    await element.click();
  }

  protected async setTextElementText(element: Locator, value: string) {
    await element.fill(value);
  }

  public async scrollToBottom() {
    await this.page.evaluate(() => window.scrollBy(0, 2500));
  }

  public async clearText(element: Locator) {
    await element.fill('');
  }
}