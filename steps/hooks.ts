import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

export class CustomWorld {
  browser!: Browser;
  page!: Page;
}

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
