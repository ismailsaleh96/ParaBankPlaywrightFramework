import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';

class CustomWorld implements World {
  private browser!: Browser;
  private context!: BrowserContext;
  private _page!: Page;

  constructor(options: IWorldOptions) {
    // options parameters if needed
  }

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this._page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }

  get page(): Page {
    return this._page;
  }
}

setWorldConstructor(CustomWorld);

export function getWorldPage(): Page {
  // Simple helper to retrieve current world's page.
  // In real project, world instance is provided via this parameter in step definitions.
  // This is simplified due to static function limitation.
  return (global as any).world?.page;
}