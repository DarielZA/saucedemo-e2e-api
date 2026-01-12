import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  this.page = await browser.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
