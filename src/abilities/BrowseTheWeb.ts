import { Page } from '@playwright/test';

export class BrowseTheWeb {
  constructor(public readonly page: Page) {}

  static using(page: Page) {
    return new BrowseTheWeb(page);
  }
}
